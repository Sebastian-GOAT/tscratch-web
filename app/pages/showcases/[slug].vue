<template>

    <iframe
        v-if="showcases.find(s => s.short === slug)"
        :src="`/demos/${slug}/index.html`"
        class="w-screen h-screen"
        frameborder="0"
    />

    <main v-else class="h-screen flex justify-center items-center">
        <div class="flex flex-col items-center gap-2">
            <h1 class="text-center font-bold text-6xl">404</h1>
            <h2 class="text-center font-bold text-3xl">Showcase not found.</h2>
        </div>
    </main>

</template>

<script setup lang="ts">
import showcases from '~/lib/showcases';

definePageMeta({
    layout: 'none'
});

const route = useRoute();
const slug = route.params.slug as string;

</script>