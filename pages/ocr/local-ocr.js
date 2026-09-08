// pages/ocr/local-ocr.js
// Pure front-end OCR module: Canvas preprocessing + Tesseract.js
// For: H5 / WebView environments
// Supports both ES Module (import) and script-tag loading (window.SnOcr)

// ============== ESM exports ==============
export let _tesseractWorker = null

/** Inject a <script> tag (document-relative; immune to webpack analysis and import()'s module-relative resolution) */
function loadScript(src) {
	return new Promise((resolve, reject) => {
		const s = document.createElement('script')
		s.src = src
		s.onload = () => resolve()
		s.onerror = () => reject(new Error('failed to load ' + src))
		document.head.appendChild(s)
	})
}

/**
 * Load Tesseract.js (lazy, ~15MB on first load)
 * ★ Loads the UMD build via a <script> tag and uses window.Tesseract — same proven
 *   pattern as the zxing loader in scan-h5. Local assets first (static/tesseract/,
 *   bundled with the H5 build — the unpkg/tessdata CDNs are unreliable from mainland
 *   browsers); each candidate falls through on load error, CDN as last resort.
 */
export async function loadTesseract() {
	if (_tesseractWorker) return _tesseractWorker
	const pageDir = location.pathname.replace(/[^/]*$/, '')
	const candidates = [pageDir + 'static/tesseract/', '/static/tesseract/']
	let Tesseract = null
	let BASE = ''
	for (const base of candidates) {
		try {
			await loadScript(base + 'tesseract.min.js')
			Tesseract = window.Tesseract
			BASE = base
			break
		} catch (e) {
			console.warn('[ocr] load failed from', base, e.message)
		}
	}
	if (!Tesseract || !Tesseract.createWorker) {
		console.warn('[ocr] local tesseract missing, falling back to CDN')
		const cdn = ['https://unpkg.com/tesseract.js@', '5.1.1', '/dist/tesseract.min.js'].join('')
		await loadScript(cdn)
		Tesseract = window.Tesseract
		BASE = ''
	}
	if (!Tesseract || !Tesseract.createWorker) {
		throw new Error('tesseract failed to load')
	}
	console.log('[ocr] tesseract base:', BASE || 'CDN')
	const paths = BASE ? {
		workerPath: BASE + 'worker.min.js',
		corePath:   BASE,
		langPath:   BASE + 'lang',
		gzip:       true,
	} : {
		workerPath: 'https://unpkg.com/tesseract.js@5.1.1/dist/worker.min.js',
		corePath:   'https://unpkg.com/tesseract.js-core@5.0.0',
		langPath:   'https://tessdata.projectnaptha.com/4.0.0',
		gzip:       true,
	}
	_tesseractWorker = await Tesseract.createWorker('eng', 1, {
		...paths,
		logger: (m) => { /* console.log('[tess]', m) */ },
	})
	await _tesseractWorker.setParameters({
		tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:. ',
		tessedit_pageseg_mode: '6',  // PSM 6 single-block mode (more stable for ANTMINER labels)
	})
	return _tesseractWorker
}

/**
 * Find the red box in the image (the detection region marked by the user)
 * Red box color: R>180, G<120, B<120
 */
