<script setup lang="ts">
const conference = useConference();
</script>

<template>
  <main class="home">
    <p class="eyebrow">THE FRONTEND CONFERENCE</p>

    <h1>Shift</h1>
    <p class="intro">
      Welcome to this year's conference, featuring {{ conference.sessions.length }} Sessions
    </p>

    <div class="cards-container">
    <BaseCard>
      <template #header>
        <h3>Session 1</h3>
      </template>
      <p> Session info ...</p>
    </BaseCard>

    <BaseCard>
      <template #header>
        <h3>Session 2</h3>
      </template>
      <p> Session info ...</p>
    </BaseCard>
      </div>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  padding: var(--space-6);
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
  font-family: var(--font-heading);
  text-align: center;
}

.cards-container {
  margin-top: var(--spacing-section);
  display: flex;
  gap: var(--space-5);
  justify-content: center;
  flex-wrap: wrap;
}

.intro {
  color: var(--color-text-secondary);
}

.eyebrow {
  color: var(--color-primary-600);
}
</style>