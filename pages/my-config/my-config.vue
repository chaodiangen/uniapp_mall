<template>
	<view class="config">
		<view class="config-list">
			<view class="config-item" @tap="goPathList">
				<view class="left f-color">
					地址管理
				</view>
				<view class="iconfont icon-xiangyou">
				</view>
			</view>
		</view>

		<view class="my-exit bg-color">
			退出
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goPathList(){
				uni.navigateTo({
					url:'/pages/my-path-list/my-path-list'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.config-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20rpx;

		.iconfont {
			font-size: 30rpx;
		}

		.f-color {
			font-size: 30rpx;
		}
	}

	.my-exit {
		width: 100%;
		line-height: 82rpx;
		text-align: center;
		color: #fff;
	}
</style>
