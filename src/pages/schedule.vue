<script setup lang="ts">
const { mySchedule, removeSession } = useSchedule();
</script>

<template>
    <div v-for="entry in mySchedule" :key="entry.sessionId">
        {{ entry.day }}: {{ entry.startTime }} - {{ entry.endTime }}
        {{ entry.room?.name }}
        <button @click="removeSession(entry.sessionId)">X</button>
    </div>
</template>