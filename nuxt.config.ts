import { getColors } from 'theme-colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Nuxt Modules
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/test-utils',
    '@nuxt/image',
  ],
  // Developer Tools Configuration
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
      autoInit: false,
      stylistic: true,
    },
  },
  // TailwindCSS Configuration
  tailwindcss: {
    config: {
      extend: {
        aspectRatio: {
          auto: 'auto',
          square: '1 / 1',
          video: '16 / 9',
        },
        screen: {
          '3xl': '2560px',
        },
      },
      colors: {
        primary: getColors('#0099cc'),
      },
    },
  },
})
