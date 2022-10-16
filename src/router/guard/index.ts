import type { Router } from 'vue-router'
import { useLoadingBar } from 'naive-ui'

export function useGuard (router: Router) {

  router.beforeEach((to, form, next) => {
    console.log(to.path, form.path)
    next()
  })

  router.afterEach((to, form, next) => {
    console.log('ok')
  })

}

