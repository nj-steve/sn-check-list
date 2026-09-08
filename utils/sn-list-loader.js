// utils/sn-list-loader.js
// Cross-environment loader for sn-list.txt (plaintext list of ~5000 SNs)
//
// Loading priority:
//   1. localStorage cache (instant)
//   2. Async fetch from static/sn-list.txt (background refresh)
//   3. App: plus.io reading _www/sn-list.txt
//   4. H5: fetch('/sn-list.txt')
//   5. Mini-program: wx.getFileSystemManager().readFile
//   6. Node tests: fs.readFileSync

// ★ node:fs is only needed for Node tests; H5/App/mini-programs lack this module,
//   which makes the build fail with "Can't resolve 'node:fs'". Use conditional-compilation
//   comments to exclude those platforms
// #ifndef APP-PLUS || H5 || MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO || APP-NVUE || QUICKAPP-WEBVIEW
import { readFileSync, existsSync } from 'node:fs'
// #endif

const STORAGE_KEY = 'sn_list_v1'
const STORAGE_META = 'sn_list_meta_v1'
const STORAGE_VERSION = 1

let _list = []     // raw array
let _set = null    // Set (O(1) lookup)
let _updatedAt = 0
let _loaded = false

// Environment detection
const HAS_UNI = typeof uni !== 'undefined'
const IS_NODE = typeof process !== 'undefined' && process.versions?.node

/**
 * Synchronously get the currently loaded list (may be empty)
 */
export function getSnList() {
  return _list
}

export function getSnCount() {
  return _list.length
}

export function isLoaded() {
  return _loaded
}

/**
 * Load at startup (cache first, refresh asynchronously in the background)
 */
export async function loadSnList() {
  // 1) Read the cache synchronously (uni environment)
  if (HAS_UNI) {
    try {
      const cached = uni.getStorageSync(STORAGE_KEY)
      const meta = uni.getStorageSync(STORAGE_META)
      if (cached && meta && meta.version === STORAGE_VERSION) {
        setList(cached, meta.updatedAt, /*fromCache*/ true)
        console.log(`[sn-list] Cache hit: ${cached.length} entries`)
      }
    } catch (e) {
      console.warn('[sn-list] Failed to read cache:', e.message)
    }
  }

  // 2) Pull fresh data asynchronously in the background
  refreshSnList().catch(e => {
    console.warn('[sn-list] Refresh failed, keeping cache:', e.message)
  })

  return _set
}

/**
 * Asynchronous refresh
 */
export async function refreshSnList() {
  const text = await fetchSnListText()
  const lines = text.split(/\r?\n/)
  const sns = []
  for (const line of lines) {
    const sn = line.trim().toUpperCase()
    if (!sn) continue
    if (!/^[A-Z0-9]{14,20}$/.test(sn)) continue
    sns.push(sn)
  }
  const unique = [...new Set(sns)]
  setList(unique, Date.now())
  // Persist (uni environment only)
  if (HAS_UNI) {
    try {
      uni.setStorageSync(STORAGE_KEY, unique)
      uni.setStorageSync(STORAGE_META, {
        version: STORAGE_VERSION,
        count: unique.length,
        updatedAt: Date.now()
      })
    } catch (e) {
      console.warn('[sn-list] Failed to write cache:', e.message)
    }
  }
  console.log(`[sn-list] Refresh done: ${unique.length} entries`)
  return unique
}

/**
 * Read the sn-list.txt content across environments
 */
