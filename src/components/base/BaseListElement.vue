<script setup lang="ts">
</script>

<template>
  <div class="list-item">

    <div class="list-info">
      <div class="list-track">
        <slot name="track" />
      </div>

      <div class="list-title">
        <slot name="title" />
      </div>

      <div class="list-speaker">
        <slot name="speaker" />
      </div>
    </div>

    <div class="list-level">
      <slot name="level" />
    </div>

    <div class="list-day">
      <slot name="day" />
    </div>

    <div class="list-time">
      <slot name="time" />
    </div>

    <div v-if="$slots.action" class="list-action">
      <slot name="action" />
    </div>

  </div>
</template>

<style scoped>
.list-item {
  display: grid;
  grid-template-columns:
    minmax(0, 2.0fr)
    minmax(90px, 0.7fr)
    minmax(100px, 0.7fr)
    minmax(100px, 0.7fr)
    auto;

  align-items: center;
  gap: var(--spacing-card-padding);

  width: 100%;
  box-sizing: border-box;

  background-color: var(--color-surface);
  padding: var(--spacing-card-padding);
  border-radius: var(--radius-card);
  box-shadow: 0 8px 24px var(--color-shadow-light);
}

.list-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
}

.list-track {
  font: var(--font-body);
  font-size: var(--font-size-small-body);
  color: var(--color-text-secondary);
}

.list-title {
  font: var(--font-body);
  font-size: var(--font-size-large-body);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);

  overflow-wrap: break-word;
}

.list-speaker {
  font: var(--font-body);
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
}

.list-level,
.list-day,
.list-time {
  font: var(--font-body);
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
}

.list-time {
  white-space: nowrap;
}

.list-action {
  justify-self: end;
  white-space: nowrap;
}

</style>