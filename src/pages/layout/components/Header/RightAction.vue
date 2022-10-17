<template>
    <div class="flex-1 flex justify-end">  

        <div class="mr-2">
            <TooltipButtion @click="toggleFullScreen" :quaternary="true" :icon-size="20" :text="fullScreenTipsText">
                <template #icon >
                    <ContractOutline v-if="isFullScreen" />
                    <ExpandOutline v-else />
                </template>
            </TooltipButtion>
        </div>

        <div class="mr-2">
            <TooltipButtion @click="changeTheme" :quaternary="true"  :text="themeTipsText">
                {{ renderIncon() }} 
            </TooltipButtion>
        </div>
        
        <div>
            <n-dropdown :options="options">
                <n-button  > 🙋‍♂️ 用户资料 </n-button>
            </n-dropdown>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { TooltipButtion } from '@/components'
import { userRightAction } from './useRightAction'
const { options, changeTheme, renderIncon, toggleFullScreen, isFullScreen, fullScreenTipsText, themeTipsText, ContractOutline, ExpandOutline } = userRightAction()
</script>

<style lang="scss" scoped>
</style> 