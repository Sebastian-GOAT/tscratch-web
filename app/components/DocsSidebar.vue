<template>

    <aside class="py-8 h-[calc(100vh_-_64px)] fixed">

        <nav class="h-full flex justify-center">
            <ul class="h-full flex flex-col gap-2">
                <li v-for="link in links" :key="link.name">
                    <NuxtLink
                        :href="`/docs?tab=${link.short}`"
                        class="flex items-center gap-2"
                        :class="tab === link.short ? 'text-secondary' : ''"
                    >
                        <Icon :name="link.icon" />
                        {{ link.name }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>

    </aside>

</template>

<script setup lang="ts">
import tabs from '~/lib/tabs';

type Link = {
    name: string;
    short: string;
    icon: string;
};

const links: Link[] = [
    {
        name: 'Installation',
        short: 'installation',
        icon: 'uil:download-alt'
    },
    {
        name: 'Getting Started',
        short: 'getting-started',
        icon: 'uil:book'
    }
];

const route = useRoute();

const tab = computed(() => {
    const slug = route.query.tab;
    const val = Array.isArray(slug) ? slug[0] : slug;
    return tabs.includes(val ?? '')
        ? val
        : 'installation';
});

</script>