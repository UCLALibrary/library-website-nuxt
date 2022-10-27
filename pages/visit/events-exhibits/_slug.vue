<template lang="html">
    <section class="page-event-detail">
        <!-- this template will pick the section page component based on typehandle -->
        <nav-breadcrumb
            :title="page.title"
            :to="page.to"
            :parent-title="page.sectionHandle"
        />

        <banner-text
            v-if="!page.image[0].image[0]"
            class="banner-text"
            category="Blog"
            :title="page.title"
            :text="page.text"
            :locations="page.locations"
        />

        <!-- if theres an image -->
        <section-wrapper
            v-if="page.image[0].image[0]"
            class="section-banner"
        >
            <banner-header
                :image="page.image[0].image[0]"
                :title="page.title"
                :align-right="false"
            />
        </section-wrapper>

        <!-- <p v-if="$fetchState.pending" /> -->
        <!-- <p v-else-if="$fetchState.error">
            An error occurred :(
        </p> -->
        
        <section-wrapper theme="divider">
            <divider-way-finder
                v-if="page.image[0].image[0]"
                color="visit"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page || page.eventDescription"
        >
            <rich-text
                :rich-text-content="page.eventDescription"
            />
        </section-wrapper>

        <!-- <section-wrapper theme="divider">
            <divider-general />
        </section-wrapper> -->
        

        <section-wrapper 
            theme="gray"
            section-title="More Upcoming Events"
        >
            <!-- TODO List of events go here -->
            <section-teaser-list
                :items="listEvents"
                class="section section-list"
            />
        </section-wrapper>


        <!-- <section-wrapper theme="divider">
            <divider-general />
        </section-wrapper> -->

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
import _get from "lodash/get"
// GQL
import EVENT_DETAIL from "~/gql/queries/EventDetail.gql"

// GQL
// import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems"

import BlockFormData from "~/data/BlockFormData.json"

export default {
    provide() {
        return {
            eventId: "9383207",
            blockFormData: BlockFormData.mock0,
            libcalEndpoint: this.libcalEndpointProxy,
        }
    },
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(EVENT_DETAIL)
        return {
            page: _get(data, "entry", {}),
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
