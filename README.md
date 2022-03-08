# UCLA Library Website

A [Nuxt](https://nuxtjs.org/) powered frontend website for the UCLA Library.

## Build Setup

<details><summary>SET UP THE NUXT SITE</summary>

**This is a Nuxt site, it builds and deploys like any other Nuxt project.**

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

# build Storybook for production
$ npx nuxt storybook build

# generate static nuxt site
$ npm run generate

```

</details>

---

## Designs - Figma

-   [DESIGNS](https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=0%)

-   [DESIGN TOKENS](https://www.figma.com/file/EKazRIMP4B15bD16UDbOwR/UCLA-Library-Design-System?node-id=117%3A5562)

<details><summary>UX GUIDE</summary>

---

### STEPS

*(font-size/line-height/letter-spacing)*

#### `@include step-5;`  
+ **page-title**  
    + *Karbon Regular*  
    + Desktop - 84px / 100em / 0em  
    + Tablet -    50px/100em/0em  
    + Mobile -    36px/100em/0em  

#### `@include step-4;`  
+ **section-heading**  
    + *Karbon Regular*  
    + Desktop - 63px/125em/0em  
    + Tablet -    42px/125em/0em  
    + Mobile -    32px/125em/0em  

#### `@include step-3;`
+ **subheading**  
    + *Karbon Regular*  
    + Desktop - 48px/125em/0em  
    + Tablet - 34px/125em/0em  
    + Mobile - 28px/125em/0em  

#### `@include step-2;`  
+ **subheading-small**  
    + *Karbon Medium*  
    + Desktop - 36px/120em/0.25em  
    + Tablet - 28px/125em/0em  
    + Mobile - 28px/125em/0em  

#### `@include step-1;`  
+ **subtitle**  
    + *Karbon Medium*  
    + Desktop - 26px/125em/0em  
    + Tablet - 24px/125em/0em  
    + Mobile - 22px/125em/0em

---

### HEADINGS

All Heading tags are `var(--font-primary)` (Karbon)

#### `<h1 class="page-title"></h1>`
+ `font-size: var(--step-5);` (84px/50px/36px)
+ `font-weight: 400;`

#### `<h2 class="section-heading"></h2>`
+ `font-size: var(--step-4);` (63px/42px/32px)
+ `font-weight: 400;`

#### `<h3 class="subheading"></h3>`
+ `font-size: var(--step-3);` (48px/34px/28px)
+ `font-weight: 400;`

#### `<h4 class="subheading-small"></h4>`
+ `font-size: var(--step-3);` (48px/34px/28px)
+ `font-weight: 500;`

#### `<h5 class="subtitle"></h5>`
+ `font-size: var(--step-3);` (48px/34px/28px)
+ `font-weight: 500;`

#### `<h6 class="heading-six"></h6>`
+ `font-size: 20px;`
+ `font-weight: 500;`

---

### FONTS
    `var(--font-primary)` Karbon  
    `var(--font-secondary)`Proxima Nova

---

</details>

---

## Helpful Documentation & Tools

<details><summary>DOCS & TOOLS</summary>

+ [ORG Chart](https://jira.library.ucla.edu/secure/attachment/72225/lib_org_chart.txt)
+ [Current UCLA Library Site](https://www.library.ucla.edu/)
+ [Team - Youtube](https://www.youtube.com/playlist?list=PLD6zTMdoCybJKdTBgm0UesCY_sTMOSOAn)
+ [Clippy](https://bennettfeely.com/clippy/)
+ [Flexy Boxes](https://the-echoplex.net/flexyboxes/)
+ [Nth Child Calculator](https://www.nealgrosskopf.com/tech/resources/80/)
+ [Lorem Ipsum](https://loremipsum.io/)

+ [Nuxt Docs](https://nuxtjs.org/docs/concepts/nuxt-lifecycle/)
    + [Funkhaus Components](https://github.com/funkhaus/fh-components)
+ [Craft Docs](https://craftcms.com/docs/3.x/project-config.html)
    + [Craft Plugin Store](https://plugins.craftcms.com/)
        + [Redactor](https://imperavi.com/redactor/docs/)
        + [Feed Me](https://docs.craftcms.com/feed-me/v4/)
        + [Navigation](https://verbb.io/craft-plugins/navigation/docs/get-started/installation-setup)
        + [Neo](https://github.com/spicywebau/craft-neo/wiki)
+ SCRIPTS
    + `npm run dev` : "nuxt",
    + `npm run build` : "nuxt build",
    + `npm run generate` : "nuxt generate",
    + `npm run start` : "nuxt start",
    + `npm run storybook` : "nuxt storybook --port 3009",
    + `npm run storybook-build` : "nuxt storybook build",
    + `npm run cypress` : "cypress open",
    + `npm run cypress-run` : "cypress run",
    + `npm run lint` : "eslint ./",
    + `npm run lint-fix` : "eslint --fix ./",
    + `npm run percy` : "percy storybook http://localhost:3003",
    + `npm run percy-static` : "percy storybook ./storybook-static"

</details>

---

## Routes

<details><summary>GET HELP</summary>

| Menu name                     | URL                                               | Figma template name       |
| ----------------------------- | ------------------------------------------------- | ------------------------- |
| Borrowing Books and Equipment | /services-resources/borrowing-books-and-equipment | Help Topic - Landing Page |
| Research                      | /services-resources/research                      | Help Topic - Landing Page |
| Teaching                      | ?                                                 | ?                         |
| Remote Access                 | ?                                                 | ?                         |
| Find & Reserve a Space        | ?                                                 | ?                         |
| View all services & Resources | ?                                                 | ?                         |

</details>

<details><summary>VISIT</summary>

| Menu name                  | URL               | Figma template name                                                                 |
| -------------------------- | ----------------- | ----------------------------------------------------------------------------------- |
| Location & Hours           | ?                 | ?                                                                                   |
| Exhibits & Upcoming Events | /events-exhibits/ | All Exhibits & Upcoming Events - Listing Page (General Template, list view default) |
| Our Collections            | ?                 | ?                                                                                   |
| For the General Public     | ?                 | ?                                                                                   |

</details>

<details><summary>ABOUT</summary>

| Menu name                    | URL | Figma template name |
| ---------------------------- | --- | ------------------- |
| About the UCLA Libraries     | ?   | ?                   |
| Library News                 | ?   | ?                   |
| Staff Directory              | ?   | ?                   |
| Student Opportunities        | ?   | ?                   |
| Awards, Fellowships & Grants | ?   | ?                   |

</details>

<details><summary>OTHERS</summary>

| Menu name        | URL | Figma template name |
| ---------------- | --- | ------------------- |
| Location & Hours | ?   | ?                   |

</details>

---

## LibCal Auth Procedure

<details><summary>LIBCAL</summary>

1. At start of build, we need to exchange secret for token
2. Token needs to be given to client side, so that search works

</details>
