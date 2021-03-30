import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import nav from '@/components/nav/index'
import login from '@/components/login/login'
import shop from '@/components/shop/index'
import norms from '@/components/shop/norms'
import common from '@/components/shop/common'
import tags from '@/components/shop/tags'
import member from '@/components/member/index'
import jurisdiction from '@/components/jurisdiction/index'
import jurisdictionRole from '@/components/jurisdiction/role'
import jurisdictionAuths from '@/components/jurisdiction/auths'


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
        },
        {
          path: '/shop',
          name: 'shop',
          component: shop,
          meta: {
            title: '分类商品'
          }
        },
        {
          path: '/norms',
          name: 'norms',
          component: norms,
        },
        {
          path: '/common',
          name: 'common',
          component: common,
        },
        {
          path: '/tags',
          name: 'tags',
          component: tags,
        },
        {
          path: '/member',
          name: 'member',
          component: member
        },
        {
          path: '/jurisdiction',
          name: 'jurisdiction',
          component: jurisdiction
        },
        {
          path: '/jurisdictionRole',
          name: 'jurisdictionRole',
          component: jurisdictionRole
        },
        {
          path: '/jurisdictionAuths',
          name: 'jurisdictionAuths',
          component: jurisdictionAuths
        },
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
  ]
})
