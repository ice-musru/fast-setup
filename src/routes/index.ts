import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import refreshLoading from '@/utils/refresh-loading'

// 导入所有子模块 vite
const modulesFiles = import.meta.globEager('./modules/**/*.{js,ts}')
// 所有路由
const routerModules: RouteRecordRaw[] = Object.keys(modulesFiles).reduce((prev: RouteRecordRaw[], key: string) => [...prev, ...modulesFiles[key].default], [])

const filterRouterModules = (data: any[]) => {
  return []
}

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
    {
      path: '/no-access',
      name: 'NoAccess',
      component: () => import('@/views/NoAccess.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/views/404.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (window.refreshLoading === undefined) refreshLoading.start()
  next()
})

// 路由加载后
router.afterEach(() => {
  refreshLoading.done()
})

export default router
