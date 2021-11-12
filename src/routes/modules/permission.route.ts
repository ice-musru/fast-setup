import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/config',
    name: 'PermissionConfig',
    component: () => import('@/views/permission/config.vue'),
  },
  {
    path: '/approve',
    name: 'PermissionApprove',
    component: () => import('@/views/permission/approve.vue'),
  },
]

export default routes
