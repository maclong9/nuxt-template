<script setup lang="ts">
const { ui } = useAppConfig()
</script>

<template>
  <LocaleCheck />
  <NuxtRouteAnnouncer />
  <header>
    header
    <LocaleSelect />
  </header>

  <main
    :class="`prose-${ui.gray} dark:prose-invert lg:prose-md xl:prose-lg`"
  >
    <NuxtPage />
  </main>

  <footer>footer</footer>
</template>

<style lang="postcss">
html, body {
  @apply font-body;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-heading font-bold;
}
</style>
