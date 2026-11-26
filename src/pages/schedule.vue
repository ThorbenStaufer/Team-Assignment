<script setup lang="ts">
const { mySchedule, removeSession } = useSchedule();
const { getSession } = useSessions();

const titleMap = ref<Map<string, string>>(new Map());
onMounted(() => mySchedule.value.forEach((entry) => {
    titleMap.value.set(entry.sessionId, getSession(entry.sessionId)?.title ?? '');
}));
</script>

<template>
    <div class="schedule-page">
        <h1>Mein Programm</h1>
        <ScheduleList :schedule="mySchedule" :title-map="titleMap" @remove="removeSession($event)" />
    </div>
</template>

<style lang="css" scoped>
.schedule-page {
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
  margin-bottom: var(--space-6);
}
</style>