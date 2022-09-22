<template>
	<view class="payment">
		<uniNavBar title="购物车" leftText="关闭" statusBar="true" @clickLeft="goBack"></uniNavBar>
		<view class="pay-main">
			<label class="radio">
				<view class="pay-item">
					<view class="img">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<view class="">
						<view class="f-color">
							支付宝支付
						</view>
						<view class="desc f-color">
							推荐支付宝支付
						</view>
					</view>
					<radio value="" color="#FF3333" /><text></text>
				</view>
			</label>
			<label class="radio">
				<view class="pay-item">
					<view class="img">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<view class="">
						<view class="f-color">
							微信支付
						</view>
						<view class="desc f-color">
							推荐微信支付
						</view>
					</view>
					<radio value="" color="#FF3333" /><text></text>
				</view>
			</label>
		</view>
		<view class="foot-pay">
			<view class="price">
				<text>合计：</text>
				<text>￥259.00</text>
			</view>
			<view class="count" @tap="goPayment">
				去支付
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	export default {
		components: {
			uniNavBar
		},
		data() {
			return {

			}
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			goPayment(){
				uni.navigateTo({
					url:'/pages/payment-sucess/payment-sucess'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.pay-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;

		view {
			font-size: 26rpx;
		}

		.pay-img {
			width: 100rpx;
			height: 100rpx;
		}

		.desc {
			color: #ccc;
			font-size: 24rpx;
		}
	}

	.foot-pay {
		background-color: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		border-top: 2rpx solid #ccc;

		.price {
			background-color: #000;
			flex: 1;
		}
		.count{
			background-color: #49bdfb;
			width: 240rpx;
		}

		.price,
		.count {
			color: #fff;
			line-height: 100rpx;
			text-align: center;
		}
	}
</style>
