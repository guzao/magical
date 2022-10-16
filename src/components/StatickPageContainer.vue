
<template>
  <n-layout style="height: 100vh;" :style="theme.themeBgcColr">
    <slot />
  </n-layout>
</template>

<script lang="ts" setup>
import { useTheme } from "@/store";
const theme = useTheme()
</script>

<style lang="scss" scoped>
</style>