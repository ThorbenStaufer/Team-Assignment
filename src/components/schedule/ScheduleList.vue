<script setup lang="ts">
import type { Schedule } from '~/types/schedule';

interface Props {
    schedule: Schedule[],
    titleMap: Map<string, string>
}

defineProps<Props>();
defineEmits<{
    ( e: 'remove', id: string ): void
}>();
</script>

<template>
    <main class="schedule-list">
        <div class="list-header">
          <div>Vortrag</div>
          <div>Tag</div>
          <div>Zeit</div>
          <div />
        </div>
        <BaseListElement v-for="entry in schedule" :key="entry.sessionId">
            <template #title>{{ titleMap.get(entry.sessionId) }}</template>
            <template #room>{{ entry.room?.name }}</template>
            <template #day>{{ entry.day }}</template>
            <template #time>{{ entry.startTime }}-{{ entry.endTime }}</template>
            <template #action>
              <div class="schedule-actions">
                <base-button class="button" @click="$emit('remove', entry.sessionId)">X</base-button>
                <NuxtLink :to="`/sessions/${entry.sessionId}`" class="details-link">
                  Mehr ansehen →
                </NuxtLink>
              </div>
            </template>
        </BaseListElement>
    </main>
</template>

<style lang="css" scoped>

.schedule-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
}

.details-link {
    overflow-wrap: anywhere;
}

.schedule-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    color: var(--color-text-primary);
    font-family: var(--font-heading);
}

.button {
  background-color: var(--color-error-500);
}

.list-header {
  display: grid;

  grid-template-columns:
      minmax(0, 3fr)
      minmax(0, 1fr)
      minmax(0, 1fr)
      minmax(0, 1.4fr);

  padding: 0 var(--spacing-card-padding);
  gap: var(--spacing-card-padding);

  font: var(--font-body);
  font-size: var(--font-size-small-body);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-secondary);
}
</style>