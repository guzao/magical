<template>

    <!-- 侧边栏 -->
    <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="0"
        :width="240"
        :collapsed="collapsed"
        :show-trigger="false"
        @collapse="collapsed = true"
        @expand="collapsed = false"
    >
        
      <n-scrollbar style="max-height: 100vh">
          <n-menu
          :default-value="defaultValue"
          :indent="30"
          :collapsed="collapsed"
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
  import { useTheme } from '@/store'
  import { useRoute } from 'vue-router'

  const route = useRoute()

  
  const theme = useTheme()
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
</script>


<style lang="scss" scoped>
</style>
  