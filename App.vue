<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import '@/common/uni.css';
	@import '@/common/common.css';
	@import url('https://at.alicdn.com/t/c/font_2888072_id5uuqd8x1n.css');
	::-webkit-scrollbar {
	    display: none;
	    width: 0 !important;
	    height: 0 !important;
	    -webkit-appearance: none;
	    background: transparent;
	    color: transparent;
	  }
</style>
