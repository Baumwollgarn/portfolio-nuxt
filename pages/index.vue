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
                        <a class="landing-element-2 block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" href="/about">
                            {{ $t('home.about') }}</a>
                        <a class="landing-element-3 block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href="/contact">
                            {{ $t('home.contact') }}</a>
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

.landing-element,.landing-element-2,.landing-element-3 {
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

</style>