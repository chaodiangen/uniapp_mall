<template>
	<view class="config-order">
		<Lines />
		<view class="order-map">
			<view class="map-title">
				<view class="iconfont icon-dizhi">
				</view>
				<view style="margin: 10rpx 20rpx;" v-if="path">
					<view class="user f-color">
						<view class="f-color">
							{{path.name}}
						</view>
						<view class="f-color">
							{{path.tel}}
						</view>
					</view>
					<view class="city f-color">
						{{path.city}}{{path.details}}
					</view>
				</view>
				<view v-else class="address">
					请选择地址
				</view>
			</view>
			<view class="map-right iconfont icon-xiangyou" @tap="goPathList">
			</view>
		</view>
		<view v-for="(item,index) in list" :key="index">
			<view class="order-goods" v-for="(v,k) in item.goods_item" :key="k">
				<orderList :item="v" :index="k"></orderList>
			</view>
		</view>
		<view class="foot-order">
			<view class="count">
				合计：<text class="f-active-color">￥ 999</text>
			</view>
			<view class="config" @tap="goPay">
				提交订单
			</view>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/common/Lines.vue';
	import orderList from '@/components/order/order-list.vue'
	import {
		mapGetters
	} from 'vuex'
	export default {
		components: {
			Lines,
			orderList
		},
		data() {
			return {
				list: [{
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
					}],
				}],
				path: ''
			}
		},
		onLoad() {
			// 如果有默认地址的复制
			if (this.defaultPath.length) {
				this.path = this.defaultPath[0]
			}
			// 如果出发自定义事件 on 接收
			uni.$on('selectPathItem', res => {
				this.path = res
			})
		},
		onUnload() {
			uni.$off('selectPathItem')
		},
		computed: {
			...mapGetters(['defaultPath'])
		},
		methods: {
			goPathList() {
				uni.navigateTo({
					url: '/pages/my-path-list/my-path-list?type=selectPath'
				})
			},
			goPay(){
				uni.navigateTo({
					url:'/pages/payment/payment'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.config-order {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: #f7f7f7;
	}

	.address {
		font-weight: bold;
		padding: 20rpx 0;
	}

	.order-map {
		background-color: #fff;
		font-size: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20rpx;

		.map-title {
			display: flex;
			align-items: center;

			.iconfont {
				font-size: 40rpx;
			}

			.user {
				display: flex;
				align-items: center;
			}

		}
	}

	.order-goods {
		background-color: #fff;
		margin-top: 10rpx;
	}

	.foot-order {
		background-color: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;

		.config {
			height: 100%;
			display: flex;
			align-items: center;
			color: #fff;
			background-color: #49bdfb;
			color: #fff;
			padding: 0 33px;
			line-height: 55px;
			margin-left: 20rpx;
		}
	}
</style>
