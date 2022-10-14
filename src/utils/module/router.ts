import type { Router, RouteRecordRaw } from "vue-router"
import Layout from '@/pages/layout/index.vue'


/**  根据数据创建路由 */
export function generateRouter (router: any []) {
    
}




/** 设置动态路由组件路径 */
export function setRouterComponentPath (userRouter:  any [] ): any []  {
    userRouter.forEach(item => {
      let { component, children } = item
      item.component = component.includes('layout') 
                                                    ? Layout 
                                                    : () => import(/* @vite-ignore */ `../../${component}`)
      // 递归设置组件路由地址
      if ( children ) setRouterComponentPath(children)
    })
    return userRouter
}
  


/** 动态添加路由 */
export function addRouter (router: Router, routers: Array<RouteRecordRaw>): void {
    routers.forEach((item) => {
      router.addRoute(item)
    })
}