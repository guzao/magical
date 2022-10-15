import { offsetNumber } from '@/appConfig'
import { defineStore } from 'pinia'

export const useLayout = defineStore('useLayout', {
    state() {
        return {
            offsetTop: 0,
            scrollbarInstRef: null as any
        }
    },
    actions: {
        /** 设置滚动的距离 */
        setOffsetTop (offsetTop: number, onScroll?: any) {
            this.offsetTop = offsetTop
            if (onScroll) {
                console.log('onScroll======')
            }
        },
        /** 记录滚动条实力 */
        setScrollbarInstRef (scrollbarInstRef: any) {
            this.scrollbarInstRef = scrollbarInstRef
        },
        /** 滚动到顶部 */
        scrollbarScrollTo () {
            this.scrollbarInstRef?.scrollTo({ top: 0 })
        }
    },
    getters: {
        /** 是否展示导航栏 */
        isShowHeader (state) {
            return state.offsetTop < offsetNumber  
        }
    }
})