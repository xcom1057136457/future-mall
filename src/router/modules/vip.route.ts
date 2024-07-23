import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/vip',
    children: [
      {
        path: 'buy',
        name: 'VipBuy',
        component: () => import('@/views/vip/buy.vue'),
        meta: {
          title: '购买会员',
        },
      },
    ],
  },
] as RouteRecordRaw[]
