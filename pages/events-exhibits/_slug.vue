<template lang="html">
    <section class="page-event-detail">
        <nav-breadcrumb
            :title="page.title"
        />
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
        <header-sticky
            class="sticky-header"
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />

        Event detail here
        {{ allEvents }}
        <!-- TODO flexible content goes here -->
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
// import startCase from "lodash/startcase"

// GQL
import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems"

export default {
    data() {
        return {
            allEvents: [],
            primaryItems: [],
            secondaryItems: [],
        }
    },
    async fetch() {
        const navData = await this.$graphql.default.request(
            HEADER_MAIN_MENU_ITEMS
        )
        this.primaryItems = _get(navData, "primary", [])
        this.secondaryItems = _get(navData, "secondary", [])
        const data = await this.$axios.$get(`/events`, {
            params: {
                cal_id: 7056,
            },
        })
        // TODO get event data from Craft
        // return {
        //     page: {},
        // }
        this.allEvents = [...this.allEvents, ...data.events]
        console.log(data.events[0].title)
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
