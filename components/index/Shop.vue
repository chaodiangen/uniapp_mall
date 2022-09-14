<template>
	<view class="shop">
		<view v-for="(item,index) in dataList" :key="index">
			<view class="shop-bg-img">
				<image :src="item.bigUrl" mode=""></image>
			</view>
			<view>
				<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
					<view class="scroll-item">
						<Commodity :dataList="item.data" wrap="nowrap" itemW="200" imgH="200"></Commodity>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import Commodity from '@/components/common/Commodity.vue'
	export default {
		components: {
			Commodity
		},
		props: {
			dataList: {
				type: Array
			}
		},
	}
</script>

<style scoped>
	.shop-bg-img {
		height: 400rpx;
	}

	.scroll-item {
		display: flex;
	}
</style>
