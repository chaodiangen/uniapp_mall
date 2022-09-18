<template>
	<view>
		<Lines />
		<view class="list">
			<!-- 左侧滑动 -->
			<scroll-view scroll-y="true" class="list-left" :style="{'height':clientHeight+'px'}">
				<view class="left-item" v-for="(item,index) in leftData" :key="index"
					@tap="changeLeftTab(index,item.cid)">
					<view :class="['left-name','f-color',currentIndex === index ? 'left-name-active':'']">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="list-right" :style="{'height':clientHeight+'px'}">
				<view class="right-list" v-for="item in 10" :key="item">
		<!-- 			<view class="list-title f-color">
						家访
					</view> -->
					<view class="list-content">
						<view class="right-item" v-for="(item,index) in rightData" :key="index">
							<image class="right-img" :src="item.icon" mode=""></image>
							<view class="right-name">
								{{item.name}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import Lines from '@/components/common/Lines.vue'
	export default {
		components: {
			Lines
		},
		data() {
			return {
				clientHeight: 0,
				currentIndex: 0,
				leftData: [],
				rightData: []
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clientHeight = res.windowHeight + uni.upx2px(70)
				}
			})
		},
		// 点击跳转搜索页
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url: '/pages/search/search'
			})
		},
		onLoad() {
			this.getData(0)
		},
		methods: {
			// 兼容可视区域高度
			getClientHeight() {
				const res = uni.getSystemInfoSync()
				const system = res.platform
				if (system === 'ios') {
					return res.statusBarHeight
				} else if (system === 'android') {
					return res.statusBarHeight
				} else {
					return 0
				}
			},
			changeLeftTab(i, cid) {
				// 左侧点击事件
				this.currentIndex = i;
				this.getData(i, cid)
			},
			getData(id, _cid) {
				let newCid = _cid
				if (id === (this.currentIndex + 1)) {
					return;
				}
				$http.request({
					url: '/goods/list'
				}).then(res => {
					this.leftData = res
					if (!newCid) {
						newCid = res[0].cid
					}
					let left_data = []
					let right_data = []
					res.forEach(v => {
						if (newCid === v.cid)
							v.catelogyList.forEach(item => {
								right_data.push({
									...item
								})
							})
					})
					this.rightData = right_data;
				}).catch(() => {
					uni.showToast({
						title: '请求失败',
						icon: 'none'
					})
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.list {
		display: flex;

		.list-left {
			width: 200rpx;

			.left-item {
				font-size: 28rpx;
				border-bottom: 2px solid #fff;
				background-color: #f7f7f7;
			}

			.left-name {
				padding: 20rpx 6rpx;
				text-align: center;
			}

			.left-name-active {
				font-weight: bold;
				border-left: 2px solid #68b88e;
				background-color: #fff;
			}

			.active {
				background-color: #fff;
			}
		}

		.list-right {
			flex: 1;
			padding: 10rpx;

			.list-title {
				font-size: 30rpx;
				font-weight: bold;
				padding: 30rpx 0;
			}

			.list-content {
				display: flex;
				flex-wrap: wrap;

				.right-item {
					text-align: center;
					width: 150rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					padding: 10rpx;

					.right-name {
						padding: 10rpx;
					}
				}

				.right-img {
					width: 150rpx;
					height: 150rpx;
				}
			}
		}
	}
</style>
