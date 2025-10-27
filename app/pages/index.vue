<template>
    <section class="px-16 py-20 flex justify-center">

        <div class="flex flex-col gap-8 items-center">
            <h1 class="text-6xl text-center font-semibold">
                Build, Learn, Explore
            </h1>
            <p class="max-w-125 text-center text-fg/50 leading-7">
                TScratch is a lightweight TypeScript game engine inspired by Scratch, designed to make 2D game development simple, fun, and accessible for beginners and educators alike.
            </p>
            <div class="mt-4 flex gap-2">
                <UButton
                    color="neutral"
                    icon="uil:book-alt"
                    href="/docs"
                >
                    Read the docs
                </UButton>
                <UButton
                    color="secondary"
                    variant="soft"
                    icon="uil:monitor"
                    href="/showcases"
                >
                    View showcases
                </UButton>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'default'
});

useHead({
    title: 'Home | TScratch',
    meta: [
        { name: 'description', content: 'A Scratch-style TypeScript game engine.' }
    ]
});
</script>