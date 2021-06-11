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

-   [x] SearchHome

    -   tabs: [{title, isActive}]
    -   links: [{name, url, target}](Course Reserves etc)
    -   actionUrl: String
        // search by keyword
        -   exampleString: "https://ucla.on.worldcat.org/external-search"
        -   exampleString: "https://ucla.summon.serialssolutions.com/#!/search?ho=t&l=en&"
        -   exampleString: "fromPrimo"
        -   (build component out knowing where to submit the query string)

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

-   **note**: each page will have its own list of filters available - from craft - content-types

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

## Exhibits & Upcoming Events Index Page

-   [x] BlockTeaserMeta (All of the text for all of the other BlockTeaser components)

    -   items: { image, to, category, title, dates, times, text, location }

-   [x] BlockTeaserList

    -   items: { image, to, category, title, dates, times, text, location }

-   [ ] BlockTeaserHighlight

    -   items: { image, to, category, title, dates, times, text, location }

-   [x] BlockTeaserVertical

    -   items: { image, to, category, title, dates, times, text, location }

-   [ ] SectionTeaserHighlight

    -   items: [{see block props}] (uses BlockTeaserHighlight component)

-   [x] SectionTeaserList

    -   items: [{see block props}] (uses BlockTeaserList component)

-   [ ] SectionTeaserVertical

    -   items: [{see block props}] (uses BlockTeaserVertical component)

-   [ ] SectionTeaserCalendar (should include the date and today navigation)

    -   items: [{see block props}] (uses BlockTeaserMeta component)

-   [ ] BlockCallToAction

    -   iconName: String
    -   title
    -   text
    -   prompt // button
    -   to

-   [x] BlockDate

    -   date

-   [ ] CalendarLongEvents

    -   events: [{startDate, endTime, name, to}]

-   [ ] SectionPagination
    -   nextTo
    -   previousTo

## Exhibits Detail Long Form Page

-   [ ] update BannerFeatured (path=/story/banner-featured--default)

    -   hasButton (set this to false)
    -   add new stories

-   [ ] BlockDetail

    -   title
    -   text (It might have p tag, figure with img and caption, blockquote with span for author)
    -   footNotes (is optional and Array of Strings)
    -   DividerGeneral component if the footNotes exists.

-   [ ] SectionGallery

    -   it needs all these icons (+/-, play icon for video, solid-molecule-image, solid-molecule-video, )
    -   galleryTitle
    -   featuredItem (// It is an object contains image or video url )
    -   items (// array of objects [url, objectType[audio,video,image], meta: { to, category, title, dates, times, text, location }])
    -   (uses SectionGalleryVertical component)
    -   (uses Carousel component when there are multiple items)
    -   DividerGeneral component

-   [ ] BlockGalleryVertical

    -   BlockTeaserMeta
    -   items: { image, to, category, title, dates, times, text, location, prefix("On view") }
    -   hover state will show the eye icon over the image
    -   Clicking the eye will open the modal(carousel component) by grandparent component (SectionGallery)

-   [ ] SectionGalleryVertical

    -   BlockGalleryVertical
    -   items (Array of objects)

-   [ ] update BlockTeaserMeta

    -   view prop (can have highlight, card (this was gallery before), gallery or calendar)
    -   write a story for view type gallery.

-   [ ] Carousel (lightbox in the figma)

    -   items
    -   (icons needed are left, right arrows and close )

-   [ ] GalleryList

    -   featuredItem
    -   items [url, objectType[audio,video,image], meta: { to, category, title, dates, times, text, location, identifier (which can be a call number) }])
    -   (uses updated BlockTeaserVertical component)
    -   Uses icons +/-, play icon for video, solid-molecule-image, solid-molecule-video,

-   [ ] BlockGalleryVertical ?path=/story/block-teaser-vertical--default

    -   item (date, image, callnumber or any other identifier, tilte)
    -   default audio or video or image icon if no images given

-   [ ] BlockGalleryList

    -   featuredTitle
    -   featuredText
    -   items
    -   uses GalleryList component
    -   uses Carousal component

-   [ ] SectionGalleryList
    -   items (// Array of Array objects )
    -   title
    -   Uses DividerGeneral component
    -   Uses BlockGalleryList component

note: 2 sizes full width & half page

## Article Detail Page

According to the data model, `Articles` will be used in "A blog post or other timely story from the UCLA library"

**context**: this is the only part of the data model in our CraftCMS that is close to being done (pending) approval

We can look at those designs and focus on making component request issues for the relevant components
