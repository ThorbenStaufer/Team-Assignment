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
            <div></div>
            <div>Tag</div>
            <div>Zeit</div>
            <div></div>
        </div>
        <BaseListElement v-for="entry in schedule" :key="entry.sessionId">
            <template #title>{{ titleMap.get(entry.sessionId) }}</template>
            <template #room>{{ entry.room?.name }}</template>
            <template #day>{{ entry.day }}</template>
            <template #time>{{ entry.startTime }}-{{ entry.endTime }}</template>
            <template #action>
                <NuxtLink :to="`/sessions/${entry.sessionId}`">
                    Mehr ansehen
                </NuxtLink>
                <button @click="$emit('remove', entry.sessionId)">X</button>
            </template>
        </BaseListElement>
    </main>
</template>

<style lang="css" scoped>
.schedule-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    color: var(--color-text-primary);
    font-family: var(--font-heading);
}

.list-header {
  display: grid;

  grid-template-columns:
  minmax(0, 1.9fr)
  minmax(90px, 0.7fr)
  minmax(100px, 0.7fr)
  minmax(110px, 1fr)
  10px;

  font: var(--font-body);
  font-size: var(--font-size-small-body);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-secondary);
}
</style>