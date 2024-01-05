// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [ 
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  components: true,
  pwa: {
    manifest: {
      name: 'Goncharov PWA App Lab5',
      short_name: 'GPWALab5',
      theme_color: '#ffffff',
      scope: '/',
      icons: [
        {
          src: 'img/tiger.png',
          sizes: '768x768',
          type: 'image/png',
        },
      ],
    },

    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: '/',
          handler: 'NetworkFirst',
        }
      ],
    },

    client: {
      installPrompt: true,
    },
    includeAssets: [
      '**/*'
    ],
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },
  app: {
    head: {
        htmlAttrs: {
            lang: 'ru',
        },
        title: 'Гончаров А.Н. 224-372',
        charset: 'utf-8',
        meta: [],
        link: [],
    }
  },
})
