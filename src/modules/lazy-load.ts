import type { App } from 'vue'
import { Lazyload } from 'vant'

export function install(app: App) {
  app.use(Lazyload, {
    lazyComponent: true,
  })
}
