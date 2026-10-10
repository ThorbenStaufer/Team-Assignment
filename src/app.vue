<script setup lang="ts">
const conference = useConference();
</script>

<template>
  <div>
    Number of sessions: {{ conference.sessions.length }}
  </div>
</template>
