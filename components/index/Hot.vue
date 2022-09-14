<template>
	<view class="Hot">
		<Commodity :dataList="dataList" itemW="250" imgH="180"></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default {
		props: {
			dataList: {
				type: Array
			}
		},
		components: {
			Commodity
		},
	}
</script>

<style>

</style>
