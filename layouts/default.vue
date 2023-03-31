<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between items-center">
                <NuxtLink :to="localePath('/')">Portfolio</NuxtLink>
                <div class="lg:hidden">
                    <button @click="showMobileMenu = !showMobileMenu" class="flex items-center border border-gray-300 rounded hover:text-black focus:outline-none">
                        <svg class="h-8 w-8" fill="none" viewBox="0 0 24 24">
                            <path v-if="showMobileMenu" d="M6 18L18 6M6 6l12 12"></path>
                            <path v-else stroke="#0b0b0b" stroke-width="1" stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"></path>

                        </svg>
                    </button>
                </div>
                <ul class="hidden lg:flex lg:gap-4 lg:items-center">
                    <li class=""><NuxtLink :to="localePath('about')">{{ $t('home.about') }}</NuxtLink></li>
                    <li class=""><NuxtLink :to="localePath('contact')">{{ $t('home.contact') }}</NuxtLink></li>
                    <li class=""><NuxtLink :to="localePath('education')">{{ $t('home.education') }}</NuxtLink></li>
                    <li class=""><NuxtLink :to="localePath('experience')">{{ $t('home.experience') }}</NuxtLink></li>
                    <li class="btn"><NuxtLink :to="localePath('projects')">{{ $t('home.projects') }}</NuxtLink></li>
                </ul>
                <transition name="slide">
                    <div v-if="showMobileMenu" class="absolute top-0 left-0 h-full w-full z-10 bg-gray-200 items-center flex justify-center">
                        <div class="p-4">
                            <ul class="flex flex-col gap-4 text-center">
                                <li><NuxtLink :to="localePath('about')" @click="showMobileMenu = false">{{ $t('home.about') }}</NuxtLink></li>
                                <li><NuxtLink :to="localePath('contact')" @click="showMobileMenu = false">{{ $t('home.contact') }}</NuxtLink></li>
                                <li><NuxtLink :to="localePath('education')" @click="showMobileMenu = false">{{ $t('home.education') }}</NuxtLink></li>
                                <li><NuxtLink :to="localePath('experience')" @click="showMobileMenu = false">{{ $t('home.experience') }}</NuxtLink></li>
                                <li><NuxtLink :to="localePath('projects')" class="btn" @click="showMobileMenu = false">{{ $t('home.projects') }}</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </transition>
            </nav>
        </header>
        <div class="container mx-auto p-4">
            <slot />
        </div>
        <footer>
            <div class="container mx-auto p-4 flex lg:flex-row lg:gap-0 gap-5 flex-col justify-between items-center border-t-2">
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
<script>
export default {
    data() {
        return {
            showMobileMenu: false,
        };
    },
};
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