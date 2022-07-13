<template>
    <div
        id="app"
        class="app"
    >
        <h1>
            This page is consuming the
            <a
                href="https://github.com/UCLALibrary/ucla-library-website-components"
            >ucla-library-website-components library</a>
        </h1>
        <hr>

        <h2>AlphabeticalBrowseBy Component</h2>
        <alphabetical-browse-by />
        <hr>

        <h2>BlockCallToAction Component</h2>
        <block-call-to-action
            svg-name="svg-call-to-action-chat"
            title="Lorem ipsum dolor sit amet?"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            name="Lorem ipsum dolor"
            to="/help/foo/bar/"
            is-dark="false"
            is-small-size="false"
        />
        <hr>

        <h2>BlockCallToActionTwoUp Component</h2>
        <block-call-to-action-two-up :items="items" />
        <hr>

        <h2>BlockCampusMap Component</h2>
        <block-campus-map
            campus-location-id="280"
            location-name="YRL Library"
            building-access="<p>Park at parking structure 2. You cannot park in the round about.
            Powell is the second building in on the quad. Walk straight ahead
            for about 15 minutes. Wear your walking shoes. Finally when you are
            there walk up the stairs to the rotunda. You are at the library now.</p>"
        />
        <hr>

        <h2>BlockCardWithIllustration Component</h2>
        <block-card-with-illustration
            to="/help/foo/bar/"
            title="Quisque Volutpat"
            text="Watch it, Goldie. No, it was The Enchantment Under The Sea Dance. Our first date."
            icon-name="illustration-find-space"
        />
        <hr>

        <h2>BlockDate Component</h2>
        <block-date
            date="10"
            day="Digniss"
        />
        <hr>

        <h2>BlockHighlight Component</h2>
        <block-highlight
            :image="mockBlockHighlight.image"
            :to="mockBlockHighlight.to"
            :category="mockBlockHighlight.category"
            :title="mockBlockHighlight.title"
            :start-date="mockBlockHighlight.startDate"
            :end-date="mockBlockHighlight.endDate"
            :text="mockBlockHighlight.text"
            :has-triangle="true"
            :is-vertical="true"
            :image-aspect-ratio="60"
            :locations="mockBlockHighlight.locations"
        />
        <hr>

        <h2>BlockHours Component</h2>
        <block-hours lid="2081" />
        <hr>

        <h2>BlockLocationListItem Component</h2>
        <block-location-list-item
            :title="mockBlockLocationListItem.title"
            :to="mockBlockLocationListItem.to"
            :image="mockBlockLocationListItem.image"
            :day="mockBlockLocationListItem.day"
            :hour="mockBlockLocationListItem.hour"
            :address="mockBlockLocationListItem.address"
            :address-link="mockBlockLocationListItem.addressLink"
            :amenities="mockBlockLocationListItem.amenities"
            :reserve-seat="mockBlockLocationListItem.reserveSeat"
            :is-ucla-library="mockBlockLocationListItem.isUclaLibrary"
        />
        <hr>

        <h2>BlockMediaWithText Component</h2>
        <block-media-with-text
            :section-header="mockMediaWithText.mediaWithText[0].titleLink"
            :short-description="mockMediaWithText.mediaWithText[0].description"
            :button-text="mockMediaWithText.mediaWithText[0].buttonText"
            :button-url="mockMediaWithText.mediaWithText[0].buttonUrl"
            :media-link="mockMediaWithText.mediaWithText[0].linkToMedia"
            :is-video="false"
            :is-audio="false"
            :image="mockMediaWithText.mediaWithText[0].coverImage[0]"
            :type-media="mockMediaWithText.mediaWithText[0].typeMedia"
        />
        <hr>

        <h2>BlockSimpleCard Component</h2>
        <block-simple-card
            :title="mockBlockSimpleCard.title"
            :text="mockBlockSimpleCard.summary"
            :to="mockBlockSimpleCard.externalLink"
        />
        <hr>

        <h2>BlockSpaces Component</h2>
        <block-spaces
            :to="mockBlockSpace.to"
            :title="mockBlockSpace.title"
            :location="mockBlockSpace.location"
            :text="mockBlockSpace.text"
        />
        <hr>

        <h2>BlockStaffArticleList Component</h2>
        <block-staff-article-list
            :image="mockBlockStaffArticleList.image"
            :to="mockBlockStaffArticleList.to"
            :category="mockBlockStaffArticleList.category"
            :title="mockBlockStaffArticleList.title"
            :date="mockBlockStaffArticleList.date"
            :authors="mockBlockStaffArticleList.authors"
            :description="mockBlockStaffArticleList.description"
        />
        <hr>

        <h2>BlockStaffDetail Component</h2>
        <block-staff-detail v-bind="{ ...mockBlockStaffDetail }" />
        <hr>

        <h2>BlockStaffList Component</h2>
        <block-staff-list
            v-bind="{ ...mockBlockStaffList }"
            phone="(222) 444-5555"
        />
        <hr>

        <h2>ButtonLink Component</h2>
        <button-link
            label="Egest perl Conub"
            to="/help/more"
        />
        <hr>

        <h2>ButtonMore Component</h2>
        <button-link
            label="This is a button "
            to="/help/"
        />
        <hr>
        <button-more
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <hr>

        <h2>DividerGeneral Component</h2>
        <divider-general :is-bold="true" />
        <hr>

        <h2>DividerWayFinder Component</h2>
        <divider-way-finder color="visit" />
        <hr>

        <h2>HeadingArrow Component</h2>
        <heading-arrow
            text="Get Help With"
            to="/help/foo/bar/"
        />
        <br><br>
        <heading-arrow
            text="Featured "
            to="/visit/"
        />
        <hr>

        <h2>IconWithLink Component</h2>
        <icon-with-link
            text="Powell"
            icon-name="svg-icon-location"
            to="/visit/library/powell"
        />
        <hr>

        <h2>MastheadPrimary Component</h2>
        <masthead-primary />
        <hr>

        <h2>ModalGeneric Component</h2>

        <h2>ResponsiveImage Component</h2>
        <responsive-image :image="mockBlockHighlight.image" />
        <hr>

        <h2>RichText Component</h2>
        <rich-text :rich-text-content="mockRichText.richText" />
        <hr>

        <h2>SearchHome Component</h2>
        <search-home
            :link-items="mockSearchHomeLinks.linkItems"
            :advanced-search-link="mockAdvancedSearchLink.advancedSearchLink"
            @activeTabSet="action"
            @search="action"
        />
        <hr>

        <h2>SectionCardsWithIllustrations Component</h2>
        <section-cards-with-illustrations
            :items="mockSectionCardsWithIllustrations.items"
            title="Get Help with"
            text="Curabitur aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh."
            to="/help/foo/bar"
            :is-horizontal="false"
        />
        <hr>

        <h2>SmartLink Component</h2>
        <smart-link to="/">
            This will render as a vue-router link
        </smart-link>
        <hr>

        <h2>Flexible Blocks</h2>
        <flexible-blocks :blocks="flexibleBlocks" />
    </div>
