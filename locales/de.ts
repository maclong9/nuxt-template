import type { DefaultLocaleMessageSchema } from 'vue-i18n'

export default {
  localeAlert: 'Achtung! Es sieht aus, als ob du eine andere Sprache {preferredLocale}. Willst du deine bevorzugte Sprache einstellen?',
  general: {
    actions: {
      confirm: 'Bestätigen',
      cancel: 'Abbrechen',
      continue: 'Weiter',
    },
  },
  layout: {
    nav: {
      about: 'Über',
      contact: 'Kontakt',
      blog: 'Blog',
    },
  },
  landing: {
    hero: {
      title: 'Starte deine neue Anwendung schnell',
      description:
      'Dies ist ein minimaler Nuxt 3 Starter Template, der die neuesten besten Praktiken verwendet, um eine produktionsbereit Webanwendung zu erstellen.',
      links: {
        whatsNew: 'Was ist neu in v1.0.0',
        getStarted: 'Loslegen',
        learnMore: 'Mehr erfahren',
      },
    },
    features: {
      one: {
        title: 'Farbpalette',
        description: 'Wahlen Sie eine primate und eine graue Farbe aus Ihrer Tailwind CSS Farbpalette.',
      },
      two: {
        title: 'Vollkostümlistenbar',
        description: 'Verändern Sie die Stil von jeder Komponente in Ihrer App-Konfiguration oder mit ui-Prop.',
      },
      three: {
        title: 'Icons',
        description: 'Wahlen Sie beliebige 100.000+ Icons aus den beliebtesten Icon-Bibliotheken.',
      },
      four: {
        title: 'Tastenkurzzeichen',
        description: 'Nuxt UI bietet eine Reihe von Vue-Composable, um einfache Tastenkurzzeichen zu handhaben.',
      },
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      questions: {
        one: {
          label: 'Was ist Nuxt UI?',
          content: 'Nuxt UI ist eine Sammlung von UI-Komponenten und Werkzeuge, die es einfach macht, Ihre nächste Webanwendung mit Nuxt 3 zu erstellen.',
        },
        two: {
          label: 'Kann ich Nuxt UI verwenden, um Open Source-Projekte zu nutzen?',
          content: 'Ja, Sie kennen Nuxt UI verwenden, um Open Source-Projekte zu nutzen. Es ist kostenlos und offen source.',
        },
        three: {
          label: 'Was "Unlimited minor & patch updates" beinhaltet?',
          content: 'Unbegrenzte kleinere und Patch-Updates, einschließlich Fehlerbehebungen und Sicherheitspatches.',
        },
      },
    },
  },
} satisfies DefaultLocaleMessageSchema
