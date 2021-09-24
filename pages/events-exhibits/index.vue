<template lang="html">
    <section class="page-events-exhibits">
        <!-- This was added to test the slug page with breadcrumbs -->
        <!--<nuxt-link to="/events-exhibits/test">
            Test event
        </nuxt-link> -->
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
            :is-online="firstEvent.isOnline"
            prompt="View exhibit"
            :breadcrumb="firstEvent.breadcrumb"
            :align-right="false"
            :dates="firstEvent.dates"
            :times="firstEvent.times"
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
            icon-name="svg-call-to-action-find"
            :to="blockCallToAction.to"
            :name="blockCallToAction.name"
            :title="blockCallToAction.title"
            :text="blockCallToAction.text"
        />
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
import formatEventDates from "~/utils/formatEventDates"
import formatEventTimes from "~/utils/formatEventTimes"

export default {
    data() {
        return {
            events: [],
        }
    },

    async fetch() {
        console.log("in fetch calling axios get event")
        const libcalData = await this.$axios.$get(`/events`, {
            params: {
                cal_id: 11521,
            },
        })
        // TODO get event data from Craft
        // return {
        //     page: {},
        // }
        this.events = [...this.events, ...libcalData.events]
        console.log(libcalData)
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
                ...this.events,
                ...this.events,
                ...this.events,
                ...this.events,
                ...this.events,
            ]

            // Shape events
            // return this.events.map((obj) => {
            return mockEvents.map((obj, index) => {
                const event = _get(this, "events[0]", {})

                return {
                    ...event,
                    to: `${this.$route.path}/${index}-${event.id}`,
                    location: _get(event, "location.name", "Online"),
                    image: {
                        src: event.featured_image,
                    },
                    isOnline: !event.location.name,
                    category: {
                        name: _get(event, "category.name", "Featured"),
                    },
                    breadcrumb: {
                        text: _get(event, "category.name", "Featured"),
                    },
                    // TODO Only need one set of these once BannerFeatured is updated
                    dates: formatEventDates(event.start, event.end),
                    times: formatEventTimes(event.start, event.end),
                    date: formatEventDates(event.start, event.end),
                    time: formatEventTimes(event.start, event.end),
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
        padding-top: 20px;
    }
}
</style>
