import type { App } from "vue"; 
import { createWebHistory, createRouter } from 'vue-router'


import { staticpages, monitorPages } from './staticPages'


export const router = createRouter({
    history: createWebHistory('/'),
    routes: [  ...monitorPages, ...staticpages ],
})
