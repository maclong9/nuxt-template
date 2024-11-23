// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
      stylistic: true,
    },
  },
  // TailwindCSS Configuration
})
