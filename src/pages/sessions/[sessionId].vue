<script setup lang="ts">
import BaseReadonlyInput from '~/components/base/BaseReadonlyInput.vue';
import { useSessions } from '~/composables/useSessions';

const route = useRoute();
const { getSession, availableTracks, availableRooms } = useSessions();
const { getSpeaker } = useSpeakers();
const { addSession } = useSchedule();

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
                <div class="title">
                    <span>{{ session?.title }}</span>
                </div>
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
              <div class="button-container">
                <BaseButton v-if="session" @click="addSession(session)">
                  Speichern
                </BaseButton>
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
  padding: var(--space-6);
  box-sizing: border-box;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: var(--space-6);
}

.main-content {
  width: 100%;
  max-width: 700px;
  min-width: 0;
  box-sizing: border-box;
  font-family: var(--font-heading);
}

.title {
    display: flex;
    justify-content: space-between;
}

.time {
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-body);
    color: var(--color-text-secondary);
    margin-top: var(--space-2);
}


.abstract {
    color: var(--color-text-primary);
    margin-bottom: calc(var(--spacing-section) / 2);
}

.details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: var(--space-4);
}

.links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: var(--space-4);
  margin-top: var(--space-2);
}

.speaker {
    margin-top: calc(var(--spacing-section) / 2);
}


</style>