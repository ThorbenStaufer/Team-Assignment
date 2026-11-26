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
      <BaseCard class="main-content">

        <template #header>
          <div class="title">
            {{ speaker.name }}
          </div>

          <div class="subtitle">
            {{ speaker.title }} · {{ speaker.company }}
          </div>
        </template>
        <template #default>
          <div class="biography">
            <span class="section-label">Biografie:</span>
            <p>{{ speaker.bio }}</p>
          </div>
          <div class="sessions">
            <hr>
            <span class="section-label">Vorträge:</span>

            <div v-if="sessions.length > 0" class="links">
              <NuxtLink
                  v-for="session in sessions"
                  :key="session.id"
                  :to="`/sessions/${session.id}`"
                  class="navigation-link"
              >
                {{ session.title }}
              </NuxtLink>
            </div>

            <p v-else>
              Keine Vorträge verfügbar.
            </p>
          </div>
        </template>

      </BaseCard>
    </main>
</template>

<style scoped>

.speaker-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: var(--space-6);
  box-sizing: border-box;
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
}

.main-content {
  width: 100%;
  max-width: 700px;
  min-width: 0;
  box-sizing: border-box;
  font-family: var(--font-heading);
}

.subtitle {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-body);
  color: var(--color-text-secondary);
  margin-top: var(--space-2);
}

.biography {
  color: var(--color-text-primary);
  line-height: 1.5;
  margin-bottom: calc(var(--spacing-section) / 2);
}

.biography p {
  margin: var(--space-2) 0 0;
}

.section-label {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-body);
  color: var(--color-text-secondary);
}

.sessions {
  margin-top: calc(var(--spacing-section) / 2);
}

.sessions hr {
  border: none;
  border-top: 1px solid var(--color-text-secondary);
  opacity: 0.25;
  margin-bottom: var(--space-3);
}

.links {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-2);
}

.navigation-link {
  overflow-wrap: anywhere;
}
</style>

