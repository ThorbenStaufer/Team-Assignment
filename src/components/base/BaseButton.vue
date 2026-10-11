<script setup lang="ts">
</script>
<template>

  <button class="button" type="button">
    <span class="button-input">
      <slot />
    </span>
  </button>

</template>

<style scoped>

.button {
  background-color: var(--color-action-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 12px var(--color-shadow);
}

.button-input {
  font-size: var(--font-size-body);
  color: var(--color-action-primary-text);
  font-weight: var(--font-weight-body);
}

</style>