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
        path: '/product/detail/:id',
        name: 'ProductDetail',
        component: () => import('@/views/product/detail.vue'),
        meta: {
          title: '商品详情',
          noCache: true,
        },
      },
      {
        path: '/product/list',
        name: 'ProductList',
        component: () => import('@/views/product/list.vue'),
        meta: {
          title: '商品列表',
        },
      },
      {
        path: '/order/create/:id',
        name: 'OrderCreate',
        component: () => import('@/views/order/create.vue'),
        meta: {
          title: '创建订单',
        },
      },
      {
        path: '/order/detail',
        name: 'OrderDetail',
        component: () => import('@/views/order/detail.vue'),
        meta: {
          title: '订单详情',
          noCache: true,
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
          noCache: true,
        },
      },
      {
        path: '/pay/success',
        name: 'PaySuccess',
        component: () => import('@/views/pay/success.vue'),
        meta: {
          title: '支付成功',
        },
      },
      {
        path: '/address',
        name: 'AddressPage',
        component: () => import('@/views/address/index.vue'),
        meta: {
          title: '收货地址',
          noCache: true,
        },
      },
      {
        path: '/address/:type/:id?',
        name: 'AddressAdd',
        component: () => import('@/views/address/add.vue'),
        meta: {
          title: '收货地址管理',
          noCache: true,
        },
      },
      {
        path: '/integral/signIn',
        name: 'IntegralSignIn',
        component: () => import('@/views/integral/signIn.vue'),
        meta: {
          title: '每日签到',
        },
      },
      {
        path: '/integral/detail',
        name: 'IntegralDetail',
        component: () => import('@/views/integral/detail.vue'),
        meta: {
          title: '积分明细',
          noCache: true,
        },
      },
      {
        path: '/wallet',
        name: 'Wallet',
        component: () => import('@/views/wallet/index.vue'),
        meta: {
          title: '我的钱包',
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
