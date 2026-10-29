<script setup lang="ts">
import BaseReadonlyInput from '~/components/base/BaseReadonlyInput.vue';
import { useSessions } from '~/composables/useSessions';

const route = useRoute();
const { getSession, availableTracks, availableRooms } = useSessions();
const { getSpeaker } = useSpeakers();

const sessionId = route.params.sessionId;
const session = sessionId ? getSession(sessionId.toString()) : undefined;

if (!session) {
    navigateTo('/');
}
</script>

<template>
    <h1>{{ session?.title }}</h1>
    <span>{{ session?.abstract }}</span>
    <div>
        {{ session?.day }}: {{ session?.startTime }} - {{ session?.endTime }}
    </div>
    <div>
        <base-readonly-input label="Raum" :value="availableRooms.find((room) => room.id === session?.roomId)?.name" />
        <base-readonly-input label="Track" :value="availableTracks.find((track) => track.id === session?.trackId)?.name" />
        <base-readonly-input label="Format" :value="session?.format" />
        <base-readonly-input label="Level" :value="session?.level" />
    </div>
    <div>
        <NuxtLink v-for="speaker in session?.speakerIds" :key="speaker" :to="`/speakers/${speaker}`">{{ getSpeaker(speaker)?.name }}</NuxtLink>
    </div>
</template>