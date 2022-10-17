<template>
    <n-layout-header :style="layoutHeaderPadding" class="relative top-0">

        <div class="w-auto flex justify-between items-center h-full">

            <LetfAction />

            <RightAction />

        </div>

    </n-layout-header>
</template>

<script lang="ts" setup>
import RightAction from './RightAction.vue'
import LetfAction from './LetfAction.vue'
import { layoutHeaderPadding } from '@/appConfig';
</script>
  
<style lang="scss" scoped>

</style>