<template>
	<view class="commodity" :style="{'flex-wrap': wrap}">
		<view class="commodity-item" :style="{'width':itemW+'rpx'}" v-for="(item,i) in dataList" :key="item.id">
			<image class="commodity-img" :style="{'height':imgH+'rpx'}" :src="item.url" mode=""></image>
			<view class="commodity-content">
				<text class="commodity-name">{{ item.title }}</text>
				<view class="price">
					<text class="pprice" v-if="item.pprice">$ {{ item.pprice }} USDT</text>
					<text class="oprice" v-if="item.oprice">$ {{ item.oprice }} USDT</text>
					<text class="discount" v-if="item.discount">{{ item.discount }}折</text>
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
				default: '370'
			},
			imgH: {
				type: String,
				default: '375'
			},
			wrap: {
				type: String,
				default: 'wrap'
			}
		},
	}
</script>

<style scoped lang="scss">
	.commodity {
		display: flex;

		.commodity-item {
			background-color: #fff;
			margin-bottom: 20rpx;
			padding-bottom: 20rpx;

			.commodity-img {
				width: 100%;
			}
		}


		.commodity-name {
			padding: 10rpx 20rpx 0rpx 20rpx;
			font-size: 30rpx;
			text-align: center;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			word-break: break-all;
		}

		.price {
			padding: 0 20rpx;
			display: flex;
			align-items: center;
			flex-direction: column;

			.pprice {
				font-size: 30rpx;
				color: #cc163a;
			}

			.oprice {
				color: #7a7374;
				font-size: 26rpx;
				margin: 10rpx 0;
			}

			.discount {
				border: 1px solid #cc163a;
				color: #cc163a;
				border-radius: 10rpx;
				padding: 0 14rpx;
			}
		}
	}
</style>
