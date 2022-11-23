<template lang="html">
    <section class="page-events-exhibits">
        <masthead-secondary
            title="Exhibits & Upcoming Events"
            text="Browse upcoming remote events and online exhibits."
        >
            <!-- TODO Add SearchGenric here when complete  -->
            <!--<search-generic
                search-type="about"
                class="generic-search"
            />
            <:filters="searchFilters.filters"
                :view-modes="searchFilters.views"
                @view-mode-change="viewModeChanger"
                -->
        </masthead-secondary>

        <section-wrapper theme="divider">
            <divider-way-finder color="visit" />
        </section-wrapper>

        <!-- HIGHLIGHTED & FEATURED EVENTS -->
        <section-wrapper
            v-if="page.featuredEvents.length"
            section-title="Highlighted Events"
        >
            <banner-featured
                :image="parsedBannerHeader.image"
                :title="parsedBannerHeader.title"
                breadcrumb="Featured"
                :align-right="false"
                :start-date="parsedBannerHeader.startDate"
                :end-date="parsedBannerHeader.endDate"
                :text="parsedBannerHeader.text"
                :to="parsedBannerHeader.uri"
                prompt="View Exhibit"
            />

            <divider-general />

            <section-teaser-highlight
                class="section"
                :items="parsedSectionHighlight"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder color="visit" />
        </section-wrapper>

        <!-- UPCOMING EVENTS -->
        <section-wrapper section-title="All Upcoming Events">
            <section-teaser-list
                :items="parsedExhibitionsAndEvents"
                class="section section-list"
            />
        </section-wrapper>
        
        <section-wrapper>
            <block-call-to-action
                class="section block-call-to-action"
                :is-global="true"
            />
        </section-wrapper>
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
// import formatEventDates from "~/utils/formatEventDates"
// import formatEventTimes from "~/utils/formatEventTimes"

// GQL
import EXHIBITIONS_AND_EVENTS_LIST from "~/gql/queries/ExhibitionsAndEventsList.gql"

export default {
    async asyncData({ $graphql, params, store }) {
        console.log("in asyncdata calling axios get event")

        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(
            EXHIBITIONS_AND_EVENTS_LIST,
            {
                slug: params.slug,
            }
        )
        return {
            page: _get(data, "entry", {}),
            events: _get(data, "events", {}),
        }
    },

    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedFeaturedEventsAndExhibits() {
            return this.page.featuredEvents.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    text: _get("text", null),
                    startDate: obj.startDate,
                    endDate: obj.endDate
                }
            })
        },
        parsedBannerHeader() {
            return this.parsedFeaturedEventsAndExhibits[0]
        },
        parsedSectionHighlight() {
            let highlights = this.parsedFeaturedEventsAndExhibits.slice(1)
            return highlights.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    category: _get("category", null),
                    title: obj.title,
                    startDate: _get("startDate", null),
                    endDate: _get("endDate", null),
                    text: _get("text", null),
                    //locations: `/${obj.associatedLocations.to}`,
                }
            })
        },
        parsedExhibitionsAndEvents() {
            return [
                ...(this.events || []),
            ].map((obj) => {
                const eventOrExhibtion = obj || {}

                return {
                    ...eventOrExhibtion,
                    to: `/${eventOrExhibtion.to}`,
                    image: _get(eventOrExhibtion, "heroImage[0].image[0]", null),
                    startDate: _get(eventOrExhibtion, "date[0].startTime", null),
                    endDate: _get(eventOrExhibtion, "date[0].endTime", null),
                    category: _get(eventOrExhibtion, "eventType[0].title", null),
                    text: _get(eventOrExhibtion, "eventDescription", null),
                }
            })
        },
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
}
</style>
