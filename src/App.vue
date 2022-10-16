<template>
  <NConfigProvider :theme="themeData.globalTheme">
    <router-view></router-view>
  </NConfigProvider>
</template>


<script setup lang="ts">
import { useTheme } from '@/store'
const themeData = useTheme()
</script>

<style scoped lang="scss">
.n-layout-sider__border {
  display: none !important;
}
</style>
