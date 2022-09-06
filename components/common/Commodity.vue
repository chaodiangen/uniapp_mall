<template>
	<view class="commodity">
		<view class="commodity-item" :style="{'width':itemW+'rpx'}" v-for="(item,i) in dataList" :key="item.id">
			<image class="commodity-img" :style="{'height':imgH+'rpx'}" :src="item.url" mode=""></image>
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
</template>

<script>
	export default {
		props: {
			dataList: {
				type: Array
			},
			itemW: {
				type: String,
				default: '370rpx'
			},
			imgH: {
				type: String,
				default: '375rpx'
			}
		},
	}
</script>

<style scoped lang="scss">
	.commodity {
		display: flex;

		.commodity-item {
			padding-bottom: 20rpx;
			background-color: #fff;
			border-radius: 10rpx;
			box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			margin-bottom: 20rpx;

			.commodity-img {
				width: 100%;

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
