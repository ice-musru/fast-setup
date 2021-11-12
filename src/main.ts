import { createApp } from 'vue'
import App from './App'
import router from './routes'
import '@/styles/main.scss'
import 'virtual:windi.css'

const app = createApp(App)
app.use(router).mount('#app')
