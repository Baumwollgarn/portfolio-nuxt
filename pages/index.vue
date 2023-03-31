<template>
    <div>
        <section class="bg-gray-900 text-white">
            <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div class="mx-auto max-w-3xl text-center">
                    <h1 class="landing-element bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                        {{ $t('home.title') }}
                        <span class="sm:block"> {{ $t('home.description')}}</span>
                    </h1>
                    <div class="mt-8 flex flex-wrap justify-center gap-4">
                        <NuxtLink class="landing-element-2 block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" :to="localePath('about')">
                            {{ $t('home.about') }}</NuxtLink>
                        <NuxtLink  class="landing-element-3 block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" :to="localePath('contact')">
                            {{ $t('home.contact') }}</NuxtLink>
                    </div>
                    <div class="container flex justify-center gap-10 mt-16">
                        <NuxtLink v-for="locale in availableLocales" class="rounded-r landing-element-box" :to="switchLocalePath(locale.code)">
                            <img :src="locale.img" :alt="locale.name" class="w-10 h-10 rounded-full" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'homepage',
})

const localePath = useLocalePath()

const switchLocalePath = useSwitchLocalePath()
const availableLocales = [
    { code: 'en', name: 'English', img: '/united-states.png' },
    { code: 'es', name: 'Español', img: '/spain.png'},
    { code: 'de', name: 'Deutsch' ,img: '/germany.png'},
    { code: 'fr', name: 'Français', img: '/france.png'}
]

</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin-bottom: 20px;
  font-size: 18px;
}

.landing-element,.landing-element-2,.landing-element-3,.landing-element-box {
  opacity: 0;
  transform: translateY(-50px);
  animation: slide-in 1.5s ease-in-out forwards;
}

@keyframes slide-in {
  0% {
    opacity: 0;
    transform: translateY(-450px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.landing-element:nth-child(1) {
  animation-delay: 1s;
}

.landing-element-2 {
  animation-delay: 0.65s;
}

.landing-element-3 {
  animation-delay: 0.4s;
}

.landing-element-box {
  animation-delay: 0.22s;
  filter: contrast(85%);
}

.landing-element-box:nth-child(1) {
  animation-delay: 0.25s;
}

.landing-element-box:nth-child(2) {
  animation-delay: 0.28s;
}

.landing-element-box:nth-child(3) {
  animation-delay: 0.31s;
}

.landing-element-box:nth-child(4) {
  animation-delay: 0.34s;
}
</style>