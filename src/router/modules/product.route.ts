import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/product',
    children: [
      {
        path: 'detail/:id',
        name: 'ProductDetail',
        component: () => import('@/views/product/detail.vue'),
        meta: {
          title: '商品详情',
          noCache: true,
          needAuth: false,
        },
      },
      {
        path: 'list',
        name: 'ProductList',
        component: () => import('@/views/product/list.vue'),
        meta: {
          title: '商品列表',
          needAuth: false,
        },
      },
    ],
  },
] as RouteRecordRaw[]
