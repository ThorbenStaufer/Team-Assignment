<script setup lang="ts">
import { useSessions } from '~/composables/useSessions';

const route = useRoute();
const { getSession } = useSessions();

const sessionId = route.params.sessionId;
const session = sessionId ? getSession(sessionId.toString()) : undefined;

if (!session) {
    navigateTo('/');
}
</script>

<template>
    <BaseCard>
        <template #header>
            {{ session?.title }}
        </template>
        <template #default>
            {{ session?.abstract }}
        </template>
    </BaseCard>
</template>