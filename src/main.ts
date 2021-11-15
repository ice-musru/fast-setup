import { createApp } from 'vue'
import App from '@/App'
import router from '@/routes'
import { store, key } from '@/store'
import 'virtual:windi.css'
import '@/styles/main.scss'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.mount('#app')
app.config.globalProperties.$ELEMENT = {
  size: 'mini',
}
