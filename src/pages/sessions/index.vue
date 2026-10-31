<script setup lang="ts">
import SessionFilterBar from "~/components/sessions/SessionFilterBar.vue";
import SessionList from "~/components/sessions/SessionList.vue";

const {
  selectedTrackId,
  selectedDay,
  selectedLevel,
  filteredSessions,
  availableTracks,
  availableDays
} = useSessions();

const { speakers } = useSpeakers();

const conference = useConference();
</script>

<template>
  <main class="sessions-page">

    <h1>Vorträge</h1>

    <SessionFilterBar
        v-model:track="selectedTrackId"
        v-model:day="selectedDay"
        v-model:level="selectedLevel"
        :tracks="availableTracks"
        :days="availableDays"
        :speakers="speakers"
    />

    <p class="results">
      {{ filteredSessions.length }} von
      {{ conference.sessions.length }} Vorträgen
    </p>

    <SessionList :sessions="filteredSessions" />

  </main>
</template>

<style scoped>
.sessions-page {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
  font-family: var(--font-heading);
}
</style>