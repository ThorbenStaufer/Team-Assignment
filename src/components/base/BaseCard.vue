<script setup lang="ts">
</script>
<template>

    <div class="card">

      <div v-if="$slots.header" class="card-header">
        <slot name="header" />
      </div>

      <div class="card-body">
        <slot />
      </div>

    </div>
  </template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-card-padding);
  background-color: var(--color-surface);
  padding: var(--spacing-card-padding);
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 24px var(--color-shadow-light);

  max-width: 360px;
  width: 100%;
  box-sizing: border-box;
}

.card-header {
  font: var(--font-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-heading);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
}

.card-body {
  font: var(--font-body);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-body);
  line-height: var(--line-height-normal);
  color: var(--color-text-secondary);
}

</style>

