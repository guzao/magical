<template>

  <n-scrollbar :on-scroll="onScroll" ref="refScrollbar" >

    <n-layout-content :style="{ ...theme.themeBgcColr, ...mainLayoutContainerPadding }"  >
      <router-view></router-view>
    </n-layout-content>
    
  </n-scrollbar>

</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, nextTick, watch } from 'vue'
import { useLayout,  useTheme } from '@/store'
import { mainLayoutContainerPadding, offsetNumber } from '@/appConfig';
const theme = useTheme()
const refScrollbar: any = ref(null)
const { setOffsetTop, setScrollbarInstRef } = useLayout()

const router = useRoute()

const routerIsUpdate = ref(false)

/** 配合nextTeck 实现调度器功能*/
watch(router, () => routerIsUpdate.value = true)

const onScroll = () => {
  const offsetTop = refScrollbar.value.scrollbarInstRef.containerScrollTop
  if (offsetTop >= offsetNumber && offsetTop <= offsetNumber ) {
    setOffsetTop(offsetTop)
  }
  nextTick(() => {
    if (routerIsUpdate.value) {
      setOffsetTop(0)
      // 修改过后将开关关闭，在路由更新后重新在打开 
      routerIsUpdate.value = false
    }
  })
}

onMounted(() => setScrollbarInstRef(refScrollbar.value))

</script>

<style lang="scss" scoped>
</style>
   