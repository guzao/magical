import { defineStore } from 'pinia'

export const useLayout = defineStore('useLayout', {
    state() {
        return {
            offsetTop: 0
        }
    },
    actions: {
        setOffsetTop (offsetTop: number) {
            this.offsetTop = offsetTop
        }
    },
})