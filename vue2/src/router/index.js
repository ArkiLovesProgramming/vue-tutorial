// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import PageAbout from '../pages/PageAbout'
import PageHome from '../pages/PageHome'
import PageMessage from '../pages/PageMessage'
import PageNews from '../pages/PageNews'
import Vue from 'vue'
Vue.use(VueRouter)

//创建并暴露一个路由器
export default new VueRouter({
	// 路由，地址与组件的对应关系
	routes:[
		{
			path:'/about',
			component:PageAbout
		},
		{
			path:'/home',
			component:PageHome,
			children: [
				{
					name: "message",
					path: 'message/:id',
					component: PageMessage,
					props: true //only for params parameter
				},
				{
					path: 'news',
					component: PageNews,
					props($route){	//this is the most powerful one, cos it can process
									//both parasm and query parameters
						return {
							id: $route.query.id
						}
					}
				}
			]
		}
	]
})
