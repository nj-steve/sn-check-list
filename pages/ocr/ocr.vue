<template>
	<view class="container">
		<!-- App: load the H5 sub-page in a web-view -->
		<!-- #ifdef APP-PLUS -->
		<web-view
			:src="webviewUrl"
			@message="onWebviewMessage"
			@load="onWebviewLoad"
			@error="onWebviewError"
		/>
		<!-- #endif -->

		<!-- H5 / mini-program: use local OCR or backend OCR -->
		<!-- #ifndef APP-PLUS -->
		<!-- Notice banner -->
		<view class="banner">
			<text class="banner-icon">⚠️</text>
			<view class="banner-text">
				<view class="banner-title">Scanned content is too short</view>
				<view class="banner-sub">Original: {{ shortText || '(empty)' }} ({{ shortLen }} chars, needs ≥ 17)</view>
			</view>
		</view>

		<!-- Guidance -->
		<view class="guide card">
			<view class="guide-title">📸 Please take or choose a photo of the miner label</view>
			<view class="guide-line">• Make sure the SN text is clearly visible in the frame</view>
			<view class="guide-line">• Good lighting; avoid reflections</view>
			<view class="guide-line">• Try to photograph only the label itself to reduce noise</view>
		</view>

		<!-- OCR mode switch (H5 is front-end OCR only; backend deprecated) -->
		<view class="mode-bar card">
			<text class="mode-label">Recognition method:</text>
			<view class="mode-options">
				<text
					class="mode-opt"
					:class="{ active: ocrMode === 'auto' }"
					@click="ocrMode = 'auto'"
				>Auto (front-end OCR)</text>
				<text
					class="mode-opt"
					:class="{ active: ocrMode === 'local' }"
					@click="ocrMode = 'local'"
				>Front-end OCR</text>
			</view>
		</view>

		<!-- Recognition area -->
		<view class="recognize-box" v-if="!imagePath">
			<button class="btn" @click="onTakePhoto">
				<text style="font-size:20px">📷</text>
				<text style="margin-left:6px">Take Photo</text>
			</button>
			<button class="btn gray" @click="onChooseImage">
				<text style="font-size:20px">🖼</text>
				<text style="margin-left:6px">Choose from Album</text>
			</button>
		</view>

		<!-- Selected image preview -->
		<view v-else class="preview">
			<image :src="imagePath" mode="aspectFit" class="preview-img" @click="onChooseImage"></image>
			<view class="preview-actions">
				<button class="btn gray" style="flex:1" @click="onChooseImage">Re-choose</button>
				<button class="btn" style="flex:2" :disabled="loading" @click="onRecognize">
					{{ loading ? 'Recognizing...' : 'Start Recognition' }}
				</button>
			</view>
		</view>

		<!-- Recognition candidates -->
		<view v-if="candidates.length > 0" class="candidates">
			<view class="cand-title">Candidate SNs recognized (tap to select; editable below):</view>
			<view
				class="cand-item"
				v-for="(c, i) in candidates"
				:key="i"
				:class="{ selected: selectedIndex === i }"
				@click="pickCandidate(i)"
			>
				<text class="cand-sn">{{ c.text }}</text>
				<text class="cand-len">{{ c.text.length }} chars · confidence {{ c.confidence }}%</text>
			</view>
			<!-- ★ Editable SN input: tapping a candidate fills it in; edit manually then verify -->
			<view class="sn-edit-box">
				<view class="sn-edit-label">SN (editable before verification) or last 7 characters</view>
				<input class="sn-edit" v-model="snInput" @input="onSnInput" placeholder="Recognized result; edit here" />
				<view class="sn-edit-hint">
					{{ snInput.length }} chars
					<text v-if="snInput.length > 0 && snInput.length < snMinChars" class="warn">· at least {{ snMinChars }}</text>
					<text v-else-if="snInput.length < snFullChars" class="ok">· fuzzy lookup</text>
					<text v-else class="ok">· direct check</text>
				</view>
			</view>
			<button class="btn green" :disabled="snInput.length < snMinChars || confirming" @click="onConfirm">
				{{ confirming ? '⏳ Verifying...' : '✅ Confirm & Verify' }}
			</button>
		</view>

		<!-- Loading -->
		<view class="loading" v-if="loading">
			<view class="loading-box">{{ loadingText }}</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	// ★ Verification unified: after confirming the SN, jump straight to the result page;
	//   result.vue's doCheck() (exact → confusable variants → degraded) does the checking, same flow as barcode scanning
	import * as localOcr from './local-ocr.js'

	export default {
		data() {
			return {
				shortText: '',
				shortLen: 0,
				imagePath: '',
				loading: false,
				loadingText: '',
				confirming: false,   // ★ confirm & verify in progress (button disabled)
				candidates: [],
				selectedIndex: -1,
				snInput: '',      // ★ editable SN (filled by tapping a candidate, editable manually)
				snMinChars: 7,    // ★ minimum chars for the SN input — hint, button state and confirm check all share this one rule
				snFullChars: 17,  // ★ full-SN threshold — >= this: direct check on the result page; below: sn7 fuzzy search
				ocrMode: 'auto',  // auto / local / server
				webviewReady: false,
			}
		},
		computed: {
			webviewUrl() {
				// #ifdef APP-PLUS
				const query = `?shortText=${encodeURIComponent(this.shortText)}`
				return `/hybrid/html/ocr/index.html${query}`
				// #endif
				return ''
			}
		},
		onLoad(query) {
			this.shortText = (query.shortText || '').trim()
			this.shortLen = this.shortText.length
		},
		// #ifdef APP-PLUS
		onReady() {
			// After the App webview finishes loading, it sends a 'ready' message
			console.log('[ocr] App webview mode')
		},
		// #endif
		methods: {
			// ============ App webview mode ============
			// #ifdef APP-PLUS
			onWebviewLoad(e) {
				console.log('[ocr] webview loaded:', e.detail)
				this.webviewReady = true
			},

			onWebviewError(e) {
				console.error('[ocr] webview error:', e.detail)
				uni.showToast({ title: 'Failed to load H5 sub-page', icon: 'none' })
			},

			onWebviewMessage(e) {
				console.log('[ocr] webview message:', e.detail)
				// e.detail.data is an array
				const messages = e.detail.data || []
				// ★ Guard against late/duplicate messages: ignore if the target page is already on top (navigateTo already took effect)
				const pages = getCurrentPages()
				const top = pages[pages.length - 1]
				const alreadyOnResult = top && top.route && top.route.indexOf('pages/result/result') !== -1
				const alreadyOnSn7 = top && top.route && top.route.indexOf('pages/sn7/sn7') !== -1
				messages.forEach(msg => {
					if (msg.action === 'ready') {
						this.webviewReady = true
					} else if (msg.action === 'cancel') {
						// Cancel → go back to the previous page
						uni.navigateBack()
					} else if (msg.action === 'ocrShort' && msg.sn && !alreadyOnResult && !alreadyOnSn7) {
						// ★ Fallback for the <17-char path: the webview normally jumps itself via
						//   uni.webView.navigateTo to the sn7 fuzzy search page; handle the @message copy here
						const sn = String(msg.sn).trim()
						console.log('[ocr] Got ocrShort message, fallback jump to sn7 page:', sn)
						uni.redirectTo({
							url: `/pages/sn7/sn7?suffix=${encodeURIComponent(sn)}`
						})
					} else if (msg.action === 'ocrResult' && msg.sn && !alreadyOnResult) {
						// ★ Double safety: the normal path is the H5 sub-page jumping itself via uni.webView.navigateTo;
						//   this is the fallback for ocrResult delivered via @message (that event only fires at certain times)
						const sn = String(msg.sn).trim()
						console.log('[ocr] Got ocrResult message, fallback jump to result page:', sn)
						uni.redirectTo({
							url: `/pages/result/result?sn=${encodeURIComponent(sn)}&type=OCR&input=${encodeURIComponent(sn)}`
						})
					}
				})
			},

			onOcrResult(sn, source, confidence, matchType, inputSn) {
				// Kept for compatibility, but effectively unreachable (the H5 sub-page jumps via navigateTo)
				console.log('[ocr] result (legacy):', sn, source, confidence, 'matchType:', matchType, 'inputSn:', inputSn)
				if (!sn || sn.length < this.snMinChars) {
					uni.showToast({ title: 'SN too short', icon: 'none' })
					return
				}
				const params = [`sn=${encodeURIComponent(sn)}`, `type=OCR`]
				if (matchType) params.push(`matchType=${encodeURIComponent(matchType)}`)
				if (inputSn) params.push(`input=${encodeURIComponent(inputSn)}`)
				if (source) params.push(`src=${encodeURIComponent(source)}`)
				const query = params.join('&')
				uni.reLaunch({ url: `/pages/result/result?${query}` })
			},
			// #endif

			// ============ H5/mini-program mode ============
			// #ifndef APP-PLUS
			onTakePhoto() {
				uni.chooseImage({
					count: 1,
					sourceType: ['camera'],
					success: (res) => {
						this.imagePath = res.tempFilePaths[0]
						this.candidates = []
						this.selectedIndex = -1
						setTimeout(() => this.onRecognize(), 200)
					}
				})
			},

			onChooseImage() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					success: (res) => {
						this.imagePath = res.tempFilePaths[0]
						this.candidates = []
						this.selectedIndex = -1
						setTimeout(() => this.onRecognize(), 200)
					}
				})
			},

			async onRecognize() {
				if (!this.imagePath || this.loading) return
				this.loading = true
				this.loadingText = 'Loading image...'
				this.candidates = []
				this.selectedIndex = -1
				this.snInput = ''

				try {
					let cands = [], raw = ''
					// ★ H5 mode uses front-end OCR (Tesseract.js) only; backend deprecated
					console.log('[ocr] Front-end OCR (Tesseract.js)')
					this.loadingText = 'Front-end OCR in progress...'
					const result = await localOcr.recognizeSnFromImage(this.imagePath, {
						onProgress: (m) => { this.loadingText = `${m.stage} (${m.percent}%)` }
					})
					cands = result.candidates
					raw = result.rawText

					this.candidates = cands
					if (cands.length === 0) {
						// Show full raw text + guidance
						uni.showActionSheet({
							itemList: ['📷 Retake a clearer photo'],
							success: (r) => {
								if (r.tapIndex === 0) {
									// Retake
									uni.chooseImage({
										count: 1,
										sourceType: ['camera', 'album'],
										success: (res) => {
											this.imagePath = res.tempFilePaths[0]
											this.candidates = []
											setTimeout(() => this.onRecognize(), 200)
										}
									})
								}
							},
							fail: () => {
								// User canceled
								uni.showModal({
									title: 'No SN recognized',
									content: `Recognized: ${raw || '(empty)'}\n\nPossible causes:\n• Photo too blurry / low contrast\n• SN label not captured — only the casing\n• Label is occluded; try another angle\n\nSuggestions:\n1) Retake the photo (focus on the SN text)\n2) Go back to Home and use the "SN Last-7 lookup" instead`,
									showCancel: false
								})
							}
						})
					} else {
						this.selectedIndex = 0
						this.snInput = this.candidates[0].text
						uni.vibrateShort && uni.vibrateShort({})
					}
				} catch (e) {
					console.error('[ocr] Failed:', e)
					uni.showModal({ title: 'Recognition failed', content: e.message, showCancel: false })
				} finally {
					this.loading = false
				}
			},

			canUseLocalOcr() {
				// #ifdef H5
				return true
				// #endif
				// #ifdef MP-WEIXIN
				return false
				// #endif
				return false
			},

			uploadImage(filePath) {
				// ★ Backend OCR is deprecated in H5 mode; kept only for compatibility
				console.warn('[ocr] Backend OCR is deprecated; use "Front-end OCR" mode')
				return Promise.reject(new Error('Backend OCR is deprecated'))
			},

			parseCandidates(ocrData) {
				const words = ocrData.words || ocrData.words_list || []
				const candidates = []
				words.forEach(w => {
					const text = (w.text || w.words || '').replace(/[\s-]/g, '').toUpperCase()
					if (text.length >= 17 && /^[A-Z0-9]+$/.test(text)) {
						candidates.push({
							text,
							confidence: Math.round((w.confidence || w.score || 0.9) * 100) || 90,
							location: w.location || null
						})
					}
				})
				if (candidates.length === 0 && ocrData.text) {
					const all = ocrData.text.replace(/[\s-]/g, '').toUpperCase()
					const matches = all.match(/[A-Z0-9]{17,}/g) || []
					matches.forEach(m => candidates.push({ text: m, confidence: 75 }))
				}
				const seen = new Set()
				return candidates
					.filter(c => !seen.has(c.text) && seen.add(c.text))
					.sort((a, b) => b.confidence - a.confidence)
					.slice(0, 5)
			},

			pickCandidate(i) {
				// Tap a candidate → fill the editable input
				this.selectedIndex = i
				this.snInput = this.candidates[i].text
				uni.vibrateShort && uni.vibrateShort({})
			},

			onSnInput(e) {
				// Auto-uppercase; keep alphanumerics only
				this.snInput = (e.detail.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '')
			},

			onConfirm() {
				if (this.confirming) return  // ★ prevent double taps
				// ★ The editable input is authoritative (candidates auto-fill it; manual edits allowed)
				const sn = String(this.snInput || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '')
				console.log('[ocr] Confirmed SN (may include manual edits):', sn)
				if (!sn) {
					uni.showToast({ title: 'Select a candidate or enter an SN first', icon: 'none' })
					return
				}
				if (sn.length < this.snMinChars) {
					uni.showToast({ title: `Got ${sn.length} chars, need at least ${this.snMinChars} — please edit`, icon: 'none' })
					return
				}
				// ★ Same rule as the input hint and the disabled button state (snMinChars),
				//   so input-time and confirm-time validation can never drift apart.
				// ★ Routing: full SN (>= snFullChars) → result page, where result.vue's doCheck()
				//   runs the full three-tier matching (exact → variant → degraded), the exact same
				//   verification flow as barcode scanning;
				//   shorter input → sn7 fuzzy search page, where the user picks a fuzzy-matched
				//   candidate SN and verifies it through the same result-page chain.
				this.confirming = true
				uni.vibrateShort && uni.vibrateShort({})
				const clean = sn.replace(/[^A-Z0-9]/gi, '').toUpperCase()
				const url = sn.length >= this.snFullChars
					? `/pages/result/result?sn=${encodeURIComponent(clean)}&type=OCR&input=${encodeURIComponent(clean)}`
					: `/pages/sn7/sn7?suffix=${encodeURIComponent(clean)}`
				uni.redirectTo({
					url,
					fail: (e) => {
						console.error('[ocr] Navigation failed:', e)
						uni.showToast({ title: 'Navigation failed: ' + (e.errMsg || ''), icon: 'none' })
					},
					complete: () => {
						this.confirming = false
					}
				})
			},

			// #endif
		}
	}