</template>

<script>
import * as API from "~/stories/mock-api.json"

export default {
    name: "Home",
    data() {
        return {
            mockBlockHighlight: {
                image: API.image,
                to: "/visit/foo/bar/",
                category: "Ullamco",
                title: "Fames ac turpis egestas sed tempus",
                startDate: "2022-03-31T07:00:00+00:00",
                endDate: "2021-11-26T11:00:00-08:00",
                text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
                imageAspectRatio: 60,
                locations: [
                    { title: "Powellarium", to: "/location/bar" },
                    {
                        title: "Research Library (Charles E. Young)",
                        to: "/location/baz",
                    },
                ],
            },
            mockBlockLocationListItem: {
                isUclaLibrary: false,
                title: "Arts Library",
                image: API.image,
                day: "Today",
                hour: "8am - 5pm",
                reserveSeat: "http://google.com/reserveSeat",
                address:
                    "1400 Public Affairs Building Los Angeles, CA 90095-1392",
                addressLink: "http://google.com/address",
                amenities: [
                    "SvgIconEmail",
                    "SvgIconPhone",
                    "SvgIconVirtual",
                    "SvgIconChair",
                    "SvgIconSharePrinter",
                    "SvgIconShareBook",
                ],
                to: "http://google.com/title",
            },
            mockMediaWithText: {
                id: "13669",
                typeHandle: "mediaWithText",
                sectionTitle: "A section of media with text",
                sectionSummary: "<p>A section of media with text</p>",
                mediaWithText: [
                    {
                        id: "13670",
                        titleLink: "A media Link",
                        description: "Citation Integration",
                        coverImage: [
                            {
                                id: "5115",
                                src: "https://static.library.ucla.edu/craftassetstest/_fullscreen/Screen-Shot-2022-02-17-at-11.42.39-AM.png",
                                height: 2151,
                                width: 2560,
                                srcset: "https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/Screen-Shot-2022-02-17-at-11.42.39-AM.png 2560w",
                                alt: "Screen Shot 2022 02 17 at 11 42 39 AM",
                                focalPoint: [0.5, 0.5],
                            },
                        ],
                        buttonText: "Download this",
                        buttonUrl:
                            "https://uclalibrary.github.io/research-tips/assets/handouts/citation-integration-final.pdf",
                        linkToMedia:
                            "https://uclalibrary.github.io/research-tips/assets/handouts/citation-integration-final.pdf",
                        typeMedia: "other",
                    },
                ],
            },
            mockBlockSimpleCard: {
                title: "Types of Sinkholes",
                summary:
                    "Dissolution sinkholes, Cover-subsidence sinkholes, Cover-collapse sinkholes",
                externalLink: "https://www.heliconusa.com/types-of-sinkholes/",
            },
            mockBlockSpace: {
                to: "https://calendar.library.ucla.edu",
                title: "Bureaux de Garcons",
                location: "Fast Lane Building",
                text: "Eclectic sophisticated carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub Boeing 787 lovely Melbourne flat white ryokan. Global iconic Gaggenau Muji bulletin premium espresso delightful destination vibrant remarkable elegant bureaux boutique. Sunspel exclusive first-class espresso, Fast Lane intricate Melbourne Airbus A380 pintxos Shinkansen Swiss vibrant the highest quality.",
            },
            mockBlockStaffArticleList: {
                image: API.image,
                to: "/about/foo/bar/",
                category: "Ullamco",
                title: "Fames ac turpis egestas sed tempus lorem ipsum",
                date: "1995-12-17T03:24:00",
                authors: [{ title: "Justo Magna", id: 123 }],
                description:
                    "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet nibh praesent tristique. Quis imperdiet massa tincidunt nunc pulvinar sapien. Quis imperdiet massa tincidunt nunc pulvinar sapien.",
            },
            mockBlockStaffDetail: {
                // image: API.image_people,
                to: "about/staff/id/",
                staffName: "Ada Lovelace",
                jobTitle: "Librateria",
                locations: [
                    { title: "Powellarium", to: "/location/bar" },
                    {
                        title: "Research Library (Charles E. Young)",
                        to: "/location/baz",
                    },
                ],
                email: "ada@somewhere.com",
                phone: "555-555-5555",
                departments: ["DIIT", "Other Department"],
                topics: [
                    { title: "Quadrigis aedificium", id: "808" },
                    { title: "Carpe vinum", id: "809" },
                ],
                biography:
                    "<p>Creo quia absurdum est. Fusce metus ex, gravida at metus id, vestibulum aliquam ante. Vestibulum hendrerit ut augue id pulvinar. Nam id efficitur felis. Duis nisi dui, vulputate id cursus quis, facilisis sed est. Etiam consequat malesuada congue. Nullam sed nulla laoreet, e gestas felis in, sollicitudin lacus. Cras ultrices dolor at quam vestibulum, eget vestibulum diam congue. Nam at est cursus, cursus justo non, pharetra ipsum.</p><p>Morbi gravida, turpis ut luctus placerat, est mauris congue libero, sed tristique quam eros vel neque. Nunc lacinia mi a orci faucibus tincidunt. Praesent dapibus blandit eros eget auctor. Nullam orci ex, pharetra tempor nulla non, vulputate mattis nibh. Sed vel pharetra erat. Proin nec sapien a velit scelerisque interdum. Donec sagittis magna tincidunt, eleifend arcu id, elementum sapien.</p>",
            },
            mockBlockStaffList: {
                to: "/staff/foo",
                jobTitle: "Ullamco",
                staffName: "Fames C. Turpis",
                departments: [
                    { id: 123, title: "Inceptos Himenaeos Inceptos" },
                ],
                email: "loreum@ipsum.foo",
            },
            mockRichText: {
                richText:
                    "<h3>The Best Libraries in the World</h3><ol><li>LIBRARY OF CONGRESS — WASHINGTON D.C., USA</li><li>BODLEIAN LIBRARY — OXFORD, UNITED KINGDOM</li><li>READING ROOM AT THE BRITISH MUSEUM — LONDON, ENGLAND</li><li>YALE UNIVERSITY BEINECKE RARE BOOK AND MANUSCRIPT LIBRARY — NEW HAVEN, CONNECTICUT, USA</li><li>VATICAN LIBRARY — VATICAN CITY, ROME</li></ul>",
            },
            mockSearchHomeLinks: {
                linkItems: [
                    {
                        text: "Course Reserves",
                        url: "https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do",
                        target: "_blank",
                    },
                    {
                        text: "UCLA Research Guides",
                        url: "https://guides.library.ucla.edu/",
                        target: "",
                    },
                    {
                        text: "Databases A-Z",
                        url: "https://guides.library.ucla.edu/az.php",
                        target: "_blank",
                    },
                ],
            },
            mockAdvancedSearchLink: {
                advancedSearchLink: {
                    text: "Advanced Search",
                    url: "https://www.library.ucla.edu/search",
                    target: "_blank",
                },
            },
            mockSectionCardsWithIllustrations: {
                items: [
                    {
                        iconName: "illustration-book-binding",
                        to: "/help/foo/bar/",
                        title: "Lacus Luctus",
                        text: "Litora torquent per conubia nostra, per inceptos himenaeos.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-find-space",
                        to: "/visit/foo/baz/",
                        title: "Ultrices Enim",
                        text: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-digitized-resources",
                        to: "/about/foo/fred/",
                        title: "Egestas et Augue",
                        text: "Suspendisse in justo eu magna luctus suscipit libero eget ante.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-databases",
                        to: "/about/foo/thud/",
                        title: "Proin Sodales",
                        text: "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper.",
                        isHorizontal: false,
                    },
                    {
                        iconName: "illustration-remote-access",
                        to: "/visit/foo/qux/",
                        title: "Taciti sociosqu",
                        text: "Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa.",
                        isHorizontal: false,
                    },
                ],
            },
        }
    },
    computed: {
        flexibleBlocks() {
            return [
                {
                    id: "22978",
                    typeHandle: "pullQuote",
                    pullQuote: [
                        {
                            text: "<p>Fashion is the best</p>",
                            attribution: null,
                        },
                    ],
                },
                // {
                //     id: "15905",
                //     typeHandle: "richText",
                //     richText:
                //         "<p><strong>Item 5: Rich Text</strong><br /></p>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis \nbibendum risus. Sed iaculis ullamcorper ligula, ac imperdiet ante. Etiam\n scelerisque vulputate neque ultrices suscipit. Integer pulvinar lectus a\n urna ultrices venenatis. Nullam finibus pellentesque quam, a consequat \nmassa venenatis ac. Integer at blandit nulla. Quisque ac arcu finibus, \nconsectetur magna quis, malesuada tortor. Nulla sit amet libero \nefficitur, semper tellus sed, tincidunt massa. In interdum tellus ac \nelit eleifend, eu tincidunt velit consequat. <em>Duis non arcu tristique, \nsollicitudin ex sit amet, ultrices urna. Maecenas non felis in augue \ntempus finibus.\n</em><br /></p>\n<ol><li>Sed fringilla sem in lorem efficitur, semper lobortis diam viverra. <br /></li><li>Vivamus nec est fermentum tellus venenatis dictum a ac elit. <br /><ol><li>Quisque \nodio turpis, ultricies eu diam sed, facilisis molestie justo. <br /></li></ol></li><li>Cras \nrutrum turpis in accumsan maximus. </li></ol><p>In hac habitasse platea dictumst. Nam\n mattis lorem lorem, sed elementum odio bibendum convallis. Ut rutrum, \nmauris vel tristique sollicitudin, enim dui tincidunt ex, quis dictum \nneque diam ut purus. Fusce sagittis, nisi in ornare condimentum, urna \njusto gravida diam, vitae tristique neque risus suscipit augue. \nCurabitur interdum malesuada rhoncus. Donec ut libero faucibus, \nscelerisque orci in, pulvinar felis. <br /></p><ul><li>Nam nibh ex, cursus nec leo cursus,\n rhoncus vulputate ipsum. <br /><ul><li>Donec quis sapien fermentum, ullamcorper \ntellus vestibulum, sodales ligula. <br /></li><li>In ultrices diam eget erat hendrerit \nimperdiet tincidunt et lacus. <br /><ul><li>Aenean fringilla pellentesque convallis. <br /></li></ul></li><li>Maecenas elementum quis massa imperdiet malesuada.\n</li></ul></li></ul>",
                // },
                {
                    id: "2789",
                    typeHandle: "bannerFeatured",
                    contentLink: [
                        {
                            url: "https://test-craft.library.ucla.edu/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                            to: "/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                            title: "Exhibit to test card with image content link",
                            date: [
                                {
                                    startDate: "2021-09-03T08:00:00+00:00",
                                    endDate: "2021-10-08T07:10:00+00:00",
                                },
                            ],
                            associatedLocations: [
                                {
                                    id: "523",
                                    title: "Powell Library",
                                    to: "visit/locations/powell-library",
                                },
                                {
                                    id: "801",
                                    title: "YRL",
                                    to: "visit/locations/yrl",
                                },
                            ],
                            heroImage: [
                                {
                                    id: "2971",
                                    image: [
                                        {
                                            id: "2536",
                                            src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/hollywood.jpeg",
                                            height: 1344,
                                            width: 2560,
                                            srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/hollywood.jpeg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/hollywood.jpeg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/hollywood.jpeg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/hollywood.jpeg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/hollywood.jpeg 2560w",
                                            alt: "Hollywood",
                                            focalPoint: [0.5, 0.5],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    alignment: "left",
                    buttonText: "See More",
                },
                {
                    id: "16983",
                    typeHandle: "callToAction",
                    callToAction: [
                        {
                            id: "16984",
                            titleCta: "Call to action",
                            summary: "a call to action",
                            icon: "svg-call-to-action-find",
                            buttonText: "click me",
                            buttonLink: "http://google.com",
                            backgroundColor: "false",
                        },
                    ],
                },
                {
                    id: "16982",
                    typeHandle: "helpTopicCards",
                    helpTopicCards: [
                        {
                            id: "2404",
                            contentLink: [
                                {
                                    id: "537",
                                    url: "https://test-craft.library.ucla.edu/help/services-resources/borrowing-books-and-equipment",
                                    to: "/help/services-resources/borrowing-books-and-equipment",
                                    title: "Borrowing Books and Equipment",
                                    text: "Kogi ut austin snackwave try-hard. Labore excepteur activated charcoal trust fund. Gastropub in asymmetrical eu, thundercats flexitarian truffaut waistcoat aliquip. Pour-over irure ex, pinterest et taiyaki incididunt. Craft beer cronut knausgaard, biodiesel poke beard slow-carb ullamco umami semiotics prism taxidermy hoodie meh. Et ugh small batch food truck twee bespoke, laboris roof party knausgaard try-hard tumblr swag cupidatat kombucha eu. Semiotics vegan officia in, pork belly chillwave vape plaid ex affogato veniam shaman brooklyn artisan aliqua.",
                                    iconName: "illustration-find-space",
                                },
                            ],
                        },
                        {
                            id: "2405",
                            contentLink: [
                                {
                                    id: "1033",
                                    url: "https://test-craft.library.ucla.edu/help/services-resources/sample-service-page-with-faqs",
                                    to: "/help/services-resources/sample-service-page-with-faqs",
                                    title: "Sample Service Page with FAQ's",
                                    text: "Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.",
                                    iconName: "illustration-find-space",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "3968",
                    typeHandle: "cardWithImage",
                    cardWithImage: [
                        {
                            id: "3969",
                            image: [
                                {
                                    id: "2536",
                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/hollywood.jpeg",
                                    height: 1344,
                                    width: 2560,
                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/hollywood.jpeg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/hollywood.jpeg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/hollywood.jpeg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/hollywood.jpeg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/hollywood.jpeg 2560w",
                                    alt: "Hollywood",
                                    focalPoint: [0.5, 0.5],
                                },
                            ],
                            imageAltText: "hollywood",
                            contentLink: [
                                {
                                    id: "1686",
                                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                                    uri: "visit/events-exhibits/a-new-exhibit",
                                    title: "a new exhibit",
                                    date: [
                                        {
                                            startDate:
                                                "2021-09-08T07:00:00+00:00",
                                            endDate: null,
                                        },
                                    ],
                                    associatedLocations: [
                                        {
                                            id: "523",
                                            title: "Powell Library",
                                            to: "visit/locations/powell-library",
                                        },
                                    ],
                                },
                            ],
                            shortDescription: null,
                        },
                    ],
                },
                {
                    typeHandle: "mediaGallery",
                    titleGeneral: "de Finibus Bonorum et Malorum",
                    title: null,
                    slug: null,
                    shortDescription:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                    mediaGallery: [
                        {
                            id: "4602",
                            altText:
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                            captionText:
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                            captionTitle: "Zooland",
                            image: [
                                {
                                    src: "https://via.placeholder.com/1920x1080",
                                    height: 1080,
                                    width: 1920,
                                    sizes: "100vw",
                                    alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                    title: "Lorem ipsum",
                                },
                            ],
                            slug: null,
                            sortOrder: 1,
                            title: null,
                            typeHandle: "image",
                        },
                        {
                            id: "4603",
                            altText: "parking",
                            captionText:
                                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                            captionTitle: "Image two",
                            image: [
                                {
                                    src: "https://via.placeholder.com/960x540",
                                    height: 540,
                                    width: 960,
                                    id: "2568",
                                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/parking.png" width="400" height="400" alt="Parking">',
                                    kind: "image",
                                    size: "14067",
                                    slug: null,
                                    title: "Parking",
                                },
                            ],
                            slug: null,
                            sortOrder: 2,
                            title: null,
                            typeHandle: "image",
                        },
                        {
                            id: "4604",
                            altText: "abcd",
                            captionText: null,
                            captionTitle:
                                "For number three we're going to see what it looks like with a very long title",
                            image: [
                                {
                                    src: "https://via.placeholder.com/1100x850",
                                    height: 850,
                                    width: 1100,
                                    id: "2555",
                                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/pile.jpg" width="539" height="360" alt="Pile">',
                                    kind: "image",
                                    size: "117787",
                                    slug: null,
                                    title: "Pile",
                                },
                            ],
                            slug: null,
                            sortOrder: 3,
                            title: null,
                            typeHandle: "image",
                        },
                        {
                            id: "4605",
                            altText: "abcd",
                            captionText: null,
                            captionTitle: "Four",
                            image: [
                                {
                                    src: "https://via.placeholder.com/1080x1920",
                                    height: 1920,
                                    width: 1080,
                                    id: "2536",
                                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/hollywood.jpeg" width="1200" height="630" alt="Hollywood">',
                                    kind: "image",
                                    size: "178185",
                                    slug: null,
                                    title: "Hollywood",
                                },
                            ],
                            slug: null,
                            sortOrder: 4,
                            title: null,
                            typeHandle: "image",
                        },
                        {
                            id: "4607",
                            altText: "abcd",
                            captionText: null,
                            captionTitle: "Five",
                            image: [
                                {
                                    src: "https://via.placeholder.com/540x960",
                                    id: "2338",
                                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/long-llama.jpg" width="566" height="467" alt="Long llama">',
                                    height: 960,
                                    kind: "image",
                                    size: "201179",
                                    slug: null,
                                    title: "Long llama",
                                    width: 540,
                                },
                            ],
                            slug: null,
                            sortOrder: 6,
                            title: null,
                            typeHandle: "image",
                        },
                        {
                            id: "4606",
                            altText: "abcd",
                            captionText: null,
                            captionTitle: "Six",
                            image: [
                                {
                                    src: "https://via.placeholder.com/850x1100",
                                    id: "1120",
                                    img: '<img src="$ASSET_VOLUME_BASE_URL/images/breitenbach.jpeg" width="300" height="289" alt="Breitenbach">',
                                    height: 1100,
                                    kind: "image",
                                    size: "39404",
                                    slug: null,
                                    title: "Breitenbach",
                                    width: 850,
                                },
                            ],
                            slug: null,
                            sortOrder: 5,
                            title: null,
                            typeHandle: "image",
                        },
                    ],
                    archived: false,
                    dateCreated: "2022-02-15T12:43:49-08:00",
                    dateUpdated: "2022-02-15T13:03:32-08:00",
                    enabled: true,
                    fieldId: 250,
                    id: "4601",
                    language: "en-US",
                    level: 1,
                },
                {
                    id: "3550",
                    typeHandle: "highlight",
                    highlight: [
                        {
                            id: "3575",
                            contentLink: [
                                {
                                    id: "1686",
                                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/a-new-exhibit",
                                    to: "visit/events-exhibits/a-new-exhibit",
                                    title: "a new exhibit",
                                    text: "Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Egestas integer eget aliquet",
                                    date: [
                                        {
                                            startDate:
                                                "2021-09-08T07:00:00+00:00",
                                            endDate:
                                                "2021-09-29T07:00:00+00:00",
                                        },
                                    ],
                                    associatedLocations: [
                                        {
                                            id: "523",
                                            title: "Powell Library",
                                            to: "visit/locations/powell-library",
                                        },
                                    ],
                                    image: [
                                        {
                                            id: "1687",
                                            image: [
                                                {
                                                    id: "1214",
                                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/IMG_20210608_182730371.jpg",
                                                    height: 1920,
                                                    width: 2560,
                                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/IMG_20210608_182730371.jpg 2560w",
                                                    alt: "IMG 20210608 182730371",
                                                    focalPoint: [0.5, 0.5],
                                                },
                                            ],
                                            altText: "flowers",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            id: "3576",
                            contentLink: [
                                {
                                    id: "1542",
                                    url: "https://test-craft.library.ucla.edu/visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                                    to: "visit/events-exhibits/exhibit-to-test-card-with-image-content-link",
                                    title: "Exhibit to test card with image content link",
                                    date: [
                                        {
                                            startDate:
                                                "2021-09-03T08:00:00+00:00",
                                            endDate:
                                                "2021-10-08T07:10:00+00:00",
                                        },
                                    ],
                                    associatedLocations: [
                                        {
                                            id: "523",
                                            title: "Powell Library",
                                            to: "visit/locations/powell-library",
                                        },
                                        {
                                            id: "3062",
                                            title: "Online",
                                            to: "visit/locations/online",
                                        },
                                    ],
                                    image: [
                                        {
                                            id: "2971",
                                            image: [
                                                {
                                                    id: "2536",
                                                    src: "https://test-craft.library.ucla.edu/assets/images/_fullscreen/hollywood.jpeg",
                                                    height: 1344,
                                                    width: 2560,
                                                    srcset: "https://test-craft.library.ucla.edu/assets/images/_375xAUTO_crop_center-center_none/hollywood.jpeg 375w, https://test-craft.library.ucla.edu/assets/images/_960xAUTO_crop_center-center_none/hollywood.jpeg 960w, https://test-craft.library.ucla.edu/assets/images/_1280xAUTO_crop_center-center_none/hollywood.jpeg 1280w, https://test-craft.library.ucla.edu/assets/images/_1920xAUTO_crop_center-center_none/hollywood.jpeg 1920w, https://test-craft.library.ucla.edu/assets/images/_2560xAUTO_crop_center-center_none/hollywood.jpeg 2560w",
                                                    alt: "Hollywood",
                                                    focalPoint: [0.5, 0.5],
                                                },
                                            ],
                                            altText: "hollywood",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ]
        },
    },
}
</script>

<style lang="scss" scoped>
.app {
    margin: 50px 100px;

    h1 {
        margin: 10px 0;
        font-weight: bold;
    }

    h2 {
        margin: 25px 0;
    }
    hr {
        margin-top: 25px;
    }
}
</style>
