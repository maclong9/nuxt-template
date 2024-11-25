<script setup lang="ts">
const links = useNavigationLinks()
</script>

<template>
  <UFooter :links="links">
    <template #left>
      Copyright © {{ new Date().getFullYear() }}
    </template>

    <template #right>
      <LayoutSocials />
    </template>
  </UFooter>
</template>
