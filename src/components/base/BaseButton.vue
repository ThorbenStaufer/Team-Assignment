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
  cursor: pointer;
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.button:active {
  transform: scale(0.95);
  box-shadow: 0 1px 3px var(--color-shadow);
}

.button:hover {
  filter: brightness(1.08);
}

.button-input {
  font-size: var(--font-size-body);
  color: var(--color-action-primary-text);
  font-weight: var(--font-weight-body);
}

</style>