<template>
	<view class="container">
		<view class="header card">
			<view class="h-title">🔢 SN Last-7 Lookup</view>
			<view class="h-sub">Enter the SN's trailing characters (paste a full SN works too — the last 7 digits are taken automatically)</view>
		</view>

		<!-- Input area -->
		<view class="input-card card">
			<view class="input-row">
				<text class="prefix">…</text>
				<input
					class="sn-input"
					v-model="suffix"
					placeholder="Enter last 7 characters (or paste full SN)"
					maxlength="20"
					:focus="autoFocus"
					@input="onInput"
					@confirm="onQuery"
				/>
				<button class="btn-clear" v-if="suffix" @click="suffix=''">✕</button>
			</view>
			<view class="input-hint">
				<text v-if="suffix.length === 0">Enter at least 4 characters; a pasted full SN is auto-trimmed to its last 7</text>
				<text v-else-if="suffix.length < 4" class="warn">At least 4 characters (got {{ suffix.length }})</text>
				<text v-else-if="suffix.length > 7" class="ok">Auto-trimmed to last 7: {{ effectiveSuffix }}</text>
				<text v-else class="ok">{{ suffix.length }} characters · tap "Lookup"</text>
			</view>
			<button class="btn-query" :disabled="!canQuery" @click="onQuery">
				<text>🔍 Lookup ({{ effectiveSuffix.length }}/7)</text>
			</button>
		</view>

		<!-- Results -->
		<view v-if="queried" class="results card">
			<view v-if="results.length === 0" class="empty">
				<view class="empty-icon">⛔️</view>
				<view class="empty-title">No whitelist match</view>
				<view class="empty-sub">
					No whitelist SN matched at 7, 6 or 5 of the aligned positions of
					"<text class="mono">{{ queriedSuffix }}</text>"
					(among {{ stats.count }} entries)
				</view>
			</view>
			<view v-else>
				<view class="r-title">{{ results.length }} matches found (sorted by precision{{ results.length > 20 ? ', showing top 20' : '' }})</view>
				<view
					v-for="(it, idx) in shownResults"
					:key="it.sn"
					class="r-item"
					@click="pickSn(it.sn)"
				>
					<view class="r-num">{{ idx + 1 }}</view>
					<view class="r-sn">
						<view class="r-sn-val mono">{{ it.sn }}</view>
						<view class="r-sn-meta">
							<text class="via-badge" :class="viaClass(it.via)">{{ viaLabel(it.via) }}</text>
							<text v-if="it.diff" class="r-diff">Diff: {{ it.diff }}</text>
						</view>
					</view>
					<view class="r-arrow">›</view>
				</view>
				<view v-if="results.length > 20" class="r-more">
					{{ results.length - 20 }} more not shown — enter more digits to improve precision
				</view>
			</view>
		</view>

		<view class="tips card">
			<view class="tip-title">💡 Matching Rules (most to least precise)</view>
			<view class="tip-line">• ① Full match: every position of the input matches the SN tail</view>
			<view class="tip-line">• ② If none: SNs matching any 6 of the 7 positions are listed (the positions need not be contiguous)</view>
			<view class="tip-line">• ③ If still none: SNs matching any 5 of the 7 positions are listed</view>
			<view class="tip-line">• Results show which positions matched (the diff mask); confirm against the machine label before choosing</view>
		</view>
	</view>
</template>

