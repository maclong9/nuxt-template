import en from './locales/en'
import de from './locales/de'

export default defineI18nConfig(() => ({
  legacy: false,
  messages: {
    en,
    de,
  },
}))
