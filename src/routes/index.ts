import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 导入所有子模块 vite
const modulesFiles = import.meta.globEager('./modules/**/*.{js,ts}')
// 所有路由
const routerModules: RouteRecordRaw[] = Object.keys(modulesFiles).reduce((prev: RouteRecordRaw[], key: string) => [...prev, ...modulesFiles[key].default], [])
// 实例化路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: routerModules,
})

export default router
