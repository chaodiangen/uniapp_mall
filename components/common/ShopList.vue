<template>
	<view class="shop-list">
		<view class="shop-title">
			<view class="shop-itme" v-for="(item,index) in  topFilter.data" :key="index" @click="changeTab(index)">
				<view :class="['f-color',topFilter.currentIndex === index ? 'f-active-color':'']">
					{{item.name}}
				</view>
				<view>
					<view :class="['iconfont','icon-xiangshang',item.status===1?'f-active-color':'']"></view>
					<view :class="['iconfont','icon-xiangxia',item.status===2?'f-active-color':'']"></view>
				</view>
			</view>
		</view>
		<Lines />
		<view v-if="dataList.length>0">
			<Commodity :dataList="dataList"></Commodity>
		</view>
		<view v-else style="text-align: center;">
			为搜索到数据
		</view>

	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import Lines from '@/components/common/Lines.vue'
	import Commodity from '@/components/common/Commodity.vue'
	// 公共搜索界面
	export default {
		props: {
			keyWord: {
				type: String
			}
		},
		components: {
			Lines,
			Commodity
		},
		computed: {
			orderBy() {
				let obj = this.topFilter.data[this.topFilter.currentIndex];
				let val = obj.status === 1 ? 'desc' : 'asc'
				return {
					type: [obj.key],
					order: val
				}
			}
		},
		data() {
			return {
				topFilter: {
					currentIndex: 0,
					data: [{
							id: 1,
							name: '品牌',
							status: 1,
							key: 'brand'
						},
						{
							id: 2,
							name: '价格',
							status: 0,
							key: 'pprice'
						},
						{
							id: 3,
							name: '折扣',
							status: 0,
							key: 'discount'
						},
					]
				},
				dataList: []
			}
		},
		mounted() {
			this.getData()
		},
		methods: {
			getData() {
				console.log(this.orderBy)
				$http.request({
					url: '/goods/search',
					method: 'post',
					data: {
						name: this.keyWord,
						...this.orderBy,
						pageNum: "1",
						pageSize: "30"
					}
				}).then(res => {
					this.dataList = res.data
				})
			},
			changeTab(index) {
				// 点击筛选重新请求数据  
				this.topFilter.currentIndex = index;
				let idx = this.topFilter.currentIndex;
				let item = this.topFilter.data[idx];
				let newItem = this.topFilter.data[index];
				this.getData()
				if (idx === index) {
					return item.status = item.status === 1 ? 2 : 1;
				}
				item.status = 0;
				newItem.status = 1;
				this.topFilter.currentIndex = index;
			}
		}
	}
</script>

<style scoped lang="scss">
	.shop-list {
		width: 100%;

		.shop-title {
			display: flex;
		}

		.shop-itme {
			display: flex;
			align-items: center;
			justify-content: center;
			flex: 1;
			margin: 10rpx;
		}

		.f-color {
			font-size: 26rpx;
			margin-right: 30rpx;
		}

		.iconfont {
			font-size: 26rpx;
		}
	}
</style>
