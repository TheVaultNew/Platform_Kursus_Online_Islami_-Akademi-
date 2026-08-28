// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: "Darul Hikmah Academy - Platform Kursus Online Islami Bersanad",
      htmlAttrs: {
        lang: 'id',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Platform kursus online Islam ilmiah & komprehensif. Menghadirkan materi Fiqih 4 Mazhab, Tafsir, Bahasa Arab, Hadits, dan Aqidah bersanad dari Asatidz berkompeten.'
        },
        { name: 'theme-color', content: '#1B4D3E' },
        { property: 'og:title', content: "Darul Hikmah Academy - Kursus Islami Online Bersanad" },
        { property: 'og:description', content: "Pelajari Fiqih 4 Mazhab, Bahasa Arab, Tafsir, dan Hadits melalui kurikulum berjenjang dan bimbingan Asatidz berkompeten." },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Spectral:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&display=swap'
        }
      ]
    }
  }
})
