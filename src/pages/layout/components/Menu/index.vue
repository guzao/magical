<template>

    <!-- 侧边栏 -->
    <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="menuCollapsedWidth"
        :width="menuWidth"
        :collapsed="layout.collapsed"
        :show-trigger="!false"
        @collapse="layout.setIsCollapsed(true)"
        @expand="layout.setIsCollapsed(false)"
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
  import { watch } from 'vue'
  import { useMenu } from './useMenu'
  import { utils } from '@/utils'
  import { menuWidth, menuCollapsedWidth, menuIndent } from '@/appConfig'
  import { useLayout } from '@/store'
  const { 
    menuOptions,
    collapsed,
    defaultValue,
    getSelectedKeys,
    renderMenuLabel,
    renderMenuIcon,
    expandIcon,
    clickMenuItem
  } = useMenu()
  
  const layout = useLayout()
  
</script>


<style lang="scss" scoped>
</style>
  