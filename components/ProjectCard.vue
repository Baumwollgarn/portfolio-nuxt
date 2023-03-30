<template>
        <div class="bg-white shadow-md rounded-md p-4 h-full">
            <div class="flex justify-center">
                <NuxtLink :to="`/projects/${product.id}`">
                    <img :src="product.image" alt="" class="w-32 h-32">
                </NuxtLink>
            </div>
            <div class="mt-4 flex flex-col">
                <h3 class="text-lg font-bold truncate m-4">{{ product.title }}</h3>
                <p class="text-gray-500 m-4">{{ product.price }} €</p>
                <NuxtLink :to="`/projects/${product.id}`" class="btn m-4 text-center">Details</NuxtLink>
            </div>
        </div>
</template>

<script setup lang="ts">

const { product } = defineProps<{ product: any }>()

</script>

<style scoped>

</style>