<script setup lang="ts">

const route = useRoute();

const { getSpeaker } = useSpeakers();
const { getSessionsBySpeaker } = useSessions();
const speakerId = String(route.params.speakerId);

const speaker = getSpeaker(speakerId);

if (!speaker) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Speaker not found'
  });
}

const sessions = getSessionsBySpeaker(speakerId);

</script>

<template>
  <main class="speaker-profile">

    <h1>{{ speaker.name }}</h1>


    <p> Titel: {{ speaker.title }}</p>


    <p> Firma: {{ speaker.company }}</p>

    <h2>Bio:</h2>
    <p>{{ speaker.bio }}</p>

    <h2>Vorträge:</h2>
        <ul v-if="sessions.length > 0">
          <li
              v-for="session in sessions"
              :key="session.id"
          >
            <NuxtLink :to="`/sessions/${session.id}`">
              {{ session.title }}
            </NuxtLink>
          </li>
        </ul>


        <p v-else>
          No sessions available.
        </p>
      </main>
    </template>