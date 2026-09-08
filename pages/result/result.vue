<template>
	<view class="result-page" :class="resultClass">
		<!-- Status icon -->
		<view class="result-icon">
			<text v-if="matched">✅</text>
			<text v-else>⛔️</text>
		</view>

		<!-- Main result -->
		<view class="result-title">
			<text v-if="matched">OK to Remove</text>
			<text v-else>Do Not Remove</text>
		</view>

		<view class="result-sub">
			<text v-if="matched">This machine is in the whitelist</text>
			<text v-else>This machine is not in the whitelist</text>
		</view>

		<!-- SN display -->
		<view class="sn-box">
			<view class="sn-label">SN</view>
			<view class="sn-value">{{ sn }}</view>
		</view>

		<!-- Match notice (shown on OCR-tolerant matches) -->
		<view v-if="matched && matchType === 'variant'" class="match-warn card">
			<view class="warn-title">⚠️ OCR Character-Variant Match</view>
			<view class="warn-line">Recognized: <text class="mono">{{ sn }}</text></view>
			<view class="warn-line">Whitelist: <text class="mono">{{ matchSn }}</text></view>
			<view class="warn-line">Diff: {{ matchDiff }}</view>
			<view class="warn-tip">OCR easily confuses characters like 0/O, 1/I, 8/B; matched via character variants</view>
		</view>
		<view v-if="matched && matchType === 'fuzzy'" class="match-warn card">
			<view class="warn-title">⚠️ Edit-Distance-1 Match</view>
			<view class="warn-line">Recognized: <text class="mono">{{ sn }}</text></view>
			<view class="warn-line">Whitelist: <text class="mono">{{ matchSn }}</text></view>
			<view class="warn-line">Diff: {{ matchDiff }}</view>
			<view class="warn-tip">OCR may have mis-read one character; please confirm manually</view>
		</view>
		<view v-if="matched && matchType && matchType.startsWith('degrade-')" class="match-warn card">
			<view class="warn-title">⚠️ Degraded Match ({{ degradeLabel }})</view>
			<view class="warn-line">OCR recognized: <text class="mono">{{ inputSn || sn }}</text></view>
			<view class="warn-line">Matched fragment: <text class="mono">{{ degradeFragment }}</text></view>
			<view class="warn-line">Whitelist: <text class="mono">{{ matchSn }}</text></view>
			<view class="warn-tip">Full-SN verification failed; fell back to matching the first 6 / last 6 of the last 7 digits. Please confirm manually</view>
		</view>

		<!-- Details (if any) -->
	<!-- 	<view class="detail card" v-if="detail">
			<view class="detail-row">
				<text class="detail-key">Site</text>
				<text class="detail-val">{{ detail.site_name || '-' }}</text>
			</view>
			<view class="detail-row">
				<text class="detail-key">Model</text>
				<text class="detail-val">{{ detail.model || '-' }}</text>
			</view>
			<view class="detail-row">
				<text class="detail-key">Status</text>
				<text class="detail-val">{{ detail.status_text || '-' }}</text>
			</view>
			<view class="detail-row">
				<text class="detail-key">Work Order</text>
				<text class="detail-val">{{ detail.order_no || '-' }}</text>
			</view>
		</view -->

		<!-- Debug info (for troubleshooting "why no match") -->
		<view class="debug card">
			<view class="debug-title">🔍 Debug Info <text class="debug-hint">(screenshot for feedback)</text></view>
			<view class="debug-row">
				<text class="debug-key">Scanned string</text>
				<text class="debug-val mono">{{ debug.original }}</text>
			</view>
			<view class="debug-row">
				<text class="debug-key">Length</text>
				<text class="debug-val">{{ debug.len }} chars</text>
			</view>
			<view class="debug-row">
				<text class="debug-key">Match type</text>
				<text class="debug-val">{{ debug.matchType || '-' }}</text>
			</view>
			<view class="debug-row">
				<text class="debug-key">Whitelist entries</text>
				<text class="debug-val">{{ debug.listCount }}</text>
			</view>
			<view class="debug-row">
				<text class="debug-key">Data source</text>
				<text class="debug-val">{{ debug.source }}</text>
			</view>
			<view class="debug-row" v-if="!matched">
				<text class="debug-key">No-match reason</text>
				<text class="debug-val">{{ debug.reason }}</text>
			</view>
		</view>

		<!-- Actions -->
		<button class="btn green" v-if="matched" @click="onConfirm">
			<text>✅ Confirm Removal</text>
		</button>
		<button class="btn red" v-else @click="onConfirm">
			<text>⛔️ Reject Removal</text>
		</button>

		<button class="btn gray" @click="onContinue">Continue Scanning</button>
		<button class="btn gray" @click="goHome">Back to Home</button>
	</view>
</template>

