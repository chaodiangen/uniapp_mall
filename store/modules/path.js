export default {
	state: {
		list: [{
			name: "张三",
			tel: "188xxxxxxxx",
			city: "北京市海淀区中关村",
			details: "第二村2单元202",
			isDefault: false
		}, {
			name: "李四",
			tel: "188xxxxxxxx",
			city: "江苏省南京市浦口区",
			details: "大华三路3单元302",
			isDefault: true
		}]
	},
	getters: {
		defaultPath(state) {
			return state.list.filter(v => v.isDefault === true)
		}
	},
	mutations: {
		createPath(state, payload) {
			state.list.unshift({
				...payload
			})
		},
		updatePath(state, {
			index,
			item
		}) {
			for (let key in item) {
				state.list[index][key] = item[key]
			}
		},
		removePaht(state) {
			state.list.forEach(v => {
				if (v.isDefault) {
					v.isDefault = false
				}
			})
		}
	},
	actions: {
		createPathFn({
			commit
		}, obj) {
			commit('removePaht')
			commit('createPath', obj)
		},
		updatePathFn({
			commit
		}, obj) {
			commit('removePaht')
			commit('updatePath', obj)
		}
	}
}
