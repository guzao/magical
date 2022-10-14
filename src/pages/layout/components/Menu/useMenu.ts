import { h, ref, computed, watch , nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { BookmarkOutline, CaretDownOutline } from '@vicons/ionicons5'
import { router } from '@/router'
import { useLayout } from '@/store'

export function useMenu () {

    const route = useRoute()

    const layout = useLayout()

    const menuOptions: MenuOption[] = [
      {
        label: '首页看板',
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
        type: ''
      }
    ]
    
    const collapsed = ref(!true)

    const defaultValue = computed(() => {
      return route.path
    })

    const getSelectedKeys = ref(route.path)

    watch(route, () => {
      layout.setOffsetTop(0)
      getSelectedKeys.value = defaultValue.value
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
      layout.setOffsetTop(0)
      router.push(key)
    }

    return {
        menuOptions,
        collapsed,
        defaultValue,
        getSelectedKeys,
        renderMenuLabel,
        renderMenuIcon,
        expandIcon,
        clickMenuItem
    }

}

