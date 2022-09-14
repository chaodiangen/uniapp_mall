<template>
	<view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
				:duration="duration">
				<swiper-item heightFix v-for="(item,index) in dataList" :key="index">
					<image :src="item"></image>
				</swiper-item>
			</swiper>
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
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.swiper {
		height: 400rpx;
	}
</style>
