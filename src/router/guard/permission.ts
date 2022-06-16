import useUserStore from '@/store/modules/user'
import usePermissionStore from '@/store/modules/permission'
import router from '..'

const whiteRoutes: string[] = ['/login', '/404', '/403', '/500']

function usePermissionGuard() {
  // https://router.vuejs.org/zh/api/#beforeeach
  router.beforeEach(async (to) => {
    // 如果是白名单，则直接进入
    if (whiteRoutes.includes(to.path)) {
      return true
    }
    // 如果没有登录，则跳转到登录页面
    const userStore = useUserStore()
    if (userStore.isTokenExpire()) {
      return {
        path: '/login',
        query: { redirect: to.fullPath },
      }
    }
    // 进入路由
    const permissionStore = usePermissionStore()
    const isEmptyRoute = permissionStore.isEmptyPermissionRoute()
    if (isEmptyRoute) {
      await permissionStore.initPermissionRoute()
      return { ...to, replace: true }
    }
    return true
  })
}

export default usePermissionGuard
