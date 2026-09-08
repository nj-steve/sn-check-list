<template>
	<view class="container">
		<!-- Top status bar -->
		<view class="status-bar">
			<view class="status-item">
				<text class="status-label">SN confirmed count / Total</text>
				<text class="status-value">{{ confirmedCount }}/{{ snCount }}</text>
			</view>
			<view class="status-item">
				<text class="status-label">Last Updated</text>
				<text class="status-value">{{ updateTime }}</text>
			</view>
		</view>

		<!-- Main action area -->
		<view class="hero">
			<view class="hero-icon">📷</view>
			<view class="hero-title">SN Check</view>
			<view class="hero-sub">Pick a lookup method to see whether a miner can be removed</view>
		</view>

		<!-- 3 lookup methods -->
		<view class="methods">
			<view class="method-card method-barcode" @click="onScan">
				<view class="method-icon">📷</view>
				<view class="method-text">
					<view class="method-title">Barcode Scan</view>
					<view class="method-sub">Scan the barcode on the back of the machine</view>
				</view>
				<view class="method-arrow">›</view>
			</view>

			<view class="method-card method-ocr" @click="goOcr">
				<view class="method-icon">🖼️</view>
				<view class="method-text">
					<view class="method-title">Image OCR</view>
					<view class="method-sub">Photograph the SN label for recognition</view>
				</view>
				<view class="method-arrow">›</view>
			</view>

			<view class="method-card method-suffix" @click="goSuffix">
				<view class="method-icon">🔢</view>
				<view class="method-text">
					<view class="method-title">SN Last 7 Characters</view>
					<view class="method-sub">Manually enter the last 7 characters of the SN</view>
				</view>
				<view class="method-arrow">›</view>
			</view>
		</view>

		<!-- Actions -->
		<view class="actions">
			<view class="action-card" @click="onRefresh">
				<text class="action-icon">🔄</text>
				<text class="action-text">Reload Local Whitelist</text>
			</view>
			<view class="action-card" @click="onClearCache">
				<text class="action-icon">🗑️</text>
				<text class="action-text">Clear Cache</text>
			</view>
			<view class="action-card" @click="goHistory">
				<text class="action-icon">📋</text>
				<text class="action-text">History</text>
			</view>
		</view>

		<!-- Tips -->
		<view class="tips card">
			<view class="tip-title">💡 How to Use</view>
			<view class="tip-line">• The whitelist loads automatically on startup; tap "Reload Local Whitelist" to re-read manually</view>
			<view class="tip-line">• Three methods: barcode scan / image OCR / SN last 7 digits</view>
			<view class="tip-line">• SN hits the whitelist → can be removed; otherwise it cannot</view>
			<view class="tip-line">• If results look wrong, use "Clear Cache" to force a reload</view>
		</view>

		<!-- Loading overlay -->
		<view class="loading" v-if="loading">
			<view class="loading-box">
				<text>{{ loadingText }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { buildSnIndex, getSnList, getSnListUpdateTime, forceRefreshSnList, clearSnCache } from '../../utils/auth.js'
	import { dispatchScan, ensureCameraPermission, showCameraDeniedModal } from '../../utils/sn-validate.js'
	import { getTransitionScanTotal } from '../../api/sn.js'

	// How often the home page refreshes the confirmed/total counter (ms)
	const SUMMARY_INTERVAL = 60 * 1000

	export default {
		data() {
			return {
				loading: false,
				loadingText: '',
				manualSn: '',
				snCount: 0,
				updateTime: '-',
				confirmedCount: '-',  // backend confirmed count; '-' until first fetch succeeds
				summaryTimer: null
			}
		},
		onLoad() {
			// ★ Auto-reload the local whitelist when the home page loads
			//   (silent: no overlay, failures only log — never blocks the UI)
			this.silentReloadWhitelist()
		},
		onShow() {
			this.refreshLocal()
			// refresh the confirmed/total counter immediately (e.g. back from a Confirm
			// Removal), then keep it fresh on a timer while the home page is visible
			this.fetchConfirmedCount()
			this.startSummaryTimer()
		},
		onHide() {
			this.stopSummaryTimer()
		},
		methods: {
			// ★ Confirmed/total counter: backend transition_scan_records total for this site
			//   (fire-and-forget; network failures keep the last value, never block the UI)
			fetchConfirmedCount() {
				getTransitionScanTotal().then(r => {
					if (r.ok && r.total >= 0) {
						this.confirmedCount = r.total
					} else {
						console.warn('[index] fetch confirmed count failed:', r.message)
					}
				}).catch(() => {})
			},
			startSummaryTimer() {
				this.stopSummaryTimer()
				this.summaryTimer = setInterval(() => this.fetchConfirmedCount(), SUMMARY_INTERVAL)
			},
			stopSummaryTimer() {
				if (this.summaryTimer) {
					clearInterval(this.summaryTimer)
					this.summaryTimer = null
				}
			},

			// ★ Silent whitelist reload (used by onLoad): re-reads sn-list.txt in the
			//   background and refreshes the counter — no loading overlay, no toasts
			silentReloadWhitelist() {
				forceRefreshSnList().then(list => {
					console.log(`[index] whitelist auto-reloaded: ${list.length} entries`)
					this.refreshLocal()
				}).catch(e => {
					console.warn('[index] whitelist auto-reload failed:', e.message)
				})
			},

			refreshLocal() {
				const list = getSnList()
				this.snCount = list.length
				const ts = getSnListUpdateTime()
				if (ts) {
					const d = new Date(ts)
					this.updateTime = `${d.getMonth()+1}-${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`
				}
				buildSnIndex()
			},

			onScan() {
				// #ifdef APP-PLUS
				// ★ Black-screen guard: with camera permission DENIED on iOS, scanCode
				//   still opens the scan UI — black screen + flashlight icon, no fail
				//   callback. Detect it up front and guide to Settings instead.
				if (!ensureCameraPermission(showCameraDeniedModal)) return
				// ★ scanType limited to barcodes (machine labels are Code128):
				//   iOS's built-in scanner is much weaker than Android's at barcodes when
				//   QR etc. are also enabled; restricting to barCode greatly improves iOS
				//   recognition. barCodeInputEnabled (iOS-only) adds a keyboard-input
				//   fallback in the scan UI for damaged labels (ignored on Android).
				uni.scanCode({
					scanType: ['barCode'],
					barCodeInputEnabled: true,
					success: (res) => {
						console.log('[scan] Scan result:', res)
						const sn = (res.result || '').trim()
						if (!sn) {
							uni.showToast({ title: 'No content recognized', icon: 'none' })
							return
						}
						this.handleSn(sn, res.scanType)
					},
					fail: (err) => {
						console.warn('[scan] Failed:', err)
						const msg = (err && err.errMsg) || ''
						if (!msg || msg.includes('cancel')) return
						if (/auth|denied|permission/i.test(msg)) {
							showCameraDeniedModal()
							return
						}
						uni.showToast({ title: 'Scan failed: ' + msg, icon: 'none' })
					}
				})
				// #endif

				// #ifdef H5
				// H5 has no uni.scanCode — open the camera-based H5 scanner page (zxing)
				uni.navigateTo({ url: '/pages/scan/scan-h5' })
				// #endif

				// #ifdef MP-WEIXIN
				uni.scanCode({
					success: (res) => this.handleSn((res.result||'').trim(), res.scanType),
					fail: () => {}
				})
				// #endif
			},

			onManualSubmit() {
				const sn = this.manualSn.trim()
				if (!sn) return
				this.handleSn(sn, 'MANUAL')
				this.manualSn = ''
			},

			goOcr() {
				uni.navigateTo({ url: '/pages/ocr/ocr' })
			},

			goSuffix() {
				uni.navigateTo({ url: '/pages/sn7/sn7' })
			},

			handleSn(sn, scanType) {
				// ★ Validation rules are centralized in utils/sn-validate.js (17-char check + guidance to other methods);
				//   home-page scanning and result-page [Continue Scan] share the same logic
				dispatchScan(sn, scanType, /*redirect*/ false)
			},

			async onRefresh() {
				if (this.loading) return
				this.loading = true
				this.loadingText = 'Reloading local sn-list.txt...'
				try {
					const list = await forceRefreshSnList()
					uni.showToast({
						title: `Reload done: ${list.length} entries`,
						icon: 'success'
					})
					this.refreshLocal()
				} catch (e) {
					console.error('[refresh] Failed:', e)
					uni.showModal({
						title: 'Reload Failed',
						content: e.message,
						showCancel: false
					})
				} finally {
					this.loading = false
				}
			},

			onClearCache() {
				uni.showModal({
					title: 'Clear whitelist cache?',
					content: 'This clears the SN list cache in localStorage. Before the next scan, tap "Reload Local Whitelist" first',
					confirmText: 'Clear',
					cancelText: 'Cancel',
					success: (r) => {
						if (r.confirm) {
							clearSnCache()
							this.snCount = 0
							this.updateTime = '-'
							uni.showToast({ title: 'Cache cleared', icon: 'success' })
						}
					}
				})
			},

			goHistory() {
				uni.navigateTo({ url: '/pages/history/history' })
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 16px;
		padding-bottom: 40px;
	}

	.status-bar {
		display: flex;
		gap: 12px;
		margin-bottom: 16px;
	}

	.status-item {
		flex: 1;
		background: #fff;
		border-radius: 10px;
		padding: 10px 12px;
		display: flex;
		flex-direction: column;
	}

	.status-label {
		font-size: 11px;
		color: #8e8e93;
	}

	.status-value {
		font-size: 17px;
		font-weight: 600;
		margin-top: 2px;
	}

	.hero {
		text-align: center;
		padding: 30px 0 24px;
	}

	.hero-icon {
		font-size: 64px;
	}

	.hero-title {
		font-size: 24px;
		font-weight: 700;
		margin-top: 8px;
	}

	.hero-sub {
		font-size: 13px;
		color: #8e8e93;
		margin-top: 6px;
	}

	.scan-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
	}

	.methods {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin: 16px 0 8px;
	}
	.method-card {
		display: flex;
		align-items: center;
		gap: 14px;
		padding: 16px;
		background: #fff;
		border-radius: 14px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.06);
		border-left: 4px solid #0a84ff;
	}
	.method-barcode { border-left-color: #0a84ff; }
	.method-ocr { border-left-color: #ff9500; }
	.method-suffix { border-left-color: #34c759; }
	.method-icon {
		font-size: 32px;
		width: 48px;
		text-align: center;
	}
	.method-text { flex: 1; }
	.method-title {
		font-size: 16px;
		font-weight: 600;
		color: #1c1c1e;
	}
	.method-sub {
		font-size: 12px;
		color: #8e8e93;
		margin-top: 2px;
	}
	.method-arrow {
		font-size: 28px;
		color: #c7c7cc;
		font-weight: 300;
	}

	.actions {
		display: flex;
		gap: 12px;
		margin-top: 8px;
		flex-wrap: wrap;
	}

	.action-card {
		flex: 1;
		min-width: 30%;
		background: #fff;
		border-radius: 12px;
		padding: 16px;
		text-align: center;
		box-shadow: 0 2px 8px rgba(0,0,0,0.04);
	}

	.action-icon {
		display: block;
		font-size: 28px;
	}

	.action-text {
		display: block;
		font-size: 13px;
		margin-top: 4px;
		color: #1c1c1e;
	}

	.tips {
		margin-top: 16px;
	}

	.tip-title {
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 8px;
	}

	.tip-line {
		font-size: 13px;
		color: #6c6c70;
		line-height: 1.8;
	}

	.loading {
		position: fixed;
		inset: 0;
		background: rgba(0,0,0,0.4);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 99;
	}

	.loading-box {
		background: rgba(0,0,0,0.7);
		color: #fff;
		padding: 16px 24px;
		border-radius: 10px;
		font-size: 14px;
	}
</style>
