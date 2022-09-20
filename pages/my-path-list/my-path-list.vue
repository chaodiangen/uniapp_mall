<template>
	<view class="my-path-list">
		<view class="path-list">
			<view class="path-item">
				<view class="item">
					<view class="">
						张三
					</view>
					<view class="">
						188xxxxxxxx
					</view>
				</view>
				<view class="item">
					<view class="item-default bg-color-active">
						默认
					</view>
					<view class="uni-text-one">
						北京市海淀区四合院北京市海淀区四合院北京市海淀区四合院北京市海淀区四合院
					</view>
				</view>
			</view>
		</view>
		<view class="add-path" @tap="goAddPath">
			<view class="add-path-btn f-active-color">
				<i class="icon-jiahao1 iconfont"></i>
				新增地址
			</view>
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
			goAddPath() {
				uni.navigateTo({
					url: '/pages/my-add-path/my-add-path'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.path-list {
		margin-bottom: 20rpx;

		.path-item {
			padding: 0 20rpx;
			border-bottom: 1px solid #ccc;
		}

		.item {
			display: flex;
			align-items: center;
			margin-bottom: 14rpx;
		}

		.item-default {
			padding: 6rpx 14rpx;
			border-radius: 20rpx;
			color: #fff;
			font-size: 24rpx;
			margin-right: 10rpx;
			flex-shrink: 0;
		}
	}

	.add-path {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		.add-path-btn {
			border: 2px solid #68b88e;
			border-radius: 30rpx;
			padding: 10rpx 40rpx;
		}

		.iconfont {
			font-size: 26rpx;
			margin-right: 10rpx;
		}
	}
</style>
