<template>
    <div>
        <header>
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Portfolio</NuxtLink>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                <li class="button is-secondary"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="button is-secondary"><NuxtLink to="/about">About</NuxtLink></li>
                <li class="button is-secondary"><NuxtLink to="/projects">Projects</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #42b983;
}

.logo {
    width: 100px;
    height: 100px;
}
</style>
<script setup lang="ts">
</script>