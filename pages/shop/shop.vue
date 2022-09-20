<template>
	<view class="shop-car">
		<template v-if="list.length>0">
			<uni-nav-bar title="购物车" :rightText="isNavBar?'完成':'编辑'" fixed="true" statusBar="true"
				@clickRight="isNavBar=!isNavBar" />
			<!-- 商品内容 -->
			<view class="shop-list">
				<view class="shop-item" v-for="item in list" :key="item.id">
					<label class="radio" @click="selectItem(item.id)">
						<radio value="" :checked="item.checked" color="#ff3333" /><text></text>
					</label>
					<view class="shop-right">
						<view class="shop-img">
							<image :src="item.imgUrl" mode=""></image>
						</view>
						<view class="shop-text">
							<view>
								<view class="shop-name f-color uni-text-more">
									{{item.name}}
								</view>
								<view class="shop-mine-color f-color">
									{{item.color}}
								</view>
							</view>
							<view class="shop-price f-color">
								<template v-if="!isNavBar">
									<view>${{item.price}}</view>
									<view>
										{{item.num}}
									</view>
								</template>
								<template v-else>
									<view>${{item.price}}</view>
									<uni-number-box :min="1" @change="changeValue($event,item.id)" />
								</template>
							</view>
						</view>
					</view>

				</view>
			</view>
			<!-- 底部 -->
			<view class="shop-foot">
				<label class="radio" @click="checkedAllFn">
					<radio value="" color="#ff3333" :checked="checkedAll" /><text>全选</text>
				</label>
				<template v-if="!isNavBar">
					<view class="foot-total">
						<view class="foot-count">合计：<text class="f-active-color">{{totalCount.num}}</text></view>
						<view class="foot-sum">
							结算（{{totalCount.pprice}}）
						</view>
					</view>
				</template>
				<template v-else>
					<view class="foot-total">
						<view class="foot-sum" style="background-color: black;">移入收藏</view>
						<view class="foot-sum" @tap="deleteGoods">删除</view>
					</view>
				</template>

			</view>
		</template>
		<template v-else>
			<uni-nav-bar title="购物车" statusBar="true" fixed="true">
			</uni-nav-bar>
			<view class="shop-else-list">
				<text>购物车是空的</text>
			</view>
		</template>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions,
		mapGetters,
		mapMutations
	} from 'vuex'
	import UniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	import UniNumberBox from '@/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue'
	export default {
		components: {
			UniNavBar,
			UniNumberBox
		},
		data() {
			return {
				isNavBar: false,
			}
		},
		computed: {
			...mapState({
				list: state => state.cart.list
			}),
			...mapGetters(['checkedAll', 'totalCount'])
		},
		methods: {
			...mapActions(['checkedAllFn','deleteGoods']),
			...mapMutations(['selectItem']),
			changeValue(value, id) {
				let index = this.list.findIndex(v => v.id === id)
				this.list[index].num = value
			},
		}
	}
</script>

<style scoped lang="scss">
	.shop-list {
		padding-bottom: 220rpx;

		.shop-item {
			display: flex;
			align-items: center;
			padding: 10rpx;

			.shop-right {
				display: flex;
				justify-content: space-between;
				height: 100%;
				background-color: #eaeaea;
			}

			.shop-img {
				width: 200rpx;
				height: 200rpx;
			}

			.shop-text {
				flex: 1;
				padding-left: 20rpx;

				display: flex;
				flex-direction: column;
				justify-content: space-between;
			}

			.shop-name {
				font-size: 30rpx;
				font-weight: bold;
			}

			.shop-mine-color {
				font-size: 24rpx;
				color: #999;
				margin-top: 10rpx;
			}

			.shop-price {
				font-size: 32rpx;
				display: flex;
				justify-content: space-between;
				padding-right: 10rpx;
				margin-bottom: 10rpx;
			}
		}
	}

	.shop-else-list {
		background-color: #f7f7f7;
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(90vh);
	}

	.shop-foot {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		border-top: 2rpx solid #f7f7f7;
		z-index: 999;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 10rpx;
		margin-bottom: 100rpx;

		.foot-total {
			display: flex;
			align-items: center;
		}

		.foot-count {
			margin-right: 20rpx;

		}

		.foot-sum {
			background-color: #49bdfb;
			color: #fff;
			padding: 0 60rpx;
			line-height: 100rpx;
		}
	}
</style>
