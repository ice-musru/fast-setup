import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 导入所有子模块 vite
const modulesFiles = import.meta.globEager('./modules/**/*.{js,ts}')
// 所有路由
const routerModules: RouteRecordRaw[] = Object.keys(modulesFiles).reduce((prev: RouteRecordRaw[], key: string) => [...prev, ...modulesFiles[key].default], [])
// 实例化路由
const router = createRouter({
  history: createWebHistory(),
  routes: routerModules,
})

// router.beforeResolve((to, from, next) => {
//   const username = 'hanyang'
//   const userage = '18'

//   if (to.fullPath === '/no-access' && userage !== '18') {
//     next('/')
//     return false
//   } else if (to.fullPath !== '/no-access' && username === 'hanyang') {
//     next('/no-access')
//     return false
//   } else {
//     next()
//   }
// })

export default router
