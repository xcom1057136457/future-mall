import type { App } from 'vue'
import VueLuckyCanvas from '@lucky-canvas/vue'

export function install(app: App) {
  app.use(VueLuckyCanvas)
}
