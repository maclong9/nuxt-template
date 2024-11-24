<template>
  <LocaleCheck />
  <NuxtRouteAnnouncer />
  <header>
    header
    <LocaleSelect />
  </header>

  <!-- TODO: Figure out how to get prose colour from ui config -->
  <main class="prose-neutral dark:prose-invert lg:prose-md xl:prose-lg">
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
