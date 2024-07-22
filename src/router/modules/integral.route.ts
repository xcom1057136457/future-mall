import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/integral',
    children: [
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
    ],
  },
] as RouteRecordRaw[]
