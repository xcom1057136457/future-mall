import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/pay',
    children: [
      {
        path: ':money',
        name: 'Pay',
        component: () => import('@/views/pay/index.vue'),
        meta: {
          title: '订单支付',
          noCache: true,
        },
      },
      {
        path: 'success',
        name: 'PaySuccess',
        component: () => import('@/views/pay/success.vue'),
        meta: {
          title: '支付成功',
        },
      },
    ],
  },
] as RouteRecordRaw[]
