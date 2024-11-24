<script setup lang="ts">
const { setLocale } = useI18n()
</script>

<template>
  <UDropdown
    :items="[[{
      label: '🇬🇧 English',
      shortcuts: ['E'],
      click: () => setLocale('en'),
    }, {
      label: '🇩🇪 Deutsch',
      shortcuts: ['D'],
      click: () => setLocale('de'),
    }]]"
    :popper="{ placement: 'bottom-start' }"
  >
    <!-- TODO: See if you can flip the chevron on open -->
    <UButton
      color="white"
      label="Locale"
      trailing-icon="i-heroicons-chevron-down-20-solid"
    />
  </UDropdown>
</template>
