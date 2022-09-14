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
					style="display: flex;flex-direction: column;">
					<block v-if="item.data.length>0">
						<block v-for="(k,i) in item.data" :key="i">
							<!-- 推荐 -->
							<Swiper :dataList="k.data" v-if="k.type === 'swiperList'"></Swiper>
							<Recommend :dataList="k.data" v-if="k.type === 'recommedList'"></Recommend>
							<template v-if="k.type==='commoditList'">
								<Card cardTitle="猜你喜欢"></Card>
								<CommoditList :dataList="k.data"></CommoditList>
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
						</block>
					</block>
					<block v-else>暂无数据...</block>
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
	import Banner from '@/components/index/Banner.vue'
	import Icons from '@/components/index/Icons.vue'
	import Hot from '@/components/index/Hot.vue'
	import Shop from '@/components/index/Shop.vue'
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
					this.clientHeight = res.windowHeight - uni.upx2px(80) - this.getClientHeight()
				}
			})
		},
		methods: {
			__init() {
				const that = this;
				uni.request({
					url: "http://172。20.10.2:3000/index_list/data",
					success(res) {
						const data = res.data.data;
						that.tabBarList = data.tabBarList;
						that.newTopBar = that.initData(data)
					}
				})
			},
			initData(data) {
				let arr = [];
				for (let i = 0; i < this.tabBarList.length; i++) {
					let obj = {
						data: []
					}
					if (i === 0) {
						obj.data = data.data
					}
					arr.push(obj)
				}
				return arr;
			},
			changeTab(e) {
				if (this.tabBarIndex !== e) {
					this.tabBarIndex = e
					this.scrollIntoIndex = 'index' + e
					this.addData();
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
					return 44 + res.statusBarHeight
				} else if (system === 'android') {
					return 48 + res.statusBarHeight
				} else {
					return 0
				}
				// 获取状态栏高度值
			},
			addData() {
				// 拿到索引
				let index = this.tabBarIndex
				// 拿到id
				let id = this.tabBarList[index].id
				// 请求不同数据  /2/data/1
				uni.request({
					url: `http://172。20.10.2:3000/index_list/${id}/data/1`,
					success: (res) => {
						let data = res.data.data
						this.newTopBar[index].data = [...this.newTopBar[index].data, ...data]
					}
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
</style>
