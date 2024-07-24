import nProgress from 'nprogress'
import router from './router'
import 'nprogress/nprogress.css'

nProgress.configure({
  showSpinner: false,
})

router.beforeEach(async (to, _, next) => {
  nProgress.start()
  useHead({
    title: to.meta?.title ? `Future Mall - ${to.meta?.title}` : `Future Mall`,
    link: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: () => '/favicon.svg',
      },
    ],
  })
  const { getToken } = useAuth()
  const { getUserInfo } = useUserStore()
  const { userInfo } = storeToRefs(useUserStore())
  if (getToken()) {
    if (to.path === '/login') {
      next('/')
    }
    else {
      if (userInfo.value.id) {
        next()
      }
      else {
        await getUserInfo()
        next()
      }
    }
  }
  else if (to.meta.needAuth !== false) {
    next(`/login?redirect=${to.fullPath}`)
  }
  else {
    next()
  }
})

router.afterEach(() => {
  nProgress.done()
})
