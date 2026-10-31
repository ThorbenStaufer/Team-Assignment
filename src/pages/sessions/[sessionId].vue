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
    <main class="center">
        <BaseCard class="main-content">
            <template #header>
                {{ session?.title }}
                <div class="time">
                    {{ session?.day }}: {{ session?.startTime }} - {{ session?.endTime }}
                </div>
            </template>
            <template #default>
                <div class="abstract">{{ session?.abstract }}</div>
                <div class="details">
                    <base-readonly-input label="Raum" :value="availableRooms.find((room) => room.id === session?.roomId)?.name" />
                    <base-readonly-input label="Track" :value="availableTracks.find((track) => track.id === session?.trackId)?.name" />
                    <base-readonly-input label="Format" :value="session?.format" />
                    <base-readonly-input label="Level" :value="session?.level" />
                </div>
                <div class="speaker">
                    <hr>
                    <span>Sprecher:</span>
                    <div class="links">
                        <NuxtLink v-for="speaker in session?.speakerIds" :key="speaker" :to="`/speakers/${speaker}`" class="navigation-link">{{ getSpeaker(speaker)?.name }}</NuxtLink>
                    </div>
                </div>
            </template>
        </BaseCard>
    </main>
</template>

<style lang="css" scoped>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.main-content {
    max-width: 35%;
    font-family: var(--font-heading);
}

.time {
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-body);
    color: var(--color-text-secondary);
}

.abstract {
    color: var(--color-text-primary);
    margin-bottom: calc(var(--spacing-section) / 2);
}

.details {
    display: flex;
}

.speaker {
    margin-top: calc(var(--spacing-section) / 2);
}

.links {
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
}
</style>