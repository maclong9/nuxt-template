<script setup lang="ts">
const { setLocale } = useI18n()

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
    :popper="{ placement: 'bottom-start' }"
  >
    <!-- TODO: See if you can flip the chevron on open -->
    <UButton
      color="white"
      label="Locale"
      trailing-icon="i-heroicons-chevron-down-20-solid"
      :ui="{ icon: { base: `transform transition duration-200 ease-in-out ${open ? 'rotate-180' : 'rotate-0'}` } }"
    />
  </UDropdown>
</template>
