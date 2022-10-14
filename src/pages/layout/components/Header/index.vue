<template>
    <n-layout-header :style="layoutHeaderPadding" >

        <div class="w-auto flex justify-between items-center h-full">

            <div class="flex-1"> SMART OPS </div>

            <RightAction />

        </div>

    </n-layout-header>
</template>

<script lang="ts" setup>
import { layoutHeaderPadding } from '@/appConfig';
import RightAction from './RightAction.vue'
</script>
  
<style lang="scss" scoped>

</style>