export function findRedBox(canvas) {
	const ctx = canvas.getContext('2d')
	const w = canvas.width, h = canvas.height
	if (!w || !h) return null
	const imgData = ctx.getImageData(0, 0, w, h)
	const d = imgData.data
	let minX = w, minY = h, maxX = 0, maxY = 0
	let count = 0
	for (let y = 0; y < h; y += 2) {
		for (let x = 0; x < w; x += 2) {
			const i = (y * w + x) * 4
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
	return { x: minX - 10, y: minY - 10, w: maxX - minX + 20, h: maxY - minY + 20 }
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
export function findSnRowAboveBarcode(canvas) {
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
 * Automatically find the text region (when no red box is marked)
 */
export function findTextRegion(canvas) {
	const ctx = canvas.getContext('2d')
	const w = canvas.width, h = canvas.height
	const imgData = ctx.getImageData(0, 0, w, h)
	const d = imgData.data
	const gray = new Uint8ClampedArray(w * h)
	for (let i = 0; i < w * h; i++) {
		const j = i * 4
		gray[i] = 0.299 * d[j] + 0.587 * d[j + 1] + 0.114 * d[j + 2]
	}
	const rowAvg = []
	for (let y = 0; y < h; y++) {
		let sum = 0
		for (let x = 0; x < w; x++) sum += gray[y * w + x]
		rowAvg.push(sum / w)
	}
	const sorted = [...rowAvg].map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v)
	const topRows = sorted.slice(0, Math.max(8, Math.floor(h * 0.1))).map(x => x.i)
	const minY = Math.min(...topRows), maxY = Math.max(...topRows)
	return { x: 0, y: minY, w: w, h: maxY - minY }
}

/**
 * Canvas preprocessing: crop + grayscale + upscale + contrast enhancement
 */
export function preprocess(canvas, region, scale = 4) {
	const srcX = region.x, srcY = region.y
	const srcW = region.w, srcH = region.h
	if (srcW <= 0 || srcH <= 0) return canvas

	const out = document.createElement('canvas')
	out.width = srcW * scale
	out.height = srcH * scale
	const ctx = out.getContext('2d')
	ctx.imageSmoothingEnabled = true
	ctx.imageSmoothingQuality = 'high'
	ctx.drawImage(canvas, srcX, srcY, srcW, srcH, 0, 0, out.width, out.height)

	const imgData = ctx.getImageData(0, 0, out.width, out.height)
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

/**
 * Recognize the SN in an image
 * ★ Region priority: manual > red box > SN row above the barcode (primary — OCR only
 *   that line) > generic text region (fallback when the barcode row yields nothing)
 */
export async function recognizeSnFromImage(imagePath, options = {}) {
	const { onProgress, manualRegion } = options

	if (onProgress) onProgress({ stage: 'load', percent: 5 })
	const canvas = await loadImageToCanvas(imagePath)

	let region = manualRegion
	let usedBarcodeRow = false
	if (!region) {
		region = findRedBox(canvas)
	}
	if (!region) {
		const hit = findSnRowAboveBarcode(canvas)
		if (hit && hit.region) {
			region = hit.region
			usedBarcodeRow = true
			console.log('[ocr] Barcode:', hit.barcode, '→ SN row above:', hit.region)
		} else if (hit && hit.barcode) {
			console.log('[ocr] Barcode found but no text row above:', hit.barcode)
		}
	}
	if (!region) {
		region = findTextRegion(canvas)
	}

	if (onProgress) onProgress({ stage: 'preprocess', percent: 30 })
	let preprocessed = preprocess(canvas, region, 4)

	if (onProgress) onProgress({ stage: 'ocr-load', percent: 40 })
	const worker = await loadTesseract()

	if (onProgress) onProgress({ stage: 'ocr-run', percent: 50 })
	const { data } = await worker.recognize(preprocessed)
	let rawText = data.text

	if (onProgress) onProgress({ stage: 'parse', percent: 95 })
	let candidates = parseSnCandidates(rawText, data.words || [])

	// ★ Fallback: the barcode row gave no SN-sized candidate → redo with the generic text region
	if (usedBarcodeRow && !candidates.some(c => c.text.length >= 14)) {
		console.log('[ocr] No SN-sized candidate from the barcode row, falling back to text region')
		const fallback = findTextRegion(canvas)
		if (fallback) {
			preprocessed = preprocess(canvas, fallback, 4)
			const r2 = await worker.recognize(preprocessed)
			rawText = r2.data.text
			candidates = parseSnCandidates(rawText, r2.data.words || [])
		}
	}

	if (onProgress) onProgress({ stage: 'done', percent: 100 })
	return { candidates, rawText }
}

function parseSnCandidates(text, words) {
	const candidates = []
	words.forEach(w => {
		const t = (w.text || '').replace(/[^A-Z0-9]/gi, '').toUpperCase()
		if (t.length >= 17) {
			candidates.push({
				text: t,
				confidence: Math.round((w.confidence || 80))
			})
		}
	})
	if (candidates.length === 0) {
		const clean = text.replace(/[^A-Z0-9]/gi, '').toUpperCase()
		const matches = clean.match(/[A-Z0-9]{17,}/g) || []
		matches.forEach(m => candidates.push({ text: m, confidence: 70 }))
	}
	const seen = new Set()
	return candidates
		.filter(c => !seen.has(c.text) && seen.add(c.text))
		.sort((a, b) => b.confidence - a.confidence)
		.slice(0, 5)
}

function loadImageToCanvas(filePath) {
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.crossOrigin = 'anonymous'
		img.onload = () => {
			const canvas = document.createElement('canvas')
			canvas.width = img.naturalWidth
			canvas.height = img.naturalHeight
			const ctx = canvas.getContext('2d')
			ctx.drawImage(img, 0, 0)
			resolve(canvas)
		}
		img.onerror = (e) => reject(new Error('Image failed to load: ' + (e.message || e)))
		img.src = filePath
	})
}

export async function destroy() {
	if (_tesseractWorker) {
		await _tesseractWorker.terminate()
		_tesseractWorker = null
	}
}

// ============== UMD compatibility (script-tag loading) ==============
if (typeof window !== 'undefined') {
	window.SnOcr = {
		loadTesseract,
		findRedBox,
		findTextRegion,
		findSnRowAboveBarcode,
		preprocess,
		recognizeSnFromImage,
		destroy,
		parseSnCandidates,
	}
}
