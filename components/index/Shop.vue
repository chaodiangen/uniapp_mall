<template>
	<view class="shop">
		<view class="shop-bg-img">
			<image src="https://thumb.photo-ac.com/41/41c47245ddfc13f1bedbdf847513da51_w.jpeg" mode=""></image>
		</view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true"  scroll-left="120">
				<view class="scroll-item">
					<Commodity :dataList="shopList" wrap="nowrap" itemW="200" imgH="200"></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from '@/components/common/Commodity.vue'
	export default {
		components: {
			Commodity
		},
		data() {
			return {
				shopList: [{
					id: 1,
					title: '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
					url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9hOIbFjaAAWPj9SZEGcAAvboALDH5gABY-n410.jpg',
				}, {
					id: 2,
					title: '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
					url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9hOIbFjaAAWPj9SZEGcAAvboALDH5gABY-n410.jpg',
				}, {
					id: 3,
					title: '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
					url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9hOIbFjaAAWPj9SZEGcAAvboALDH5gABY-n410.jpg',
				}, {
					id: 4,
					title: '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
					url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9hOIbFjaAAWPj9SZEGcAAvboALDH5gABY-n410.jpg',
				}, {
					id: 5,
					title: '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
					url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9hOIbFjaAAWPj9SZEGcAAvboALDH5gABY-n410.jpg',
				}, {
					id: 6,
					title: '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
					url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9hOIbFjaAAWPj9SZEGcAAvboALDH5gABY-n410.jpg',
				}, {
					id: 7,
					title: '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
					url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9hOIbFjaAAWPj9SZEGcAAvboALDH5gABY-n410.jpg',
				}]
			}
		},
		methods: {

		}
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
