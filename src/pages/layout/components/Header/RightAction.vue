<template>
    <div class="flex-1 flex justify-end">  

        <div class="mr-2">
            <n-button   @click="changeTheme"> {{ renderIncon() }} </n-button>
        </div>
        
        <div>
            <n-dropdown :options="options">
                <n-button  > 🙋‍♂️ 用户资料 </n-button>
            </n-dropdown>
        </div>

    </div>
</template>

<script lang="ts" setup>

import { Component, h } from 'vue';
import { useTheme } from '@/store'
import { NIcon } from 'naive-ui'
import {
    PersonCircleOutline as UserIcon,
    Pencil as EditIcon,
    LogOutOutline as LogoutIcon,
    FunnelOutline, Menu
    
} from '@vicons/ionicons5'


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

</script>

<style lang="scss" scoped>
</style> 