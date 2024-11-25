<script lang="ts" setup>
import { createI18n } from 'vue-i18n'
import type { LocaleObject } from '@nuxtjs/i18n'
import messages from '~/locales/messages'

// State definitions
const bannerShowing = ref(false)
const STORAGE_KEY = 'locale-banner-dismissed'

// Locale-related functions and states
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()
const preferredLocale = useBrowserLocale()?.split('-')[0] as LocaleObject['code']
const localesCodes = computed(() => locales.value.map(locale => locale.code))

// Create a separate i18n instance for preferred locale
const preferredI18n = createI18n({
  legacy: false,
  locale: preferredLocale,
  messages,
})
const { t } = preferredI18n.global

// Get full locale information from locale code
const preferredLocaleObject = computed(() =>
  locales.value.find(locale => locale.code === preferredLocale))

// Ensure preferredLocale is supported
const localesMatchAndSupported = (): boolean =>
  locale.value !== preferredLocale?.split('-')[0]
  && !localStorage.getItem(STORAGE_KEY)
  && localesCodes.value.includes(preferredLocale)

logger.info('matched:', localesMatchAndSupported())
logger.info('preferred:', preferredLocale)

// Event handlers
const closeBanner = (): void => {
  bannerShowing.value = false
  localStorage.setItem(STORAGE_KEY, 'true')
}

// Lifecycle hooks
onMounted(() => {
  bannerShowing.value = localesMatchAndSupported()
})
</script>

<template>
  <UAlert
    v-if="bannerShowing && preferredLocaleObject"
    :actions="[{
      variant: 'solid',
      color: 'primary',
      label: t('confirm', { preferredLocale: preferredLocaleObject.name }),
      click: closeBanner,
      to: switchLocalePath(preferredLocale),
    }]"
    :close-button="{
      icon: 'i-heroicons-x-mark-20-solid',
      color: 'gray',
      variant: 'link',
    }"
    :title="t('localeAlert', { preferredLocale: preferredLocaleObject.name })"
    :ui="{
      wrapper: 'flex justify-around',
      inner: 'w-full',
      title: 'text-sm font-medium max-w-sm mr-16',
      padding: 'py-4 px-6',
    }"
    @close="closeBanner"
  />
</template>
