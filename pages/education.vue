<template>
    <div class="bg-gray-900 rounded-lg shadow-lg p-6 my-auto">
        <section class="py-8 text-white">
            <div class="container mx-auto px-4">
                <h1 class="bg-gradient-to-r from-blue-400 via-purple-400 to-green-600 bg-clip-text text-3xl font-extrabold text-transparent mb-4">{{ $t('education.title') }}</h1>
                <div class="flex flex-col sm:flex-row justify-between mb-5 gap-12">
                    <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
                        <h2 class="text-lg font-bold">{{ $t('education.daw.title') }}</h2>
                        <p class="text-gray-300"> {{ $t('education.daw.school')}}</p>
                        <p class="text-gray-400 mb-4"> {{ $t('education.daw.location')}}</p>
                        <p class="mb-4">{{ $t('education.daw.text')}}</p>
                        <ul class="list-disc pl-8">
                            <li>Java (Spring Boot)</li>
                            <li>Javascript (VueJS, Quasar, NuxtJS)</li>
                            <li>{{ $t('education.daw.li1') }}</li>
                            <li>{{ $t('education.daw.li2') }}</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                    <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
                        <h2 class="text-lg font-bold">{{ $t('education.eso.title') }} </h2>
                        <p class="text-gray-300">{{ $t('education.eso.school') }} </p>
                        <p class="text-gray-400 mb-4">{{ $t('education.eso.location') }} </p>
                        <p class="mb-4"> {{ $t('education.eso.text') }} </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>