<template>
  <section id="landing">
    <ULandingGrid
      :ui="{ wrapper: 'py-16 sm:py-18 md:py-24' }"
    >
      <ULandingCard
        class="col-span-6 row-span-2"
        icon="i-heroicons-swatch"
        :title="$t('landing.features.one.title')"
        :description="$t('landing.features.one.description')"
      />
      <ULandingCard
        class="col-span-6 row-span-4"
        icon="i-heroicons-wrench-screwdriver"
        :title="$t('landing.features.two.title')"
        :description="$t('landing.features.two.description')"
      />
      <ULandingCard
        class="col-span-6 row-span-4"
        icon="i-heroicons-face-smile"
        :title="$t('landing.features.three.title')"
        :description="$t('landing.features.three.description')"
      />
      <ULandingCard
        class="col-span-6 row-span-2"
        icon="i-heroicons-computer-desktop"
        :title="$t('landing.features.four.title')"
        :description="$t('landing.features.four.description')"
      />
    </ULandingGrid>
  </section>
</template>
