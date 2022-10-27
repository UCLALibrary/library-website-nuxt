<template lang="html">
    <section class="page-event-detail">
        <!-- this template will pick the section page component based on typehandle -->
        <nav-breadcrumb
            title="jane-doe"
            to="/about/news"
            parent-title="parent"
        />

        <banner-text
            v-if="mockBannerText || !mockBannerText.heroImage || mockBannerText.heroImage.length == 0"
            class="banner-text"
            category="Blog"
            :title="mockBannerText.title"
            :text="mockBannerText.text"
            :locations="mockBannerText.locations"
        />

        <!-- if theres an image -->
        <!-- <divider-general class="section divider divider-general" /> -->

        <!-- <section-wrapper
            class="section-banner"
        >
            <banner-header
                title="title"
                :align-right="false"
            />
        </section-wrapper> -->

        <!-- <p v-if="$fetchState.pending" />
        <p v-else-if="$fetchState.error">
            An error occurred :(
        </p> -->
        
        <section-wrapper theme="divider">
            <divider-general />
        </section-wrapper>

        <section-wrapper
            v-if="mockRichText || mockRichText.richText"
        >
            <rich-text
                :rich-text-content="mockRichText.richText"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-general />
        </section-wrapper>
        

        <section-wrapper 
            section-title="More Upcoming Events"
        >
            <!-- TODO List of events go here -->
            <section-teaser-list
                theme="gray"
                :items="listEvents"
                class="section section-list"
            />
        </section-wrapper>


        <section-wrapper theme="divider">
            <divider-general />
        </section-wrapper>

        <!-- <section-wrapper> -->
        <block-call-to-action
            class="section block-call-to-action"
            svg-name="svg-call-to-action-mail"
            to="/contact-us"
            name="Contact Us"
            title="Not sure who you should reach out to?"
            text="Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        <!-- </section-wrapper> -->

        Event detail here
        {{ allEvents }}
    </section>
</template>

<script>
// Helpers
// import _get from "lodash/get"
// GQL
// import EVENT_DETAIL from "~/gql/queries/EventDetail.gql"

// GQL
// import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems"

import BlockFormData from "~/data/BlockFormData.json"

export default {
    provide() {
        return {
            eventId: "9383207",
            blockFormData: BlockFormData.mock0,
            libcalEndpoint: this.libcalEndpointProxy
        }
    },
    async asyncData({ $axios }) {
        console.log("in asyncdata calling axios get event")
        const libcalData = await $axios.$get(`/1.1/event_search`, {
            params: {
                search: "*",
                limit: 100,
            },
        })

        const events = libcalData.events
        console.log(libcalData.events[0].title)
        return {
            page: { events: events },
        }
    },
    data() {
        return {
            allEvents: [],
            primaryItems: [],
            secondaryItems: [],
            libcalEndpointProxy: this.$config.libcalProxy,
            mockBannerText: {
                category: "Event",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque.",
                title: "Curabitur Tortor Pellentesque",
                locations: [
                    { id: "523", title: "Powellarium", to: "/location/bar" },
                    {
                        id: "801",
                        title: "Research Library (Charles E. Young)",
                        to: "/location/baz",
                    },
                ],
                date: "1995-12-17T03:24:00",
                buttonText: "Curabitur",
                byline: ["Cursus Quis", "Charles E. Young"],
                to: "/visit/foo/bar/",
            },
            mockRichText: {
                richText:
                    '<h3>Here is a title</h3><figure class="figure image-right"><img src="https://test-craft.library.ucla.edu/assets/images/zooland.jpeg" alt="ZooLand" /><figcaption>Zoo</figcaption></figure><p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><figure><iframe width="560" height="315" src="https://www.youtube.com/embed/wn7s7podZWI" title="YouTube video player" frameborder="0"></iframe></figure><h2>\n The Outer Space Treaty\n</h2>\n<p>\n Hearts of the stars something incredible is waiting to be known corpus callosum rich in mystery two ghostly white figures in coveralls and helmets are soflty dancing a very small stage in a vast cosmic arena. Are creatures of the cosmos across the centuries courage of our questions inconspicuous motes of rock and gas hundreds of thousands Orion\'s sword.\n</p>\n<blockquote class="twitter-tweet">\n <p lang="en" dir="ltr" xml:lang="en">\n Crew Dragon docked to the <a href="https://twitter.com/Space_Station?ref_src=twsrc%5Etfw">@Space_Station</a> <a href="https://t.co/JG5e2XjZ4n">pic.twitter.com/JG5e2XjZ4n</a>\n </p>\n — SpaceX (@SpaceX) <a href="https://twitter.com/SpaceX/status/1278799363804811264?ref_src=twsrc%5Etfw">July 2, 2020</a>\n </blockquote>\n <p>\n Star stuff harvesting star light kindling the energy hidden in matter a mote of dust suspended in a sunbeam bits of moving fluff another world brain is the seed of intelligence. Take root and flourish kindling the energy hidden in matter the carbon in our apple pies kindling the energy hidden in matter citizens of distant epochs bits of moving fluff.\n</p>\n<p>Could you do an actual logo instead of a font I cant pay you? Can we try some other colors maybe? I cant pay you. You might wanna give it another shot, so make it pop and this is just a 5 minutes job the target audience makes and families aged zero and up will royalties in the company do instead of cash.</p>\n<p>Jazz it up a little I was wondering if my cat could be placed over the logo in the flyer I have printed it out, but the animated gif is not moving I have printed it out, but the animated gif is not moving make it original. Can you make it stand out more? Make it original.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></figure>',

            },
            listEvents: [
                {
                    image: {
                        src: "https://via.placeholder.com/1920x1080",
                        srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                        sizes: "100vw",
                        alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        title: "Lorem ipsum",
                        caption: "Lorem ipsum",
                        height: 1080,
                        width: 1920,
                        focalPoint: [0.5, 0.5]
                    },
                    to: "/visit/foo/bar/",
                    category: "Ullamco",
                    title: "Fames ac turpis egestas sed tempus lorem ipsum",
                    startDate: "2021-09-03T08:00:00+00:00",
                    endDate: "2021-10-08T07:10:00+00:00",
                    text: "Ultricies leo integer malesuada nunc vel risus commodo viverra.",
                },
                {
                    image: {
                        src: "https://via.placeholder.com/1920x1080",
                        srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                        sizes: "100vw",
                        alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        title: "Lorem ipsum",
                        caption: "Lorem ipsum",
                        height: 1080,
                        width: 1920,
                        focalPoint: [0.5, 0.5]
                    },
                    to: "/visit/foo/baz/",
                    category: "Sagittis",
                    title: "Amet nisl suscipit adipiscing bibendum lectus sed",
                    startDate: "2021-09-03T08:00:00+00:00",
                    endDate: "2021-10-08T07:10:00+00:00",
                    text: "A diam maecenas sed enim. Tristique senectus et netus et malesuada fames. Nibh nisl condimentum id venenatis. Mi bibendum neque egestas congue. Placerat duis ultricies lacus sed turpis. Massa enim nec dui nunc mattis. Dolor morbi non arcu risus quis varius vestibulum sed.",
                },
                {
                    image: {
                        src: "https://via.placeholder.com/1920x1080",
                        srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                        sizes: "100vw",
                        alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        title: "Lorem ipsum",
                        caption: "Lorem ipsum",
                        height: 1080,
                        width: 1920,
                        focalPoint: [0.5, 0.5]
                    },
                    to: "/visit/foo/bat/",
                    category: "Tincidunt",
                    title: "Scelerisque varius morbi enim nunc ornare quam",
                    startDate: "2021-09-03T08:00:00+00:00",
                    endDate: "2021-10-08T07:10:00+00:00",
                    text: "Eu ultrices vitae auctor eu augue. Dolor morbi non arcu risus quis varius quam. Augue lacus viverra vitae congue eu consequat.",
                },
                {
                    image: {
                        src: "https://via.placeholder.com/1920x1080",
                        srcset: "https://via.placeholder.com/960x540 960w, https://via.placeholder.com/1280x720 1280w, https://via.placeholder.com/1920x1080 1920w",
                        sizes: "100vw",
                        alt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        title: "Lorem ipsum",
                        caption: "Lorem ipsum",
                        height: 1080,
                        width: 1920,
                        focalPoint: [0.5, 0.5]
                    },
                    to: "/visit/foo/ban/",
                    category: "Gravida",
                    title: "At varius vel pharetra vel turpis. Quam vulputate dignissim suspendisse in est ante in. Sed cras ornare arcu. Non diam phasellus vestibulum.",
                    startDate: "2021-09-03T08:00:00+00:00",
                    endDate: "2021-10-08T07:10:00+00:00",
                    text: "Accumsan tortor posuere ac ut consequat semper viverra libero.",
                },
            ]
        }
    },
    // async fetch() {
    //     console.log("In fetch start")
    //     const navData = await this.$graphql.default.request(
    //         EVENT_DETAIL
    //     )
    //     console.log(navData)
    //     // sample event id = 9383207
    //     this.primaryItems = _get(navData, "primary", [])
    //     this.secondaryItems = _get(navData, "secondary", [])
    //     console.log("params " + this.$route.params.slug)
    //     const data = await this.$axios.$get(
    //         `/1.1/events/${this.$route.params.slug}`
    //     )
    //     // TODO get event data from Craft
    //     // return {
    //     //     page: {},
    //     // }
    //     this.allEvents = [...this.allEvents, ...data.events]
    //     console.log(data.events)
    // },
    computed: {
        // listEvents() {
        //     const items = this.parsedEvents.slice(2)

        //     return items.map((obj) => {
        //         return {
        //             ...obj,
        //             category: _get(obj, "category.name", "Featured"),
        //         }
        //     })
        // },
        // parsedEvents() {
        //     // TODO Remove this one we have more events

        //     const mockEvents = [...this.page.events]

        //     // Shape events
        //     // return this.events.map((obj) => {
        //     return mockEvents.map((obj) => {
        //         const event = obj || {}

        //         return {
        //             ...event,
        //             to: `${this.$route.path}/${event.id}`, // added index to avoid duplicate errors
        //             location: _get(event, "location.name", "Online"),
        //             image: {
        //                 src: event.featured_image,
        //             },
        //             category: {
        //                 name: _get(event, "category.name", "Featured"),
        //             },
        //             breadcrumb: {
        //                 text: _get(event, "category.name", "Featured"),
        //             },
        //             // TODO Only need one set of these once BannerFeatured is updated
        //             startDate: event.start,
        //             endDate: event.end,
        //             text: event.description,
        //         }
        //     })
        // },
    },
}
</script>

<style lang="scss" scoped>
.page-event-detail {
    // height: 100vh;

    .sticky-header {
        top: 0;
        left: 0;
        width: 100%;
        position: fixed;
        transform: translateY(-100%);
        transition: transform 400ms ease-in-out;

        // States
        .has-scrolled-past-header & {
            transform: translateY(0);
        }
    }
}
</style>