async function fetchSnListText() {
  // #ifdef H5
  if (typeof window !== 'undefined' && !IS_NODE) {
    // ★ the file is bundled at static/sn-list.txt — try document-relative first
    //   (works for root AND sub-path deployments), then origin-root, then legacy
    //   root paths. The old '/sn-list.txt' only ever worked from a stale cache.
    const candidates = ['static/sn-list.txt', '/static/sn-list.txt', './sn-list.txt', '/sn-list.txt']
    let lastErr = null
    for (const p of candidates) {
      try {
        const res = await fetch(p)
        if (res.ok) {
          const text = await res.text()
          if (text && text.trim()) return text
          lastErr = new Error('empty file at ' + p)
        } else {
          lastErr = new Error('HTTP ' + res.status + ' at ' + p)
        }
      } catch (e) {
        lastErr = e
      }
    }
    throw lastErr || new Error('sn-list.txt not found on H5')
  }
  // #endif

  // #ifdef APP-PLUS
  if (typeof plus !== 'undefined' && plus.io) {
    // ★ After uni-app compiles, static/ is bundled as a whole into _www/static/
    //   The previous _www/sn-list.txt path was wrong and never readable on the App side
    return new Promise((resolve, reject) => {
      const candidates = [
        '_www/static/sn-list.txt',
        '_www/sn-list.txt',  // legacy path fallback
      ]
      const tryRead = (idx) => {
        if (idx >= candidates.length) {
          return reject(new Error('sn-list.txt not found on App; tried: ' + candidates.join(', ')))
        }
        const relPath = candidates[idx]
        let path
        try {
          path = plus.io.convertLocalFileSystemURL(relPath)
        } catch (e) {
          console.warn('[sn-list] convertLocalFileSystemURL failed:', relPath, e.message)
          return tryRead(idx + 1)
        }
        console.log(`[sn-list] plus.io attempt (${idx + 1}/${candidates.length}):`, path)
        plus.io.resolveLocalFileSystemURL(path, (entry) => {
          entry.file((file) => {
            const reader = new plus.io.FileReader()
            reader.onload = (e) => {
              console.log(`[sn-list] App read OK (${relPath}): ${(e.target.result||'').split('\n').length} lines`)
              resolve(e.target.result)
            }
            reader.onerror = () => tryRead(idx + 1)
            reader.readAsText(file, 'utf-8')
          }, (e) => tryRead(idx + 1))
        }, (e) => tryRead(idx + 1))
      }
      tryRead(0)
    })
  }
  // #endif

  // #ifdef MP-WEIXIN
  if (typeof wx !== 'undefined' && wx.getFileSystemManager) {
    return new Promise((resolve, reject) => {
      const fs = wx.getFileSystemManager()
      fs.readFile({
        filePath: 'sn-list.txt',
        encoding: 'utf-8',
        success: (res) => resolve(res.data),
        fail: (err) => reject(new Error('Read failed'))
      })
    })
  }
  // #endif

  // Node environment: read with fs
  if (IS_NODE) {
    // Multiple possible paths (tried in order)
    const candidates = [
      './sn-list.txt',
      './static/sn-list.txt',
      '../static/sn-list.txt',
      './utils/sn-list.txt',
    ]
    for (const p of candidates) {
      try {
        if (existsSync(p)) return readFileSync(p, 'utf-8')
      } catch (e) {}
    }
    throw new Error('sn-list.txt not found in Node environment; tried: ' + candidates.join(', '))
  }

  throw new Error('Reading sn-list.txt is not supported in the current environment')
}

/**
 * Set the list (internal use)
 */
function setList(list, updatedAt, fromCache = false) {
  _list = list
  _set = new Set(list)
  _updatedAt = updatedAt
  _loaded = true
}

/**
 * Check whether an SN is in the list
 */
export function checkSnInList(sn) {
  if (!_set) buildSnIndex()
  if (!_set) return false
  return _set.has(String(sn || '').trim().toUpperCase())
}

/**
 * Legacy-compatible API: lazy load
 */
export function buildSnIndex() {
  if (!_set) {
    if (HAS_UNI) {
      try {
        const cached = uni.getStorageSync(STORAGE_KEY)
        if (cached) {
          _list = cached
          _set = new Set(cached)
          _loaded = true
        }
      } catch (e) {}
    }
  }
  return _set
}

/**
 * Stats
 */
export function getSnListStats() {
  return {
    count: _list.length,
    updatedAt: _updatedAt,
    cached: !!_set
  }
}

/**
 * ★ Clear the localStorage cache + in-memory data
 * For troubleshooting "whitelist doesn't match the file" issues
 */
