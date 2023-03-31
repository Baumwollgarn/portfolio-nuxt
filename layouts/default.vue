<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between items-center">
                <NuxtLink :to="localePath('/')" class="font-bold">Portfolio</NuxtLink>
                <ul class="flex gap-4 items-center">
                    <li class=""><NuxtLink :to="localePath('about')">{{ $t('home.about') }}</NuxtLink></li>
                    <li class=""><NuxtLink :to="localePath('contact')">{{ $t('home.contact') }}</NuxtLink></li>
                    <li class=""><NuxtLink :to="localePath('education')">{{ $t('home.education') }}</NuxtLink></li>
                    <li class=""><NuxtLink :to="localePath('experience')">{{ $t('home.experience') }}</NuxtLink></li>
                    <li class="btn"><NuxtLink :to="localePath('projects')">{{ $t('home.projects') }}</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer>
            <div class="container mx-auto p-4 flex justify-between items-center border-t-2">
                <div>
                    <p class="text-gray-400">Made with ❤️ by Alexander Witt & NuxtJS</p>
                </div>
                <div class="flex justify-center">
                    <div class="grid grid-cols-3 gap-4">
                        <a href="https://www.instagram.com/waumbolli/?hl=en" target="_blank" class="btn-instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="mailto:info@isphero.com" class="btn-email">
                            <i class="far fa-envelope"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/alexander-witt-8125b113a/" target="_blank" class="btn-linkedin">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script setup>
const localePath = useLocalePath()
</script>
<style scoped>
.router-link-exact-active {
    color: #42b983;
}

.logo {
    width: 100px;
    height: 100px;
}
</style>