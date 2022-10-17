import { defineStore } from 'pinia'
import { darkTheme,  } from 'naive-ui'
import { utils } from '@/utils'
import { layoutBgcColr } from '@/appConfig'

import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'

export const useTheme = defineStore('useTheme', {
    state() {
        return {
            /** 是否暗夜模式 */
            theme: utils.getTheme() as boolean,
            lang: {
                currentLang: zhCN,
                currentDateLang: dateZhCN
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
            console.log(darkTheme)
            return state.theme ? darkTheme : null
        },
        /** 明、暗色模式下容器背景色 */
        themeBgcColr (state) {
            return  state.theme ? {} : { 'background-color': layoutBgcColr }
        }
    }

})


