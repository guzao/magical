import { h, ref, computed, watch  } from 'vue'
import { useRoute } from 'vue-router'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { BookmarkOutline, CaretDownOutline, DesktopOutline, SpeedometerOutline } from '@vicons/ionicons5'
import { router } from '@/router'
import { useLayout } from '@/store'
import { menuOptions } from '@/appConfig'



const iconMap = {
  'DesktopOutline': DesktopOutline,
  "BookmarkOutline": BookmarkOutline,
  "SpeedometerOutline": SpeedometerOutline
}

type iconMapType = 'DesktopOutline' | 'BookmarkOutline' | 'SpeedometerOutline' 


export function useMenu () {

    const route = useRoute()

    const layout = useLayout()
    
    const collapsed = ref(!true)

    const defaultValue = computed(() => {
      return route.path
    })

    const getSelectedKeys = ref(route.path)

    watch(route, () => {
      layout.setOffsetTop(0)
      layout.scrollbarScrollTo()
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
      return h(NIcon, null, { default: () => h(iconMap[option.type as iconMapType ]) })
    }
    
    const expandIcon = () => {
      // return h(NIcon, null, { default: () => h(CaretDownOutline) })
      return  null
    }

    const clickMenuItem = (key: string) => {
      layout.scrollbarScrollTo()
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

