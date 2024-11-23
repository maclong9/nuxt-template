# Nuxt Minimal Starter

## UI Library

- Extending the TailwindCSS theme in `nuxt.config.ts` with a color named `primary` will automatically apply it to the Nuxt UI Library.
- To customise the grey color, define a custom grey color in the TailwindCSS theme which can then be used as the `gray` color in the UI Library by changing the value of `ui.gray` in `app.config.ts`.

## Why These Tools?

**ESLint Over Prettier?**

- Less dependencies, less configuration, less time.
- Maintain code styles[1].
- Consistent code styles across the whole project[2].
- Consistency is a good thing.

[1]: https://antfu.me/posts/why-not-prettier
[2]: https://eslint.style/guide/why
