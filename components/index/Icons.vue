<template>
	<view class="icons border--bottom-line">
		<view class="icon-item" v-for="item in iconList" :key="item.id">
			<image class="icon-image" :src="item.url" mode=""></image>
			<text class="icon-name">{{ item.name }}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList: [
					{
						id: 1,
						url :'https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309_960_720.png',
						name: '头像元素'
					},
					{
						id: 2,
						url:'https://cdn.pixabay.com/photo/2022/03/23/02/50/skeleton-7086311_960_720.png',
						name: '骷髅元素'
					},
					{
						id: 3,
						url :'https://cdn.pixabay.com/photo/2021/11/06/14/40/nft-6773494_960_720.png',
						name: '金币元素'
					},
					{
						id: 4,
						url:'https://cdn.pixabay.com/photo/2022/03/03/20/47/the-simpson-7046041_960_720.jpg',
						name: '朋克元素'
					},
					{
						id: 5,
						url :'https://cdn.pixabay.com/photo/2022/02/14/02/52/monkey-7012380_960_720.png',
						name: '猴子元素'
					},
					{
						id: 6,
						url:'https://cdn.pixabay.com/photo/2022/02/23/15/56/technology-7030913_960_720.png',
						name: '元宇宙元素'
					},
					{
						id: 7,
						url :'https://cdn.pixabay.com/photo/2022/03/08/16/06/nft-7056054_960_720.jpg',
						name: '加冕元素'
					},
					{
						id: 8,
						url:'https://cdn.pixabay.com/photo/2022/06/27/16/16/eye-7287863_960_720.jpg',
						name: '虚拟元素'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.icons {
	display: flex;
	flex-wrap: wrap;
	margin-top: 20rpx;
	.icon-item {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 16rpx;
		.icon-image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
		.icon-name {
			margin: 10rpx 0;
			font-size: 24rpx;
		}
	}
}
</style>
