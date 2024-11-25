<template>
  <ULandingSection
    id="faq"
    :ui="{ wrapper: 'py-0 md:py-0 lg:py-0', container: 'gap-4 sm:gap-y-4' }"
  >
    <h2 class="mb-0">
      {{ $t('landing.faq.title') }}
    </h2>
    <ULandingFAQ
      :items="['one', 'two', 'three'].map(key => ({
        label: $t(`landing.faq.questions.${key}.label`),
        content: $t(`landing.faq.questions.${key}.content`),
      }))"
      multiple
    />
  </ULandingSection>
</template>
