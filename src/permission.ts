import nProgress from 'nprogress'
import router from './router'
import 'nprogress/nprogress.css'

nProgress.configure({
  showSpinner: false,
})

router.beforeEach((to, from, next) => {
  nProgress.start()
  useHead({
    title: to.meta?.title ? `Future Mall - ${to.meta?.title}` : `Future Mall`,
  })
  next()
})

router.afterEach(() => {
  nProgress.done()
})
