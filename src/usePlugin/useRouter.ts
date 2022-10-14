import type { App } from "vue"; 
import { router } from "@/router";


/** 注册路由 */
export function useRouter (app: App<Element>) {
    app.use(router)
}