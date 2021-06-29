<template lang="html">
    <section class="page-events-exhibits">
        <!-- TODO These props should come from Craft -->
        <masthead-secondary
            title="Exhibits & Upcoming Events"
            text="Browse upcoming remote events and online exhibits."
        >
            <!-- TODO Add SearchGenric here when complete  -->
            <!-- <search-generic search-type="about"
                    :filters="searchFilters.filters"
                    :view-modes="searchFilters.views"
                    class="generic-search"
                    @view-mode-change="viewModeChanger"
            /> -->
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
    async asyncData({ $axios }) {
        // TODO This is hardcoded to the "Test" calendar, should be a "featured" calendar probably
        const libcalRequest = $axios.$get(`/events`, {
            params: {
                cal_id: 11521,
            },
        })
        // const craftRequest = $graphql(`/craft/foo`, {
        //     params: {
        //         cal_id: 11521,
        //     },
        // })

        // Do both requests in parallel
        const [libcalData] = await Promise.all([
            libcalRequest,
            //craftRequest,
        ])

        return {
            events: _get(libcalData, "events", []),
            //page: _get(craftData, "data.page", {}),
        }
    },

    computed: {
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
            return mockEvents.map((obj) => {
                const event = _get(this, "events[0]", {})

                return {
                    ...event,
                    to: `${this.$route.path}/${event.id}`,
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
                text:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            }
            return mockBlockCallToAction
        },
    },
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
