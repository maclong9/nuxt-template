<template>
  <NuxtRouteAnnouncer />
  <LayoutHeader />
  <LayoutMain>
    <NuxtPage />
  </LayoutMain>
  <LayoutFooter />
</template>

<style lang="postcss">
html, body {
  @apply font-body max-w-[100dvw] overflow-x-hidden;
}

h1, h2, h3, h4, h5, h6 {
  @apply font-heading font-bold;
}
</style>
