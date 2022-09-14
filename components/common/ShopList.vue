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
		<Commodity :dataList="dataList"></Commodity>

	</view>
</template>

<script>
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
					[obj.key]: val
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
						},
						{
							id: 2,
							name: '价格',
							status: 0,
							key:'pprice'
						},
						{
							id: 3,
							name: '折扣',
							status: 0,
							key:'discount'
						},
					]
				},
				dataList: [{
						id: 1,
						title: '海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片海贼王索隆图片',
						url: 'https://img.bizhiku.net/uploads/2022/0809/wcxs5yv2h43.jpg?x-oss-process=style/w_870-h_870',
						pprice: '889',
						oprice: '1089',
						discount: '5.2',
					},
					{
						id: 2,
						title: '海贼王索隆图片',
						url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/09/ChMkJl3c9huIXs89AAR-50HaEV8AAvboAOtTP4ABH7_855.jpg',
						pprice: '589',
						oprice: '989',
						discount: '7.2',
					},
					{
						id: 3,
						title: '海贼王娜美壁纸',
						url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
						pprice: '889',
						oprice: '1089',
						discount: '5.2',
					},
					{
						id: 4,
						title: '海贼王娜美壁纸',
						url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
						pprice: '889',
						oprice: '1089',
						discount: '5.2',
					},
					{
						id: 5,
						title: '海贼王娜美壁纸',
						url: 'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0D/04/ChMkJ13bqqCISyNJAARuw8uAcSgAAvaWwGxA9IABG7b911.jpg',
						pprice: '889',
						oprice: '1089',
						discount: '5.2',
					},
				]
			}
		},
		methods: {
			getData() {
				// 请求接口获取数据
				console.log(this.orderBy)
			},
			changeTab(index) {
				this.getData()
				let idx = this.topFilter.currentIndex;
				let item = this.topFilter.data[idx];
				if (idx === index) {
					return item.status = item.status === 1 ? 2 : 1;
				}
				let newItem = this.topFilter.data[index];
				item.status = 0;
				this.topFilter.currentIndex = index;
				newItem.status = 1;

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
