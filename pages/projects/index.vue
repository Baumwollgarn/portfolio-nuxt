<template>
    <div class="py-12 bg-gray-900 rounded-lg shadow-lg lg:p-6 text-gray-300">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">{{ $t('projects.title') }}</h2>
            <div class="gap-8 flex justify-center">
                <!-- First project -->
                <div class="bg-white lg:w-1/2 rounded-lg shadow-lg p-6">
                    <div class="flex items-center justify-center mb-4">
                        <img src="/logo.png" alt="Project 1 logo" class="h-32 w-32">
                    </div>
                    <p class="text-gray-600 mb-4">{{ $t('projects.project1Description') }}</p>
                    <div class="container flex justify-evenly">
                        <a href="https://github.com/truenoscuro/isphero" target="_blank" class="text-blue-500 hover:text-blue-600">{{ $t('projects.viewGithub') }}</a>
                        <a href="https://isphero.com/" target="_blank" class="text-blue-500 hover:text-blue-600">{{ $t('projects.viewWebsite') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
definePageMeta({
    layout: 'projects',
})


useHead({
    title: 'Projects | Alexander Witt',
    meta: [
        {
            name: 'description',
            content: 'Projects page of Alexander Witt',
        },
    ],
})
</script>

<style lang="scss" scoped>

</style>