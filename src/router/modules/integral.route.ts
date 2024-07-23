import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/integral',
    children: [
      {
        path: 'center',
        name: 'IntegralCenter',
        component: () => import('@/views/integral/center.vue'),
        meta: {
          title: '积分中心',
        },
      },
      {
        path: 'signIn',
        name: 'IntegralSignIn',
        component: () => import('@/views/integral/signIn.vue'),
        meta: {
          title: '每日签到',
        },
      },
      {
        path: 'detail',
        name: 'IntegralDetail',
        component: () => import('@/views/integral/detail.vue'),
        meta: {
          title: '积分明细',
          noCache: true,
        },
      },
      {
        path: 'order',
        name: 'IntegralOrder',
        component: () => import('@/views/integral/order.vue'),
        meta: {
          title: '积分订单',
          noCache: true,
        },
      },
      {
        path: 'orderDetail',
        name: 'IntegralOrderDetail',
        component: () => import('@/views/integral/orderDetail.vue'),
        meta: {
          title: '积分订单明细',
          noCache: true,
        },
      },
    ],
  },
] as RouteRecordRaw[]
