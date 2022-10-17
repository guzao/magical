
<template>
    <div class="flex-1 flex items-center h-full"> 
        
        <div style="width: 214px;"> SMART OPS </div>
        
        <div class="flex-1 flex flex items-center h-full"> 
            <NIcon @click="layout.setIsCollapsed(!layout.collapsed)" class="cursor-pointer" size="25" >
                <ListOutline />
            </NIcon>
        </div>

    </div>
            
</template>


<script lang="ts" setup>
import { NIcon } from 'naive-ui'
import { ListOutline } from '@vicons/ionicons5'
import {useLayout } from '@/store'
const layout = useLayout()
</script>
