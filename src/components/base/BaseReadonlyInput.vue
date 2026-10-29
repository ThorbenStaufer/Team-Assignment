<script setup lang="ts" generic="T">
interface Props {
    label: string,
    value: T
}

defineProps<Props>();
</script>

<template>
    <label>
        {{ label }}
        <input type="text" :value readonly />
    </label>
</template>