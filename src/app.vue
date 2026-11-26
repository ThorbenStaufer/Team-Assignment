<script setup lang="ts">

</script>

<template>
  <NuxtPwaManifest />

  <header class="header">
    <nav class="navigation">
      <NuxtLink to="/sessions" class="logo">
        Shift
      </NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/sessions" class="nav-link">Übersicht</NuxtLink>
        <NuxtLink to="/schedule" class="nav-link">Mein Programm</NuxtLink>
      </div>
    </nav>
  </header>
  <NuxtPage />
</template>

<style lang="css" scoped>
.header {
  background: white;
  box-shadow: 0 2px 12px var(--color-shadow);
}

.navigation {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 28px;
  font-weight: var(--font-weight-heading);
  color: var(--color-action-primary);
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.nav-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-full);
}
</style>

<style>
body {
  margin: 0;
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
  font-family: var(--font-heading);
}
a {
  color: var(--color-link);
}

a:hover {
  color: var(--color-link-highlight);
}
</style>