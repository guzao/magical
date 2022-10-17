import { Component, h, watch } from 'vue';
import { useTheme } from '@/store'
import { NIcon } from 'naive-ui'
import { useFullScreen } from '@/hooks'
import {
    PersonCircleOutline as UserIcon,
    Pencil as EditIcon,
    LogOutOutline as LogoutIcon,
    ContractOutline, ExpandOutline 
} from '@vicons/ionicons5'


export function userRightAction () {

    const renderIcon = (icon: Component) => {
        return () => {
            return h(NIcon, null, {
            default: () => h(icon)
            })
        }
    }
    
    const themeData = useTheme()
    
    const renderIncon = () => themeData.theme ? '🌙深色' : '☀浅色'
    
    const changeTheme = () => {
        themeData.setTheme(!themeData.theme)
    }
    
    const options = [
        {
            label: '用户资料',
            key: 'profile',
            icon: renderIcon(UserIcon)
        },
        {
            label: '编辑用户资料',
            key: 'editProfile',
            icon: renderIcon(EditIcon)
        },
        {
            label: '退出登录',
            key: 'logout',
            icon: renderIcon(LogoutIcon)
        }
    ]

    const { toggleFullScreen, isFullScreen } = useFullScreen()
    
    return {
        options,
        changeTheme,
        renderIncon,
        toggleFullScreen,
        isFullScreen,
        ContractOutline,
        ExpandOutline
    }

}
