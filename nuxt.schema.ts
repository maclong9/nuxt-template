import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    en: {
      metadata: group({
        title: 'Metadata',
        description: 'SEO Metadata',
        icon: 'i-heroicons-document-text',
        fields: {
          title: field({
            type: 'string',
            title: 'Title[en]',
            description: 'The main title of your web app.',
            icon: 'i-heroicons-document-text',
            default: 'Minimal Nuxt 3 Starter',
          }),
          description: field({
            type: 'string',
            title: 'Description[en]',
            description: 'A short summary of your web app.',
            icon: 'i-heroicons-document-text',
            default: 'A minimal Nuxt 3 Starter template.',
          }),
          image: field({
            type: 'string',
            title: 'Image[en]',
            description: 'The image that will be shown in the preview of your web app.',
            icon: 'i-heroicons-image',
            default: 'https://nuxt.com/meta/nuxt-og-image.png',
          }),
          siteName: field({
            type: 'string',
            title: 'Site Name[en]',
            description: 'The name of your web app.',
            icon: 'i-heroicons-document-text',
            default: 'Nuxt 3 Starter',
          }),
        },
      }),
    },
    de: {
      metadata: group({
        title: 'Metadaten',
        description: 'SEO Metadaten',
        icon: 'i-heroicons-document-text',
        fields: {
          title: field({
            type: 'string',
            title: 'Titel[de]',
            description: 'Der Haupttitel Ihrer Webanwendung.',
            icon: 'i-heroicons-document-text',
            default: 'Minimaler Nuxt 3 Starter',
          }),
          description: field({
            type: 'string',
            title: 'Beschreibung[de]',
            description: 'Eine kurze Zusammenfassung Ihrer Webanwendung.',
            icon: 'i-heroicons-document-text',
            default: 'Ein minimaler Nuxt 3 Starter-Template.',
          }),
          image: field({
            type: 'string',
            title: 'Bild[de]',
            description: 'Das Bild, das in der Vorschau Ihrer Webanwendung angezeigt wird.',
            icon: 'i-heroicons-image',
            default: 'https://nuxt.com/meta/nuxt-og-image.png',
          }),
          siteName: field({
            type: 'string',
            title: 'Site Name[de]',
            description: 'Der Name Ihrer Webanwendung.',
            icon: 'i-heroicons-document-text',
            default: 'Nuxt 3 Starter',
          }),
        },
      }),
    },
    theme: group({
      title: 'Theme',
      description: 'Theme settings',
      icon: 'i-heroicons-palette',
      fields: {
        category: field({
          type: 'string',
          title: 'Category',
          description: 'The category of your web application.',
          icon: 'i-heroicons-folder',
          default: 'Web Development',
        }),
        themeColor: field({
          type: 'string',
          title: 'Main Color',
          description: 'The main color of your web application.',
          icon: 'i-heroicons-palette',
          default: '#000000',
        }),
      },
    }),
  },
})
