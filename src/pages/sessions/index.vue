<script setup lang="ts">
import SessionFilterBar from "~/components/sessions/SessionFilterBar.vue";
import SessionList from "~/components/sessions/SessionList.vue";

const {
  selectedTrackId,
  selectedDay,
  selectedLevel,
  selectedTimeFrom,
  selectedTimeTo,
  filteredSessions,
  availableTracks,
  availableDays
} = useSessions();

const { speakers } = useSpeakers();

const conference = useConference();

const { addSession } = useSchedule();
</script>

<template>
  <main class="sessions-page">

    <h1>Vorträge</h1>

    <SessionFilterBar
        v-model:track="selectedTrackId"
        v-model:day="selectedDay"
        v-model:level="selectedLevel"
        v-model:time-from="selectedTimeFrom"
        v-model:time-to="selectedTimeTo"
        :tracks="availableTracks"
        :days="availableDays"
    />

    <p class="results">
      {{ filteredSessions.length }} von
      {{ conference.sessions.length }} Vorträgen
    </p>

    <SessionList
        :sessions="filteredSessions"
        :tracks="availableTracks"
        :speakers="speakers"
        @save-to-schedule="addSession($event)"
    />
  </main>
</template>

<style scoped>
.sessions-page {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: var(--space-6);
  box-sizing: border-box;

  color: var(--color-text-primary);
  font-family: var(--font-heading);
}

h1 {
  margin-top: 0;
  margin-bottom: var(--space-2);
}

.results {
  color: var(--color-text-secondary);
  font-size: var(--font-size-small-body);
  margin: var(--space-6) 0 var(--space-4);
}
</style>