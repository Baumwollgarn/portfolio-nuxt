<template>
    <div class="bg-gray-900 rounded-lg shadow-lg p-6 text-gray-300">
        <h2 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent mb-4">{{ $t('about.title') }}</h2>
        <div class="columns-2">
            <div class="col">
                <p v-html="$t('about.first')" class="mb-4"></p>
                <p v-html="$t('about.second')" class="mb-4"></p>
                <p v-html="$t('about.third')" class="mb-4"></p>
                <p v-html="$t('about.fourth')" class="mb-4"></p>
                <p v-html="$t('about.fifth')" class="mb-4"></p>
            </div>
            <div class="h-full">
                <img src="/me.webp" alt="Alex" class="rounded-lg shadow-lg">
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin-bottom: 20px;
  font-size: 18px;
}


</style>
<script setup lang="ts">
</script>