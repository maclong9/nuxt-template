<script setup lang="ts">
import { consola } from 'consola'

const appConfig = useAppConfig()

// Logger Example Usage
consola.info('Using consola 3.0.0, site meta:', appConfig.meta)
consola.start('Building project...')
consola.warn('A new version of consola is available: 3.0.1')
consola.success('Project built!')
consola.error(new Error('This is an example error. Everything is fine! Remove it in `app.vue`'))
consola.box('I am a simple box')
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
