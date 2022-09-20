export default {
	state: () => ({
		selctedList: [],
		list: [{
				checked: false,
				id: 1,
				name: '迪士尼宝宝（Disney Baby）婴儿浴巾 宝宝六层纯棉纱布浴巾洗澡巾新生儿纱布浴巾抱巾包单大毛巾 薄荷绿*1',
				color: '颜色',
				imgUrl: 'https://img4.pconline.com.cn/pconline/images/product/20220920/2224665.jpg',
				price: '39.9',
				num: 1
			},
			{
				checked: false,
				id: 2,
				name: 'TCL 照明 客厅灯LED吸顶灯北欧现代简约客厅卧室书房餐厅超薄灯饰灯具【套餐以赠品形式体现】 墨冰-108W无极调光三室两厅套餐A',
				color: '颜色',
				imgUrl: 'https://img4.pconline.com.cn/pconline/images/product/20220920/2224159.jpg',
				price: '688',
				num: 1
			},
			{
				checked: false,
				id: 3,
				name: '迪士尼宝宝（Disney Baby）婴儿浴巾 宝宝六层纯棉纱布浴巾洗澡巾新生儿纱布浴巾抱巾包单大毛巾 薄荷绿*1',
				color: '颜色',
				imgUrl: 'https://img4.pconline.com.cn/pconline/images/product/20220920/2224665.jpg',
				price: '39.9',
				num: 1
			},
			{
				checked: false,
				id: 4,
				name: 'TCL 照明 客厅灯LED吸顶灯北欧现代简约客厅卧室书房餐厅超薄灯饰灯具【套餐以赠品形式体现】 墨冰-108W无极调光三室两厅套餐A',
				color: '颜色',
				imgUrl: 'https://img4.pconline.com.cn/pconline/images/product/20220920/2224159.jpg',
				price: '688',
				num: 1
			},
			{
				checked: false,
				id: 5,
				name: '迪士尼宝宝（Disney Baby）婴儿浴巾 宝宝六层纯棉纱布浴巾洗澡巾新生儿纱布浴巾抱巾包单大毛巾 薄荷绿*1',
				color: '颜色',
				imgUrl: 'https://img4.pconline.com.cn/pconline/images/product/20220920/2224665.jpg',
				price: '39.9',
				num: 1
			}
		]
	}),
	getters: {
		checkedAll(state) {
			return state.list.length === state.selctedList.length
		},
		// 合计+结算数量
		totalCount(state) {
			let total = {
				pprice: 0,
				num: 0
			}
			state.list.forEach(v => {
				// 是否选中
				if (state.selctedList.indexOf(v.id) > -1) {
					total.pprice += v.price * v.num
					total.num = state.selctedList.length
				}
			})
			return total;
		}
	},
	mutations: {
		// 全选
		checkAll(state) {
			state.selctedList = state.list.map(item => {
				item.checked = true
				return item.id
			})
		},
		// 全不选
		unCheckAll(state) {
			state.selctedList = []
			state.list.map(item => {
				item.checked = false
			})
		},
		// 单选
		selectItem(state, id) {
			let index = state.selctedList.indexOf(id)
			let i = state.list.findIndex(item => item.id === id)
			if (index !== -1) {
				state.list[i].checked = false
				return state.selctedList.splice(index, 1)
			} else {
				state.list[i].checked = true
				state.selctedList.push(id)
			}
		},
		// 删除
		delGoods(state) {
			state.list = state.list.filter(v => {
				return state.selctedList.indexOf(v.id) === -1
			})
		},
		addShopCart(state,goods){
			state.list.push(goods)
		}
	},
	actions: {
		checkedAllFn({
			commit,
			getters
		}) {
			getters.checkedAll ? commit('unCheckAll') : commit('checkAll')
		},
		deleteGoods({
			commit
		}) {
			commit('delGoods')
			uni.showToast({
				title: '删除成功',
				icon: "none"
			})
		}
	}
}
