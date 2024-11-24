<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'
import { ref, onMounted, computed } from 'vue'
import { useI18n, createI18n } from 'vue-i18n'

const switchLocalePath = useSwitchLocalePath()
const { locale: currentLocale, locales } = useI18n()
const preferredLocale = useBrowserLocale()?.split('-')[0] as LocaleObject['code']
const localesCodes = computed(() => locales.value.map(locale => locale.code))

// Create a separate i18n instance for preferred language messages
const preferredI18n = createI18n({
  legacy: false,
  locale: preferredLocale,
  messages: {
    en: {
      localeAlert: 'Heads up! It looks like you prefer {preferredLocale}. Do you want to switch to your preferred language?',
      continue: 'Continue',
    },
    de: {
      localeAlert: 'Achtung! Es sieht aus, als ob du eine andere Sprache {preferredLocale}. Willst du deine bevorzugte Sprache einstellen?',
      continue: 'Weiter',
    },
  },
})

const { t } = preferredI18n.global

// Find the preferred locale object from the locales array
const preferredLocaleObject = computed(() =>
  locales.value.find(locale => locale.code === preferredLocale),
)

const bannerShowing = ref(false)
const STORAGE_KEY = 'locale-banner-dismissed'

// Check if preferred locale matches current and is supported
const localesMatchAndSupported = (): boolean =>
  currentLocale.value !== preferredLocale?.split('-')[0]
  && !localStorage.getItem(STORAGE_KEY)
  && localesCodes.value.includes(preferredLocale)

logger.info('preferredLocale', preferredLocale)
logger.info('currentLocale', currentLocale.value)
logger.info('localesCodes', localesCodes.value)

// Handle banner close
const close = (): void => {
  bannerShowing.value = false
  localStorage.setItem(STORAGE_KEY, 'true')
}

onMounted(() => {
  bannerShowing.value = localesMatchAndSupported()
})
</script>

<template>
  <UAlert
    v-if="bannerShowing && preferredLocaleObject"
    :ui="{
      wrapper: 'flex justify-around',
      inner: 'w-full',
      title: 'text-sm font-medium max-w-sm mr-16',
      padding: 'py-4 px-6',
    }"
    :actions="[{
      variant: 'solid',
      color: 'primary',
      label: t('confirm', { preferredLocale: preferredLocaleObject.name }),
      click: close,
      to: switchLocalePath(preferredLocale),
    }]"
    :title="t('localeAlert', { preferredLocale: preferredLocaleObject.name })"
    :close-button="{
      icon: 'i-heroicons-x-mark-20-solid',
      color: 'gray',
      variant: 'link',
    }"
    @close="close"
  />
</template>
