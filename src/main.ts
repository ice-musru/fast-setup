import { createApp } from 'vue'
import App from './App'
import router from './routes'
import 'virtual:windi.css'
import '@/styles/main.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
