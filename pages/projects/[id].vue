<template>
    <div>
        <Head>
            <Title>{{ product.title }} | Alexander Witt</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProjectDetails :product="product" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'projects',
})

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const {data: product} = await useFetch(uri)


</script>

<style lang="scss" scoped>

</style>