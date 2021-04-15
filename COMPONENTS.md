# Components

TODO List of needed components for this website.

## Global

- [x] ResponsiveImage

- [x] ButtonMore
    - text

- [x] SiteBrandBar
    - (Contains SVG of logo that links)

- [x] NavSecondary
    - items: [{text, url, target}]

- [x] NavPrimary
    - items: [{name = "", url = "", items = [{text, url, target}]], {}}

- [x] SmartLink
    - to
    - target
    - default slot: <smart-link>something </smart-link>

- [x] MastheadPrimary
    - (Contains SearchHome)

- [x] MastheadSecondary
    - hasMolecules: boolean
    - title
    - text
    - (slot: used for search form)

- [x] DividerWayfinder
    - color: "help"
    - bold: boolean

- [x] DividerVertical

- [x] FooterPrimary
    - social-items: [{text, url}]
    - press-items: [{text, url}]
    - (Uses form-mailing-list?)

- [x] FooterSock
    - items: [{text, url, target}]

- [x] SiteNotificationAlert
    - title
    - text

## Home

- [x] SectionCards
    - title
    - text
    - items: [{see card props}] (uses CardVertical component)
    - to: ""

- [x] BlockCardVertical
    - iconName: String
    - title
    - text
    - to
    - section: "" // get-help, visit, about

- [x] BlockCardMore
    - text
    - to

- [x] BannerFeatured
    - image
    - title
    - category: {name, to}
    - theme
    - dates: String
    - times: String
    - location: String
    - isOnline: boolean
    - to
    - breadcrumb: {text, to}
    - prompt: String
    - (slot that replaces top breadcrumb)
    - alignment: "left" or "right"

- [x] SectionDualMasonry
    - items: [{image, category, title, prompt, dates, to}]
    - to

- [x] HeadingArrow
    - text
    - to

- [x] SectionPostSmall    
    - items: [{see BlockPostSmall}]
    - to

- [x] BlockPostSmall
    - image
    - category: {name, to}
    - title
    - author
    - to
    - theme


## Search

- [ ] SearchHome
    - TODO what props?    

## TODO

- TODO Mobile nav/menus Primary and Secondary?    
