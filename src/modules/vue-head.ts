import { createHead } from '@vueuse/head'
import type { App } from 'vue'

export function install(app: App) {
  app.use(createHead())
}
