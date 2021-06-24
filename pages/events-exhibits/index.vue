<template lang="html">
    <section class="page-events-exhibits">
        <!-- TODO These props should come from Craft -->
        <masthead-secondary
            title="Exhibits & Upcoming Events"
            text="Browse upcoming remote events and online exhibits."
        >
            <!-- <search-generic search-type="about"
                    :filters="searchFilters.filters"
                    :view-modes="searchFilters.views"
                    class="generic-search"
                    @view-mode-change="viewModeChanger"
            /> -->
        </masthead-secondary>

        <divider-way-finder class="section divider" />

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
        const data = await $axios.$get(`/events`, {
            params: {
                cal_id: 11521,
            },
        })

        return {
            events: _get(data, "events", []),
        }
    },

    computed: {
        parsedEvents() {
            // Shape events
            return this.events.map((obj) => {
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
                    dates: formatEventDates(event.start, event.end),
                    times: formatEventTimes(event.start, event.end),
                }
            })
        },
        firstEvent() {
            return this.parsedEvents[0] || {}
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
}
</style>
