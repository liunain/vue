import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1' 
import Hi2 from '@/components/Hi2' 
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',//url无#号
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
      	default:HelloWorld,
      	left:Hi1,
      	right:Hi2
      	//left与router-view is same.
      	//多路由时用components
      }
    },{
      path: '/mmr',
      name: 'HelloWorld',
      components: {
      	default:HelloWorld,
      	left:Hi2,
      	right:Hi1
      	//left与router-view is same.
      	//多路由时用components
      }//mmr页面 is used to change hi1 ,hi2
    },{
    	path:'/params/:newsId(\\d+)/:newstitle',
    	component:Params,
    	beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
        //next({path:'/'});
        //路由配置中写钩子函数。但是在路由文件中我们只能写一个beforeEnter,就是在进入此路由配置时
    }},//加入了正则，传递数字之外参数params.vue组件接收不到。
    {
      path:'/goParams/:newsId(\\d+)/:newsTitle',
     redirect:'/params/:newsId(\\d+)/:newsTitle'
    }, //，但是我们希望跳转到同一个页面，或者说是打开同一个组件。这时候我们就用到了路由的重新定向redirect参数。
    {
    	path: '/Hi',
        //name: 'Hi',
        component: Hi,
        children:[
            {path:'/',name: 'hw/Hi',component:Hi},
            {path:'hi1',name: 'hi1',component:Hi1},
            {path:'hi2',name: 'hi2',component:Hi2},
        ]
    },
    {
      path:'*',
      component:Error
    }
  ]
})
