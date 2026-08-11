// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Application metadata
  app: {
    head: {
      title: 'gaze9999 | Personal Website',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal website and project showcase for gaze9999' },
      ],
      link: [
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
