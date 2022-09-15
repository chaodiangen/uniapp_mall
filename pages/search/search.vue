
<template>
	<view class="search">
		<Lines />
		<view class="search-item">
			<view class="search-title">
				<text>最近搜索</text>
				<i class="iconfont icon-lajitong" @click="handleDelete"></i>
			</view>
			<view v-if="searchData.length > 0">
				<view class="seach-name f-color" v-for="(item,index) in searchData" :key="index">{{item}}</view>
			</view>
			<view v-else class="search-data">
				无搜索记录
			</view>
		</view>
		<view class="search-item">
			<view class="search-title">
				<text>热门搜索</text>
			</view>
			<view>
				<view class="seach-name f-color">四件套</view>
				<view class="seach-name f-color">面膜</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Lines from '@/components/common/Lines.vue'
	export default {
		components: {
			Lines
		},
		data() {
			return {
				keyWord: '',
				// 搜索过的关键词
				searchData: []
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'searchData',
				success: (res) => {
					this.searchData = JSON.parse(res.data)
				}
			})
		},
		// 监听输入框
		onNavigationBarSearchInputChanged(e) {
			this.keyWord = e.text
		},
		// 点击搜索按钮
		onNavigationBarButtonTap(e) {
			this.search()
		},
		// 监听软键盘的搜索
		onNavigationBarSearchInputConfirmed() {
			this.search()
		},
		methods: {
			search() {
				if (this.keyWord === '') {
					return uni.showToast({
						title: "关键词不能为空",
						icon: 'none'
					})
				} else {
					uni.navigateTo({
						url: '/pages/search-list/search-list?keyWord=' + this.keyWord,
					})
					uni.hideKeyboard();
					this.addSearch();
				}
			},
			// 记录搜索记录
			addSearch() {
				let flag = this.searchData.includes(this.keyWord)
				if (!flag) {
					this.searchData.unshift(this.keyWord);
				}
				uni.setStorage({
					key: 'searchData',
					data: JSON.stringify(this.searchData)
				})
			},
			handleDelete() {
				uni.showModal({
					title: '重要提示',
					content: '是否要清除浏览记录',
					success: (res) => {
						if (res.confirm) {
							uni.removeStorage({
								key: 'searchData'
							});
							this.searchData = []
						}
					}
				});


			}
		}
	}
</script>
<style scoped lang="scss">
	.search-item {
		padding: 0 20rpx;
		display: flex;
		flex-direction: column;

		.search-title {
			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;

			i {
				font-size: 32rpx;
			}
		}

		.seach-name {
			padding: 4rpx 24rpx;
			display: inline-block;
			background-color: #e1e1e1;
			font-size: 24rpx;
			border-radius: 20rpx;
			margin: 10rpx;
		}

		.search-data {
			text-align: center;
			padding: 10rpx;
		}
	}
</style>
