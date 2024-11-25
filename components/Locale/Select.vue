<script lang="ts" setup>
const { setLocale, locale } = useI18n()
const open = ref(false)
</script>

<template>
  <UDropdown
    v-model:open="open"
    :items="[[{
      label: '🇬🇧 English',
      shortcuts: ['E'],
      click: () => setLocale('en'),
    }, {
      label: '🇩🇪 Deutsch',
      shortcuts: ['D'],
      click: () => setLocale('de'),
    }]]"
    :popper="{ placement: 'bottom-end' }"
  >
    <UButton
      :label="locale"
      :ui="{ icon: { base: `transform transition duration-200 ease-in-out ${open ? '-rotate-180' : 'rotate-0'}` } }"
      color="white"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />
  </UDropdown>
</template>
