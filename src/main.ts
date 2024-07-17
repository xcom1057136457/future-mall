import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:uno.css'
import 'animate.css'
import 'normalize.css/normalize.css'
import 'virtual:svg-icons-register'
import '@/assets/styles/index.scss'
import './permission'

const app = createApp(App)

const modules = import.meta.glob('./modules/*.ts', { eager: true })

Object.values(modules).forEach((i: any) => {
  app.use(i)
})

app.mount('#app')
