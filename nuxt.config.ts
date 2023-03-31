// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    mode: 'universal',
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n'
    ],
    router: {
        middleware: 'i18n',
        base: '/',
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'default',
                path: '*',
                component: resolve(__dirname, 'pages/index.vue'),
                meta: { defaultLocale: 'en' }
            })
        }
    },
    i18n: {
        locales: ['en', 'de', 'fr', 'es'],
        vueI18n: {
            fallbackLocale: 'en',
            detectBrowserLanguage: {
                alwaysRedirect: true,
                redirectOn: 'root'
            },
            strategy: 'no_prefix',
            legacy: false,
            messages: {
                de: require('./locales/de.json'),
                en: require('./locales/en.json'),
                fr: require('./locales/fr.json'),
                es: require('./locales/es.json'),
            },
        }
    },
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
