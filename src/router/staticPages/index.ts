import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/pages/layout/index.vue'

export const staticpages: RouteRecordRaw [] = [
    
    {
        path: '/Login',
        component: () => import('@/pages/staticPages/login/index.vue'),
        name: 'Login',
        meta: {
            title: '登录',
        },
    },
    {
        path: '/403',
        component: () => import('@/pages/staticPages/403.vue'),
        name: '403',
        meta: {
            title: '403',
        },
    },
    {
        path: '/:path(.*)*',
        component: () => import('@/pages/staticPages/404.vue'),
        name: '404',
        meta: {
            title: '页面丢了',
        },
    },
    {
        path: '/418',
        component: () => import('@/pages/staticPages/418.vue'),
        name: '418',
        meta: {
            title: '418',
        },
    },
    {
        path: '/500',
        component: () => import('@/pages/staticPages/500.vue'),
        name: '500',
        meta: {
            title: '500',
        },
    },

    

    /** 工作台 */
    {
        path: '/',
        component: Layout,
        redirect: '/dashboder',
        meta: {
            title: '工作台',
        },
        children: [
            {
                path: '/dashboder',
                component: () => import('@/pages/dashboder/index.vue'),
                name: 'index',
                meta: {
                    title: '工作台面板',
                },
            }
        ]
    },

] 


export const monitorPages: RouteRecordRaw [] = [
    {
        path: '/monitor',
        component: Layout,
        name: 'monitor',
        meta: {
            title: '电站监视',
        },
        children: [
            {
                path: '/monitor/overView',
                component: () => import('@/pages/monitor/overView/index.vue'),
                name: 'overView',
                meta: {
                    title: '电站运行概览',
                },
            },
            {
                path: '/monitor/subSite',
                component: () => import('@/pages/monitor/subSite/index.vue'),
                name: 'subSite',
                meta: {
                    title: '设备工况详情',
                },
            },
            {
                path: '/monitor/reportAlarm',
                component: () => import('@/pages/monitor/reportAlarm/index.vue'),
                name: 'reportAlarm',
                meta: {
                    title: '告警事件查看',
                },
            },
            {
                path: '/monitor/history',
                component: () => import('@/pages/monitor/history/index.vue'),
                name: 'history',
                meta: {
                    title: '历史曲线查询',
                },
            },
        ]
    },
]