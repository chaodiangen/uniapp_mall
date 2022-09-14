<template>
	<view class="content">
		<scroll-view class="scroll-tab" scroll-x="true" :scroll-into-view="scrollIntoIndex">
			<view style="display: flex;">
				<view :id="'index'+index" v-for="(item,index) in tabBarList" :key="index" @tap="changeTab(index)"
					:class="['scroll-item',index===tabBarIndex?'f-active-color':'']">
					<text @click="changeTab(index)">{{ item.name }}</text>
				</view>
			</view>

		</scroll-view>
		<swiper class="swiper" :current="tabBarIndex" @change="changeSwiper" :style="{'height':clientHeight+'px'}">
			<swiper-item v-for="(item,index) in newTopBar" :key="index">
				<scroll-view scroll-y="true" :style="{'height':clientHeight+'px'}"
					style="display: flex;flex-direction: column;" @scrolltolower="loadMore(index)">
					<block v-if="item.data.length>0">
						<block v-for="(k,i) in item.data" :key="i">
							<!-- 推荐 -->
							<Swiper :dataList="k.data" v-if="k.type === 'swiperList'"></Swiper>
							<Recommend :dataList="k.data" v-if="k.type === 'recommedList'"></Recommend>
							<template v-if="k.type==='commoditList'">
								<Card cardTitle="猜你喜欢"></Card>
								<CommodityFallList :dataList="k.data"></CommodityFallList>
							</template>
							<!-- 运动户外 -->
							<Banner v-if="k.type==='bannerList'" :dataList="k.data"></Banner>
							<template v-if="k.type==='iconsList'">
								<Icons :dataList="k.data"></Icons>
								<Card cardTitle="热销爆品"></Card>
							</template>
							<template v-if="k.type==='hotList'">
								<Hot :dataList="k.data"></Hot>
								<Card cardTitle="推荐店铺"></Card>
							</template>
							<template v-if="k.type==='shopList'">
								<Shop :dataList="k.data"></Shop>
								<Card cardTitle="为您推荐"></Card>
							</template>
							<template v-if="k.type === 'commoditList1'">
								<CommoditList :dataList="k.data"></CommoditList>
							</template>
						</block>
					</block>
					<block v-else>暂无数据...</block>
					<view class="load-text">{{item.loadText}}</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import Swiper from '@/components/index/Swiper.vue';
	import Recommend from '@/components/index/Recommend.vue'
	import Card from '@/components/common/Card.vue'
	import CommoditList from '@/components/common/CommoditList.vue'
	import CommodityFallList from '@/components/common/CommodityFallList.vue'
	import Banner from '@/components/index/Banner.vue'
	import Icons from '@/components/index/Icons.vue'
	import Hot from '@/components/index/Hot.vue'
	import Shop from '@/components/index/Shop.vue'
	import
	$https
	from '@/common/api/request.js'
	export default {
		data() {
			return {
				tabBarIndex: 0,
				scrollIntoIndex: 'index0',
				// 内置高度
				clientHeight: 0,
				tabBarList: [],
				newTopBar: [],
				swiperList: [],
				recommedList: []
			}
		},
		components: {
			Swiper,
			Recommend,
			Card,
			CommoditList,
			CommodityFallList,
			Banner,
			Icons,
			Hot,
			Shop
		},
		onLoad() {
			this.__init();
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clientHeight = res.windowHeight + uni.upx2px(70) - this.getClientHeight()
				}
			})
		},
		// 标题栏按钮点击
		onNavigationBarButtonTap(e) {
			if (e.float === 'left') {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		},
		methods: {
			__init() {
				const that = this;
				$https.request({
					url: '/index_list/data',
					method: 'get'
				}).then(data => {
					that.tabBarList = data.tabBarList;
					that.newTopBar = that.initData(data)
				}).catch(() => {
					uni.showToast({
						title: '请求失败',
						icon: 'error'
					})
				})
			},
			initData(data) {
				let arr = [];
				for (let i = 0; i < this.tabBarList.length; i++) {
					let obj = {
						data: [],
						load: "first",
						loadText: '上拉加载更多...'
					}
					if (i === 0) {
						obj.data = data.data
					}
					arr.push(obj)
				}
				return arr;
			},
			// 点击顶栏
			changeTab(e) {
				if (this.tabBarIndex !== e) {
					this.tabBarIndex = e
					this.scrollIntoIndex = 'index' + e
					if (this.newTopBar[this.tabBarIndex].load === 'first') {
						this.addData();
					}
				}

			},
			changeSwiper(e) {
				this.changeTab(e.detail.current)
			},
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
			addData(callback) {
				// 拿到索引
				let index = this.tabBarIndex
				// 拿到id
				let id = this.tabBarList[index].id
				// 首页不需要请求单独接口
				if (this.tabBarIndex !== 0) {
					// 请求不同数据  /2/data/1
					let page = Math.ceil(this.newTopBar[index].data.length / 5) + 1
					$https.request({
						url: `/index_list/${id}/data/${page}`,
						method: 'get'
					}).then(data => {
						this.newTopBar[index].data = [...this.newTopBar[index].data, ...data]
					}).catch(() => {
						uni.showToast({
							title: '请求失败',
							icon: 'error'
						})
					})
				}
				this.newTopBar[this.tabBarIndex].load = 'last'
				if (typeof callback === 'function') {
					callback()
				}
			},
			// 上拉加载更多
			loadMore(index) {
				console.log(index)
				this.newTopBar[index].loadText = '加载中'
				// 请求完数据 文字信息又换成上拉加载更多
				this.addData(() => {
					this.newTopBar[index].loadText = '上拉加载更多'
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	.content {
		height: 100%;
		padding-bottom: 100rpx;
		background-color: #eef7f2;
	}

	.scroll-tab {
		width: 100%;
		flex-wrap: nowrap;
		white-space: normal;
		display: flex;

		.scroll-item {
			height: 100%;
			padding: 20rpx 30rpx;
			font-size: 28rpx;
			display: flex;
			flex: none;
			display: flex;
		}

		.f-active-color {
			border-bottom: 6rpx solid #68b88e;
		}
	}

	.load-text {
		text-align: center;
		margin: 10rpx;
		padding: 20rpx;
		font-size: 24rpx;
	}
</style>
