// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Application metadata
  app: {
    head: {
      title: 'gaze9999 | 個人作品與開發筆記',
      htmlAttrs: { lang: 'zh-Hant' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'gaze9999 的公開專案, 前端作品, Python 工具與 AI 輔助開發筆記' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', sizes: '16x16 32x32 48x48', href: '/favicon.ico?v=20261004' },
        { rel: 'icon', type: 'image/svg+xml', sizes: 'any', href: '/favicon.svg?v=20261004' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=20261004' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
      ],
    },
  },

  // Compatibility and version
  compatibilityDate: '2025-07-15',

  // Development tools
  devtools: {
    enabled: true,
  },

  // Modules
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],

  // Vue configuration
  vue: {
    compilerOptions: {
      // 忽略開發工具注入的自定義元素警告
      // Vue DevTools 和其他開發工具可能會注入這些元素
      isCustomElement: (tag) => {
        return tag.startsWith('vue-') ||
          tag === 'VueElement' ||
          tag.includes('-devtools-');
      },
    },
  },

  // Vue runtime configuration
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  // Styling
  css: ['~/styles/globals.scss'],

  // Runtime config
  runtimeConfig: {
    // Private keys (server-side only)
    steamApiKey: process.env.NUXT_STEAM_API_KEY || '',

    // Public keys (exposed to client)
    public: {
      appName: 'gaze9999',
      apiBaseUrl: 'http://localhost:3000/api',
      serverFeaturesEnabled: process.env.NUXT_PUBLIC_SERVER_FEATURES_ENABLED !== 'false',
    },
  },

  // TypeScript
  typescript: {
    typeCheck: false,
    strict: true,
  },

  // Experimental features
  experimental: {
    payloadExtraction: true,
  },

  // Keep page-local implementation folders out of Nuxt file-based routing.
  hooks: {
    'pages:extend'(pages) {
      const removeImplementationRoutes = (routes: typeof pages) => {
        for (let index = routes.length - 1; index >= 0; index -= 1) {
          const route = routes[index]
          const filePath = route?.file?.replace(/\\/g, '/') ?? ''

          if (/\/(api|components|composables)\//.test(filePath)) {
            routes.splice(index, 1)
            continue
          }

          if (route?.children) {
            removeImplementationRoutes(route.children)
          }
        }
      }

      removeImplementationRoutes(pages)
    },
  },

  // GitHub Pages prerendering
  nitro: {
    prerender: {
      ignore: ['/shop/admin'],
    },
  },

  // Features
  features: {
    inlineStyles: false,
  },
});
