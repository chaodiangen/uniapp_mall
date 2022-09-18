<template>
	<view class="commodity">
		<view class="commodity-left">
			<view class="commodity-item" @tap="goDetail(item)" v-for="(item,i) in goodsListL" :key="item.id*i">
				<image class="commodity-img" :src="item.url" mode=""></image>
				<view class="commodity-content">
					<text class="commodity-name uni-product-title">{{ item.title }}</text>
					<view class="price">
						<text class="pprice">￥ {{ item.pprice }}</text>
						<text class="oprice">￥ {{ item.oprice }}</text>
						<text class="discount">{{ item.discount }}折</text>
					</view>
				</view>
			</view>
		</view>
		<view class="commodity-right">
			<view class="commodity-item" v-for="(item,c) in goodsListR" :key="c+100">
				<image class="commodity-img" :src="item.url" mode=""></image>
				<view class="commodity-content">
					<text class="commodity-name uni-product-title">{{ item.title }}</text>
					<view class="price">
						<text class="pprice">￥ {{ item.pprice }}</text>
						<text class="oprice">￥ {{ item.oprice }}</text>
						<text class="discount">{{ item.discount }}折</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataList: {
				type: Array
			}
		},
		data() {
			return {
				goodsListL: [],
				goodsListR: []
			}
		},
		mounted() {
			//res.result.data就是从接口获取的数据
			let dataL = this.dataList;
			let dataR = this.dataList;
			let len = this.dataList.length;
			let min = Math.ceil(len / 2);
			let rightList = dataR.splice(min, len);
			let leftList = dataL.splice(0, min);
			this.goodsListR = this.goodsListR.concat(rightList);
			this.goodsListL = this.goodsListL.concat(leftList);
		},
		methods: {
			goDetail(e) {
				uni.navigateTo({
					url: '/pages/details/details'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.commodity {
		display: flex;
		justify-content: space-between;

		.commodity-right,
		.commodity-left {
			display: flex;
			flex-direction: column;
			align-itema: flex-start;
		}

		.commodity-item {
			width: 370rpx;
			padding-bottom: 20rpx;
			background-color: #fff;
			box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			margin-bottom: 20rpx;

			.commodity-img {
				width: 100%;
				height: 375rpx;
			}
		}

		.commodity-name {
			padding: 10rpx 20rpx;
			font-size: 28rpx;
		}

		.price {
			padding: 0 20rpx;
			display: flex;
			align-items: center;
			margin-top: 20rpx;

			.pprice {
				font-size: 30rpx;
				color: #cc163a;
			}

			.oprice {
				color: #7a7374;
				font-size: 26rpx;
				margin-left: 10rpx;
			}

			.discount {
				border: 1px solid #cc163a;
				color: #cc163a;
				border-radius: 10rpx;
				padding: 0 14rpx;
				margin-left: 20rpx;
			}
		}
	}
</style>
