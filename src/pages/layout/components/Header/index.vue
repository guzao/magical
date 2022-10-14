<template>
    <n-layout-header :style="style" >

        <div class="w-auto flex justify-between items-center h-full">

            <div class="flex-1"> SMART OPS </div>

            <RightAction />

        </div>

    </n-layout-header>
</template>

<script lang="ts" setup>
import RightAction from './RightAction.vue'
const style = { height: '68px', padding: '0px 24px' }
</script>
  
<style lang="scss" scoped>

</style>