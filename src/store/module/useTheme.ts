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
        /** 设置主题 */ 
        setTheme (theme: boolean) {
            this.theme = theme
            utils.setTheme(theme)
        },
        
        /** 初始化主题 检查是否是derk模式 是 html添加 dark 反之什么也不做 */
        initTheme () {
            utils.initTheme()
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


