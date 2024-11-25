<template>
  <UFooter
    :links="useNavigationLinks()"
    :ui="{ wrapper: 'pt-8 pb-4' }"
  >
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <LayoutSocials />
    </template>
  </UFooter>
</template>
