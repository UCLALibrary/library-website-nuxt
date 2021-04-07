# UCLA Library Website

A [Nuxt](https://nuxtjs.org/) powered frontend website for the UCLA Library.

## Build Setup

**This is just a Nuxt site, so it builds and deploys like any other Nuxt project.**

Works best with the [fuxt-backend](https://github.com/funkhaus/fuxt-backend) WordPress theme as the backend.

**First step:** Duplicate and rename `.example.env` to `.env`. Define any vars environment needed there.

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# serve with hot reload Storybook at localhost:3003
$ npm run storybook

# build for production and launch server
$ npm run build
$ npm start

# build Stroybook for production
$ npx nuxt storybook build

# generate static project
$ npm run generate

```

## Designs

The designs for this project can be found here:

-   Figma: https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=0%3A1

## Design read in notes

### Global

-   Brand bar at top on all pages
-   There is an alert box that closes on timeout or click
-   Each section has it’s on color used for way finding (hovers). Defined in “Visual stratergy in FIgma)
-   Button hover state is fill background, text to white. Sometimes in reverse.
-   Need to study the "Main Menu" component
-   The “faceted molecule” should be an option to show over images.

### Home Page

-   Note the search box
-   Grid “See more”goes to “Services & Resources”page

### Exhibits & Events

-   Note that the top search bar is silmmer and has a colored “molcule”outline.
-   Note the view dropdowns that change the layout of the page
-   See what happens when an event runs over a period of time (gets the bar across the top)
-   On scroll down, the date/year goes into a sticky nav.

### Exhibits detail

-   Note multiple gallery , can include images, audio and video. Note the “open”view.
-   The hover state is a radial gradient
-   Overlay lightbox viewer for all media types
-   Different hero banners for event types. FIlm gets 16:9 image. There is a no image fallback.
-   Film details get a video player or gallery at bottom

### Services & Resources

-   Complex search box with filters, with selected tag-cloud.

### Staff detail

-   Articles link to the blog
-   Note the sticky nav

### Location List

-   Note the list on the left scrolls, use CSS positon:sticky for that.
-   Header has search bar
-   Location “quick view”
-   Header has breadcrumb

### About

-   Note the gallery has stats that update on change of image

### Workshop detail

-   Has a sticky header has jump anchor tags and an “enroll” button

### FAQ

-   Accordion blocks

### Mobile menu

-   Has panels between sub menus.

## Linting

This project has linting setup for Vue/GQL/JS/SCSS/CSS and HTML using Prettier and ESLint. The ruleset is the Vue style guide "Recommended" spec.

Behind the scenes, the workflow is this: Ugly code > Prettier > ESLint > Nice code!

The idea is that Prettier formats things like CSS and GQL nicely, and ESLint goes last and does everything else. This allows us to config ESLint to the Vue specs (Prettier has little config options by design). So that is what the .eslintrc.js file is for.

In your code editor, you'll want to install a Prettier plugin ([VS Code](https://github.com/prettier/prettier-vscode) or [Atom](https://github.com/prettier/prettier-atom)), and set the "ESLint Integration" to `true` and "Format on Save" to `true`. The settings for "prettier-eslint” should have a toggle for "Run Prettier Last", you want that set to `false`. We need ESLint to run last, this ensures the Vue Recommended specs get priority, not Prettier's specs.

The 4 `devDependencies` installed in the package are "eslint", "eslint-plugin-vue", "prettier" and "prettier-eslint". The "prettier" plugin is not required as most editor plugins will use a default version they ship with, although we have more control over the version of Prettier if we include it in the package file, so we include it to be safe. It also means it would run the same server side or client side if you do that as part of CI. "prettier-eslint" is used to integrate "prettier" and "eslint" together, and get them running one after the other.