<script>
	import { buildSnIndex, checkSnInList, getSnList, getSnListUpdateTime, matchSnWithOcrTolerance, findSnByS6Fragment, getWhitelistStats } from '../../utils/auth.js'
	import { reportScan, reportTransitionScan } from '../../api/sn.js'
	import { dispatchScan, ensureCameraPermission, showCameraDeniedModal } from '../../utils/sn-validate.js'

	export default {
		data() {
			return {
				sn: '',
				scanType: '',
				matched: false,
				matchType: '',     // exact / variant / fuzzy / degrade-s7 / degrade-front6 / degrade-back6
				matchDiff: '',     // description of character differences
				matchSn: '',       // matched canonical SN
				inputSn: '',       // raw OCR string (shown on degraded matches)
				degradeFragment: '',  // substring hit by the degraded match
				degradeLabel: '',   // human-readable label of the degraded match method
				detail: null,
				checked: false,  // check finished (prevents flicker)
				reporting: false,  // ★ transition-scan upload in progress (prevents double taps)
				debug: {
					original: '',
					len: 0,
					matchType: '',
					listCount: 0,
					source: '-',
					reason: ''
				}
			}
		},
		computed: {
			resultClass() {
				return this.matched ? 'result-pass' : 'result-fail'
			}
		},
		onLoad(query) {
			this.sn = (query.sn || '').trim()
			this.scanType = query.type || ''
			if (query.input) this.inputSn = query.input
			if (!this.sn) {
				uni.showToast({ title: 'SN is empty', icon: 'none' })
				setTimeout(() => uni.navigateBack(), 800)
				return
			}
			// Run the full tolerant + degraded matching centrally in doCheck
			this.doCheck()
			this.saveHistory()
		},
		methods: {
			async doCheck() {
				buildSnIndex()
				// ★ Step 1: full tolerant matching (exact + confusable-character variants)
				const result = matchSnWithOcrTolerance(this.sn)
				this.matched = result.matched
				this.matchType = result.type        // exact / variant
				this.matchDiff = result.diff
				this.matchSn = result.sn || this.sn
				this.checked = true

				console.log(`[result] Full check:`, result)

				// ★ Step 2: degraded matching (first 6 / last 6 digits, fallback for severe OCR errors)
				if (!result.matched) {
					const fragments = findSnByS6Fragment(this.sn)
					console.log(`[result] Degraded matching:`, fragments)
					if (fragments.length > 0) {
						const f = fragments[0]
						this.matched = true
						this.matchType = `degrade-${f.via}`   // degrade-s7 / front6 / back6
						this.matchSn = f.sn
						this.matchDiff = `OCR failed; last 7 "${this.sn.replace(/[^A-Z0-9]/g, '').slice(-7)}" → ${f.via}="${f.fragment}" hit`
						// Set display fields for the degraded match
						const via = f.via
						const labelMap = { s7: 'last 7 digits', front6: 'first 6 of the last 7', back6: 'last 6 of the last 7' }
						this.degradeLabel = labelMap[via] || via
						const s7 = this.sn.replace(/[^A-Z0-9]/g, '').slice(-7)
						if (via === 's7') this.degradeFragment = s7
						else if (via === 'front6') this.degradeFragment = s7.slice(0, 6)
						else if (via === 'back6') this.degradeFragment = s7.slice(1, 7)
					}
				}

				// Fill in debug info
				const stats = getWhitelistStats()
				this.debug = {
					original: result.original || this.sn,
					len: (result.original || this.sn).length,
					matchType: this.matchType || 'none',
					listCount: stats.count,
					source: stats.updatedAt ? `Loaded (${stats.count} entries)` : 'Not loaded',
					reason: this.matched ? 'Hit' : (result.reason || 'No hit')
				}

				console.log(`[result] Final:`, this.matchType, this.matchSn)

				// Vibrate
				uni.vibrateLong && uni.vibrateLong({
					success: () => {},
					fail: () => uni.vibrateShort && uni.vibrateShort({})
				})
				// Detail card is disabled (commented out in the template) and the legacy
				// querySn detail endpoint is deprecated — skip it (it also spammed deprecation logs)
				// Report log (optional, includes match type)
				reportScan(this.matchSn, this.matched, this.matchType)
			},

			saveHistory() {
				const KEY = 'scan_history'
				const list = uni.getStorageSync(KEY) || []
				list.unshift({
					sn: this.sn,
					matched: this.matched,
					time: Date.now()
				})
				uni.setStorageSync(KEY, list.slice(0, 200))
			},

			onConfirm() {
				// ★ Confirm Removal (matched) → report to the maintenance backend
				//   (POST /api/transition-scan-records with the fixed X-API-Key header).
				//   Fire-and-forget: the toast shows IMMEDIATELY and the upload runs in the
				//   background — a slow/offline network (10s timeout) never delays the UI;
				//   the outcome only goes to the log, plus a late heads-up toast on failure.
				//   Reject Removal just records locally.
				if (this.matched) {
					uni.showToast({ title: 'Recorded: remove', icon: 'success', duration: 1500 })
					if (this.reporting) return  // upload already in flight — skip duplicates
					this.reporting = true
					const sn = this.matchSn || this.sn
					reportTransitionScan(sn, true).then((r) => {
						this.reporting = false
						console.log('[result] transition scan reported:', sn, r.ok ? 'ok' : r.message)
						if (!r.ok) {
							uni.showToast({ title: 'Upload failed: ' + r.message, icon: 'none', duration: 2500 })
						}
					}).catch(() => {
						this.reporting = false
						console.warn('[result] transition scan report crashed')
					})
				} else {
					uni.showToast({
						title: 'Recorded: reject',
						icon: 'success'
					})
				}
			},

			onContinue() {
				// #ifdef H5
				// H5 has no uni.scanCode — open the camera-based H5 scanner page (zxing);
				// after a successful scan it navigates to a fresh result page itself
				uni.navigateTo({ url: '/pages/scan/scan-h5' })
				return
				// #endif
				// ★ Continue scanning: same validation as home-page scanning (utils/sn-validate.js)
				//   < 17 chars / not an SN → modal suggesting image OCR etc.; valid → redirectTo to refresh this page and re-check
				// ★ Black-screen guard (iOS denied camera) + same scan options as the home page
				if (!ensureCameraPermission(showCameraDeniedModal)) return
				uni.scanCode({
					scanType: ['barCode'],
					barCodeInputEnabled: true,
					success: (res) => {
						const sn = (res.result || '').trim()
						if (!sn) {
							uni.showToast({ title: 'No content recognized', icon: 'none' })
							return
						}
						// redirect=true: replace the current result page with redirectTo; tapping "Rescan" relaunches scanning for continuous work
						dispatchScan(sn, res.scanType, true, () => this.onContinue())
					},
					fail: (err) => {
						const msg = (err && err.errMsg) || ''
						if (msg && !msg.includes('cancel')) {
							if (/auth|denied|permission/i.test(msg)) {
								showCameraDeniedModal()
								return
							}
							uni.showToast({ title: 'Scan failed: ' + msg, icon: 'none' })
						}
						// User canceled scanning → stay on the current result page
					}
				})
			},

			goHome() {
				uni.reLaunch({ url: '/pages/index/index' })
			}
		}
	}
