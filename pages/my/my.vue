<template>
	<view class="my">
		<view class="my-header">
			<view class="header-main">
				<view class="header-config" @tap="goConfig">
					<view class="icon-shezhi1 iconfont">
					</view>
				</view>
				<view class="header-logo">
					<image class="config-img" src="../../static/img/avatar.jpg" mode=""></image>
					<view class="user-name">
						张三
					</view>
				</view>

			</view>
		</view>
		<view class="order">
			<view class="order-title">
				<view>我的订单</view>
				<view class="f-color">
					全部订单
				</view>
			</view>
			<view class="order-list">
				<view class="order-item">
					<i class="iconfont"></i>
				</view>
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
			goConfig() {
				uni.navigateTo({
					url: '/pages/my-config/my-config'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.my-header {
		background: url('../../static/img/background.jpg');
		background-size: 100%;
		width: 100%;
		height: 400rpx;
	}

	.header-main {
		position: relative;
		height: 100%;

		.header-config {
			position: absolute;
			left: 40rpx;
			top: 20rpx;
			z-index: 99;

			.iconfont {
				font-size: 50rpx;
				color: #fff;
			}
		}

		.header-logo {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -20%);
		}

		.config-img {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
			border: 1px solid #ccc;
		}

		.user-name {
			font-size: 30rpx;
			color: #f8f8f8;
			text-align: center;
			margin-top: 10rpx;
		}
	}
</style>
