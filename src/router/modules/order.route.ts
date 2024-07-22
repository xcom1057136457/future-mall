import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/order',
    children: [
      {
        path: 'create/:id',
        name: 'OrderCreate',
        component: () => import('@/views/order/create.vue'),
        meta: {
          title: '创建订单',
        },
      },
      {
        path: 'detail',
        name: 'OrderDetail',
        component: () => import('@/views/order/detail.vue'),
        meta: {
          title: '订单详情',
          noCache: true,
        },
      },
    ],
  },
] as RouteRecordRaw[]
