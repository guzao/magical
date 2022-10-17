<template>

    <!-- 侧边栏 -->
    <n-layout-sider
        :style="theme.themeBgcColr"
        collapse-mode="width"
        :collapsed-width="menuCollapsedWidth"
        :width="menuWidth"
        :collapsed="layout.collapsed"
    >
        
      <n-scrollbar style="max-height: 100vh">
          <n-menu
          :default-value="defaultValue"
          :indent="menuIndent"
          :collapsed="layout.collapsed"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :render-label="renderMenuLabel"
          :render-icon="renderMenuIcon"
          :expand-icon="expandIcon"
          :value="getSelectedKeys"
          @update:value="clickMenuItem"
          />

      </n-scrollbar>

    </n-layout-sider>

</template>

<script setup lang="ts" >
  import { useMenu } from './useMenu'
  import { menuWidth, menuCollapsedWidth, menuIndent } from '@/appConfig'
  import { useLayout, useTheme } from '@/store'
  const { 
    menuOptions,
    defaultValue,
    getSelectedKeys,
    renderMenuLabel,
    renderMenuIcon,
    expandIcon,
    clickMenuItem
  } = useMenu()
  
  const layout = useLayout()
  const theme = useTheme()
  
</script>


<style lang="scss" scoped>
</style>
  