// https://nuxt.com/docs/api/configuration/nuxt-config
import conferenceData from './src/conference-data.json';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Shift – Konferenz',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        {
          name: 'description',
          content: 'Entdecke Sessions und Speaker der Shift Konferenz und erstelle dein persönliches Programm.'
        }
      ]
    }
  },

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
      short_name: 'Shift',
      description: 'Entdecke Sessions und Speaker der Shift Konferenz und erstelle dein persönliches Programm.',
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
      
      navigateFallback: null,

      runtimeCaching: [
        {
          // Sessions und Speaker – Cache First:
          // Bereits geladene Seiten werden zuerst aus dem Cache geladen
          urlPattern: ({ url, request }) =>
              request.mode === 'navigate' &&
              url.origin === self.location.origin &&
              (
                  url.pathname === '/sessions' ||
                  url.pathname.startsWith('/sessions/') ||
                  url.pathname.startsWith('/speakers/')
              ),

          handler: 'CacheFirst',

          options: {
            cacheName: 'shift-conference-pages',

            matchOptions: {
              ignoreSearch: true,
            },

            cacheableResponse: {
              statuses: [200],
            },

            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 30,
            },
          },
        },
        {
          // "Mein Programm" – Network First:
          // Zuerst online laden, bei Verbindungsproblemen den Cache verwenden
          urlPattern: ({ url }) =>
              url.origin === self.location.origin &&
              url.pathname === '/schedule',

          handler: 'NetworkFirst',

          options: {
            cacheName: 'shift-schedule-page',
            networkTimeoutSeconds: 3,

            cacheableResponse: {
              statuses: [200],
            },
          },
        },
      ],
    },
    devOptions: {
      enabled: true,
    }
  }
})