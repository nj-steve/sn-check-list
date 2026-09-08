// api/sn.js
//
// ★ This project has switched to a "fully local whitelist" mode and no longer calls any backend API
// The legacy endpoints (fetchSnList / querySn / reportScan) are deprecated and kept only for compatibility
// Whitelist data source: static/sn-list.txt (see utils/sn-list-loader.js)
//
// If you really need to pull data from a backend (e.g. to periodically update the whitelist), implement new functions here,
// but clearly tell users whether the current ~5000 entries have been deprecated, to avoid misjudgments

import { matchSnWithOcrTolerance, findSnBySuffix } from '../utils/auth.js'

// ===== Transition scan record reporting (sn-check App → maintenance backend) =====
// POST /api/transition-scan-records, authenticated by the fixed X-API-Key header
// (accepted directly by the backend's auth middleware — no JWT needed)
const TRANSITION_API = {
  // baseURL: 'https://repair.datastring.cc',
  baseURL:'',
  apiKey: 'mk-2026-7f3a9b1e8c5d2f0a4e6b8c1d3f5a7e9b',
  groupID: 1,
  siteName: 'DSO矿场',
}

/**
 * Report a scan/confirm to the maintenance backend (fire-and-forget friendly, never throws)
 * @param {string} sn the matched canonical SN (the real serial number)
 * @param {boolean} pulled whether removal was confirmed
 * @returns {Promise<{ok: boolean, message: string}>}
 */
export function reportTransitionScan(sn, pulled = true) {
  return new Promise((resolve) => {
    uni.request({
      url: TRANSITION_API.baseURL + '/api/transition-scan-records',
      method: 'POST',
      timeout: 10000,
      header: {
        'Content-Type': 'application/json',
        'X-API-Key': TRANSITION_API.apiKey,
      },
      data: {
        serial_number: sn,
        group_id: TRANSITION_API.groupID,
        pulled,
        site_name: TRANSITION_API.siteName,
      },
      success: (res) => {
        const ok = res.statusCode === 200 && res.data && res.data.code === 0
        let message = 'HTTP ' + res.statusCode
        if (!ok && res.data) {
          // gin auth errors look like {"error":"invalid API key"}; business errors {code,msg}
          const d = res.data
          message += ': ' + (d.error || d.msg || d.message || JSON.stringify(d).slice(0, 120))
        }
        resolve({ ok, message })
      },
      fail: (err) => {
        resolve({ ok: false, message: (err && err.errMsg) || 'network error' })
      },
    })
  })
}

/**
 * ★ New API: fully local SN check, no network requests
 * @param {string} sn SN obtained from scanning/OCR
 * @returns {{matched: boolean, sn?: string, original: string, type?: string, reason?: string}}
 */
export function localCheckSn(sn) {
  return matchSnWithOcrTolerance(sn)
}

/**
 * ★ New API: fully local last-N-digit SN matching
 * @param {string} suffix last-N-digit string
 * @returns {string[]} list of fully matched SNs
 */
export function localFindSnBySuffix(suffix) {
  return findSnBySuffix(suffix)
}

/**
 * Fetch the confirmed-removal count from the maintenance backend
 * GET /api/transition-scan-records/summary?site_name=... → data.total
 * @returns {Promise<{ok: boolean, total: number, message: string}>} total = -1 when failed
 */
export function getTransitionScanTotal() {
  return new Promise((resolve) => {
    uni.request({
      url: TRANSITION_API.baseURL + '/api/transition-scan-records/summary',
      method: 'GET',
      timeout: 8000,
      header: { 'X-API-Key': TRANSITION_API.apiKey },
      data: { site_name: TRANSITION_API.siteName },  // uni encodes query params automatically
      success: (res) => {
        const ok = res.statusCode === 200 && res.data && res.data.code === 0
        const total = ok && res.data.data && typeof res.data.data.total === 'number'
          ? res.data.data.total : -1
        resolve({ ok, total, message: ok ? 'ok' : 'HTTP ' + res.statusCode })
      },
      fail: (err) => {
        resolve({ ok: false, total: -1, message: (err && err.errMsg) || 'network error' })
      },
    })
  })
}

// ===== Below are deprecated APIs, kept only for compatibility with old code (no network requests) =====

/** @deprecated Deprecated; the whitelist is now read fully locally */
export function fetchSnList() {
  console.warn('[api] fetchSnList is deprecated; the whitelist is now read offline from static/sn-list.txt')
  return Promise.resolve([])
}

/** @deprecated Deprecated; backend detail lookup has been shut down */
export function querySn(sn) {
  console.warn('[api] querySn is deprecated; use whitelist matching directly if you need details')
  const r = matchSnWithOcrTolerance(sn)
  return Promise.resolve({
    statusCode: 200,
    data: { code: 0, data: { list: r.matched ? [{ sn: r.sn, status_text: 'Whitelist hit' }] : [] } }
  })
}

/** @deprecated Deprecated */
export function reportScan() {
  return Promise.resolve()
}

/** @deprecated Deprecated */
export function uploadImage() {
  console.warn('[api] uploadImage is deprecated; for OCR use the pages/ocr/ocr page')
  return Promise.reject(new Error('Switched to fully local mode; backend OCR has been shut down'))
}

/** @deprecated Deprecated */
export function recognizeSnFromImage() {
  console.warn('[api] recognizeSnFromImage is deprecated')
  return Promise.reject(new Error('Switched to fully local mode; backend OCR has been shut down'))
}
