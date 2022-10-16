import type { MenuOption } from 'naive-ui'



/** layout容器浅色模式下背景色   */
export const layoutBgcColr = '#f4f4f4'

/** Main容器 padding配置 */ 
export const mainLayoutContainerPadding  =  { padding: '0 48px 30px 48px' }

/** header容器 padding配置 */ 
export const layoutHeaderPadding  =  { height: '68px', padding: '0px 24px' }

/** 滚动条距离顶部多少时展示导航栏  值要大于导航栏高度 */ 
export const offsetNumber = 100

/** 顶部展示导航栏高度 */ 
export const navBarHeight = 68

/** menu 侧边栏展开宽度 */ 
export const menuWidth = 220

/** 侧边栏折叠宽度 */ 
export const menuCollapsedWidth = 50

/** 侧边栏缩进值 */ 
export const menuIndent = 28





/** =====菜单列表===== */
export const menuOptions: MenuOption[] = [
  {
    label: '首页看板',
    key: '/dashboder',
    type: 'SpeedometerOutline',
    url: 'dashboder',
  },
  {
    label: '信息监视',
    key: 'pinball-1973',
    type: 'DesktopOutline',
    children: [
      {
        label: '电站运行概览',
        key: '/monitor/overView',
        url: '/monitor/overView',
      },
      {
        label: '设备工况详情',
        key: '/monitor/subSite',
        url: '/monitor/subSite',
      },
      {
        label: '告警事件查看',
        key: '/monitor/reportAlarm',
        url: '/monitor/reportAlarm',
      },
      {
        label: '历史曲线查询',
        key: '/monitor/history',
        url: '/monitor/history',
      },
    ],
  }
]
