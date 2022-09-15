export default {
	common: {
		baseUrl: "http://192.168.124.8:3000",
		data: {},
		header: {
			'content-type': 'application/json',
			'content-type': 'application/x-www-form-urlencoded',
		},
		method: 'GET',
		dataType: 'json'
	},
	request(options = {}) {
		options.url = this.common.baseUrl + options.url
		options.header = options.header || this.common.header
		options.data = options.data || this.common.data
		options.method = options.method || this.common.method
		options.dataType = options.dataType || this.common.dataType
		return new Promise((res, rej) => {
			uni.request({
				...options,
				success: (result) => {
					if (result.data.code === 0) {
						setTimeout(function() {
							uni.hideLoading()
						}, 2000)
						const data = result.data.data
						return res(data)
					} else {
						return rej()
					}
				}
			})
			return res
		})
	}
}
