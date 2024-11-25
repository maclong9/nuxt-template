<script setup lang="ts">
const links = useNavigationLinks()
</script>

<template>
  <UFooter
    :links="links"
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