</script>

<style scoped>
	.container { padding: 0; }
	.banner { background: #fff3cd; border-radius: 10px; padding: 12px 14px; display: flex; align-items: center; gap: 10px; margin: 16px; }
	.banner-icon { font-size: 24px; }
	.banner-title { font-size: 15px; font-weight: 600; color: #856404; }
	.banner-sub { font-size: 12px; color: #856404; margin-top: 2px; word-break: break-all; }
	.guide { background: #f0f8ff; margin: 0 16px; }
	.guide-title { font-size: 14px; font-weight: 600; margin-bottom: 6px; }
	.guide-line { font-size: 13px; color: #6c6c70; line-height: 1.7; }
	.mode-bar { display: flex; align-items: center; margin: 0 16px; }
	.mode-label { font-size: 13px; color: #6c6c70; margin-right: 12px; }
	.mode-options { display: flex; gap: 8px; }
	.mode-opt { padding: 6px 12px; background: #e5e5ea; color: #6c6c70; border-radius: 16px; font-size: 12px; }
	.mode-opt.active { background: #0a84ff; color: #fff; }
	.recognize-box { margin: 20px 16px; }
	.preview { margin: 16px; }
	.preview-img { width: 100%; max-height: 400rpx; background: #000; border-radius: 10px; }
	.preview-actions { display: flex; gap: 8px; margin-top: 12px; }
	.preview-actions .btn { margin: 0; }
	.candidates { margin: 20px 16px; }
	.cand-title { font-size: 14px; font-weight: 600; margin-bottom: 10px; }
	.cand-item { background: #fff; border: 2px solid #e5e5ea; border-radius: 10px; padding: 12px 14px; margin-bottom: 8px; }
	.cand-item.selected { border-color: #0a84ff; background: #f0f8ff; }
	.cand-sn { display: block; font-size: 16px; font-weight: 600; font-family: monospace; word-break: break-all; }
	.cand-len { display: block; font-size: 12px; color: #8e8e93; margin-top: 4px; }
	.sn-edit-box { margin-top: 12px; }
	.sn-edit-label { font-size: 12px; color: #8e8e93; margin-bottom: 6px; }
	.sn-edit { background: #fff; border: 2px solid #0a84ff; border-radius: 10px; padding: 12px 14px; font-size: 16px; font-weight: 600; font-family: monospace; letter-spacing: 1px; }
	.sn-edit-hint { font-size: 11px; color: #8e8e93; margin-top: 4px; }
	.sn-edit-hint .warn { color: #ff9500; }
	.loading { position: fixed; inset: 0; background: rgba(0,0,0,.4); display: flex; align-items: center; justify-content: center; z-index: 99; }
	.loading-box { background: rgba(0,0,0,.7); color: #fff; padding: 16px 24px; border-radius: 10px; font-size: 14px; }
	.btn { display: block; width: 100%; background: #0a84ff; color: #fff; font-size: 17px; font-weight: 600; border: 0; border-radius: 12px; padding: 16px 0; margin: 12px 0; }
	.btn:active { opacity: 0.7; }
	.btn:disabled { background: #8e8e93; }
	.btn.gray { background: #2c2c2e; }
	.btn.green { background: #34c759; }
	.btn.red { background: #ff3b30; }
</style>
