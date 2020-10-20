//import tachyons from 'tachyons/css/tachyons'
export default {
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    components: true,
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        '~/assets/sass/main.scss',
        'tachyons/css/tachyons.min.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/components',
        '~/plugins/composition-api.js',
        '~/plugins/storyblok-rich-text-renderer.js',
        '~/plugins/vue-lazyload.js'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        [
            'storyblok-nuxt',
            {
                accessToken: process.env.STORYBLOK_KEY,
                cacheProvider: 'memory'
            }
        ],
        '@nuxtjs/axios',
        '@nuxtjs/pwa', ['@nuxtjs/markdownit', { html: true, injected: true }]
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}