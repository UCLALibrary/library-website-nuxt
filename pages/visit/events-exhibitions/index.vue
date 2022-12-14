<template lang="html">
    <main
        id="main"
        class="page page-events-exhibits"
    >
        <masthead-secondary

            :title="page.title"
            :text="page.text"
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
            <divider-way-finder class="search-margin" />
        </section-wrapper>

        <!-- HIGHLIGHTED & FEATURED EVENTS -->
        <section-wrapper
            v-if="page.featuredEvents.length"
            class="section-no-top-margin"
        >
            <banner-featured
                :image="parsedBannerHeader.image"
                :title="parsedBannerHeader.title"
                breadcrumb="Featured"
                :align-right="false"
                :start-date="parsedBannerHeader.startDate"
                :end-date="parsedBannerHeader.endDate"
                :text="parsedBannerHeader.text"
                :to="parsedBannerHeader.to"
                :prompt="parsedBannerHeader.prompt"
                :locations="parsedBannerHeader.locations"
                class="banner section-featured-banner"
            />

            <divider-general v-if="parsedSectionHighlight.length" />

            <section-teaser-highlight
                class="section"
                :items="parsedSectionHighlight"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page.featuredEvents.length && parsedExhibitionsAndEvents.length"
            theme="divider"
        >
            <divider-way-finder color="visit" />
        </section-wrapper>

        <!-- UPCOMING EVENTS -->
        <section-wrapper section-title="All Upcoming Events">
            <section-teaser-list
                :items="parsedExhibitionsAndEvents"
                class="section section-list"
                nShown=infinity
            />
        </section-wrapper>

        <section-wrapper
            v-if="parsedExhibitionsAndEvents.length"
            theme="divider"
        >
            <divider-way-finder color="visit" />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                class="section block-call-to-action"
                :is-global="true"
            />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

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
        let metaDescription = removeTags(this.page.text)

        return {
            title: title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: metaDescription
                }
            ],
        }
    },
    computed: {
        parsedFeaturedEventsAndExhibits() {
            return this.page.featuredEvents.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    startDate: obj.typeHandle === "event" ? obj.startDateWithTime : obj.startDate,
                    endDate: obj.typeHandle === "event" ? obj.endDateWithTime : obj.endDate,
                    // text: obj.typeHandle === "event" ? obj.eventDescription : obj.summary,
                    prompt: obj.typeHandle === "exhibition"
                        ? "View exhibition"
                        : obj.workshopOrEventSeriesType === "visit/events-exhibitions"
                            ? "View event series"
                            : "View event",
                    locations: obj.typeHandle !== "exhibition" ? obj.associatedLocations : obj.associatedLocationsAndPrograms,
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
                    category:
                        obj.typeHandle === "exhibition"
                            ? "Exhibition"
                            : obj.workshopOrEventSeriesType === "visit/events-exhibitions"
                                ? "Event Series"
                                : obj.eventType.length > 0
                                    ? obj.eventType[0].title
                                    : "Event",
                    title: obj.title,
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
                    startDate: _get(eventOrExhibtion, "startDateWithTime", null),
                    endDate: _get(eventOrExhibtion, "endDateWithTime", null),
                    category:
                        eventOrExhibtion.typeHandle === "exhibition"
                            ? "Exhibition"
                            : eventOrExhibtion.workshopOrEventSeriesType === "visit/events-exhibitions"
                                ? "Event Series"
                                : eventOrExhibtion.eventType.length > 0
                                    ? eventOrExhibtion.eventType[0].title
                                    : "Event",
                    locations: _get(eventOrExhibtion, "associatedLocations", null),
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
    .search-margin {
        margin: var(--space-2xl) auto;
    }
}
</style>
