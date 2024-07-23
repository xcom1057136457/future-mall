import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/setting',
    children: [
      {
        path: 'personal',
        name: 'Personal',
        component: () => import('@/views/setting/personal.vue'),
        meta: {
          title: '个人资料',
        },
      },
    ],
  },
] as RouteRecordRaw[]
