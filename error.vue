<template>
    <div class="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-6 px-4">
        <div class="max-w-md w-full">
            <div class="bg-white shadow-lg rounded-lg px-6 py-8">
                <h1 class="text-5xl font-bold text-red-500 mb-6">{{ error.statusCode }}</h1>
                <p class="text-xl font-bold mb-6">{{ error.message }}</p>
                <NuxtLink to="/" class="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-md inline-block">
                    Go back home
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ error: any }>()
</script>

<style scoped>
.bg-gray-100 {
    background-color: #F9FAFB;
}

.rounded-lg {
    border-radius: 0.5rem;
}

.shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.text-red-500 {
    color: #EF4444;
}

.bg-red-500 {
    background-color: #EF4444;
}

.hover\:bg-red-600:hover {
    background-color: #DC2626;
}
</style>