<template>
	<view class="commodit-list">
		<!-- 单个卡片 -->
		<Commodity :dataList="commoditList"></Commodity>
	</view>
</template>

<script>
	import Commodity from './Commodity.vue'
	export default {
		data() {
			return {
				commoditList: [
					{
						id:1,
						title: '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
						url:'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9hOIbFjaAAWPj9SZEGcAAvboALDH5gABY-n410.jpg',
						pprice:'889',
						oprice: '1089',
						discount: '5.2'
					},
					{
						id: 2,
						title: '海贼王索隆图片',
						url:'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9huIXs89AAR-50HaEV8AAvboAOtTP4ABH7_855.jpg',
						pprice:'589',
						oprice: '989',
						discount: '7.2'
					},
					{
						id: 3,
						title: '海贼王娜美壁纸',
						url:'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
						pprice:'889',
						oprice: '1089',
						discount: '5.2'
					},
					{
						id: 2,
						title: '海贼王索隆图片',
						url:'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13brSmIMis0AAJmBAFAIWoAAvaXgF2QncAAmYc510.jpg',
						pprice:'189',
						oprice: '989',
						discount: '1.2'
					}
				]
			}
		},
		components:{
			Commodity
		},
		methods: {
			
		}
	}
</script>

<style scoped>

</style>
