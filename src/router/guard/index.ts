import useCachedGuard from './cached'
import usePermissionGuard from './permission'
// import usePageTitleGuard from './title'
import useVisitedGuard from './visited'

export default function setupRouterGuard() {
  // 使用权限守卫
  usePermissionGuard()
  // 使用拜访守卫
  useVisitedGuard()
  // 使用缓存守卫
  useCachedGuard()
  // usePageTitleGuard()
}
