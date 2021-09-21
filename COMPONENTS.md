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

## Drew's versions of Exhibits & Upcoming Events list page

-   SectionHighlights

    -   items: [{...BlockHighlight},{...BlockHighlight}]

-   BlockHighlight

    -   title
    -   image
    -   date
    -   isOnline
    -   hasTriangle (used to turn on clippy path detail)
    -   text
    -   to
    -   isVertical: (false will show the side-by-side style )

-   HeaderChildCalendar

    -   date (should be a datestamp)

-   BlockDay (already done, but update as per my TODO)

    -   date

-   BlockEvent

    -   category (string)
    -   title
    -   dates: [] (should be array of datestamps)
    -   time

-   SectionDay

    -   items: [{...BlockEvent}, {...}]

-   HeaderChildDateRanges
    -   items: [{startDate, endDate, name}, {...}]

- Flexible Page Blocks 
    -   Feature Promo
        -   Will this just call BannerFeatured Component?
    -   Card with Image (2-up)
        -   will this call the SectionTeaserHighlight?
    -   CTA Block, content width
        -   This flexible page block calls CallToAction Component to display calltoaction as full width.

## Exhibits Detail Long Form Page

-   [ ] update BannerFeatured (path=/story/banner-featured--default)

    -   hasButton (set this to false)
    -   add new stories

-   [ ] BlockDetail  // This is not required

    -   title
    -   text (It might have p tag, figure with img and caption, blockquote with span for author)
    -   footNotes (is optional and Array of Strings)
    -   DividerGeneral component if the footNotes exists.

-   Flexible Page Blocks
    -   RickText
    -   RichTextWithMedia
    -   PullQuote
    -   MediaGallery
        -  Can be closed gallery with full width or half width, is the width added in craft or should be determined on the page level, or just a open gallery with section heading like sample manuscript pages on the mid length page.
    -   VideoContentWidth
        One Video full width, with play button on the side?
        On the mid length page there is manuscript with one video after the richtext which has the play button in the middle is this a flexible page block or regular component
    -   ImageContentWidth
    -   AudioContentWidth
    -   CTABlockcontentwidth
    -   etc

-   [ ] SectionGallery // This may not be requierd as we will build the media gallery flexible page block component. Check with UX

    it needs all these icons (+/-, play icon for video, solid-molecule-image, solid-molecule-video, )

    -   title
    -   items: [{type:"audio,video,image", title, text, dates, location])

    -   (uses SectionGalleryVertical component)
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

## Staff Directory Listing Page

-  [x] BlockStaffMeta
-  [x] BlockStaffList
-  [x] SectionStaffList

## Staff Directory Detail

-  [x] BlockStaffProfile

## Gallery variants these are used on Exhibit or Events Detail Pages

-   GalleryPreview
-   BlockGallery
-   GalleryGrid
-   GalleryItem

-   SectionGallery

-   ModalGallery

-   PlayerVideo
-   PlayerAudio

## Sticky Header

Parent component is <sticky-header>.

Child-headers are:

-   HeaderChildBreadcrumbs (can have social share links)
    -   Where does the breadcrumb data come from?
-   HeaderChildSearch (can have breadcrumb too)
-   HeaderChildMenu (can have a button too)
-   HeaderChildDates

## Event Series Detail Page

This uses the BannerFeatured component

-   Flexible Page Blocks
    -   [ ] Rich text
    -   [ ] Rich text with media
    -   [ ] Media Gallery // Selected Trailers
    -   [ ] Divider
    -   [ ] Pull quote
    -   [ ] Image - Content Width, // Individual event in this series with clipped box on the left which has the event date.
    -   etc

    Questions
    1. which of the flexible page blocks will give the data for More upcoming events and events in this series, or are these flexible page blocks?

- BlockEventCard
    -   event type
    -   title
    -   image
    -   Date
    -   Time

-   [ ] SectionEventsGrid // More upcoming events Section
    https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=1101%3A46937
    - items[{...BlockEventCard},{...BlockEventCard}]
    
-   [ ] SectionEventsList // Events in this series Section
    https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=1101%3A45265
    - items[{...BlockEventCard},{...BlockEventCard}]

-  [ ] ViewMore 
    - plus icon svg 
    - ?

## Event Detail Page

