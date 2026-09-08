<template>
	<view class="container">
		<view class="header card">
			<view class="stat">
				<text class="stat-label">Total Scans</text>
				<text class="stat-value">{{ list.length }}</text>
			</view>
			<view class="stat pass">
				<text class="stat-label">OK to Remove</text>
				<text class="stat-value">{{ passCount }}</text>
			</view>
			<view class="stat fail">
				<text class="stat-label">Do Not Remove</text>
				<text class="stat-value">{{ failCount }}</text>
			</view>
		</view>

		<view v-if="list.length === 0" class="empty">
			<text style="font-size:60px">📋</text>
			<view style="margin-top:12px; color:#8e8e93">No scan records yet</view>
		</view>

		<view v-else>
			<view
				class="item card"
				v-for="(it, i) in list"
				:key="i"
				@click="goResult(it.sn)"
			>
				<view class="item-left">
					<text class="badge" :class="it.matched ? 'pass' : 'fail'">
						{{ it.matched ? 'OK' : 'NO' }}
					</text>
				</view>
				<view class="item-main">
					<view class="item-sn">{{ it.sn }}</view>
					<view class="item-time">{{ formatTime(it.time) }}</view>
				</view>
				<view class="item-right">
					<text class="del" @click.stop="del(i)">×</text>
				</view>
			</view>

			<button class="btn gray" @click="clearAll" style="margin-top:20px">
				Clear All Records
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		computed: {
			passCount() {
				return this.list.filter(x => x.matched).length
			},
			failCount() {
				return this.list.filter(x => !x.matched).length
			}
		},
		onShow() {
			this.load()
		},
		methods: {
			load() {
				this.list = uni.getStorageSync('scan_history') || []
			},
			formatTime(ts) {
				const d = new Date(ts)
				const pad = n => String(n).padStart(2, '0')
				return `${d.getMonth()+1}-${d.getDate()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
			},
			goResult(sn) {
				uni.redirectTo({ url: `/pages/result/result?sn=${encodeURIComponent(sn)}` })
			},
			del(i) {
				uni.showModal({
					title: 'Delete',
					content: 'Delete this record?',
					success: (res) => {
						if (res.confirm) {
							this.list.splice(i, 1)
							uni.setStorageSync('scan_history', this.list)
						}
					}
				})
			},
			clearAll() {
				uni.showModal({
					title: 'Clear All',
					content: 'Clear all records?',
					success: (res) => {
						if (res.confirm) {
							this.list = []
							uni.removeStorageSync('scan_history')
						}
					}
				})
			}
		}
	}
</script>

<style scoped>
	.container {
		padding: 16px;
	}

	.header {
		display: flex;
		gap: 12px;
	}

	.stat {
		flex: 1;
		text-align: center;
	}

	.stat-label {
		display: block;
		font-size: 12px;
		color: #8e8e93;
	}

	.stat-value {
		display: block;
		font-size: 24px;
		font-weight: 700;
		margin-top: 4px;
	}

	.stat.pass .stat-value {
		color: #34c759;
	}

	.stat.fail .stat-value {
		color: #ff3b30;
	}

	.empty {
		text-align: center;
		padding: 80px 0;
	}

	.item {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.item-left .badge {
		display: inline-block;
		width: 32px;
		height: 32px;
		text-align: center;
		line-height: 32px;
		border-radius: 50%;
		color: #fff;
		font-size: 14px;
		font-weight: 700;
	}

	.badge.pass { background: #34c759; }
	.badge.fail { background: #ff3b30; }

	.item-main {
		flex: 1;
	}

	.item-sn {
		font-size: 15px;
		font-weight: 600;
		font-family: monospace;
		word-break: break-all;
	}

	.item-time {
		font-size: 12px;
		color: #8e8e93;
		margin-top: 2px;
	}

	.item-right .del {
		color: #8e8e93;
		font-size: 24px;
		padding: 4px 8px;
	}
</style>
