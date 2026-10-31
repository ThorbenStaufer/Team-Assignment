<script setup lang="ts">
const { mySchedule, removeSession } = useSchedule();
const { getSession } = useSessions();

const titleMap = new Map<string, string>();
mySchedule.value.forEach((entry) => {
    titleMap.set(entry.sessionId, getSession(entry.sessionId)?.title ?? '');
});
</script>

<template>
    <div class="schedule-page">
        <h1>Mein Programm</h1>
        <ScheduleList :schedule="mySchedule" :title-map="titleMap" @remove="removeSession($event)" />
    </div>
</template>

<style lang="css" scoped>
.schedule-page {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
  font-family: var(--font-heading);
}
</style>