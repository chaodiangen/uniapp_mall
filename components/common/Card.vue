<template>
	<view class="card">
		<view>-</view>
		<view class="card-name uni-title">
			{{cardTitle}}
		</view>
		<view>-</view>
	</view>
</template>

<script>
	export default {
		props: {
			cardTitle: {
				type: String
			}
		}
	}
</script>

<style scoped>
.card {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 20rpx;
}
.card-name {
	margin: 0 16rpx;
}
</style>
