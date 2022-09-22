<template>
	<view class="goods-content">
		<view class="goods-img">
			<image :src="item.imgUrl" mode=""></image>
		</view>
		<view class="goods-right">
			<view class="title">
				<view class="title-left uni-text-more">
					{{item.name}}
				</view>
				<view class="price">
					<view class="">
						￥{{item.pprice}}
					</view>
					<view>
						x {{item.num}}
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
</template>

<script>
	export default {
		props: {
			item: {
				type: Object
			},
			index: {
				type: Number
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
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
</style>
