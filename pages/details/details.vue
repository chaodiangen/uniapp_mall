<template>
	<view class="details">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view class="swiper-item">
					<image :src="item"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 价格和名称 -->
		<view class="details-goods">
			<view class="goods-pprice f-color">￥399.00</view>
			<view class="goods-oprice f-color">￥299.00</view>
			<view class="goods-name f-color">{{detail.name}}</view>
		</view>
		<!-- 商品 -->
		<view>
			<view class="info-img" v-for="(item,index) in characteristicList" :key="index">
				<image :src="item" mode=""></image>
			</view>
		</view>
		<!-- 底部 -->
		<view class="details-foot">
			<view>
				<view class="foot-item icon">
					<view class="iconfont icon-xiaoxi"></view>
				</view>
				<view class="foot-item icon" @tap="goShopCart">
					<view class="iconfont icon-31gouwuche"></view>
				</view>
			</view>
			<view>
				<view class="foot-item right" @tap="addShop">
					<text>加入购物车</text>
				</view>
				<view class="foot-item right bg-color-active">
					<text>立即购买</text>
				</view>
			</view>
		</view>
		<!-- 弹框 -->
		<view class="pop" v-if="isShow" @touchmove.stop.prevent="">
			<!-- 蒙层 -->
			<view class="pop-mask" @tap.stop="closeShow">
			</view>
			<!-- 内容 -->
			<view class="pop-box" :animation="animationData">
				<view class="pop-img">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<view class="pop-sub">
					<view class="">购买数量</view>
					<uni-number-box :min="1" @change="changeValue"></uni-number-box>
				</view>
				<view class="pop-submit" @tap="addCart">
					<button>确定</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Car from '@/components/common/Card.vue';
	import CommoditList from '@/components/common/CommoditList.vue';
	import UniNumberBox from '@/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue'
	import {
		mapMutations
	} from 'vuex'
	export default {
		components: {
			Car,
			CommoditList,
			UniNumberBox
		},
		data() {
			return {
				swiperList: [
					"https://yanxuan-item.nosdn.127.net/674ac83c4a82f8b005dc57919e084ca9.png",
					"https://yanxuan-item.nosdn.127.net/8d5f28684f11d82ba987e828f723e07c.png",
					"https://yanxuan-item.nosdn.127.net/363d7409523237e59238584573eff6c3.png",
					"https://yanxuan-item.nosdn.127.net/6143ec021ca64bb041aa724350f0d93c.png",
					"https://yanxuan-item.nosdn.127.net/86a319374ecc3d8adb97569f07b802e7.png",
				],
				detail: {
					checked: false,
					id: 1,
					name: '迪士尼宝宝（Disney Baby）婴儿浴巾 宝宝六层纯棉纱布浴巾洗澡巾新生儿纱布浴巾抱巾包单大毛巾 薄荷绿*1',
					color: '颜色',
					imgUrl: 'https://img4.pconline.com.cn/pconline/images/product/20220920/2224665.jpg',
					price: '39.9',
					num: 1,
				},
				characteristicList: [
					"https://yanxuan-item.nosdn.127.net/d41c5086cc736a25a1d20ef00d4cfd41.jpg?quality=75&type=webp&imageView",
					"https://yanxuan-item.nosdn.127.net/732f7c8bf8c65c6e53701781e40a42ef.jpg?quality=75&type=webp&imageView",
					"https://yanxuan-item.nosdn.127.net/d2a4b65e4dd2a61a12d7198b5a939f9f.jpg?quality=75&type=webp&imageView",
					"https://yanxuan-item.nosdn.127.net/c7878d6bde883145376d3c8de3d09d91.jpg?quality=75&type=webp&imageView",
					"https://yanxuan-item.nosdn.127.net/4dd684383e2c4e7a8fb5c13d74e78d27.jpg?quality=75&type=webp&imageView",
					"https://yanxuan-item.nosdn.127.net/723eeb5f091a98d46d060d50509d0ffc.jpg?quality=75&type=webp&imageView",
					"https://yanxuan-item.nosdn.127.net/d14260924effe7ed14c747e9b787711f.jpg?quality=75&type=webp&imageView",
					"https://yanxuan-item.nosdn.127.net/0def2ea30369fe4561b378e45cc24f62.jpg?quality=75&type=webp&imageView",
				],
				isShow: false,
				animationData: {},
				number: 1
			}
		},
		onNavigationBarButtonTap(e) {
			if (e.type === 'share') {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 2,
					imageUrl: "https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/d8590190-4f28-11eb-b680-7980c8a877b8.png",
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					fail: function(err) {
						console.log("fail:" + JSON.stringify(err));
					}
				});
			}
		},
		// 修改页面返回行为
		onBackPress(e) {
			if (this.isShow) {
				this.closeShow()
			}
		},
		methods: {
			...mapMutations(['addShopCart']),
			addShop() {
				const animation = uni.createAnimation({
					duration: 200,
				})
				animation.translateY(600).step()
				this.animationData = animation.export()
				this.isShow = true
				setTimeout(function() {
					animation.translateY(0).step()
					this.animationData = animation.export()
				}.bind(this), 800)
			},
			closeShow() {
				let animation = uni.createAnimation({
					duration: 200,
				})
				animation.translateY(600).step()
				this.animationData = animation.export()
				setTimeout(function() {
					animation.translateY(0).step()
					this.isShow = false
				}.bind(this), 200)
			},
			changeValue(value) {
				this.number = value
			},
			goShopCart() {
				uni.switchTab({
					url: '/pages/shop/shop'
				})
			},
			addCart() {
				this.detail['checked'] = false
				this.detail['id'] = 99
				this.detail['num'] = this.number
				this.addShopCart(this.detail)
				this.closeShow()
				uni.showToast({
					title: '成功加入购物车',
					icon: 'none'
				})
			}
		},
	}
</script>

<style scoped lang="scss">
	.details {
		height: 1000px;

		swiper {
			height: 700rpx;
			width: 100%;
		}

		.swiper-item {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.details-goods {
			text-align: center;

			.goods-pprice {
				font-size: 30rpx;
				margin: 10rpx 0;
			}

			.goods-oprice {
				font-size: 28rpx;
				margin: 10rpx 0;
			}

			.goods-name {
				font-size: 28rpx;
			}
		}

		.info-img {
			width: 100%;
			height: 200rpx;
		}
	}

	.details-foot {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 90rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;

		view {
			display: flex;
			align-items: center;
			font-size: 26rpx;
		}

		.foot-item {
			padding: 10rpx;
			background-color: #a4cab6;
			border-radius: 50%;
		}

		.right {
			padding: 10rpx 16rpx;
			border-radius: 20rpx;
			margin: 0 10rpx;
		}

		.icon {
			color: #fff;
			width: 50rpx;
			height: 50rpx;

			.iconfont {
				font-size: 50rpx;
			}
		}
	}

	.pop {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;

		.pop-mask {
			position: absolute;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, .3);
		}

		.pop-box {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 600rpx;
			background-color: #fff;

			.pop-img {
				width: 200rpx;
				height: 200rpx;
				position: relative;
				top: -40rpx;
				left: 40rpx;
			}

			.pop-sub {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 20rpx;
			}

			.pop-submit {
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translate(-50%, -10%);

				button {
					width: 300rpx;
				}
			}
		}
	}
</style>
