<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* uni-app global styles */
	page {
		background-color: #f5f5f7;
		font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
	}

	/* Common buttons */
	.btn {
		display: block;
		width: 100%;
		background: #0a84ff;
		color: #fff;
		font-size: 17px;
		font-weight: 600;
		border: 0;
		border-radius: 12px;
		padding: 16px 0;
		margin: 12px 0;
	}

	.btn::after {
		border: 0;
	}

	.btn:active {
		opacity: 0.7;
	}

	.btn.gray {
		background: #2c2c2e;
	}

	.btn.green {
		background: #34c759;
	}

	.btn.red {
		background: #ff3b30;
	}

	.input {
		width: 100%;
		background: #fff;
		border: 1px solid #e5e5ea;
		border-radius: 10px;
		padding: 12px 14px;
		font-size: 15px;
		box-sizing: border-box;
	}

	.card {
		background: #fff;
		border-radius: 12px;
		padding: 16px;
		margin: 12px 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
	}
</style>
