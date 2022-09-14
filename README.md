### 原型
- [https://modao.cc/community/mtkb3iaoyg26s682?title=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%95%86%E5%9F%8E](https://modao.cc/community/mtkb3iaoyg26s682?title=%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%95%86%E5%9F%8E)
### 项目目录
1. manitest.json  	配置文件 appid
2. pages.json 		配置文件 导航 tabbar 路由
3. main.js  		vue初始化入口文件
4. App.vue  		全局配置：样式，全局监听
5. static 			静态资源：图片、文字、图标
6. pages       		页面
	index
		index.vue
7. components   	组件
	index
		Banner.vue
		Icons.vue
8. common			公共文件：全局css文件
	api
		request.js

### 配置文件

### 接口类型
1. 首页
	- /api/index_list/daat
2. 分类数据
	- /api/index_list/栏目id/data/分页 
