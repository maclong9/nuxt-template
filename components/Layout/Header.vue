<script setup lang="ts">
const links = useNavigationLinks()
</script>

<template>
  <UHeader :ui="{ wrapper: 'mb-2' }">
    <template #logo>
      <ULink
        to="/"
        class="flex items-center gap-2"
      >
        <UIcon
          name="bxs:pyramid"
        />
        <span class="font-bold text-2xl">Example</span>
      </ULink>
    </template>

    <template #right>
      <UHorizontalNavigation
        :links="links"
        :ui="{ wrapper: 'hidden sm:flex justify-end', icon: { base: 'hidden' } }"
      />
      <div class="mx-4 flex items-center">
        <UColorModeButton />
        <LayoutSocials />
      </div>
      <LocaleSelect />
    </template>

    <template #panel>
      <UNavigationTree
        :links="links"
        :ui="{
          links: {
            base: 'w-full p-4 rounded-md transition-colors duration-300',
            inactive: 'hover:bg-neutral-200 dark:hover:bg-neutral-800',
            label: 'text-base',
          },
        }"
      />
    </template>
  </UHeader>
</template>
