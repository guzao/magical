<template>
  
  <NConfigProvider :locale="themeData.lang.currentLang" :date-locale="themeData.lang.currentDateLang" :theme="themeData.globalTheme">

    <!-- 一级路由出口 -->
    <router-view></router-view>

  </NConfigProvider>

</template>


<script setup lang="ts">
import { useTheme } from '@/store'
const themeData = useTheme()
themeData.initTheme()
</script>

<style scoped lang="scss">
.n-layout-sider__border {
  display: none !important;
}
</style>
