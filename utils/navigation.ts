import type { NavigationLink } from '#ui-pro/types'

export const useNavigationLinks: () => NavigationLink[] = () => {
  const { t } = useI18n()

  return [{
    label: t('layout.nav.about'),
    icon: 'i-heroicons-information-circle',
    to: '/about',
  }, {
    label: t('layout.nav.blog'),
    icon: 'i-heroicons-newspaper',
    to: '/blog',
  }, {
    label: t('layout.nav.contact'),
    icon: 'i-heroicons-at-symbol',
    to: '/contact',
  }]
}
