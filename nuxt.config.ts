// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    mode: 'universal',
    head: {
        title: 'Portfolio',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Welcome to my personal portfolio!' }
        ],
    },
    css: [
        'bulma/css/bulma.css'
    ]
})
