// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    mode: 'universal',
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Portfolio | Alexander Witt',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Welcome to my personal portfolio!' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ],
            script: [
                { src: 'https://kit.fontawesome.com/08e234a004.js', crossorigin: 'anonymous'}
            ]
        },
    },
    runtimeConfig: {
        // Server Route API keys, or stuff which can be used in "/server" ONLY
        // const { key } = useRuntimeConfig()
    }
})
