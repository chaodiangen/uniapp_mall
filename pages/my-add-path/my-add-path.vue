<template>
	<view class="my-add-path">
		<view class="add-path-list">
			<view class="path-item">
				<view>收 件 人</view>
				<input v-model="userAddress.name" type="text" placeholder="收件人姓名">
			</view>
			<view class="path-item">
				<view>手 机 号</view>
				<input v-model="userAddress.tel" type="text" placeholder="11位手机号">
			</view>
			<view class="path-item">
				<view>所在地址</view>
				<view @tap="openPicker">
					<text>{{userAddress.city}}</text>
					<i class="iconfont icon-xiangyou"></i>
				</view>
			</view>
			<view class="path-item">
				<view>详细地址</view>
				<textarea v-model="userAddress.details" class="address" placeholder="请输入详细地址" maxlength="60"></textarea>
			</view>
			<view class="path-item">
				<view>默认地址</view>
				<switch :checked="userAddress.isDefault" @change="switchChange" />
			</view>
		</view>
		<lotus-address v-on:choseVal="choseValue" :lotusAddressData="lotusAddressData"></lotus-address>
	</view>
</template>

<script>
	import {
		mapActions
	} from 'vuex'
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
				userAddress: {
					city: '请选择',
					name: '',
					tel: '',
					details: '',
					isDefault: false
				},
				isStatus: false,
				i: -1

			};
		},
		onNavigationBarButtonTap() {
			// 判断修改或新增
			if (this.isStatus) {
				this.updatePathFn({
					index: this.i,
					item: this.userAddress
				})
			} else {
				if (!this.userAddress.name) {
					uni.showToast({
						title: '请填写用户名'
					})
					return;
				}
				if (!this.userAddress.tel) {
					uni.showToast({
						title: '请填写手机号'
					})
					return;
				}
				if (!this.userAddress.details) {
					uni.showToast({
						title: '请填写详细地址'
					})
					return;
				}
				this.createPathFn(this.userAddress)
			}


			uni.navigateBack({
				delta: 1
			})
		},
		onLoad(e) {
			if (e.data) {
				this.isStatus = true
				uni.setNavigationBarTitle({
					title: '修改地址'
				})
				let result = JSON.parse(e.data)
				this.userAddress = result.item
				this.i  = result.index
			}
		},
		methods: {
			...mapActions(['createPathFn', 'updatePathFn']),
			openPicker() {
				this.lotusAddressData.visible = true;
				this.lotusAddressData.provinceName = '江苏省';
				this.lotusAddressData.cityName = '南京市';
				this.lotusAddressData.townName = '浦口区';
			},
			//回传已选的省市区的值
			choseValue(res) {
				this.lotusAddressData.visible = res.visible; //visible为显示与关闭组件标识true显示false隐藏
				//res.isChose = 1省市区已选 res.isChose = 0;未选
				if (res.isChose) {
					this.lotusAddressData.provinceName = res.province; //省
					this.lotusAddressData.cityName = res.city; //市
					this.lotusAddressData.townName = res.town; //区
					this.userAddress.city = `${res.province} ${res.city} ${res.town}`; //region为已选的省市区的值
				}
			},
			switchChange(e) {
				this.userAddress.isDefault = e.detail.value
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
