export default [
  {
    path: '/index',
    component: () => import('@/comonents/index'),
    redirect: '/users/list',
    meta: {
        title:'yonghu'
    }

  }
]