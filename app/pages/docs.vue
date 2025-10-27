<template>

    <main v-if="html">
        <article v-html="html" class="flex flex-1 flex-col overflow-y-auto markdown-body" />
    </main>
    <main v-else class="flex flex-1 flex-col gap-2 justify-center items-center">
        <h1 class="text-center font-bold text-6xl">500</h1>
        <h2 class="text-center font-bold text-3xl">Internal server error.</h2>
    </main>

</template>

<script setup lang="ts">
import tabs from '~/lib/tabs';
import markdownToHTML from '~/lib/markdownToHTML';

const route = useRoute();

const tab = computed(() => {
  const slug = route.query.tab;
  const val = Array.isArray(slug) ? slug[0] : slug;
  return tabs.includes(val ?? '')
    ? val
    : 'installation';
});

// 👇 The key fix: make the fetch URL reactive
const { data: markdown } = await useFetch(() => `https://raw.githubusercontent.com/Sebastian-GOAT/tscratch/main/docs/${tab.value}.md`);

const html = computed(() => markdown.value ? markdownToHTML(markdown.value as string) : null);

// Meta
definePageMeta({
    layout: 'docs'
});

useHead({
    title: `Docs | TScratch`,
    meta: [
        { name: 'description', content: `Explore the documentation of the TScratch game engine.` }
    ]
});
</script>

<style>
@import 'github-markdown-css/github-markdown-dark.css';

.markdown-body {
    background-color: var(--bg);
    color: var(--fg);
    box-sizing: border-box;
    min-width: 200px;
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem;
}
</style>