</script>

<style scoped>
	.result-page {
		min-height: 100vh;
		padding: 40px 24px 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: background 0.3s;
	}

	.result-pass {
		background: linear-gradient(180deg, #d4f7e0 0%, #f5f5f7 60%);
	}

	.result-fail {
		background: linear-gradient(180deg, #ffd6d4 0%, #f5f5f7 60%);
	}

	.result-icon {
		font-size: 96px;
		margin-top: 20px;
	}

	.result-title {
		font-size: 36px;
		font-weight: 800;
		margin-top: 12px;
		color: #1c1c1e;
	}

	.result-sub {
		font-size: 14px;
		color: #6c6c70;
		margin-top: 4px;
	}

	.sn-box {
		margin: 30px 0 20px;
		background: #fff;
		border-radius: 12px;
		padding: 20px;
		width: 100%;
		text-align: center;
		box-shadow: 0 4px 12px rgba(0,0,0,0.06);
	}

	.sn-label {
		font-size: 12px;
		color: #8e8e93;
	}

	.sn-value {
		font-size: 20px;
		font-weight: 700;
		margin-top: 4px;
		font-family: monospace;
		word-break: break-all;
	}

	.detail {
		width: 100%;
		margin-bottom: 16px;
	}

	.match-warn {
		width: 100%;
		background: #fff8e1;
		border: 1px solid #ffcc02;
		margin-bottom: 16px;
	}
	.warn-title {
		font-size: 14px;
		font-weight: 600;
		color: #f57c00;
		margin-bottom: 6px;
	}
	.warn-line {
		font-size: 12px;
		color: #6c6c70;
		margin: 2px 0;
	}
	.warn-line .mono {
		font-family: monospace;
		color: #1c1c1e;
		font-weight: 600;
	}
	.warn-tip {
		font-size: 11px;
		color: #8e8e93;
		margin-top: 6px;
		padding-top: 6px;
		border-top: 1px dashed #ffcc02;
	}

	.detail-row {
		display: flex;
		justify-content: space-between;
		padding: 6px 0;
		font-size: 14px;
	}

	.detail-key {
		color: #8e8e93;
	}

	.detail-val {
		color: #1c1c1e;
		font-weight: 500;
	}

	.debug {
		width: 100%;
		background: #f0f4ff;
		border: 1px dashed #0a84ff;
		margin-bottom: 16px;
	}
	.debug-title {
		font-size: 13px;
		font-weight: 600;
		color: #0a84ff;
		margin-bottom: 8px;
	}
	.debug-hint {
		font-size: 11px;
		font-weight: 400;
		color: #8e8e93;
	}
	.debug-row {
		display: flex;
		justify-content: space-between;
		padding: 4px 0;
		font-size: 12px;
		gap: 8px;
	}
	.debug-key {
		color: #6c6c70;
		flex-shrink: 0;
	}
	.debug-val {
		color: #1c1c1e;
		font-weight: 500;
		text-align: right;
		word-break: break-all;
	}
	.debug-val.mono {
		font-family: monospace;
	}
</style>
