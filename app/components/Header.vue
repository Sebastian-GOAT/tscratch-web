<template>
    <header class="px-8 w-full h-16 fixed top-0 left-0 flex justify-center md:justify-between items-center backdrop-blur-md">

        <!-- Logo -->
        <NuxtLink href="/" class="hidden md:block">
            <Logo class="h-6" />
        </NuxtLink>

        <!-- Navigation -->
        <nav>
            <ul class="flex gap-8 lg:gap-16">
                <li v-for="link in links" :key="link.name" class="text-xl">
                    <NuxtLink
                        :href="link.href"
                        class="flex items-center gap-2 font-medium text-fg/50"
                        exact-active-class="text-fg/100"
                        :target="link.target ?? '_self'"
                    >
                        <Icon :name="link.icon" size="md" />
                        <span class="hidden md:block">{{ link.name }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </nav>

        <div />

    </header>
</template>

<script setup lang="ts">
import Logo from '~/assets/logo.svg';

type Link = {
    name: string;
    icon: string;
    href: string;
    target?: `_${string}`;
};

const links: Link[] = [
    {
        name: 'Home',
        icon: 'uil:home-alt',
        href: '/'
    },
    {
        name: 'Docs',
        icon: 'uil:book-alt',
        href: '/docs'
    },
    {
        name: 'Showcases',
        icon: 'uil:monitor',
        href: '/showcases'
    },
    {
        name: 'Github',
        icon: 'uil:github',
        href: 'https://github.com/Sebastian-GOAT/tscratch',
        target: '_blank'
    }
];
</script>