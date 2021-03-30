import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import nav from '@/components/nav/index'
import login from '@/components/login/login'
import shop from '@/components/shop/index'
import norms from '@/components/shop/norms'
import common from '@/components/shop/common'


// Vue.use(Router)
// const router = new VueRouter({
//   mode: 'history',
//   routes
// })

export default new Router({
  //base: '/public/',
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'nav',
      component: nav,
      redirect: '/index',
      children:[
        //首页
        {
          path: '/index',
          name: 'index',
          component: index
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      redirect: '/shop',
      meta: {
        title: '分类商品'
      }
    },
    {
      path: '/shop/norms',
      name: 'norms',
      component: norms,
    },
    {
      path: '/shop/common',
      name: 'common',
      component: common,
    }
  ]
})
