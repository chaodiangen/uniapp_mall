<template>
	<view>
		<ShopList :keyWord="keyWord"></ShopList>
	</view>
</template>

<script>
	import ShopList from '@/components/common/ShopList.vue';
	export default {
		components: {
			ShopList
		},
		data() {
			return {
				keyWord: ''
			}
		},
		onLoad(e) {
			this.keyWord = e.keyWord
			// #ifdef APP-PLUS  
			var webView = this.$mp.page.$getAppWebview();
			// 设置 searchInput的 text  
			webView.setTitleNViewSearchInputText(e.keyWord)  
			// #endif

		},
		methods: {

		}
	}
</script>

<style>

</style>
