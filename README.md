# Nuxt Minimal Start

## Overview

This project is a minimal starter template for building a web application using Nuxt.js. It comes pre-configured with
several tools and libraries to help streamline the development process. Below you'll find an overview of the key
features and how to use them.

## Key Tools & Libraries

### Nuxt.js

Nuxt.js is a powerful framework built on top of Vue.js that simplifies the development of universal or single-page Vue
applications. It provides a rich ecosystem of modules and a structured approach that boosts productivity.

#### Why Nuxt.js?

- **Auto-imported Components**: Eliminates the need for manual imports, reducing boilerplate and making code easier to
  maintain.
- **Custom Configuration**: Modules like ESLint and others can be configured with just a few lines in the
  `nuxt.config.ts` file.

### Nuxt UI

This is the UI library being used for this starter, it provides good base layouts for regularly used components across
web applications. Thanks to it's slot structure and `:ui` attributes it is also heavily customisable. 

### TailwindCSS

TailwindCSS is a utility-first CSS framework that provides low-level utility classes for building custom designs
directly in your markup.

#### Key Points

- **Theme Customization**: Easily extendable via the `nuxt.config.ts` file.
- **Integrated UI Library**: Customize the UI library by defining custom colors in the TailwindCSS theme.

### ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. It helps in maintaining
consistent code styles across the project.

#### Why ESLint Over Prettier?

- **Fewer Dependencies**: Simplifies configuration and maintenance.
- **Consistency**: Ensures a unified code style throughout the project.

## Usage Guidelines

### Extending TailwindCSS Theme

To extend the TailwindCSS theme:

- Open the `nuxt.config.ts` file.
- Add a color named `primary` under the theme section.
- The newly added color will automatically apply to the Nuxt UI library.

### Customizing Grey Color

To customize the grey color used in the UI library:

- Define a custom grey color in the TailwindCSS theme.
- Update the `ui.gray` value in `app.config.ts` to use the newly defined grey color.

### Configuration for ESLint

Configure ESLint in the `nuxt.config.ts` file to ensure a seamless development experience with consistent code styles.

## Conclusion

This project setup leverages the strengths of Nuxt.js, TailwindCSS, and ESLint to provide a robust and maintainable
starter template. By following the usage guidelines, you'll be able to quickly customize and extend the setup to fit the
requirements of your project.