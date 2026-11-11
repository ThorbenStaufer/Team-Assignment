// https://nuxt.com/docs/api/configuration/nuxt-config
import conferenceData from './src/conference-data.json';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~~/tokens/tokens.css'],
  srcDir: 'src/',

  // rendering strategy configuration
  routeRules: {
    '/schedule': { ssr: false },
    '/sessions': { ssr: true, prerender: false },
    '/sessions/**': { prerender: true },
    '/speakers/**': { prerender: true }
  },

  // static route list
  nitro: {
    prerender: {
      routes: [
        ...conferenceData.sessions.map((session) => `/sessions/${session.id}`),

        ...conferenceData.speakers.map((speaker) => `/speakers/${speaker.id}`),
      ],
        crawlLinks: false,
    }
  },

  modules: ['@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'Shift',
      theme_color: '#0156d7',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/sessions',
      icons: [
        {
          src: 'Shift_Logo_Temp_144px.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'Shift_Logo_Temp_192px.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'Shift_Logo_Temp_512px.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    devOptions: {
      enabled: true,
    }
  }
})