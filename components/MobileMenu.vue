<template>
    <div class="fixed z-20 top-0 left-0 w-full h-full bg-white">
        <nav class="flex flex-col h-full">
            <div class="flex justify-end p-4">
                <button class="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900" @click="$emit('close')">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="flex flex-col justify-center items-center flex-grow">
                <NuxtLink
                        v-for="item in menuItems"
                        :key="item.path"
                        :to="localePath(item.path)"
                        class="text-gray-700 hover:text-gray-900 py-4 text-2xl font-bold"
                        active-class="text-green-500"
                        exact
                        @click="$emit('close')"
                >
                    {{ $t(item.text) }}
                </NuxtLink>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    props: {
        menuItems: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        localePath(path) {
            return this.$i18n.locales.find((l) => l.code === this.$i18n.locale).path + path;
        },
    },
};
</script>
