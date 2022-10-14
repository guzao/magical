<template>

  <n-scrollbar :on-scroll="onScroll" ref="refScrollbar" style="max-height: 100vh">

    <n-layout-content :style="{ ...theme.themeBgcColr, ...padding }"  >
      <router-view></router-view>
    </n-layout-content>
    
  </n-scrollbar>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useLayout,  useTheme} from '@/store'
const theme = useTheme()
const refScrollbar: any = ref(null)
const { setOffsetTop, } = useLayout()
const onScroll = () => {
  const offsetTop = refScrollbar.value.scrollbarInstRef.containerScrollTop
  setOffsetTop(offsetTop)
}
const padding = { padding: '0 48px 0 48px' }
</script>

<style lang="scss" scoped>

</style>
   