import { getColors } from 'theme-colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  // Nuxt Modules
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/content',
    '@nuxthub/core',
    '@nuxthq/studio',
    '@nuxt/fonts',
    '@vueuse/nuxt',
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
  fonts: {
    families: [
      { name: 'Sora', provider: 'fontsource' },
      { name: 'Inter', provider: 'fontsource' },
    ],
  },
  // Translations
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch' },
    ],
    defaultLocale: 'en',
    lazy: true,
    vueI18n: './i18n.config.ts',
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
          colors: {
            brand: getColors('#0099cc'),
          },
          fontFamily: {
            heading: ['Sora', 'sans-serif'],
            body: ['Inter', 'sans-serif'],
          },
          screens: {
            'xs': '480px',
            '3xl': '1920px',
            '4xl': '2560px',
          },
        },
      },
    },
  },
})
