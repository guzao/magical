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
        setOffsetTop (offsetTop: number, onScroll?: any) {
            this.offsetTop = offsetTop
            if (onScroll) {
                console.log('onScroll======')
            }
        },
        setScrollbarInstRef (scrollbarInstRef: any) {
            this.scrollbarInstRef = scrollbarInstRef
        }
    },
    getters: {
        isShowHeader (state) {
            return state.offsetTop < offsetNumber  
        }
    }
})