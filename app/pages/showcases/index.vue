<template>
    <section class="py-16 flex flex-col gap-12 items-center">

        <h1 class="mb-8 text-2xl font-semibold">
            TScratch Showcases
        </h1>

        <ul role="list" class="w-4/5 flex flex-col gap-8">

            <li
                v-for="(showcase, i) in showcases"
                :class="`flex flex-col gap-4 lg:gap-10 ${i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`"
            >
                <!-- Image -->
                <div class="w-full lg:w-1/2 lg:aspect-video"> 
                    <NuxtImg :src="showcase.img" class="w-full h-full object-cover rounded-2xl" />
                </div>
                <!-- Details -->
                <article class="w-full lg:w-1/2 flex flex-col gap-2 justify-center items-start">
                    <h3 class="text-xl font-medium">
                        {{ showcase.name }}
                    </h3>
                    <p class="text-fg/60">
                        {{ showcase.description }}
                    </p>
                    <UButton
                        color="secondary"
                        variant="subtle"
                        :href="`/showcases/${showcase.short}`"
                        target="_blank"
                        class="mt-2 px-4 py-2"
                    >
                        View Showcase
                    </UButton>
                </article>
            </li>

        </ul>

    </section>
</template>

<script setup lang="ts">
import showcases from '~/lib/showcases';

definePageMeta({
    layout: 'default'
});

useHead({
    title: `Showcases | TScratch`,
    meta: [
        { name: 'description', content: `Explore the endless possibilities of the TScratch game engine.` }
    ]
});
</script>