import { ZH,  EN } from '@/langs'
import { createI18n } from 'vue-i18n'
import type { App } from 'vue'

const i18n = createI18n({
    locale: 'zh', 
    fallbackLocale: 'zh', 
    messages: {
        en: EN,
        zh: ZH
    }, 
    globalInjection: true
})

export function useI18n (app: App<Element>) {
    app.use(i18n)
}