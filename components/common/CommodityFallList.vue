<template>
	<view class="commodit-list">
		<!-- 单个卡片 -->
		<CommodityFall :dataList="dataList"></CommodityFall>
	</view>
</template>

<script>
	import CommodityFall from './CommodityFall.vue'
	export default {
		props: {
			dataList: {
				type: Array
			}
		},
		components: {
			CommodityFall
		},
		methods: {

		}
	}
</script>

<style scoped>

</style>