If Hero Image exists, use BannerFeatured component else SimpleBanner
-   [ ]  SimpleBanner
    -   Title
    -   Date
    -   Start Time
    -   Event type
    -   End Time, 
    -   Address,
    -   Button/URL, 
    -   Associated Location(s),
    -   svg half molecule

-   [ ]  SectionEventsHighlght // Related Events or Event Series// Shown on Exhibit Detail short form Page and Event Detailed page
    https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=1001%3A46025
    - items[{...BlockEventCard},{...BlockEventCard}]

-   Flexible Page Blocks
    -   Rich Text
    -   Rich Text with Media
    -   etc

## Get Help with, All Services and Resources Listing page (General Template)
https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=887%3A38064

-   [ ] BlockCard // Rename BlockCardVertical to this and add additional props
    -   iconName: String
    -   title
    -   text
    -   to // Compute if the url is external, thenshow link out icon
    -  Add isExternal utility

-   [ ] LoadMore
    -   svg plus icon
    -   lazy loading url or will it emit event?

-   [ ] CTABlockcontentwidth // This is the FlexiblePageBlock

## About us (Landing Page) / Support Us (Landing Page)
https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=887%3A29498

-  [ ] LandingBanner
    -   Title
    -   Description
    -   full cirlce molecule
    -   HeadingArrow component



-   [ ] ImapactNumbersCarousel // this is a Flexible Page Block
    https://airtable.com/tblbfuBMzyHtLCYKY/viwqexZxA0x4tVEt9?blocks=show

    -   heading
    -   items []

-   [ ] SimpleCardGrid // This is a Flexible Page Block
    https://airtable.com/tblFpvWgv6MuMbClH/viwDcIDo9xJKefFzR/recWJ9YUJkBFXq6PV/fldSewQYeFhJd0ejr/attpkhJCdD9hRpDZN?blocks=show

    This a 3 X 3 grid on about us page and 2 by 3 grid on Support us?

    -   heading
    -   items [{...SimpleCard},{...SimpleCard}...]
    
-   [ ] SimpleCard
    -   title
    -   short description
    -   Svg small right arrow

-   [x] ButtonMore 

-   [ ] ImageWithTextOverlay// This is a Flexible Page Block
    Use to display an image side by side with text, and an optional button/link to another page
    https://airtable.com/tblbfuBMzyHtLCYKY/viwqexZxA0x4tVEt9?blocks=show

-   [ ] SectionImageWithTextOverlay
    -   items [{...ImageWithTextOverlay},{...ImageWithTextOverlay},...]

## Endowment General Page
https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=887%3A29404

-   [x] BannerFeatured
-   FlexiblePageBlocks

## Get Help With -- Detail Page 
// Is this page used for workshop/resource/services help topics?
    
https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=887%3A31680

This will use BannerFeatured component if it has hero image, if not use TextBanner
-   [ ] TextBanner
    -   category
    -   title
    -   text
    -   button text
    -   button url //example reserve url for a Resource https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=887%3A31862

-   [ ] SectionEventsList // This is also used on Event Series Detail Page
    -   items []
    -   heading
    -   short description

-   Flexible Page Blocks

-   [x] SectionCard // This is used on home page, on this page it is the associated topics

-   [ ] DownloadCallOut // This is Flexible Page Block
    https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=887%3A32027
    https://airtable.com/tblFpvWgv6MuMbClH/viwDcIDo9xJKefFzR/recdCXeJuctGMw2a3/fldSewQYeFhJd0ejr/attHoiJWFElFmSwUb?blocks=show
    -   title
    -   text
    -   button text
    -   button url
    -   Image

-  [ ] BlockMedia // Is this a Flexible Page block used by Media Thumbnail
    https://airtable.com/tblFpvWgv6MuMbClH/viwDcIDo9xJKefFzR/recfdHVVRtfO6JqKH/fldSewQYeFhJd0ejr/att1F5YXvg9OFqLxn?blocks=show
    https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=887%3A32027

    -   title
    -   description
    -   button label
    -   button url
    -   Image
    -   what does the play button on the image do?

-   [ ] SectionBlockMedia
    - items [{...BlockMedia},{}]

-   [ ] CTABlockcontentwidth // This is the FlexiblePageBlock
    https://www.figma.com/file/ZT2qWKTlOxfhr1QUS2rFPL/UI-Pattern-Library-(Client-Facing)-Final?node-id=887%3A32202
