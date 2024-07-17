import type { App } from 'vue'

export function install(app: App) {
  app.use(createPinia())
}
