import type { App } from "vue"; 
import { router, useGuard } from "@/router";


/** 注册路由 */
export function useRouter (app: App<Element>) {
    app.use(router)
    useGuard(router)
}