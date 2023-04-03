<template>
    <div>
        <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
            <div v-for="p in products">
                <ProjectCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'projects',
})

// Fetch stuff
const { data: products } = await useFetch('https://fakestoreapi.com/products')

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