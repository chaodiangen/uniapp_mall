<template>
	<view class="my-path-list">
		<view class="path-list" v-for="(item,index) in list" :key="index" @tap="toAddPath(index)">
			<view class="path-item">
				<view class="item">
					<view class="">
						{{item.name}}
					</view>
					<view class="">
						{{item.tel}}
					</view>
				</view>
				<view class="item">
					<view class="item-default bg-color-active" v-if="item.isDefault">
						默认
					</view>
					<view class="uni-text-one">
						{{item.city}}{{item.details}}
					</view>
				</view>
			</view>
		</view>
		<view class="add-path" @tap="goAddPath">
			<view class="add-path-btn f-active-color">
				<i class="icon-jiahao1 iconfont"></i>
				新增地址
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				list: state => state.path.list
			})
		},
		methods: {
			goAddPath() {
				uni.navigateTo({
					url: '/pages/my-add-path/my-add-path'
				})
			},
			toAddPath(index) {
				let pathObj = JSON.stringify({
					index,
					item: this.list[index]
				})
				uni.navigateTo({
					url:'/pages/my-add-path/my-add-path?data='+pathObj+''
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.path-list {
		margin-bottom: 20rpx;

		.path-item {
			padding: 0 20rpx;
			border-bottom: 1px solid #ccc;
		}

		.item {
			display: flex;
			align-items: center;
			margin-bottom: 14rpx;
		}

		.item-default {
			padding: 6rpx 14rpx;
			border-radius: 20rpx;
			color: #fff;
			font-size: 24rpx;
			margin-right: 10rpx;
			flex-shrink: 0;
		}
	}

	.add-path {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		.add-path-btn {
			border: 2px solid #68b88e;
			border-radius: 30rpx;
			padding: 10rpx 40rpx;
		}

		.iconfont {
			font-size: 26rpx;
			margin-right: 10rpx;
		}
	}
</style>
