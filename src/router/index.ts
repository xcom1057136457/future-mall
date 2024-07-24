import {
  type RouteRecordRaw,
  createRouter,
  createWebHashHistory,
} from 'vue-router'

const routeModules = import.meta.glob('./modules/*.route.ts', { eager: true })

const moduleRoutes: any[] = []

Object.values(routeModules).forEach((module: any) => {
  moduleRoutes.push(...module.default)
})

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '未找到页面',
      needAuth: false,
      hasNavbar: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录页',
      needAuth: false,
    },
  },
  {
    path: '/home',
    alias: '',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '主页',
      hasTabbar: true,
      hasNavbar: false,
      needAuth: false,
      activeMenu: '/home',
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
      needAuth: false,
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
      needAuth: false,
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
      needAuth: false,
      noCache: true,
    },
  },
  {
    path: '/location',
    name: 'Location',
    component: () => import('@/views/location/index.vue'),
    meta: {
      title: '地址',
      needAuth: false,
    },
  },
  ...moduleRoutes,
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
