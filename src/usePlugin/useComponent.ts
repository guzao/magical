import type { App } from 'vue'
import naiveUI from 'naive-ui'
export function useNaiveUI (app: App<Element>) {
    app.use(naiveUI)
}