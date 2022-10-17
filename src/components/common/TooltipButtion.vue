<template>
    <n-tooltip placement="bottom" trigger="hover">
        <template #trigger>
            <n-button @click="buttonClick" :quaternary="quaternary || false" > 
                <NIcon v-if="$slots.icon" :size="iconSize || 22" >
                    <slot name="icon" />
                </NIcon>
                <slot />
            </n-button>
        </template>
        <span> {{ text || '' }} </span>
    </n-tooltip>
</template>

<script lang="ts" setup>
const emits = defineEmits(['click'])
defineProps({
    /** 图标大小 */
    iconSize: {
        type: Number,
    },
    /** 提示文本 */ 
    text: {
        type: String,
    },
    /** 按钮是否展示为次次次要按钮 */
    quaternary: {
        type: Boolean
    }
})
const buttonClick = () => emits('click')
</script>

