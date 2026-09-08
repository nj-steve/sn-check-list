<template>
	<view class="scan-page">
		<!-- raw <video> is injected into this box at runtime (avoids uni-video wrapper quirks) -->
		<view class="video-box" id="videoBox"></view>

		<!-- viewfinder -->
		<view class="frame"></view>
		<view class="scanline"></view>
		<view class="hint">Aim at the barcode — fill the frame, hold steady</view>

		<view class="err-box" v-if="errorMsg">
			<view class="err-text">{{ errorMsg }}</view>
			<button class="btn-ocr" @click="goOcr">📷 Use Photo OCR Instead</button>
		</view>

		<view class="actions">
			<button class="btn-cancel" @click="goBack">Cancel</button>
		</view>
	</view>
</template>

<script>
	// ★ H5-only camera scanner: uni.scanCode does not exist on H5. We decode with
	//   zxing-wasm (the WebAssembly port of ZXing-C++ — far stronger than the pure-JS
	//   engine on dense ANTMINER Code128 labels), loaded from same-origin
	//   static/zxing-wasm/ (no CDN dependency). When the camera is unavailable
	//   (HTTP deployment / permission denied), fall back to the photo-OCR page.
	import { dispatchScan } from '../../utils/sn-validate.js'

	const DECODE_INTERVAL = 180 // ms between frames

	export default {
		data() {
			return {
				errorMsg: '',
				videoEl: null,
				stream: null,
				stopped: false,
				loopTimer: null,
				canvas: null
			}
		},
		mounted() {
			this.start()
		},
		onUnload() {
			this.stop()
		},
		onHide() {
			this.stop()
		},
		methods: {
			// Inject the zxing-wasm iife bundle — sets window.ZXingWASM and resolves the
			// wasm (zxing_reader.wasm, same directory) on first decode call
			loadEngine() {
				if (window.ZXingWASM && window.ZXingWASM.readBarcodesFromImageData) return Promise.resolve()
				return new Promise((resolve, reject) => {
					const s = document.createElement('script')
					s.src = 'static/zxing-wasm/index.js'
					s.onload = () => resolve()
					s.onerror = () => reject(new Error('failed to load the decoder engine'))
					document.head.appendChild(s)
				})
			},
			async start() {
				this.stopped = false
				try {
					if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
						throw new Error('Camera unavailable — the page must be opened over HTTPS')
					}
					await this.loadEngine()

					const video = document.createElement('video')
					video.setAttribute('style', 'width:100%;height:100%;object-fit:cover;')
					video.setAttribute('playsinline', '')
					video.setAttribute('muted', '')
					const box = document.getElementById('videoBox')
					box.innerHTML = ''
					box.appendChild(video)
					this.videoEl = video

					// ★ HD stream — dense Code128 needs the resolution (default 640x480 is too coarse)
					this.stream = await navigator.mediaDevices.getUserMedia({
						video: {
							facingMode: 'environment',
							width: { ideal: 1280 },
							height: { ideal: 720 }
						},
						audio: false
					})
					video.srcObject = this.stream
					await video.play()

					this.canvas = document.createElement('canvas')
					this.decodeLoop()
				} catch (e) {
					console.warn('[scan-h5] start failed:', e)
					this.errorMsg = (e && e.message) || 'Camera failed to start'
				}
			},
			async decodeLoop() {
				if (this.stopped) return
				try {
					const v = this.videoEl
					if (v && v.videoWidth > 0) {
						const c = this.canvas
						c.width = v.videoWidth
						c.height = v.videoHeight
						const ctx = c.getContext('2d', { willReadFrequently: true })
						ctx.drawImage(v, 0, 0)
						const imgData = ctx.getImageData(0, 0, c.width, c.height)
						// zxing-wasm formats are plain strings; defaults already enable
						// tryRotate/tryInvert/tryDownscale — we add tryHarder + our formats
						const opts = {
							tryHarder: true,
							formats: ['Code128', 'EAN13', 'EAN8', 'Code39', 'QRCode']
						}
						const results = await window.ZXingWASM.readBarcodesFromImageData(imgData, opts)
						if (results && results.length && results[0] && results[0].text) {
							const text = String(results[0].text).trim()
							if (text) {
								this.stop()
								// reuse the unified scan flow (length check → OCR guidance → result page)
								dispatchScan(text, 'H5SCAN', false)
								return
							}
						}
					}
				} catch (e) {
					// first call also compiles the wasm — transient errors are retried
					console.warn('[scan-h5] decode error:', e && e.message)
				}
				if (!this.stopped) {
					this.loopTimer = setTimeout(() => this.decodeLoop(), DECODE_INTERVAL)
				}
			},
			stop() {
				this.stopped = true
				if (this.loopTimer) {
					clearTimeout(this.loopTimer)
					this.loopTimer = null
				}
				if (this.stream) {
					this.stream.getTracks().forEach(t => t.stop())
					this.stream = null
				}
				if (this.videoEl) {
					this.videoEl.srcObject = null
				}
			},
			goBack() {
				uni.navigateBack()
			},
			goOcr() {
				this.stop()
				uni.redirectTo({ url: '/pages/ocr/ocr' })
			}
		}
	}
</script>

<style scoped>
	.scan-page {
		position: fixed;
		inset: 0;
		background: #000;
		z-index: 999;
	}
	.video-box {
		position: absolute;
		inset: 0;
		overflow: hidden;
	}
	.frame {
		position: absolute;
		left: 50%;
		top: 45%;
		transform: translate(-50%, -50%);
		width: 86%;
		height: 200px;
		border: 2px solid rgba(255, 255, 255, 0.85);
		border-radius: 12px;
		box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.35);
		pointer-events: none;
	}
	.scanline {
		position: absolute;
		left: 7%;
		right: 7%;
		top: 45%;
		height: 2px;
		margin-top: -100px;
		background: linear-gradient(90deg, transparent, #34c759 20%, #34c759 80%, transparent);
		border-radius: 1px;
		box-shadow: 0 0 8px #34c759;
		animation: scan-sweep 2s linear infinite;
		pointer-events: none;
	}
	@keyframes scan-sweep {
		0% { transform: translateY(0); }
		50% { transform: translateY(196px); }
		100% { transform: translateY(0); }
	}
	.hint {
		position: absolute;
		top: 24px;
		left: 0;
		right: 0;
		text-align: center;
		color: #fff;
		font-size: 14px;
	}
	.actions {
		position: absolute;
		bottom: 40px;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
	}
	.btn-cancel {
		background: rgba(255, 255, 255, 0.18);
		color: #fff;
		font-size: 15px;
		border-radius: 22px;
		padding: 0 32px;
		height: 44px;
		line-height: 44px;
	}
	.err-box {
		position: absolute;
		left: 16px;
		right: 16px;
		bottom: 120px;
		background: rgba(0, 0, 0, 0.75);
		border-radius: 12px;
		padding: 16px;
		text-align: center;
	}
	.err-text {
		color: #ffd60a;
		font-size: 13px;
		margin-bottom: 12px;
	}
	.btn-ocr {
		background: #0a84ff;
		color: #fff;
		font-size: 14px;
		border-radius: 10px;
		height: 40px;
		line-height: 40px;
	}
</style>
