import { createApp } from 'vue'
import App from '../App.vue'
import { useNaiveUI } from './useComponent'
import { useI18n } from './useI18n'
import { usePinan } from './useStore'
import { useRouter } from './useRouter'


/**  初始化app */
export function setupApp (): void {
    const appInstance = createApp(App)
    useRouter(appInstance)
    usePinan(appInstance)
    useI18n(appInstance)
    useNaiveUI(appInstance)
    appInstance.mount('#app')
}
