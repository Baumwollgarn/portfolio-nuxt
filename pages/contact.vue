<template>
    <div class="bg-gray-900 rounded-lg shadow-lg p-6">
        <h2 class="bg-gradient-to-r from-green-300 via-purple-400 to-blue-800 bg-clip-text text-3xl font-extrabold text-transparent mb-4">{{ $t('contact.title') }}</h2>
        <p class="text-gray-300 mb-4">{{ $t('contact.first') }}</p>
        <p class="text-gray-300">{{ $t('contact.second') }}</p>
        <form action="https://formspree.io/f/xrgvypyo" method="POST" class="mt-8">
            <div class="flex flex-col md:flex-row">
                <div class="flex-1 mb-4 md:mr-4">
                    <label for="name" class="block text-gray-300 text-sm font-bold mb-2">{{ $t('contact.name')}}</label>
                    <input type="text" name="name" id="name" :placeholder="$t('contact.namePlaceholder')" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-300 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                </div>
                <div class="flex-1 mb-4 md:ml-4">
                    <label for="email" class="block text-gray-300 text-sm font-bold mb-2">{{ $t('contact.email')}}</label>
                    <input type="email" name="_replyto" id="email" :placeholder="$t('contact.emailPlaceholder')" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-300 leading-tight focus:outline-none focus:bg-white focus:border-blue-500">
                </div>
            </div>
            <div class="mb-4">
                <label for="message" class="block text-gray-300 text-sm font-bold mb-2">{{ $t('contact.message')}}</label>
                <textarea name="message" id="message" rows="5" :placeholder="$t('contact.messagePlaceholder')" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-300 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"></textarea>
            </div>
            <div class="flex justify-end">
                <button type="submit" class="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded">{{ $t('contact.send')}}</button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>