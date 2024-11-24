<script setup lang="ts">
const { ui } = useAppConfig()
</script>

<template>
  <!-- TODO: setup content and create a page builder -->
  <UMain :class="`prose-${ui.gray} dark:prose-invert lg:prose-md xl:prose-lg`">
    <slot />
  </UMain>
</template>
