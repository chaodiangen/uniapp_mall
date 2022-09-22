<template>
	<view>
		<view class="my-order bg-color">
			<view class="order-header">
				<view :class="['header-item','f-color',tabIndex===index?'border-bottom-line':'']"
					@tap="cahngeTab(index)" v-for="(item,index) in tableList" :key="index">
					{{item.name}}
				</view>


			</view>
			<block v-for="(tabItem,tabI) in tableList" :key="tabI">
				<view v-if="tabI===tabIndex">
					<view v-if="tabItem.list.length" class="order-main" :style="{'height':clientHeight+'px'}">
						<!-- 商品 -->
						<view v-for="(k,i) in tabItem.list" :key="i">
							<view class="order-goods">
								<view class="goods-header">
									<view class="goods-store">
										<view class="avatar">
											<image :src="k.superior.imgUrl" mode="">
											</image>
										</view>
										<view class="name">
											{{k.superior.name}}
										</view>
										<view class="iconfont icon-xiaoxi">
										</view>
									</view>
									<view class="goods-status f-active-color">
										{{k.status}}
									</view>
								</view>
								<view class="goods-item" v-for="(v,ii) in k.goods_item" :key="ii">
									<order-list :item="v" :index='ii'></order-list>
								</view>
							</view>
							<!-- 总价 -->
							<view class="total-price f-color">
								订单金额：<text class="f-active-color">￥{{k.totalPrice}}</text>（包含运费）
							</view>
							<!-- 支付 -->
							<view class="payment">
								<view class="payment-btn">
									支付
								</view>
							</view>
							<Lines></Lines>
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

			</block>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/common/Lines.vue'
	import orderList from '@/components/order/order-list.vue'
	export default {
		components: {
			Lines,
			orderList
		},
		data() {
			return {
				clientHeight: 0,
				tabIndex: 0,
				tableList: [{
						name: '全部',
						list: [{
							status: '待付款',
							totalPrice: '29.9',
							superior: {
								imgUrl: '//iconfont.alicdn.com/p/avatar/jTbhydPrx6NS.jpg',
								name: '山姆旗舰店'
							},
							goods_item: [{
								imgUrl: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f978819af194fff81d663305c2bef90~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?',
								name: 'xxx办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品',
								pprice: '29.9',
								num: 1
							}, {
								imgUrl: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f978819af194fff81d663305c2bef90~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?',
								name: 'xxx办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品',
								pprice: '29.9',
								num: 2
							}]
						}, {
							status: '已付款',
							totalPrice: '50',
							superior: {
								imgUrl: '//iconfont.alicdn.com/p/avatar/jTbhydPrx6NS.jpg',
								name: '淘宝旗舰店'
							},
							goods_item: [{
								imgUrl: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f978819af194fff81d663305c2bef90~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?',
								name: 'xxx办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品',
								pprice: '30',
								num: 1
							}, {
								imgUrl: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f978819af194fff81d663305c2bef90~tplv-k3u1fbpfcp-zoom-crop-mark:3024:3024:3024:1702.awebp?',
								name: 'xxx办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品办公用品',
								pprice: '10',
								num: 2
							}]
						}]
					},
					{
						name: '待付款',
						list: []
					},
					{
						name: '待发货',
						list: []
					},
					{
						name: '待收货',
						list: []
					}, {
						name: '待评价',
						list: []
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
			goHome() {
				uni.switchTab({
					url: '/pages/index/index'
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

			.btn {
				padding: 6rpx;
				border: 1rpx solid #68b88e;
				padding: 6rpx 40rpx;
				border-radius: 20rpx;
			}
		}
	}
</style>
