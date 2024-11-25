<template>
  <UMain :class="`prose-${useAppConfig().ui.gray} max-w-screen-xl mx-auto dark:prose-invert lg:prose-md xl:prose-lg`">
    <slot />
  </UMain>
</template>
