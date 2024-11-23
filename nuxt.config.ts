import { getColors } from 'theme-colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  // Nuxt Modules
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/test-utils',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxthub/core',
    '@nuxthq/studio',
  ],
  // Developer Tools config
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  compatibilityDate: '2024-11-01',
  // ESLint Configuration
  eslint: {
    config: {
      stylistic: true,
    },
  },
  // TailwindCSS Configuration
  tailwindcss: {
    config: {
      theme: {
        extend: {
          aspectRatio: {
            auto: 'auto',
            square: '1 / 1',
            video: '16 / 9',
          },
          screens: {
            '3xl': '2559px',
          },
          colors: {
            brand: getColors('#0099cc'),
            base: getColors('#52524D'),
          },
        },
      },
    },
  },
})
