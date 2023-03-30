<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between items-center">
                <NuxtLink to="/" class="font-bold">Portfolio</NuxtLink>
                <ul class="flex gap-4 items-center">
                    <li class=""><NuxtLink to="/">Home</NuxtLink></li>
                    <li class=""><NuxtLink to="/about">About</NuxtLink></li>
                    <li class="btn"><NuxtLink to="/projects">Projects</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
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