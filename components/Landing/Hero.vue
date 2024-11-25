<template>
  <ULandingSection
    id="hero"
    :ui="{ wrapper: 'py-0 md:py-0 lg:py-0' }"
  >
    <ULandingHero
      :description="$t('landing.hero.description')"
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
      :title="$t('landing.hero.title')"
      :ui="{ wrapper: 'py-12 sm:py-14 md:py-16', title: 'text-neutral-900 dark:text-neutral-100' }"
      orientation="horizontal"
    >
      <template #headline>
        <UButton
          :label="$t('landing.hero.links.whatsNew')"
          class="rounded-full"
          color="gray"
          size="xs"
          to="https://github.com/maclong9/nuxt-template/releases"
          trailing-icon="i-heroicons-arrow-right"
        />
      </template>
      <template #default>
        <NuxtImg
          alt="Hero Image Placeholder"
          class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
          src="https://picsum.photos/640/360"
        />
      </template>
    </ULandingHero>
  </ULandingSection>
</template>
