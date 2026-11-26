<script setup lang="ts">
import type { Session } from '~/types/session';
import type { Speaker } from '~/types/speaker';
import type { Track } from '~/types/track';
import BaseButton from '~/components/base/BaseButton.vue'

const props = defineProps<{
  sessions: Session[];
  tracks: Track[];
  speakers: Speaker[];
}>();
defineEmits<{
  ( e: 'saveToSchedule', session: Session ): void;
}>();

function getTrackName(trackId: string): string {
  return props.tracks.find(
      (track) => track.id === trackId
  )?.name ?? trackId;
}

function getSpeakerNames(speakerIds: string[]): string {
  return speakerIds
      .map((id) => props.speakers.find(
          (speaker) => speaker.id === id
      )?.name)
      .filter((name) => name !== undefined)
      .join(', ');
}
</script>

<template>
  <div class="session-list">

    <div class="list-header">
      <div>Vortrag</div>
      <div>Level</div>
      <div>Tag</div>
      <div>Zeit</div>
      <div />
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
        <div class="session-actions">
          <BaseButton @click="$emit('saveToSchedule', session)">Speichern</BaseButton>
          <NuxtLink :to="`/sessions/${session.id}`">
            Mehr ansehen →
          </NuxtLink>
        </div>
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

.session-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
}

.list-header {
  display: grid;
  padding: 0 var(--space-6);


  grid-template-columns:
  minmax(0, 3fr)
  minmax(0, 1.2fr)
  minmax(0, 1fr)
  minmax(0, 1fr)
  minmax(0, 1.4fr);

  font: var(--font-body);
  font-size: var(--font-size-small-body);
  font-weight: var(--font-weight-heading);
  color: var(--color-text-secondary);
}
</style>