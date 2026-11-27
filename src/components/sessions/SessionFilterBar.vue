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

const selectedTimeFrom = defineModel<string>('timeFrom', {
  required: true
});

const selectedTimeTo = defineModel<string>('timeTo', {
  required: true
});

const isTimeRangeInvalid = computed<boolean>(() =>
  !!selectedTimeFrom.value && !!selectedTimeTo.value && selectedTimeFrom.value > selectedTimeTo.value
);

function resetTimeRange(): void {
  selectedTimeFrom.value = '';
  selectedTimeTo.value = '';
}

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

    <fieldset class="time-range">
      <legend>Uhrzeit</legend>

      <label>
        Von
        <input
            v-model="selectedTimeFrom"
            type="time"
            :aria-invalid="isTimeRangeInvalid"
        >
      </label>

      <label>
        Bis
        <input
            v-model="selectedTimeTo"
            type="time"
            :aria-invalid="isTimeRangeInvalid"
        >
      </label>

      <button
          v-if="selectedTimeFrom || selectedTimeTo"
          type="button"
          @click="resetTimeRange"
      >
        Zurücksetzen
      </button>

      <p
          v-if="isTimeRangeInvalid"
          class="time-range-error"
          role="alert"
      >
        Die Start-Uhrzeit muss vor der End-Uhrzeit liegen.
      </p>
    </fieldset>

  </div>
</template>

<style scoped>
.time-range {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  border: none;
  padding: 0;
  margin: 0;
}

.time-range legend {
  float: left;
  padding: 0;
}

.time-range-error {
  flex-basis: 100%;
  margin: 0;
  color: var(--color-error);
  font-size: var(--font-size-small-body);
}
</style>
