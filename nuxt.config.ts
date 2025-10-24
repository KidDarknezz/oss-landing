export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/oss-favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'icons/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: 'icons/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: 'icons/favicon-128x128.png' },
      ],
    },
  },
})
