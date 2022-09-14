<template>
	<view class="commodit-list">
		<!-- 单个卡片 -->
		<Commodity :dataList="dataList" ></Commodity>
	</view>
</template>

<script>
	import Commodity from './Commodity.vue'
	export default {
		props: {
			dataList: {
				type: Array
			}
		},
		components: {
			Commodity
		}
	}
</script>

<style scoped>
	.commodit-list {
		display: flex;
	}

</style>