export function clearSnCache() {
  _list = []
  _set = null
  _updatedAt = 0
  _loaded = false
  if (HAS_UNI) {
    try {
      uni.removeStorageSync(STORAGE_KEY)
      uni.removeStorageSync(STORAGE_META)
      console.log('[sn-list] Cache cleared')
    } catch (e) {
      console.warn('[sn-list] Failed to clear cache:', e.message)
    }
  }
}

/**
 * ★ Force refresh (ignore cache) - used by the "reset" button
 */
export async function forceRefreshSnList() {
  clearSnCache()
  return await refreshSnList()
}

/**
 * ★ Last-N-digit matching (for on-site entry of the SN's last 7 digits)
 * @param {string} suffix user-entered characters (>= 4 digits)
 * @returns {Array<{sn, hit:number}>} matched full SNs; higher hit = more precise
 */
export function findSnBySuffix(suffix) {
  buildSnIndex()
  const s = String(suffix || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '')
  if (!_list || !_list.length || s.length < 4) return []
  const out = []
  for (const sn of _list) {
    if (sn.endsWith(s)) {
      // Length of the matched "prefix part"; longer = more precise
      const prefixLen = sn.length - s.length
      out.push({ sn, prefixLen })
    }
  }
  // If matched SNs have the same length (all 17 chars), prefixLen is equal; but in case the
  // whitelist contains shorter SNs that also match, sort by prefixLen descending so the
  // most likely ones come first
  out.sort((a, b) => b.prefixLen - a.prefixLen)
  return out.map(o => o.sn)
}

/**
 * ★ 6-digit degraded matching (OCR-failure fallback)
 *
 * Take the SN's last 7 digits, split them into the first 6 / last 6, then endsWith-match
 * against the whitelist
 *
 * @param {string} sn any length (>= 6-digit suffix)
 * @returns {Array<{sn, via, fragment, matched}>}
 *   - via: 's7' (exact hit on last 7) / 'front6' (hit on first 6 of the last 7) / 'back6' (hit on last 6 of the last 7)
 *   - fragment: the matched substring
 *   - sn: the matched full whitelist SN
 *   - rank: smaller = more precise (0=s7, 1=front6, 2=back6)
 */
export function findSnByS6Fragment(sn) {
  buildSnIndex()
  const s = String(sn || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '')
  if (!_list || !_list.length || s.length < 6) return []

  // Take the last 7 digits
  const s7 = s.slice(-7)
  // First 6 of the last 7 digits (s7[0..5])
  const front6 = s7.slice(0, 6)
  // Last 6 of the last 7 digits (s7[1..6])
  const back6 = s7.slice(1, 7)

  const out = []
  for (const full of _list) {
    if (full.endsWith(s7)) {
      out.push({ sn: full, via: 's7', fragment: s7, rank: 0 })
    } else if (full.endsWith(front6)) {
      out.push({ sn: full, via: 'front6', fragment: front6, rank: 1 })
    } else if (full.endsWith(back6)) {
      out.push({ sn: full, via: 'back6', fragment: back6, rank: 2 })
    }
  }
  // Sort: s7 first > front6 > back6
  out.sort((a, b) => a.rank - b.rank)
  return out
}

/**
 * ★ OCR-tolerant matching (plaintext Set, replacing the hash scheme)
 */
const CONFUSABLE_PAIRS = [
  ['0', 'O'], ['O', '0'],
  ['1', 'I'], ['I', '1'], ['1', 'L'], ['L', '1'],
  ['8', 'B'], ['B', '8'],
  ['5', 'S'], ['S', '5'],
  ['2', 'Z'], ['Z', '2'],
  ['6', 'G'], ['G', '6'],
  ['9', 'Q'], ['Q', '9'],
  ['4', 'A'], ['A', '4'],
  ['U', 'V'], ['V', 'U'],
  ['6', '8'], ['8', '6'],
  ['0', '6'], ['6', '0'],
  ['1', '7'], ['7', '1'],
  ['C', 'G'], ['G', 'C'],
  ['N', 'M'], ['M', 'N'],
  ['D', 'O'], ['O', 'D'],
  ['H', 'N'], ['N', 'H'],
  ['I', 'T'], ['T', 'I'],
  ['F', 'P'], ['P', 'F'],
  ['R', 'B'], ['B', 'R'],
]

