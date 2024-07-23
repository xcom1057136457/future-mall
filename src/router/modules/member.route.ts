import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/member',
    children: [
      {
        path: 'memberNot',
        name: 'MemberNot',
        component: () => import('@/views/member/memberNot.vue'),
        meta: {
          title: '会员中心',
        },
      },
    ],
  },
] as RouteRecordRaw[]
