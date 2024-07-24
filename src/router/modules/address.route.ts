import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/address',
    children: [
      {
        path: '',
        name: 'AddressPage',
        component: () => import('@/views/address/index.vue'),
        meta: {
          title: '收货地址',
          noCache: true,
        },
      },
      {
        path: ':type/:id?',
        name: 'AddressAdd',
        component: () => import('@/views/address/add.vue'),
        meta: {
          title: '收货地址管理',
          noCache: true,
        },
      },
    ],
  },
] as RouteRecordRaw[]
