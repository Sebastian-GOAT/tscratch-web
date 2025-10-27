<template>
    <UApp>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";

:root {
    --primary: #2f27ce;
    --secondary: #060075;

    --bg: #f4f4f4;
    --fg: black;
}

.dark {
    --secondary: #908aff;

    --bg: #070722;
    --fg: white;
}

@theme inline {
    --color-primary: var(--primary);
    --color-secondary: var(--secondary);

    --color-bg: var(--bg);
    --color-fg: var(--fg);
}

body {
    min-height: 100vh;
    background-color: var(--bg);
    color: var(--fg);
    font-family: 'Manrope', sans-serif;
    transition: background-color 0.3s, color 0.3s;
}
</style>