import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/coupon',
    children: [
      {
        path: '',
        name: 'Coupon',
        component: () => import('@/views/coupon/index.vue'),
        meta: {
          title: '我的优惠券',
          noCache: true,
        },
      },
    ],
  },
] as RouteRecordRaw[]
