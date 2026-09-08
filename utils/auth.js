// utils/auth.js - SN whitelist management (fully local, no backend)
//
// Data source: static/sn-list.txt (bundled into the App at uni-app build time)
// Loading strategy: on startup read the localStorage cache first (instant) → then refresh from sn-list.txt in the background
// Matching capabilities: exact / confusable-character variants (OCR tolerance) / fuzzy last-N-digit lookup
//
// ★ No backend API calls anymore; the whitelist is a fixed list of ~5000 entries bundled offline

import {
  loadSnList,
  refreshSnList,
  checkSnInList as _checkSnInList,
  buildSnIndex as _buildSnIndex,
  getSnListStats as _getSnListStats,
  matchSnWithOcrTolerance as _matchSnWithOcrTolerance,
  clearSnCache as _clearSnCache,
  forceRefreshSnList as _forceRefreshSnList,
  findSnBySuffix as _findSnBySuffix,
  findSnBySuffixTolerant as _findSnBySuffixTolerant,
  findSnByS6Fragment as _findSnByS6Fragment,
} from './sn-list-loader.js'

/** Legacy-compatible API: returns whitelist stats */
export function getSnList() {
  const stats = _getSnListStats()
  // The old API expects an array; wrap count here so .length doesn't throw
  return { length: stats.count, count: stats.count, updatedAt: stats.updatedAt }
}

/** Legacy-compatible API: whitelist update timestamp */
export function getSnListUpdateTime() {
  return _getSnListStats().updatedAt
}

/** Legacy-compatible API: force refresh (no arguments, refresh only) */
export function setSnList() {
  refreshSnList().catch(console.warn)
}

/** Legacy-compatible API */
export function buildSnIndex() {
  return _buildSnIndex()
}

export function checkSnInList(sn) {
  return _checkSnInList(sn)
}

/** ★ OCR-tolerant matching (recommended) */
export function matchSnWithOcrTolerance(sn) {
  return _matchSnWithOcrTolerance(sn)
}

/** Whitelist stats { count, updatedAt } */
export function getWhitelistStats() {
  return _getSnListStats()
}

/** Clear the whitelist cache */
export function clearSnCache() {
  return _clearSnCache()
}

/** Force re-read the local sn-list.txt */
export function forceRefreshSnList() {
  return _forceRefreshSnList()
}

/** Last-N-digit matching (for on-site entry of the SN's last 7 digits) */
export function findSnBySuffix(suffix) {
  return _findSnBySuffix(suffix)
}

/**
 * ★ Tolerant last-7-digit lookup (recommended for the sn7 page)
 * Last-7 exact → last-7 fuzzy (confusable characters) → first-6/last-6 of the last 7 digits, position-aligned exact + fuzzy
 * @returns {Array<{sn, via, rank, diff}>}
 */
export function findSnBySuffixTolerant(input) {
  return _findSnBySuffixTolerant(input)
}

/** ★ OCR-failure fallback: 6-digit degraded matching (first 6 of the last 7 digits / last 6 digits) */
export function findSnByS6Fragment(sn) {
  return _findSnByS6Fragment(sn)
}

// Preload at startup
loadSnList().catch(console.warn)
