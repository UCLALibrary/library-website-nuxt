# Components

TODO List of needed components for this website.

## Global
- SiteBrandBar
    - (Contains SVG of logo that links)

- NavSecondary
    - items: [{text, url, target}]

-   NavPrimary
    - items: [{name = "", url = "", items = [{text, url, target}]]

- TODO Mobile Primary and Secondary?

- MastheadPrimary
    - (Contains SearchHome)

- MastheadSecondary
    - hasMolecules: boolean
    - (slot: used for search form)

- DividerHorizontal
    - color: "yellow"
    - bold: boolean

- DividerVertical

- FooterPrimary
    - social-items: [{text, url}]
    - press-items: [{text, url}]
    - (Uses form-mailing-list?)

- SiteFooterSock
    - items: [{text, url, target}]

- SiteNotificationAlert
    - title
    - text

## Home

- SectionCards
    - title
    - text
    - items: [{see card props}] (uses CardVertical component)
    - to: ""

- BlockCardVertical
    - iconName: String
    - title
    - text
    - to
    - section: "" // get-help, visit, about

- BlockCardMore
    - text
    - to

- BannerFeatured
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

- SectionDualMasonry
    - items: [{image, category, title, prompt, dates, to}]
    - to

- HeadingArrow
    - text
    - to

- SectionPostSmall    
    - items: [{see BlockPostSmall}]
    - to

- BlockPostSmall
    - image
    - category: {name, to}
    - title
    - author
    - to
    - theme

## Search

- SearchHome
    - TODO what props?    
