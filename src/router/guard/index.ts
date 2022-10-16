import type { Router } from 'vue-router'

export function useGuard (router: Router) {

  router.beforeEach((to, form, next) => {
    next()
  })

  router.afterEach((to, form, next) => {
  })

}