<script>
	import { findSnBySuffixTolerant, getWhitelistStats } from '../../utils/auth.js'

	const VIA_LABELS = {
		'exact': 'Exact match',
		'pos6': '6-of-7 positions hit',
		'pos5': '5-of-7 positions hit',
		'pos4': '4-of-6 positions hit',
	}
	// badge colors: green=all positions match / blue=one position off / orange=two positions off / dark orange=6-char input, two off
	const VIA_CLASS = {
		'exact': 'via-exact',
		'pos6': 'via-fuzzy',
		'pos5': 'via-degrade',
		'pos4': 'via-frag4',
	}

	export default {
		data() {
			return {
				suffix: '',
				autoFocus: true,
				queried: false,
				queriedSuffix: '',
				results: [],   // [{sn, via, rank, diff}]
				stats: { count: 0 }
			}
		},
		computed: {
			canQuery() {
				return this.suffix.length >= 4
			},
			// Effective suffix: when input exceeds 7 chars, take the last 7 automatically
			effectiveSuffix() {
				return this.suffix.length > 7 ? this.suffix.slice(-7) : this.suffix
			},
			shownResults() {
				return this.results.slice(0, 20)
			}
		},
		onLoad(query) {
			// ★ Support entering with a prefilled suffix (e.g. routed from the OCR page for <17-char input):
			//   normalize, don't pop the keyboard, auto-run the fuzzy query
			const s = String(query.suffix || query.shortText || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '')
			if (s) {
				this.suffix = s
				this.autoFocus = false
				this.onQuery()
			}
		},
		onShow() {
			this.stats = getWhitelistStats()
		},
		methods: {
			onInput(e) {
				// Auto-uppercase and filter non-alphanumerics (length not truncated; the query takes the last 7 automatically)
				this.suffix = (e.detail.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '')
			},
			onQuery() {
				if (!this.canQuery) return
				this.queriedSuffix = this.effectiveSuffix
				this.results = findSnBySuffixTolerant(this.suffix)
				this.queried = true
				console.log(`[sn7] Query "${this.suffix}" (effective suffix ${this.queriedSuffix}): ${this.results.length} results`)
				uni.vibrateShort && uni.vibrateShort({})
			},
			viaLabel(via) {
				return VIA_LABELS[via] || via
			},
			viaClass(via) {
				return VIA_CLASS[via] || 'via-exact'
			},
			pickSn(sn) {
				// On selection, go to the result page with the original input; result.vue's doCheck() verifies centrally
				console.log('[sn7] Selected:', sn)
				uni.redirectTo({
					url: `/pages/result/result?sn=${encodeURIComponent(sn)}&type=SUFFIX&input=${encodeURIComponent(this.queriedSuffix || this.suffix)}`
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 16px;
		padding-bottom: 40px;
	}
	.card {
		background: #fff;
		border-radius: 12px;
		padding: 14px 16px;
		margin-bottom: 12px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.04);
	}
	.header .h-title {
		font-size: 17px;
		font-weight: 600;
		color: #1c1c1e;
	}
	.header .h-sub {
		font-size: 12px;
		color: #8e8e93;
		margin-top: 4px;
	}
	.input-row {
		display: flex;
		align-items: center;
		gap: 8px;
		background: #f5f5f7;
		border-radius: 10px;
		padding: 8px 12px;
		margin: 8px 0;
	}
	.prefix {
		font-size: 18px;
		color: #8e8e93;
		font-family: monospace;
	}
	.sn-input {
		flex: 1;
		font-size: 22px;
		font-family: monospace;
		letter-spacing: 2px;
		font-weight: 600;
		background: transparent;
	}
	.btn-clear {
		background: #c7c7cc;
		color: #fff;
		font-size: 12px;
		padding: 4px 10px;
		border-radius: 12px;
		line-height: 1;
		margin: 0;
	}
	.input-hint {
		font-size: 12px;
		color: #8e8e93;
		margin: 4px 0 10px;
	}
	.input-hint .warn { color: #ff9500; }
	.input-hint .ok { color: #34c759; }
	.btn-query {
		background: #0a84ff;
		color: #fff;
		font-size: 15px;
		font-weight: 600;
		padding: 12px;
		border-radius: 10px;
	}
	.btn-query:disabled {
		background: #c7c7cc;
	}
	.r-title {
		font-size: 14px;
		color: #1c1c1e;
		font-weight: 600;
		margin-bottom: 8px;
	}
	.r-item {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 8px;
		border-top: 1px solid #f0f0f0;
	}
	.r-num {
		width: 24px;
		height: 24px;
		background: #0a84ff;
		color: #fff;
		font-size: 12px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.r-sn { flex: 1; min-width: 0; }
	.r-sn-val {
		font-size: 15px;
		font-weight: 600;
		color: #1c1c1e;
		letter-spacing: 1px;
		word-break: break-all;
	}
	.r-sn-meta {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 6px;
		margin-top: 4px;
	}
	.via-badge {
		font-size: 11px;
		padding: 2px 8px;
		border-radius: 8px;
		color: #fff;
		flex-shrink: 0;
	}
	.via-exact { background: #34c759; }
	.via-fuzzy { background: #0a84ff; }
	.via-degrade { background: #ff9500; }
	.via-frag4 { background: #e8590c; }
	.r-diff {
		font-size: 11px;
		color: #8e8e93;
		word-break: break-all;
	}
	.r-more {
		font-size: 12px;
		color: #8e8e93;
		padding-top: 10px;
		text-align: center;
	}
	.r-arrow {
		font-size: 22px;
		color: #c7c7cc;
		flex-shrink: 0;
	}
	.empty {
		text-align: center;
		padding: 24px 0;
	}
	.empty-icon {
		font-size: 48px;
	}
	.empty-title {
		font-size: 16px;
		font-weight: 600;
		color: #1c1c1e;
		margin-top: 8px;
	}
	.empty-sub {
		font-size: 12px;
		color: #8e8e93;
		margin-top: 4px;
	}
	.empty-sub .mono {
		font-family: monospace;
		color: #1c1c1e;
		font-weight: 600;
	}
	.tip-line {
		font-size: 13px;
		color: #6c6c70;
		line-height: 1.8;
	}
	.tip-title {
		font-size: 14px;
		font-weight: 600;
		margin-bottom: 6px;
	}
</style>
