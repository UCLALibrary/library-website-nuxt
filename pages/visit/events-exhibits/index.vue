<template lang="html">
    <section class="page-events-exhibits">
        <!-- This was added to test the slug page with breadcrumbs -->
        <!--<nuxt-link to="/events-exhibits/test">
            Test event
        </nuxt-link> -->
        <!-- last commit by Drew
        {{ viewMode }}

        <loading-spinner v-if="$fetchState.pending" />
        <component
            :is="viewComponentName"
            v-else
            :items="allEvents"
        / -->
        <!-- TODO These props should come from Craft -->
        <masthead-secondary
            title="Exhibits & Upcoming Events"
            text="Browse upcoming remote events and online exhibits."
        >
            <!-- TODO Add SearchGenric here when complete  -->
            <!--search-generic
                search-type="about"
                class="generic-search"
            />
            <!-- :filters="searchFilters.filters"
                :view-modes="searchFilters.views"
                @view-mode-change="viewModeChanger"-->
        </masthead-secondary>

        <divider-way-finder class="section divider divider-way-finder" />
        <banner-featured
            class="section banner-featured"
            :title="firstEvent.title"
            :image="firstEvent.image"
            :to="firstEvent.to"
            prompt="View exhibit"
            :breadcrumb="firstEvent.breadcrumb.text"
            :align-right="false"
            :dates="firstEvent.dates"
            :start-date="firstEvent.startDate"
            :end-date="firstEvent.endDate"
        />

        <divider-general class="section divider divider-general" />
        <section-teaser-highlight
            class="section"
            :items="highlightEvents"
        />

        <divider-general class="section divider divider-general" />
        <!-- TODO List of events go here -->
        <section-teaser-list
            :items="listEvents"
            class="section section-list"
        />

        <divider-way-finder class="section divider divider-way-finder" />

        <block-call-to-action
            class="section block-call-to-action"
            svg-name="svg-call-to-action-find"
            :to="blockCallToAction.to"
            :name="blockCallToAction.name"
            :title="blockCallToAction.title"
            :text="blockCallToAction.text"
        />
        <block-call-to-action-two-up
            class="section"
            :items="blockCallToActionTwoUp"
        />
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
import formatEventDates from "~/utils/formatEventDates"
import formatEventTimes from "~/utils/formatEventTimes"

export default {
    async asyncData({ $axios }) {
        console.log("in asyncdata calling axios get event")
        console.log("rendered client side" + process.client)
        const libcalData = await $axios.$get(`/events`, {
            params: {
                cal_id: 2190,
            },
        })

        const events = libcalData.events
        console.log(libcalData.events[0].title)
        return {
            page: { events: events },
        }
    },

    // TODO either use asyncdata or fetch
    /*async fetch() {
        // TODO how to fetch all events from libcal
        const data = await this.$axios.$get(`/events`)
        //TODO this will be used if we need pagination with libcal, the params passed needs to be reviewd
        /*
        const data = await this.$axios.$get(`/events`, {
            params: {
                offset: this.$route.query.offset || 0,
                q: this.$route.query.q || "",
            },
        })
        */

    // this.allEvents = [...this.allEvents, ...data]
    //},*/

    computed: {
        /*viewComponentName() {
            // TODO we may not need this as we have decidec not to add view modes dropdown in the reworked design
            // get view component name (see the PR section-teaser calander)
        },*/
        parsedEvents() {
            // TODO Remove this one we have more events

            const mockEvents = [
                ...this.page.events,
                ...this.page.events,
                ...this.page.events,
                ...this.page.events,
                ...this.page.events,
            ]

            // Shape events
            // return this.events.map((obj) => {
            return mockEvents.map((obj, index) => {
                const event = obj || {}

                return {
                    ...event,
                    to: `${this.$route.path}/${index}-${event.id}`, // added index to avoid duplicate errors
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
        firstEvent() {
            return this.parsedEvents[0] || {}
        },
        highlightEvents() {
            // Get items 2nd and 3rd from array
            const items = this.parsedEvents.slice(1, 3)

            return items.map((obj) => {
                return {
                    ...obj,
                    category: _get(obj, "category.name", "Featured"),
                }
            })
        },
        listEvents() {
            const items = this.parsedEvents.slice(2)

            return items.map((obj) => {
                return {
                    ...obj,
                    category: _get(obj, "category.name", "Featured"),
                }
            })
        },

        //TODO remove once we have real data from Craft
        blockCallToAction() {
            const mockBlockCallToAction = {
                to: "/help/foo/bar/",
                name: "Lorem ipsum dolor",
                title: "Lorem ipsum dolor sit amet?",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
            return mockBlockCallToAction
        },

        blockCallToActionTwoUp() {
            const mockBlockCallToActionTwoUp = [
                {
                    svgName: "svg-call-to-action-chat",
                    title: "Lorem ipsum dolor sit amet?",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    name: "Lorem ipsum dolor",
                    to: "/help/foo/bar/",
                    isDark: false,
                    isSmallSize: true,
                },
                {
                    svgName: "svg-call-to-action-chat",
                    title: "Dolor sit amet Ipsum",
                    text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    name: "Ipsum dolor amet",
                    to: "/help/foo/bar/",
                    isDark: true,
                    isSmallSize: true,
                },
            ]
            return mockBlockCallToActionTwoUp
        },
    },
    // This will recall fetch() when these query params change
    watchQuery: ["offset", "q"],
}
</script>

<style lang="scss" scoped>
.page-events-exhibits {
    .section {
        max-width: var(--unit-content-width);
        margin: 80px auto;
    }

    .divider {
        padding: 0 32px;
    }

    .block-call-to-action {
        margin-bottom: 160px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
