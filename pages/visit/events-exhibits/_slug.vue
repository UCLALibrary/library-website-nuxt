<template lang="html">
    <section class="page-event-detail">
        <!-- this template will pick the section page component based on typehandle -->
        <nav-breadcrumb
            v-if="allEvents[0]"
            :title="allEvents[0].title"
        />


        <banner-text
            v-if="page || !page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            category="Blog"
            :title="page.title"
            :text="page.text"
            :byline="parsedBylineBannerText"
            :locations="page.locations"
        />

        <divider-general class="section divider divider-general" />

        <section-wrapper
            v-if="page || page.heroImage && page.heroImage.length == 1"
            class="section-banner"
        >
            <banner-header
                title="title"
                :align-right="false"
            />
        </section-wrapper>

        <!-- <masthead-secondary
            title="Exhibits & Upcoming Events"
            text="Browse upcoming remote events and online exhibits."
        > -->
        <!-- TODO Add SearchGenric here when complete -->
        <!-- search-generic
                search-type="about"
                class="generic-search"
            />-->
        <!-- :filters="searchFilters.filters"
                :view-modes="searchFilters.views"
                @view-mode-change="viewModeChanger" -->
        <!-- </masthead-secondary> -->

        <p v-if="$fetchState.pending" />
        <p v-else-if="$fetchState.error">
            An error occurred :(
        </p>
        <!-- <header-sticky
            v-else
            class="sticky-header"
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        /> -->
        
        <!-- <banner-text
            category="Event"
            title="Curabitur Tortor Pellentesque"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque."
            button-text="Curabitur"
            byline="a"
            register-event="true"
        /> -->
        

        <divider-general class="section divider divider-general" />

        <section-wrapper
            v-if="page || page.richText"
        >
            <rich-text
                :rich-text-content="page.richText"
            />
        </section-wrapper>

        <divider-general class="section divider divider-general" />
        
        <section-wrapper>
            <!-- TODO List of events go here -->
            <section-teaser-list
                :items="listEvents"
                class="section section-list"
            />
        </section-wrapper>


        <divider-general class="section divider divider-general" />

        <section-wrapper>
            <block-call-to-action
                class="section block-call-to-action"
                svg-name="svg-call-to-action-mail"
                to="/contact-us"
                name="Contact Us"
                title="Not sure who you should reach out to?"
                text="Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            />
        </section-wrapper>

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
import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems"

import BlockFormData from "~/data/BlockFormData.json"

export default {
    provide() {
        return {
            eventId: "9383207",
            blockFormData: BlockFormData.mock0,
            libcalEndpoint: this.libcalEndpointProxy
        }
    },
    async asyncData({ $graphql, params }) {
        // Do not remove testing live preview

        const data = await $graphql.default.request(EVENT_DETAIL, {
            // slug: params.pathMatch.substring(
            //     params.pathMatch.lastIndexOf("/") + 1
            // ),
        })
        return {
            page: _get(data, "entry", {}),
        }
    },
    data() {
        return {
            allEvents: [],
            primaryItems: [],
            secondaryItems: [],
            libcalEndpointProxy: this.$config.libcalProxy
        }
    },
    async fetch() {
        console.log("In fetch start")
        const navData = await this.$graphql.default.request(
            HEADER_MAIN_MENU_ITEMS
        )
        console.log(navData)
        // sample event id = 9383207
        this.primaryItems = _get(navData, "primary", [])
        this.secondaryItems = _get(navData, "secondary", [])
        console.log("params " + this.$route.params.slug)
        const data = await this.$axios.$get(
            `/1.1/events/${this.$route.params.slug}`
        )
        // TODO get event data from Craft
        // return {
        //     page: {},
        // }
        this.allEvents = [...this.allEvents, ...data.events]
        console.log(data.events)
    },
    computed: {
        listEvents() {
            const items = this.parsedEvents.slice(2)

            return items.map((obj) => {
                return {
                    ...obj,
                    category: _get(obj, "category.name", "Featured"),
                }
            })
        },
        parsedEvents() {
            // TODO Remove this one we have more events

            const mockEvents = [...this.page.events]

            // Shape events
            // return this.events.map((obj) => {
            return mockEvents.map((obj) => {
                const event = obj || {}

                return {
                    ...event,
                    to: `${this.$route.path}/${event.id}`, // added index to avoid duplicate errors
                    location: _get(event, "location.name", "Online"),
                    image: {
                        src: event.featured_image,
                    },
                    category: {
                        name: _get(event, "category.name", "Featured"),
                    },
                    breadcrumb: {
                        text: _get(event, "category.name", "Featured"),
                    },
                    // TODO Only need one set of these once BannerFeatured is updated
                    startDate: event.start,
                    endDate: event.end,
                    text: event.description,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-event-detail {
    height: 400vh;

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
