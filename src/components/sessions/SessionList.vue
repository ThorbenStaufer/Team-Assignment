<script setup lang="ts">
import type { Session } from '~/types/session';

defineProps<{
  sessions: Session[];
}>();

const { availableTracks } = useSessions();
const { speakers } = useSpeakers();

function getTrackName(trackId: string): string {
  return availableTracks.value.find(
      (track) => track.id === trackId
  )?.name ?? trackId;
}

function getSpeakerNames(speakerIds: string[]): string {
  return speakerIds
      .map((id) => speakers.value.find(
          (speaker) => speaker.id === id
      )?.name)
      .filter((name) => name !== undefined)
      .join(', ');
}
</script>

<template>
  <div class="session-list">

    <div class="list-header">
      <div></div>
      <div>Level</div>
      <div>Tag</div>
      <div>Zeit</div>
      <div></div>
    </div>

    <BaseListElement
        v-for="session in sessions"
        :key="session.id"
    >
      <template #track>
        {{ getTrackName(session.trackId) }}
      </template>

      <template #title>
        {{ session.title }}
      </template>

      <template #speaker>
        {{ getSpeakerNames(session.speakerIds) }}
      </template>

      <template #level>
        {{ session.level }}
      </template>

      <template #day>
        {{ session.day }}
      </template>

      <template #time>
        {{ session.startTime }}–{{ session.endTime }}
      </template>

      <template #action>
        <NuxtLink :to="`/sessions/${session.id}`">
          Mehr ansehen
        </NuxtLink>
      </template>
    </BaseListElement>

    <p v-if="sessions.length === 0">
      Es wurden keine Vorträge gefunden, die den Filtern entsprechen.
    </p>

  </div>
</template>

<style scoped>
.session-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
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