// hybrid/html/ocr/local-ocr.umd.js
// UMD version: loaded via <script src="local-ocr.umd.js"></script>
// Exposes window.SnOcr

(function(global) {
  'use strict'

  let _tesseractWorker = null

  async function loadTesseract() {
    if (_tesseractWorker) return _tesseractWorker

    // ★ Use remote tesseract.js to simplify deployment
    // unpkg provides CORS-enabled ESM usable in both App webview and browsers
    console.log('[ocr] Loading tesseract.js from remote...')

    const TESSERACT_URL = 'https://unpkg.com/tesseract.js@5.1.1/dist/tesseract.esm.min.js'
    const TesseractMod = await import(/* @vite-ignore */ TESSERACT_URL)
    const Tesseract = TesseractMod.default || TesseractMod
    console.log('[ocr] Tesseract API keys:', Object.keys(Tesseract).slice(0, 5).join(','))

    _tesseractWorker = await Tesseract.createWorker('eng', 1, {
      // workerPath / corePath use the same unpkg package to avoid local-path issues
      workerPath: 'https://unpkg.com/tesseract.js@5.1.1/dist/worker.min.js',
      corePath:   'https://unpkg.com/tesseract.js-core@5.0.0',
      // Language model from the official tessdata CDN (10.9MB one-time download, cached automatically)
      langPath:   'https://tessdata.projectnaptha.com/4.0.0',
      gzip:       true,
      logger: (m) => { console.log('[tess]', m.status, (m.progress*100||0).toFixed(0) + '%') },
    })

    // ★ Single-block mode (PSM 6) instead of single-line mode (PSM 7)
    // In practice PSM 7 recognizes ANTMINER-style labels ("small text + surrounding decoration") poorly
    // PSM 6 (single block) + whitelist is more stable
    await _tesseractWorker.setParameters({
      tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:. ',
      tessedit_pageseg_mode: '6',
    })
    return _tesseractWorker
  }

  function findRedBox(canvas) {
    const ctx = canvas.getContext('2d')
    const w = canvas.width, h = canvas.height
    if (!w || !h) return null

    // ★ Downscale large images to within 800px first to avoid OOM
    const maxDim = 800
    let workCanvas = canvas
    let scale = 1
    if (Math.max(w, h) > maxDim) {
      scale = maxDim / Math.max(w, h)
      workCanvas = document.createElement('canvas')
      workCanvas.width = Math.floor(w * scale)
      workCanvas.height = Math.floor(h * scale)
      workCanvas.getContext('2d').drawImage(canvas, 0, 0, workCanvas.width, workCanvas.height)
    }
    const ww = workCanvas.width, hh = workCanvas.height
    const imgData = workCanvas.getContext('2d').getImageData(0, 0, ww, hh)
    const d = imgData.data

    let minX = ww, minY = hh, maxX = 0, maxY = 0, count = 0
    for (let y = 0; y < hh; y += 2) {
      for (let x = 0; x < ww; x += 2) {
        const i = (y * ww + x) * 4
        const r = d[i], g = d[i + 1], b = d[i + 2]
        if (r > 180 && g < 120 && b < 120) {
          if (x < minX) minX = x
          if (x > maxX) maxX = x
          if (y < minY) minY = y
          if (y > maxY) maxY = y
          count++
        }
      }
    }
    if (count < 100) return null
    // Convert back to original-image coordinates
    const inv = 1 / scale
    return {
      x: Math.max(0, Math.floor((minX - 10) * inv)),
      y: Math.max(0, Math.floor((minY - 10) * inv)),
      w: Math.floor((maxX - minX + 20) * inv),
      h: Math.floor((maxY - minY + 20) * inv)
    }
  }

  /** Grayscale + Otsu threshold → Uint8Array (1 = dark print) */
  function binarizeOtsu(imgData, ww, hh) {
    const d = imgData.data
    const gray = new Uint8Array(ww * hh)
    const hist = new Int32Array(256)
    for (let i = 0; i < ww * hh; i++) {
      const j = i * 4
      const g = Math.round(0.299 * d[j] + 0.587 * d[j + 1] + 0.114 * d[j + 2])
      gray[i] = g
      hist[g]++
    }
    const total = ww * hh
    let sum = 0
    for (let t = 0; t < 256; t++) sum += t * hist[t]
    let sumB = 0, wB = 0, bestVar = -1, thresh = 128
    for (let t = 0; t < 256; t++) {
      wB += hist[t]
      if (!wB) continue
      const wF = total - wB
      if (!wF) break
      sumB += t * hist[t]
      const mB = sumB / wB, mF = (sum - sumB) / wF
      const v = wB * wF * (mB - mF) * (mB - mF)
      if (v > bestVar) { bestVar = v; thresh = t }
    }
    const dark = new Uint8Array(ww * hh)
    for (let i = 0; i < ww * hh; i++) dark[i] = gray[i] <= thresh ? 1 : 0
    return dark
  }

  /** Shared downscale helper for the barcode/SN-row detectors */
  function downscaleTo(canvas, maxDim) {
    const w = canvas.width, h = canvas.height
    if (Math.max(w, h) <= maxDim) return { canvas, scale: 1 }
    const scale = maxDim / Math.max(w, h)
    const c = document.createElement('canvas')
    c.width = Math.floor(w * scale)
    c.height = Math.floor(h * scale)
    c.getContext('2d').drawImage(canvas, 0, 0, c.width, c.height)
    return { canvas: c, scale }
  }

  /**
   * ★ Detect the barcode and return the SN text row directly ABOVE it.
   *   ANTMINER labels print the SN line right above the barcode, so by locating the
   *   barcode we can OCR ONLY that line — the model name and everything else are excluded.
   *
   * Barcode detection: barcode rows have many black/white transitions; among the candidate
   * bands the barcode is the LOWEST one (text rows always sit above it).
   *
   * SN row extraction: in a window above the barcode (small gap + 1.1x barcode height),
   * find contiguous runs of ink rows and pick the one closest to the barcode that is still
   * reasonably tall (>= 60% of the tallest run).
   *
   * @returns {{barcode:{x,y,w,h}, region:{x,y,w,h}}|{barcode:{x,y,w,h}}|null} rects in ORIGINAL image coords
   */
  function findSnRowAboveBarcode(canvas) {
    const w = canvas.width, h = canvas.height
    if (!w || !h) return null
    const { canvas: wc, scale } = downscaleTo(canvas, 800)
    const ww = wc.width, hh = wc.height
    const dark = binarizeOtsu(wc.getContext('2d').getImageData(0, 0, ww, hh), ww, hh)

    // ---- 1) barcode band = the LOWEST band of high-transition rows ----
    const trans = new Int32Array(hh)
    for (let y = 0; y < hh; y++) {
      let t = 0
      for (let x = 1; x < ww; x++) if (dark[y * ww + x] !== dark[y * ww + x - 1]) t++
      trans[y] = t
    }
    const MIN_TRANS = Math.max(16, Math.floor(ww * 0.03))
    const barLike = new Uint8Array(hh)
    for (let y = 0; y < hh; y++) if (trans[y] >= MIN_TRANS) barLike[y] = 1
    let band = null
    for (let y = 0; y < hh; y++) {
      if (!barLike[y]) continue
      let end = y, holes = 0
      for (let k = y + 1; k < hh; k++) {
        if (barLike[k]) { end = k; holes = 0 } else if (++holes > 2) break
      }
      if (end - y + 1 >= 12) {
        let sum = 0, n = 0
        for (let k = y; k <= end; k++) if (barLike[k]) { sum += trans[k]; n++ }
        const meanTrans = n ? sum / n : 0
        if (meanTrans >= 25 && (!band || y > band.y0)) band = { y0: y, y1: end }
      }
      y = end + 1
    }
    if (!band) return null

    // barcode x-range: columns dark through most of the band (hole-tolerant run)
    const bandH = band.y1 - band.y0 + 1
    const colDark = new Int32Array(ww)
    for (let y = band.y0; y <= band.y1; y++)
      for (let x = 0; x < ww; x++) if (dark[y * ww + x]) colDark[x]++
    const gapAllow = Math.max(4, Math.floor(ww * 0.03))
    let bx0 = -1, bx1 = -1, runStart = -1, runEnd = -1, gap = 0
    for (let x = 0; x < ww; x++) {
      const dense = colDark[x] >= bandH * 0.4
      if (dense) {
        if (runStart < 0) runStart = x
        runEnd = x; gap = 0
      } else if (runStart >= 0 && ++gap > gapAllow) {
        if (runEnd - runStart > bx1 - bx0) { bx0 = runStart; bx1 = runEnd }
        runStart = -1; gap = 0
      }
    }
    if (runStart >= 0 && runEnd - runStart > bx1 - bx0) { bx0 = runStart; bx1 = runEnd }
    if (bx0 < 0) return null
    const inv = 1 / scale
    const barcode = {
      x: Math.max(0, Math.floor(bx0 * inv)),
      y: Math.max(0, Math.floor(band.y0 * inv)),
      w: Math.floor((bx1 - bx0 + 1) * inv),
      h: Math.floor((band.y1 - band.y0 + 1) * inv),
    }

    // ---- 2) SN text row above the barcode ----
    const barHw = Math.max(1, Math.round(barcode.h * scale))
    const gapW = Math.max(2, Math.round(barHw * 0.08))
    const winH = Math.max(10, Math.round(barHw * 1.1))
    const y1 = Math.round(barcode.y * scale) - gapW
    if (y1 <= 0) return { barcode }
    const y0 = Math.max(0, y1 - winH)
    const mx = Math.round((bx1 - bx0 + 1) * 0.15)
    const x0 = Math.max(0, bx0 - mx)
    const x1 = Math.min(ww - 1, bx1 + mx)
    const counts = []
    let maxC = 0
    for (let y = y0; y < y1; y++) {
      let c = 0
      for (let x = x0; x <= x1; x++) if (dark[y * ww + x]) c++
      counts.push({ y, c })
      if (c > maxC) maxC = c
    }
    if (maxC < 8) return { barcode }
    // contiguous runs of ink rows (count >= 25% of the max row)
    const th = maxC * 0.25
    const runs = []
    let i = 0
    while (i < counts.length) {
      if (counts[i].c < th) { i++; continue }
      let j = i
      while (j + 1 < counts.length && counts[j + 1].c >= th) j++
      runs.push({ top: counts[i].y, bottom: counts[j].y })
      i = j + 1
    }
    if (!runs.length) return { barcode }
    // ★ pick the run closest to the barcode that is still reasonably tall
    const maxH2 = Math.max(...runs.map(r => r.bottom - r.top + 1))
    let chosen = null
    for (let k = runs.length - 1; k >= 0; k--) {
      if (runs[k].bottom - runs[k].top + 1 >= maxH2 * 0.6) { chosen = runs[k]; break }
    }
    if (!chosen) chosen = runs[runs.length - 1]
    if (chosen.bottom - chosen.top + 1 < 5) return { barcode }
    const pad = 4  // work px, breathing room for ascenders/anti-aliasing
    return {
      barcode,
      region: {
        x: Math.max(0, Math.floor(x0 * inv)),
        y: Math.max(0, Math.floor((chosen.top - pad) * inv)),
        w: Math.floor((x1 - x0 + 1) * inv),
        h: Math.floor((chosen.bottom - chosen.top + 1 + pad * 2) * inv),
      },
    }
  }

  /**
   * Find the white-background region (the white sticker of a miner SN label)
   * White: R,G,B all > 210 and clustered
   */
  function findWhiteRegion(canvas) {
    const ctx = canvas.getContext('2d')
    const w = canvas.width, h = canvas.height
    if (!w || !h) return null

    const maxDim = 800
    let workCanvas = canvas
    let scale = 1
    if (Math.max(w, h) > maxDim) {
      scale = maxDim / Math.max(w, h)
      workCanvas = document.createElement('canvas')
      workCanvas.width = Math.floor(w * scale)
      workCanvas.height = Math.floor(h * scale)
      workCanvas.getContext('2d').drawImage(canvas, 0, 0, workCanvas.width, workCanvas.height)
    }
    const ww = workCanvas.width, hh = workCanvas.height
    const imgData = workCanvas.getContext('2d').getImageData(0, 0, ww, hh)
    const d = imgData.data

    // Per-row white-pixel counts
    const rowWhite = new Int32Array(hh)
    let totalWhite = 0
    for (let y = 0; y < hh; y += 2) {
      for (let x = 0; x < ww; x += 2) {
        const i = (y * ww + x) * 4
        const r = d[i], g = d[i+1], b = d[i+2]
        if (r > 210 && g > 210 && b > 210) {
          rowWhite[y]++
          totalWhite++
        }
      }
    }
    if (totalWhite < 500) return null  // Few white pixels; no white label in the image

    // Find the contiguous row band with the most white pixels (white-backed label)
    const sorted = [...rowWhite].map((v, i) => ({ v, i })).sort((a, b) => b.v - a.v)
    const topRows = sorted.slice(0, Math.max(20, Math.floor(hh * 0.15))).map(x => x.i)
    const minY = Math.min(...topRows), maxY = Math.max(...topRows)

    // Column range: columns where white pixels also cluster
    const colWhite = new Int32Array(ww)
    for (let y = 0; y < hh; y += 2) {
      if (y < minY || y > maxY) continue
      for (let x = 0; x < ww; x += 2) {
        const i = (y * ww + x) * 4
        if (d[i] > 210 && d[i+1] > 210 && d[i+2] > 210) colWhite[x]++
      }
    }
    const colSorted = [...colWhite].map((v, i) => ({ v, i })).sort((a, b) => b.v - a.v)
    const topCols = colSorted.slice(0, Math.max(20, Math.floor(ww * 0.2))).map(x => x.i)
    const minX = Math.min(...topCols), maxX = Math.max(...topCols)

    const inv = 1 / scale
    return {
      x: Math.max(0, Math.floor(minX * inv)),
      y: Math.max(0, Math.floor(minY * inv)),
      w: Math.floor((maxX - minX) * inv),
      h: Math.floor((maxY - minY) * inv),
      isWhite: true
    }
  }

  /**
   * Find the text region (generic fallback)
   */
  function findTextRegion(canvas) {
    const ctx = canvas.getContext('2d')
    const w = canvas.width, h = canvas.height
    if (!w || !h) return null

    const maxDim = 600
    let workCanvas = canvas
    let scale = 1
    if (Math.max(w, h) > maxDim) {
      scale = maxDim / Math.max(w, h)
      workCanvas = document.createElement('canvas')
      workCanvas.width = Math.floor(w * scale)
      workCanvas.height = Math.floor(h * scale)
      workCanvas.getContext('2d').drawImage(canvas, 0, 0, workCanvas.width, workCanvas.height)
    }
    const ww = workCanvas.width, hh = workCanvas.height
    const imgData = workCanvas.getContext('2d').getImageData(0, 0, ww, hh)
    const d = imgData.data

    const rowAvg = new Float32Array(hh)
    for (let y = 0; y < hh; y++) {
      let sum = 0
      for (let x = 0; x < ww; x++) {
        const i = (y * ww + x) * 4
        sum += 0.299 * d[i] + 0.587 * d[i+1] + 0.114 * d[i+2]
      }
      rowAvg[y] = sum / ww
    }
    const sorted = [...rowAvg].map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v)
    const topRows = sorted.slice(0, Math.max(8, Math.floor(hh * 0.1))).map(x => x.i)
    const minY = Math.min(...topRows), maxY = Math.max(...topRows)

    const inv = 1 / scale
    return {
      x: 0,
      y: Math.max(0, Math.floor(minY * inv)),
      w: w,
      h: Math.max(20, Math.floor((maxY - minY) * inv))
    }
  }

  function preprocess(canvas, region, scale) {
    scale = scale || 4
    const srcX = region.x, srcY = region.y
    let srcW = region.w, srcH = region.h
    if (srcW <= 0 || srcH <= 0) return canvas

    // ★★★ Memory guard: limit input/output sizes to avoid OOM on mobile ★★★
    const MAX_INPUT_DIM  = 1200  // Max side of the input region (px)
    const MAX_OUTPUT_DIM = 2400  // Max output side
    const memoryThreshold = 2000  // Above this single-side value, limit the upscale factor

    // 1) If the input region is too large, shrink it first
    if (srcW > MAX_INPUT_DIM || srcH > MAX_INPUT_DIM) {
      const ratio = Math.min(MAX_INPUT_DIM / srcW, MAX_INPUT_DIM / srcH)
      srcW = Math.floor(srcW * ratio)
      srcH = Math.floor(srcH * ratio)
      console.log('[ocr] Input region too large, shrunk to', srcW, 'x', srcH)
    }

    // 2) Dynamically adjust the upscale factor so the output stays under MAX_OUTPUT_DIM
    let actualScale = scale
    const outW0 = srcW * actualScale
    const outH0 = srcH * actualScale
    if (Math.max(outW0, outH0) > MAX_OUTPUT_DIM) {
      actualScale = MAX_OUTPUT_DIM / Math.max(srcW, srcH)
    }
    // Lower the upscale factor for very large regions (from 4x down to 2x)
    if (Math.max(srcW, srcH) > memoryThreshold && actualScale > 2) {
      actualScale = 2
    }
    actualScale = Math.max(actualScale, 1)  // At least 1x

    const outW = Math.floor(srcW * actualScale)
    const outH = Math.floor(srcH * actualScale)
    const memMB = (outW * outH * 4 / 1024 / 1024).toFixed(1)
    console.log('[ocr] Output size:', outW, 'x', outH, '(', memMB, 'MB, scale=', actualScale.toFixed(2) + ')')

    const out = document.createElement('canvas')
    out.width = outW
    out.height = outH
    const ctx = out.getContext('2d')
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    ctx.drawImage(canvas, srcX, srcY, region.w, region.h, 0, 0, outW, outH)

    // 3) Grayscale + contrast enhancement
    const imgData = ctx.getImageData(0, 0, outW, outH)
    const d = imgData.data
    for (let i = 0; i < d.length; i += 4) {
      let g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]
      g = (g - 128) * 1.5 + 128
      g = Math.max(0, Math.min(255, g))
      d[i] = d[i + 1] = d[i + 2] = g
    }
    ctx.putImageData(imgData, 0, 0)
    return out
  }

  function parseSnCandidates(text, words) {
    const candidates = []
    const allCandidates = []  // All >= 10-char strings (for degraded display)

    // ★ Strip prefixes: "M SN:" / "MSN:" / "SN:" / "S/N:" / "NO.:" / Chinese equivalents, etc.
    // NOTE: the two Chinese patterns below are functional — they strip Chinese "serial number"/
    //       "number" prefixes that OCR may read off labels — and must stay as-is.
    const cleanPrefix = (s) => {
      return s
        .replace(/^[\s_\-.]*/, '')                       // strip leading whitespace/underscores/dashes/dots
        .replace(/^[Mm]\s*S\s*N\s*[:：]\s*/i, '')        // M SN: / MSN: / M_S_N:
        .replace(/^SN\s*[:：]\s*/i, '')                  // SN:
        .replace(/^S\s*\/\s*N\s*[:：]\s*/i, '')          // S/N:
        .replace(/^N[O0]\.?\s*[:：]?\s*/i, '')            // NO.:
        .replace(/^序列号\s*[:：]?\s*/i, '')             // Chinese "序列号:" (serial number)
        .replace(/^编号\s*[:：]?\s*/i, '')                 // Chinese "编号:" (number)
        .replace(/^[Ss]erial\s*[:：]?\s*/i, '')           // Serial:
        .replace(/^ID\s*[:：]?\s*/i, '')                   // ID:
        .trim()
    }

    // 1) Prefer picking from the words list
    ;(words || []).forEach(w => {
      const cleaned = cleanPrefix(w.text || '').replace(/[^A-Z0-9]/gi, '').toUpperCase()
      if (cleaned.length >= 14) {  // Threshold lowered to 14 to cover 16/17-char ANTMINER SNs
        candidates.push({
          text: cleaned,
          confidence: Math.round((w.confidence != null ? w.confidence : 80))
        })
      } else if (cleaned.length >= 10) {
        allCandidates.push({
          text: cleaned,
          confidence: Math.round((w.confidence != null ? w.confidence : 60))
        })
      }
    })

    // 2) Nothing found → concatenate all words, strip prefixes, then regex
    if (candidates.length === 0) {
      const allText = cleanPrefix((words || []).map(w => w.text || '').join(' '))
      const clean = allText.replace(/[^A-Z0-9]/gi, '').toUpperCase()
      const matches = clean.match(/[A-Z0-9]{14,}/g) || []
      matches.forEach(m => candidates.push({ text: m, confidence: 70 }))
      if (candidates.length === 0) {
        const shortMatches = clean.match(/[A-Z0-9]{10,}/g) || []
        shortMatches.forEach(m => allCandidates.push({ text: m, confidence: 50 }))
      }
    }

    // 3) Still nothing → use the full text
    if (candidates.length === 0 && text) {
      const allText = cleanPrefix(text)
      const clean = allText.replace(/[^A-Z0-9]/gi, '').toUpperCase()
      const matches = clean.match(/[A-Z0-9]{14,}/g) || []
      matches.forEach(m => candidates.push({ text: m, confidence: 60 }))
    }

    // Append short candidates (flagged "short")
    allCandidates.slice(0, 3).forEach(c => {
      candidates.push({ text: c.text, confidence: c.confidence, short: true })
    })

    // Deduplicate + sort (short strings last, confidence descending)
    const seen = new Set()
    return candidates
      .filter(c => !seen.has(c.text) && seen.add(c.text))
      .sort((a, b) => {
        if (a.short !== b.short) return a.short ? 1 : -1
        return b.confidence - a.confidence
      })
      .slice(0, 8)
  }

  function loadImageToCanvas(filePath) {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        canvas.getContext('2d').drawImage(img, 0, 0)
        resolve(canvas)
      }
      img.onerror = (e) => reject(new Error('Image failed to load'))
      img.src = filePath
    })
  }

  async function recognizeSnFromImage(imagePath, options) {
    options = options || {}
    const onProgress = options.onProgress

    if (onProgress) onProgress({ stage: 'load', percent: 5 })
    const canvas = await loadImageToCanvas(imagePath)

    // ★ Smart detection-region location
    //   Priority: manual > red box > ★ SN row above the barcode (primary: OCR ONLY that
    //   line — the model name and everything else are excluded) > white label > text region.
    //   Later entries are fallbacks: they only run when the previous region yields no
    //   SN-sized candidates (e.g. barcode not found, or SN printed elsewhere on the label).
    let regionPlan
    if (options.manualRegion) {
      regionPlan = [{ region: options.manualRegion, type: 'manual' }]
    } else {
      const redbox = findRedBox(canvas)
      if (redbox) {
        console.log('[ocr] Red box found:', redbox)
        regionPlan = [{ region: redbox, type: 'redbox' }]
      } else {
        regionPlan = []
        const hit = findSnRowAboveBarcode(canvas)
        if (hit) {
          if (hit.region) {
            console.log('[ocr] Barcode:', hit.barcode, '→ SN row above:', hit.region)
            regionPlan.push({ region: hit.region, type: 'barcode-above' })
          } else {
            console.log('[ocr] Barcode found but no text row above:', hit.barcode)
          }
        }
        const white = findWhiteRegion(canvas)
        if (white) regionPlan.push({ region: white, type: 'white' })
        const textReg = findTextRegion(canvas)
        if (textReg) regionPlan.push({ region: textReg, type: 'text' })
      }
    }
    if (!regionPlan.length) {
      console.log('[ocr] No usable region found')
      if (onProgress) onProgress({ stage: 'done', percent: 100 })
      return { candidates: [], rawText: '' }
    }

    if (onProgress) onProgress({ stage: 'ocr-load', percent: 40 })
    const worker = await loadTesseract()

    // ★ Multi-PSM strategy: run 6 + 7 + 11 together, keep the longest/best results
    const allCandidates = []
    const allRaws = []
    for (const plan of regionPlan) {
      const region = plan.region
      console.log('[ocr] Region type:', plan.type, 'size:', region.w + 'x' + region.h)
      if (onProgress) onProgress({ stage: 'preprocess', percent: 30 })
      const preprocessed = preprocess(canvas, region, 4)
      if (onProgress) onProgress({ stage: 'ocr-run', percent: 50 })
      for (const psm of ['6', '7', '11']) {
        try {
          await worker.setParameters({
            tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:. ',
            tessedit_pageseg_mode: psm,
          })
          const data = await worker.recognize(preprocessed)
          const raw = data.data.text
          allRaws.push(`[PSM${psm}] ${raw}`)
          const cands = parseSnCandidates(raw, data.data.words || [])
          cands.forEach(c => allCandidates.push({ ...c, psm }))
          console.log(`[ocr] PSM ${psm}: ${raw.trim().slice(0, 80)} | candidates: ${cands.map(c => c.text).join(', ')}`)
        } catch (e) {
          console.warn(`[ocr] PSM ${psm} failed:`, e.message)
        }
      }
      // got SN-sized candidates from this region? if yes, stop; otherwise try the next fallback
      const solid = allCandidates.filter(c => !c.short && c.text.length >= 14)
      if (solid.length > 0) break
      console.log('[ocr] No SN-sized candidates from region "' + plan.type + '", trying next fallback')
    }

    // Merge, deduplicate, sort by length + confidence
    const seen = new Set()
    const candidates = []
    const sorted = allCandidates.sort((a, b) => {
      if (a.text.length !== b.text.length) return b.text.length - a.text.length
      return b.confidence - a.confidence
    })
    sorted.forEach(c => {
      if (!seen.has(c.text)) {
        seen.add(c.text)
        candidates.push(c)
      }
    })

    const rawText = allRaws.join(' | ')

    if (onProgress) onProgress({ stage: 'parse', percent: 95 })

    if (onProgress) onProgress({ stage: 'done', percent: 100 })
    return { candidates: candidates.slice(0, 8), rawText }
  }

  async function destroy() {
    if (_tesseractWorker) {
      await _tesseractWorker.terminate()
      _tesseractWorker = null
    }
  }

  // Expose on window
  global.SnOcr = {
    loadTesseract,
    findRedBox,
    findTextRegion,
    findSnRowAboveBarcode,
    preprocess,
    recognizeSnFromImage,
    destroy,
    parseSnCandidates,
  }
})(typeof window !== 'undefined' ? window : globalThis)
