<template>
	<view class="search">
		<Lines />
		<view class="search-item">
			<view class="search-title">
				<text>最近搜索</text>
				<i class="iconfont icon-lajitong"></i>
			</view>
			<view>
				<view class="seach-name f-color">四件套</view>
				<view class="seach-name f-color">面膜</view>
			</view>
		</view>
		<view class="search-item">
			<view class="search-title">
				<text>热门搜索</text>
			</view>
			<view>
				<view class="seach-name f-color">四件套</view>
				<view class="seach-name f-color">面膜</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/common/Lines.vue'
	export default {
		components: {
			Lines
		},
		data() {
			return {

			}
		},
		onNavigationBarButtonTap(e) {
			if (e.float = 'right') {
				uni.navigateTo({
					url: '/pages/search-list/search-list'
				})
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.search-item {
		padding: 0 20rpx;
		display: flex;
		flex-direction: column;

		.search-title {
			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;

			i {
				font-size: 32rpx;
			}
		}

		.seach-name {
			padding: 4rpx 24rpx;
			display: inline-block;
			background-color: #e1e1e1;
			font-size: 24rpx;
			border-radius: 20rpx;
			margin: 10rpx;
		}
	}
</style>
