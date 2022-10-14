import { h, ref, computed,  } from 'vue'
import { useRoute } from 'vue-router'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { BookmarkOutline, CaretDownOutline } from '@vicons/ionicons5'
import { router } from '@/router'

export function useMenu () {
    
    const menuOptions: MenuOption[] = [
      {
        label: '首页',
        key: '/dashboder',
        type: '',
        url: 'dashboder',
      },
      {
        label: '信息监视',
        key: 'pinball-1973',
        children: [
          {
            label: '电站运行概览',
            key: '/monitor/overView',
            type: '',
            url: '/monitor/overView',
          },
          {
            label: '设备工况详情',
            key: '/monitor/subSite',
            type: '',
            url: '/monitor/subSite',
          },
          {
            label: '告警事件查看',
            key: '/monitor/reportAlarm',
            type: '',
            url: '/monitor/reportAlarm',
          },
          {
            label: '历史曲线查询',
            key: '/monitor/history',
            type: '',
            url: '/monitor/history',
          },
        ],
        type: ''
      }
    ]
    
    const collapsed = ref(!true)

    const defaultValue = computed(() => {
      const route = useRoute()
      return route.path
    })
    
    const renderMenuLabel = (option: MenuOption) => {
      return option.label as string
    }
    
    const renderMenuIcon = (option: MenuOption) => {
      // 渲染图标占位符以保持缩进
      if (option.key === 'sheep-man') return true
      // 返回 falsy 值，不再渲染图标及占位符
      if (option.type === undefined) return null
      return h(NIcon, null, { default: () => h(BookmarkOutline) })
    }
    
    const expandIcon = () => {
      // return h(NIcon, null, { default: () => h(CaretDownOutline) })
      return  null
    }

    const clickMenuItem = (key: string) => {
      router.push(key)
    }

    return {
        menuOptions,
        collapsed,
        defaultValue,
        renderMenuLabel,
        renderMenuIcon,
        expandIcon,
        clickMenuItem
    }

}

