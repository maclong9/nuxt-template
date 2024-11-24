<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, locales } = useI18n()
const { language } = useNavigatorLanguage()
const switchLocalePath = useSwitchLocalePath()

const bannerShowing = ref(false)
const STORAGE_KEY = 'locale-banner-dismissed'
const currentLanguage: LocaleObject = {
  code: language.value?.split('-')[0] as LocaleObject['code'] ?? 'en',
}

// Check if preferred locale matches current
const localesMatchAndSupported = (): boolean =>
  currentLanguage.code !== locale.value
  && !localStorage.getItem(STORAGE_KEY)
  && locales.value.includes(currentLanguage.code) // FIXME: string is not assignable, type mismatch on ``locales.value``

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
    v-if="bannerShowing"
    variant="subtle"
    class="max-w-screen-lg mx-auto absolute left-1/2 -translate-x-1/2"
    :actions="[{
      variant: 'solid',
      color: 'primary',
      label: $t('confirm'),
      click: close,
      to: switchLocalePath(currentLanguage.code),
    }]"
    :title="$t('localeAlert')"
    :close-button="{
      icon: 'i-heroicons-x-mark-20-solid',
      color: 'gray',
      variant: 'link',
    }"
    @close="close"
  />
</template>
