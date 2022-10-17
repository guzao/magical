
<template>
    <div class="flex-1 flex items-center h-full"> 
        
        <div style="width: 214px;"> SMART OPS </div>
        
        <div class="flex-1 flex flex items-center h-full"> 
            <TooltipButtion @click="layout.setIsCollapsed(!layout.collapsed)" :quaternary="true" :text="tipsText">
                <template #icon >
                    <ListOutline />
                </template>
            </TooltipButtion>
        </div>

    </div>
            
</template>


<script lang="ts" setup>
import { computed } from 'vue'
import { TooltipButtion} from '@/components'
import { ListOutline } from '@vicons/ionicons5'
import {useLayout } from '@/store'
const layout = useLayout()
const tipsText = computed(() =>  layout.collapsed ? '展开菜单' : '折叠菜单')
</script>
