import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录页',
    },
  },
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '主页',
          hasTabbar: true,
          hasNavbar: false,
        },
      },
      {
        path: '/shoppingCart',
        name: 'ShoppingCart',
        component: () => import('@/views/shoppingCart/index.vue'),
        meta: {
          title: '购物车',
          hasTabbar: true,
          hasNavbar: false,
        },
      },
      {
        path: '/chat',
        name: 'Chat',
        component: () => import('@/views/chat/index.vue'),
        meta: {
          title: '客服',
          hasTabbar: true,
          hasNavbar: false,
        },
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '我的',
          hasTabbar: true,
          hasNavbar: false,
        },
      },
      {
        path: '/location',
        name: 'Location',
        component: () => import('@/views/location/index.vue'),
        meta: {
          title: '地址',
        },
      },
      {
        path: '/productDetails/:id',
        name: 'ProductDetails',
        component: () => import('@/views/productDetails/index.vue'),
        meta: {
          title: '商品详情',
          noCache: true,
        },
      },
      {
        path: '/orderCreate/:id',
        name: 'OrderCreate',
        component: () => import('@/views/orderCreate/index.vue'),
        meta: {
          title: '创建订单',
        },
      },
      {
        path: '/vipBuy',
        name: 'VipBuy',
        component: () => import('@/views/vipBuy/index.vue'),
        meta: {
          title: '购买会员',
        },
      },
      {
        path: '/pay/:money',
        name: 'Pay',
        component: () => import('@/views/pay/index.vue'),
        meta: {
          title: '订单支付',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    const el = document.getElementById('scroll-wrapper')
    const { y } = useScroll(el)
    y.value = 0
  },
})

export default router
