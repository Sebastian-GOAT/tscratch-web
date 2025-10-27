<template>
    <Header />
    <div>
        <DocsSidebar class="w-[50px] md:w-[200px]" />
        <div class="ml-[50px] md:ml-[200px]">
            <slot />
        </div>
    </div>
</template>

<style>

body {
    padding-top: 64px;
}

</style>