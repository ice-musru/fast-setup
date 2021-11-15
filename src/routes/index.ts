import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import refreshLoading from '@/utils/refresh-loading'

// 导入所有子模块 vite
const modulesFiles = import.meta.globEager('./modules/**/*.{js,ts}')
// 所有路由
const routerModules: RouteRecordRaw[] = Object.keys(modulesFiles).reduce((prev: RouteRecordRaw[], key: string) => [...prev, ...modulesFiles[key].default], [])
// 实例化路由
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('@/layout/index.vue'),
      children: [...routerModules],
    },
  ],
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
router.beforeEach((to, from, next) => {
  if (window.refreshLoading === undefined) refreshLoading.start()
  next()
})

// 路由加载后
router.afterEach(() => {
  refreshLoading.done()
})

export default router
