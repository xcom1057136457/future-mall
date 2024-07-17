import type { App } from 'vue'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

export function install(app: App) {
  app.use(Particles, {
    init: async (engine) => {
      await loadSlim(engine)
    },
  })
}
