<script setup lang="ts">
import type { Track } from '~/types/track';
import type { SessionLevel } from '~/types/session';

defineProps<{
  tracks: Track[];
  days: string[];
}>();

const selectedTrackId = defineModel<string>('track', {
  required: true
});

const selectedDay = defineModel<string>('day', {
  required: true
});

const selectedLevel = defineModel<SessionLevel | ''>('level', {
  required: true
});

</script>
<template>
  <div class="filter-bar">

    <label>
      Track
      <select v-model="selectedTrackId">
        <option value="">Alle Tracks</option>

        <option
            v-for="track in tracks"
            :key="track.id"
            :value="track.id"
        >
          {{ track.name }}
        </option>
      </select>
    </label>

    <label>
      Tag
      <select v-model="selectedDay">
        <option value="">Alle Tage</option>

        <option
            v-for="day in days"
            :key="day"
            :value="day"
        >
          {{ day }}
        </option>
      </select>
    </label>

    <label>
      Level
      <select v-model="selectedLevel">
        <option value="">Alle Levels</option>
        <option value="Einsteiger">Einsteiger</option>
        <option value="Fortgeschritten">Fortgeschritten</option>
        <option value="Experte">Experte</option>
      </select>
    </label>

  </div>
</template>