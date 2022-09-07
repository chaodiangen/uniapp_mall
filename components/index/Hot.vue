<template>
	<view class="Hot">
		<Commodity :dataList="hotList" itemW="250" imgH="180"></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default {
		data() {
			return {
				hotList: [{
					id: 1,
					url: "https://wallpapers.com/images/hd/nft-gold-coin-towers-68fjsdhkeixtkg6k.webp",
					title: '加密头像',
					pprice: "123",
					oprice: "288"
				}, {
					id: 2,
					url: 'https://wallpapers.com/images/hd/nft-gold-coin-dollar-bill-p5gs44qzpqoih6di.webp',
					title: '加密头像',
					pprice: "123",
					oprice: "288"
				},{
					id: 3,
					url: "https://wallpapers.com/images/hd/nft-gold-coin-towers-68fjsdhkeixtkg6k.webp",
					title: '加密头像',
					pprice: "123",
					oprice: "288"
				}, {
					id: 4,
					url: 'https://wallpapers.com/images/hd/nft-gold-coin-dollar-bill-p5gs44qzpqoih6di.webp',
					title: '加密头像',
					pprice: "123",
					oprice: "288"
				},{
					id: 5,
					url: "https://wallpapers.com/images/hd/nft-gold-coin-towers-68fjsdhkeixtkg6k.webp",
					title: '加密头像',
					pprice: "123",
					oprice: "288"
				}, {
					id: 6,
					url: 'https://wallpapers.com/images/hd/nft-gold-coin-dollar-bill-p5gs44qzpqoih6di.webp',
					title: '加密头像',
					pprice: "123",
					oprice: "288"
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
