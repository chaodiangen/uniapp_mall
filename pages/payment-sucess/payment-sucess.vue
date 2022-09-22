<template>
	<view class="payment-sucess">
		<view class="">
			支付成功
		</view>
		<view class="" @tap="goIndex">
			返回首页
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goIndex(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style>

</style>
