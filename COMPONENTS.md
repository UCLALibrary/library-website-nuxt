# Components

TODO List of needed components for this website.

## Global

-   [x] ResponsiveImage

-   [x] ButtonMore

    -   text

-   [x] SiteBrandBar

    -   (Contains SVG of logo that links)

-   [x] NavSecondary

    -   items: [{text, url, target}]

-   [x] NavPrimary

    -   items: [{name = "", url = "", items = [{text, url, target}]], {}}

-   [x] SmartLink

    -   to
    -   target
    -   default slot: <smart-link>something </smart-link>

-   [x] MastheadPrimary

    -   (Contains SearchHome)

-   [x] MastheadSecondary

    -   hasMolecules: boolean
    -   title
    -   text
    -   (slot: used for search form)

-   [x] DividerWayfinder

    -   color: "help"
    -   bold: boolean

-   [x] DividerVertical

-   [x] FooterPrimary

    -   social-items: [{text, url}]
    -   press-items: [{text, url}]
    -   (Uses form-mailing-list?)

-   [x] FooterSock

    -   items: [{text, url, target}]

-   [x] SiteNotificationAlert
    -   title
    -   text

## Home

-   [x] SectionCards

    -   title
    -   text
    -   items: [{see card props}] (uses CardVertical component)
    -   to: ""

-   [x] BlockCardVertical

    -   iconName: String
    -   title
    -   text
    -   to
    -   section: "" // get-help, visit, about

-   [x] BlockCardMore

    -   text
    -   to

-   [x] BannerFeatured

    -   image
    -   title
    -   category: {name, to}
    -   theme
    -   dates: String
    -   times: String
    -   location: String
    -   isOnline: boolean
    -   to
    -   breadcrumb: {text, to}
    -   prompt: String
    -   (slot that replaces top breadcrumb)
    -   alignment: "left" or "right"

-   [x] SectionDualMasonry
    -   items: [{image, category, title, prompt, dates, to}]
    -   to

-   [x] HeadingArrow
    -   text
    -   to

-   [x] SectionPostSmall
    -   items: [{see BlockPostSmall}]
    -   to

-   [x] BlockPostSmall
    -   image
    -   category: {name, to}
    -   title
    -   author
    -   to
    -   theme

## Search

-   [ ] SearchHome
    -   tabs: [{title, isActive}]
    -   links: [{name, url, target}](Course Reserves etc)
    -   actionUrl: String
        // search by keyword
        - exampleString: "https://ucla.on.worldcat.org/external-search"
        - exampleString: "https://ucla.summon.serialssolutions.com/#!/search?ho=t&l=en&"
        - exampleString: "fromPrimo"
        - (build component out knowing where to submit the query string)

-   [ ] SearchGeneric
    -   actionUrl:"",
    -   filters: [{name, queryParam},{},...]

example:

```json
    actionUrl:"", //main search block
    filters: [          // dependent on the page ?
        {
            name: "location",
            filterItems: [
                {
                    name: "Arts Library",
                    queryParam: "artsLib"
                },
                {
                    name: "Bio Med",
                    queryParam: "bioMed"
                },
            ]
        },
        {
            name: "department",
            filterItems: [
                {
                    name: "Science Department",
                    queryParam: "scienceDept"
                },
                {
                    name: "Music Department",
                    queryParam: "musicDept"
                },
            ]
        },
    ]
```

- **note**: each page will have its own list of filters available - from craft - content-types

## Mobile Versions

Mobile nav/menus combine the Primary and Secondary navs

hard code menu items using data()
-   [ ] MobileNav

```
data() {
    primary: [{text, url, target}] ,
    secondary: [{text, url, target}] ,
}
```

## Exhibits & Upcoming Events

-   [ ] BlockTeaser
    -   items: {image: {}, to, category, title, dates, times, text}
    -   view: String // default: "list" other options are highlight,gallery or calendar 

-   [ ] SectionTeaserHighlight
    -   items: [{see block props}] (uses BlockTeaser component)

-   [ ] SectionTeaserList
    -   items: [{see block props}] (uses BlockTeaser component)

-   [ ] SectionTeaserGallery
    -   items: [{see block props}] (uses BlockTeaser component)

-   [ ] SectionTeaserCalendar
    -   items: [{see block props}] (uses BlockTeaser component)

-   [ ] BlockCallToAction
    -   iconName: String
    -   title
    -   text
    -   name //button
    -   to

note: 2 sizes full width & half page

## Article Detail Page

According to the data model, `Articles` will be used in "A blog post or other timely story from the UCLA library"

**context**: this is the only part of the data model in our CraftCMS that is close to being done (pending) approval

We can look at those designs and focus on making component request issues for the relevant components
