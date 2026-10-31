<script setup lang="ts">

</script>

<template>
  <nav class="navigation">
    <NuxtLink to="/sessions">Übersicht</NuxtLink>
    <NuxtLink to="/schedule">Mein Programm</NuxtLink>
  </nav>
  <NuxtPage />
</template>

<style lang="css" scoped>
.navigation {
  display: flex;
  gap: 1rem;
}
</style>

<style>
a {
  color: var(--color-link);
}

a:hover {
  color: var(--color-link-highlight);
}
</style>