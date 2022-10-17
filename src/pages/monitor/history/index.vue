<template>
    <n-space vertical>
        <n-card title="小卡片"  v-for="item in 3" :key="item">
            <div class="text-red-400 dark:text-green-400">
                历史曲线
            </div>
            <n-date-picker v-model:value="timestamp" type="date" />
        </n-card>
    </n-space>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const timestamp = ref(1183135260000)
</script>
    