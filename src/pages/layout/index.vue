<template>

  <div  class="h-full" >

    <n-layout position="absolute" :style="theme.themeBgcColr"   >

      <!-- 头部 -->
      <n-collapse-transition :show="isShowHeader">
        <Header  />
      </n-collapse-transition>

      <n-layout has-sider position="absolute" :style="{...layoutStyle, ...theme.themeBgcColr, ...layoutPadding }"   >

        <!-- 菜单 -->
        <Menu />

        <!-- 主视图 -->
        
        <Main />
        
      </n-layout>

    </n-layout>
    
  </div>

</template>
  
<script lang="ts" setup>
  import Menu from './components/Menu/index.vue'
  import Header from './components/Header/index.vue'
  import Main from './components/Main/index.vue'
  import { useLayoutData } from './useLayout'
  import { useTheme } from '@/store'
  const theme = useTheme()
  const { layoutStyle, layoutPadding, isShowHeader } = useLayoutData()

</script>