<template>
    <div class="bg-gray-900 rounded-lg shadow-lg p-6 my-auto">
        <h1 class="bg-gradient-to-r from-blue-400 via-purple-400 to-green-600 bg-clip-text text-3xl font-extrabold text-transparent mb-4">{{ $t('experience.title') }}</h1>
        <div class="flex flex-col space-y-6 text-white">
            <!-- CISPA - Helmholtz Center for Cybersecurity -->
            <div class="flex flex-col md:flex-row items-center justify-between my-12 px-6">
                <div class="flex-shrink-0 w-full md:w-1/3 text-center md:text-left">
                    <p class="text-lg font-bold">{{ $t('experience.cispa.title') }}</p>
                    <p class="text-sm text-gray-300 mt-4">{{ $t('experience.cispa.position') }}</p>
                    <p class="text-sm text-gray-500">{{ $t('experience.cispa.date') }}</p>
                </div>
                <div class="w-full md:w-2/3 text-justify">
                    <p class="text-sm text-gray-300">{{ $t('experience.cispa.location') }}</p>
                    <p class="text-sm text-gray-500">{{ $t('experience.cispa.description') }}</p>
                </div>
            </div>
            <hr>
            <!-- Playa Esperanza -->
            <div class="flex flex-col md:flex-row items-center justify-between my-12 px-6">
                <div class="flex-shrink-0 w-full md:w-1/3 text-center md:text-left">
                    <p class="text-lg font-bold">{{ $t('experience.playa.title') }}</p>
                    <p class="text-sm text-gray-300 mt-4">{{ $t('experience.playa.position') }}</p>
                    <p class="text-sm text-gray-500">{{ $t('experience.playa.date') }}</p>
                </div>
                <div class="w-full md:w-2/3 text-justify">
                    <p class="text-sm text-gray-300">{{ $t('experience.playa.location') }}</p>
                    <p class="text-sm text-gray-500">{{ $t('experience.playa.description') }}</p>
                </div>
            </div>
            <hr>

            <!-- Garden Hotels -->
            <div class="flex flex-col md:flex-row items-center justify-between my-12 px-6">
                <div class="flex-shrink-0 w-full md:w-1/3 text-center md:text-left">
                    <p class="text-lg font-bold">{{ $t('experience.garden.title') }}</p>
                    <p class="text-sm text-gray-300 mt-4">{{ $t('experience.garden.position') }}</p>
                    <p class="text-sm text-gray-500">{{ $t('experience.garden.date') }}</p>
                </div>
                <div class="w-full md:w-2/3 text-justify">
                    <p class="text-sm text-gray-300">{{ $t('experience.garden.location') }}</p>
                    <p class="text-sm text-gray-500">{{ $t('experience.garden.description') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>