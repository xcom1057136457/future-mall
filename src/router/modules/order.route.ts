import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/order',
    children: [
      {
        path: '',
        name: 'Order',
        component: () => import('@/views/order/index.vue'),
        meta: {
          title: '全部订单',
          noCache: true,
        },
      },
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
