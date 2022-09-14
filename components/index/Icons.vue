<template>
	<view class="icons border--bottom-line">
		<view class="icon-item" v-for="item in dataList" :key="item.id">
			<image class="icon-image" :src="item.url" mode=""></image>
			<text class="icon-name">{{ item.name }}</text>
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
.icons {
	display: flex;
	flex-wrap: wrap;
	margin-top: 20rpx;
	.icon-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 16rpx;
		.icon-image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
		.icon-name {
			margin: 10rpx 0;
			font-size: 24rpx;
		}
	}
}
</style>
