<script setup lang="ts">
import { consola } from 'consola'

const appConfig = useAppConfig()

consola.info('meta:', appConfig.meta)
consola.error('Example error')
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
