// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import PageAbout from '../components/PageAbout'
import PageHome from '../components/PageHome'
import PageMessage from '../components/PageMessage'
import PageNews from '../components/PageNews'
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
					path: 'message',
					component: PageMessage
				},
				{
					path: 'news',
					component: PageNews
				}
			]
		}
	]
})
