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
  }
})
