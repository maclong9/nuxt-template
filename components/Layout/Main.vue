<script setup lang="ts">
const { ui } = useAppConfig()
</script>

<template>
  <UMain :class="`prose-${ui.gray} max-w-screen-xl mx-auto dark:prose-invert lg:prose-md xl:prose-lg`">
    <slot />
  </UMain>
</template>
