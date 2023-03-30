<template>
    <div class="">
        <div class="grid grid-cols-2 gap-10">
            <div class="col-span-1 p-7">
                <img :src="product.image" alt="" class="mx-auto my-7 img">
            </div>
            <div class="col-span-1">
                <h2 class="text-4xl font-bold p-2">{{ product.title }}</h2>
                <p class="text-xl p-2">Price : {{ product.price }} €</p>
                <h3 class="font-bold border-b-2 mb-4 p-2">Description:</h3>
                <p class="text-xl font-light">{{ product.description }}</p>
                <button class="btn flex items-center mt-5">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const {product } = defineProps<{ product: any }>()
if (!product) {
    throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
}
</script>

<style scoped>
.img {
    max-width: 400px;
max-height: 400px;
}
</style>