<template>
	<view class="recommend bg-color">
		<view class="recommend-item" v-for="(item,index) in dataList" :key="index">
			<view class="item-big">
				<image :src="item.bigUrl" mode=""></image>
			</view>
			<view class="recommend-text f-color">
				<view class="item">
					<view class="iconfont icon-youzhi"></view>优质服务
				</view>
				<view class="item">
					<view class="iconfont icon-pinpai"></view>品质货源
				</view>
				<view class="item">
					<view class="iconfont icon-tuihuanhuo"></view>保障第一
				</view>
			</view>
			<view class="item-samll">
				<image :src="v.url" mode="" v-for="(v,i) in  item.children" :key="i"></image>
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
	}
</script>

<style scoped lang="scss">
	.recommend {
		padding: 20rpx;
		.item-big {
			height: 240rpx;
			width: 100%;
		}

		.recommend-item {
			border-radius: 20rpx;
			border: 1px solid #579572;
			overflow: hidden;
			margin-bottom: 20rpx;
			box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.2);
			background-color: #5dbe8a;
		}

		.item-samll {
			width: 100%;
			height: 240rpx;
			display: flex;
			justify-content: center;

			image {
				width: 33.333% !important;
			}
		}
		.recommend-text {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			.item {
				flex: 1 auto;
				text-align: center;
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 8rpx 0;
				border-right: 1px solid #a4aca7;
				&:last-child {
					border-right: 0;
				}
				.iconfont {
					margin-right: 10rpx;
				}
			}
		}
	}
</style>
