<template>
  <section id="hero">
    <ULandingHero
      :title="$t('landing.hero.title')"
      :description="$t('landing.hero.description')"
      orientation="horizontal"
      :links="[{
        label: $t('landing.hero.links.getStarted'),
        icon: 'i-heroicons-rocket-launch',
        size: 'lg',
        to: '/contact',
      }, {
        label: $t('landing.hero.links.learnMore'),
        trailingIcon: 'i-heroicons-arrow-small-right',
        color: 'gray',
        size: 'lg',
        to: '/about',
      }]"
      :ui="{ wrapper: 'py-16 sm:py-18 md:py-24' }"
    >
      <template #headline>
        <UButton
          :label="$t('hero.links.whatsNew')"
          color="gray"
          to="https://github.com/maclong9/nuxt-template/releases"
          trailing-icon="i-heroicons-arrow-right"
          size="xs"
          class="rounded-full"
        />
      </template>
      <template #default>
        <img
          src="https://picsum.photos/640/360"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
        >
      </template>
    </ULandingHero>
  </section>
</template>
