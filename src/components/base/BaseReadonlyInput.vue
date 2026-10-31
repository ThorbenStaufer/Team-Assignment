<script setup lang="ts" generic="T">
interface Props {
    label: string,
    value: T
}

defineProps<Props>();
</script>

<template>
    <label>
        {{ label }}:
        <input type="text" :value readonly class="readonly" />
    </label>
</template>

<style lang="css" scoped>
.readonly {
    border: none;
    padding: 0;
    font-size: var(--font-size-md);
}
</style>