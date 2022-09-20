<template>
	<view class="my-add-path">
		<view class="add-path-list">
			<view class="path-item">
				<view>收 件 人</view>
				<input type="text" placeholder="收件人姓名">
			</view>
			<view class="path-item">
				<view>手 机 号</view>
				<input type="text" placeholder="11位手机号">
			</view>
			<view class="path-item">
				<view>所在地址</view>
				<view @tap="openPicker">
					<text>{{region}}</text>
					<i class="iconfont icon-xiangyou"></i>
				</view>
			</view>
			<view class="path-item">
				<view>详细地址</view>
				<textarea class="address" placeholder="请输入详细地址" maxlength="60"></textarea>
			</view>
			<view class="path-item">
				<view>默认地址</view>
				<switch checked @change="switchChange" />
			</view>
		</view>
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
	</view>
</template>

<script>
	import lotusAddress from "@/components/Winglau14-lotusAddress/Winglau14-lotusAddress.vue";
	export default {
		components: {
			lotusAddress
		},
		data() {
			return {
				lotusAddressData: {
					visible: false,
					provinceName: '',
					cityName: '',
					townName: '',
				},
				region: '请选择'
			};
		},
		methods: {
			openPicker() {
				this.lotusAddressData.visible = true;
				this.lotusAddressData.provinceName = '江苏省';
				this.lotusAddressData.cityName = '南京市';
				this.lotusAddressData.townName = '浦口区';
			},
			//回传已选的省市区的值
			choseValue(res) {
				//res数据源包括已选省市区与省市区code
				console.log(res);
				this.lotusAddressData.visible = res.visible; //visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if (res.isChose) {
					this.lotusAddressData.provinceName = res.province; //省
					this.lotusAddressData.cityName = res.city; //市
					this.lotusAddressData.townName = res.town; //区
					this.region = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
			},
			switchChange(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.path-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx 20rpx;
		border-bottom: 1px solid #ccc;

		.address {
			height: 100rpx;
		}

		input {
			flex: 1;
			text-align: left;
			padding-left: 10rpx;
		}
	}
</style>
