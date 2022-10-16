import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import { utils } from '@/utils'
import { layoutBgcColr } from '@/appConfig'

import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'

export const useTheme = defineStore('useTheme', {
    state() {
        return {
            theme: utils.getTheme(),
            lang: {
                currentLang: zhCN,
                currentLangDateLang: dateZhCN
            }
        }
    },
    actions: {
        setTheme (theme: boolean) {
            this.theme = theme
            utils.setTheme(theme)
        }
    },
    getters: {
        /** 全局主题 */
        globalTheme (state) {
            return state.theme ? darkTheme : null
        },
        /** 明、暗色模式下容器背景色 */
        themeBgcColr (state) {
            return  state.theme ? {} : { 'background-color': layoutBgcColr }
        }
    }

})

