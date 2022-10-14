import { computed } from 'vue'
import { useLayout } from '@/store'
import { navBarHeight } from '@/appConfig'

/**  布局数据 */
export function useLayoutData () {

    const layoutData = useLayout()

    /** 主容器布局样式 */ 
    const layoutStyle = computed(() => layoutData.isShowHeader ? { top: `${ navBarHeight }px` } : { top: '0' })

    /** 头部是否展示 */ 
    const isShowHeader = computed(() => layoutData.isShowHeader )

    /** 主容器布局padidng */
    const layoutPadding = computed(() => ({ padding: `${ isShowHeader.value ? 18 : 8 }px 0 0 18px` } ))

    return {
        layoutStyle,
        layoutPadding,
        isShowHeader
    }
    
}