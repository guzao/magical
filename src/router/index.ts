import { createWebHistory, createRouter } from 'vue-router'
import { staticpages, monitorPages } from './staticPages'


export const router = createRouter({
    history: createWebHistory('/'),
    routes: [  ...monitorPages, ...staticpages ],
})

export * from './guard'