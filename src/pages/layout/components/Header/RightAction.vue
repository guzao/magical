<template>
    <div class="flex-1 flex justify-end">  

        <div class="mr-2">
            <n-button quaternary @click="toggleFullScreen"> 
                <NIcon  size="20">
                    <ContractOutline v-if="isFullScreen" />
                    <ExpandOutline v-else />
                </NIcon>
            </n-button>
        </div>

        <div class="mr-2">
            <n-button quaternary @click="changeTheme"> {{ renderIncon() }} </n-button>
        </div>
        
        <div>
            <n-dropdown :options="options">
                <n-button  > 🙋‍♂️ 用户资料 </n-button>
            </n-dropdown>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import { userRightAction } from './useRightAction'
const { options, changeTheme, renderIncon, toggleFullScreen, isFullScreen, ContractOutline, ExpandOutline } = userRightAction()
</script>

<style lang="scss" scoped>
</style> 