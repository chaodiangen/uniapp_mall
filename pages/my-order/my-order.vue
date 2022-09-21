<template>
	<view>
		<view class="my-order bg-color" v-if="false">
			<view class="order-header">
				<view :class="['header-item','f-color',tabIndex===index?'border-bottom-line':'']"
					@tap="cahngeTab(index)" v-for="(item,index) in headerList" :key="index">
					{{item.name}}
				</view>
			</view>
			<view class="order-main" :style="{'height':clientHeight+'px'}">
				<!-- 商品 -->
				<view class="order-goods">
					<view class="goods-header">
						<view class="goods-store">
							<view class="avatar">
								<image src="//iconfont.alicdn.com/p/avatar/jTbhydPrx6NS.jpg" mode=""></image>
							</view>
							<view class="name">
								xxxx旗舰店
							</view>
							<view class="iconfont icon-xiaoxi">

							</view>
						</view>
						<view class="goods-status f-active-color">
							待支付
						</view>
					</view>
					<view class="goods-item">
						<view class="goods-content">
							<view class="goods-img">
								<image
									src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f978819af194fff81d663305c2bef90~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?"
									mode=""></image>
							</view>
							<view class="goods-right">
								<view class="title">
									<view class="title-left uni-text-more">
										xxx办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品
									</view>
									<view class="price">
										<view class="">
											￥39.9
										</view>
										<view>
											x 1
										</view>
									</view>
								</view>
								<view class="desc">
									颜色分类
								</view>
								<view class="you f-active-color">
									7天无理由
								</view>
							</view>
						</view>
					</view>
					<view class="goods-item">
						<view class="goods-content">
							<view class="goods-img">
								<image
									src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f978819af194fff81d663305c2bef90~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?"
									mode=""></image>
							</view>
							<view class="goods-right">
								<view class="title">
									<view class="title-left uni-text-more">
										xxx办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品
									</view>
									<view class="price">
										<view class="">
											￥39.9
										</view>
										<view>
											x 1
										</view>
									</view>
								</view>
								<view class="desc">
									颜色分类
								</view>
								<view class="you f-active-color">
									7天无理由
								</view>
							</view>
						</view>
					</view>
				</view>
				<!-- 总价 -->
				<view class="total-price f-color">
					订单金额：<text class="f-active-color">￥39.9</text>（包含运费）
				</view>
				<Lines></Lines>
				<!-- 支付 -->
				<view class="payment">
					<view class="payment-btn">
						支付
					</view>
				</view>
			</view>
		</view>
		<view class="no-order" v-else :style="{'height':clientHeight+'px'}">
			<view class="title">
				您还没有订单，去首页看看
			</view>
			<view class="order-btn">
				<view class="btn" @tap="goHome">去首页逛逛</view>
			</view>
		</view>
	</view>

</template>

<script>
	import Lines from '@/components/common/Lines.vue'
	export default {
		components: {
			Lines
		},
		data() {
			return {
				clientHeight: 0,
				tabIndex: 0,
				headerList: [{
						name: '全部',
					},
					{
						name: '待付款'
					},
					{
						name: '待发货',
					},
					{
						name: '待收货'
					}, {
						name: '待评价'
					}
				]
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clientHeight = res.windowHeight + uni.upx2px(10) - this.getClientHeight()
				}
			})
		},
		methods: {
			cahngeTab(index) {
				this.tabIndex = index
			},
			// 兼容可视区域高度
			getClientHeight() {
				const res = uni.getSystemInfoSync()
				const system = res.platform
				if (system === 'ios') {
					return res.statusBarHeight
				} else if (system === 'android') {
					return res.statusBarHeight
				} else {
					return 0
				}
			},
			goHome(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.my-order {
		height: 100%;
		width: 100%;
		background-color: #f7f7f7;
	}

	.order-header {
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-content: center;
		border-bottom: 2rpx solid #f7f7f7;

		.header-item {
			text-align: center;
			flex: 1;
			line-height: 80rpx;
		}

		.border-bottom-line {
			border-bottom: 2rpx solid #83cbac;
		}
	}

	.order-goods {
		background-color: #fff;
	}

	.goods-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10rpx;

		.goods-store {
			display: flex;
			align-items: center;

			.avatar {
				width: 60rpx;
				height: 60rpx;
				margin-right: 16rpx;
				margin-top: 10rpx;

				image {
					border-radius: 50%;
				}
			}

			.name {
				font-size: 34rpx;
				margin: 0 10rpx;
			}

			.iconfont {
				font-size: 40rpx;
			}
		}
	}

	.goods-content {
		padding: 10rpx 20rpx;
		display: flex;

		.goods-img {
			width: 160rpx;
			height: 160rpx;
			flex-shrink: 0;
			margin-right: 20rpx;
		}

		.goods-right {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			font-size: 30rpx;

			.you {
				font-size: 26rpx;
			}

			.title {
				display: flex;

				.title-left {
					font-size: 30 !important;
				}

				.price {
					margin-left: 8rpx;
					text-align: right;
					font-weight: 500;
				}
			}

			.desc {
				color: #ccc;
				margin: 14rpx 0;
			}
		}
	}

	.total-price {
		background-color: #fff;
		display: flex;
		justify-content: flex-end;
		font-size: 26rpx;
	}

	.payment {
		background-color: #fff;
		display: flex;
		justify-content: flex-end;
		padding: 10rpx;

		.payment-btn {
			border: 2px solid #68b88e;
			border-radius: 20rpx;
			padding: 4rpx 40rpx;
		}
	}

	.no-order {
		width: 100%;
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: center;

		.order-btn {
			display: flex;
			text-align: center;
			justify-content: center;
			margin-top: 30rpx;
			.btn{
				padding: 6rpx;
				border: 1rpx solid #68b88e;
				padding: 6rpx 40rpx;
				border-radius: 20rpx;
			}
		}
	}
</style>
