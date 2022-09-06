<template>
	<view class="Hot">
		<Commodity :dataList="hotList"></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default {
		data() {
			return {
				hotList: [{
					id: 1,
					url: ""
				}]
			}
		},
		components: {
			Commodity
		},
		methods: {

		}
	}
</script>

<style>

</style>