function genVariants(s, maxDepth = 2) {
  const variants = new Set([s])
  let frontier = [s]
  for (let d = 0; d < maxDepth; d++) {
    const next = []
    for (const v of frontier) {
      for (let i = 0; i < v.length; i++) {
        for (const [a, b] of CONFUSABLE_PAIRS) {
          if (v[i] === a) {
            const nv = v.slice(0, i) + b + v.slice(i + 1)
            if (!variants.has(nv)) {
              variants.add(nv)
              next.push(nv)
            }
          }
        }
      }
    }
    frontier = next
  }
  return variants
}

export function matchSnWithOcrTolerance(sn) {
  buildSnIndex()
  const original = String(sn || '').trim().toUpperCase()
  if (!original) return { matched: false, original, reason: 'empty' }
  if (!_set) return { matched: false, original, reason: 'no_list' }

  // 1) Exact
  if (_set.has(original)) {
    return { matched: true, type: 'exact', sn: original, original }
  }

  // 2) Character variants (depth 2)
  for (const v of genVariants(original, 2)) {
    if (_set.has(v)) {
      return {
        matched: true, type: 'variant', sn: v, original,
        diff: diffChars(original, v), reason: 'OCR confusable-character variant'
      }
    }
  }

  return { matched: false, original, reason: 'not_in_list' }
}

function diffChars(a, b) {
  if (a.length !== b.length) return `${a.length} vs ${b.length} chars`
  const diffs = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diffs.push(`pos${i}:${a[i]}→${b[i]}`)
    if (diffs.length >= 3) break
  }
  return diffs.join(', ') || 'identical'
}

/**
 * ★ Position-tiered suffix lookup (used by the sn7 page)
 *
 * The input is right-aligned with the SN tail (the entered characters correspond to the
 * LAST positions of the SN). For the 7-char case the tiers are, per requirements:
 *   1) full match: all 7 positions equal → show this list
 *   2) if none:    SNs matching any 6 of the 7 positions (contiguity NOT required)
 *   3) if none:    SNs matching any 5 of the 7 positions (contiguity NOT required)
 * Shorter inputs use the same ladder on their own length (6-char: 6→5→4; 4~5-char: exact only).
 *
 * @param {string} input user input (full SN or suffix both work)
 * @returns {Array<{sn, via, rank, diff}>}
 *   via: 'exact' (all positions match) / 'pos6' / 'pos5' / 'pos4' (N positions match)
 *   rank: 0 = full match, 1 = one position off, 2 = two positions off
 */
export function findSnBySuffixTolerant(input) {
  buildSnIndex()
  const s = String(input || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '')
  if (!_list || !_list.length || s.length < 4) return []

  // Right-align: the probe covers the SN's last L characters
  const L = Math.min(s.length, 7)
  const probe = s.slice(-L)

  // Score every SN once: matched-position count + mask (matched chars, '_' for misses)
  const scored = []
  for (const full of _list) {
    const tail = full.slice(-L)
    let cnt = 0
    let mask = ''
    for (let i = 0; i < L; i++) {
      if (probe[i] === tail[i]) { cnt++; mask += probe[i] } else { mask += '_' }
    }
    scored.push({ sn: full, cnt, mask })
  }

  // ★ Tier ladder: full match → one position off → two positions off.
  //   4~5-char inputs keep the strict exact-only behavior.
  const maxDrop = L >= 6 ? 2 : 0
  const out = []
  for (let drop = 0; drop <= maxDrop; drop++) {
    const need = L - drop
    for (const sc of scored) {
      if (sc.cnt === need) {
        out.push({
          sn: sc.sn,
          via: drop === 0 ? 'exact' : 'pos' + need,
          rank: drop,
          diff: drop === 0 ? '' : `matched ${sc.mask} (${sc.cnt}/${L} positions)`
        })
      }
    }
    if (out.length > 0) break  // first tier that yields results wins
  }

  out.sort((a, b) => a.rank - b.rank)
  return out
}
