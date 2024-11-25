/**
   * A function that returns an array of navigation links. The links are
   * translated, and have icons for the mobile navigation.
   *
   * @returns An array of objects, each with the following properties:
   *   `label`: The translated label for the link.
   *   `icon`: The icon from the Heroicons library.
   *   `to`: The route to navigate to when the link is clicked.
   */
export const useNavigationLinks = () => {
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
