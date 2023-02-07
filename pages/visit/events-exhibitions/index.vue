<template lang="html">
    <main
        id="main"
        class="page page-events-exhibits"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />
        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            :placeholder="parsedPlaceholder"
            @search-ready="getSearchData"
        />
        <section-wrapper
            v-if="
                page &&
                    page.featuredEvents &&
                    page.featuredEvents.length > 0 &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            theme="divider"
        >
            <divider-way-finder class="search-margin" />
        </section-wrapper>

        <!-- HIGHLIGHTED & FEATURED EVENTS -->
        <section-wrapper
            v-if="
                parsedFeaturedEventsAndExhibits.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
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
                :section-handle="parsedBannerHeader.sectionHandle"
                class="banner section-featured-banner"
            />

            <divider-general v-if="parsedSectionHighlight.length" />

            <section-teaser-highlight
                class="section"
                :items="parsedSectionHighlight"
            />
        </section-wrapper>

        <section-wrapper
            v-if="
                parsedFeaturedEventsAndExhibits.length &&
                    parsedEvents.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            theme="divider"
        >
            <divider-way-finder color="visit" />
        </section-wrapper>
        -->

        <!-- UPCOMING EVENTS -->
        <section-wrapper
            v-if="
                page &&
                    page.featuredEvents &&
                    page.featuredEvents.length > 0 &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            section-title="All Upcoming Events"
        >
            <section-teaser-list :items="parsedEvents" />
        </section-wrapper>

        <!-- <section-wrapper
            v-if="parsedEvents.length"
            theme="divider"
        >
            <divider-way-finder color="visit" />
        </section-wrapper> -->
        <section-wrapper v-else-if="hits && hits.length > 0">
            <section-teaser-card :items="parseHitsResults" />
        </section-wrapper>
        <!-- EVENT SERIES & EXHIBITIONS -->
        <!-- Display this always -->
        <section-wrapper section-title="Event Series & Exhibitions">
            <section-teaser-card :items="parsedSeriesAndExhibitions" />
        </section-wrapper>

        <section-wrapper
            v-if="parsedSeriesAndExhibitions.length"
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
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"
import sortByTitle from "~/utils/sortByTitle"

// GQL
import EXHIBITIONS_AND_EVENTS_LIST from "~/gql/queries/ExhibitionsAndEventsList.gql"

export default {
    async asyncData({ $graphql, params, store }) {
        console.log("in asyncdata calling axios get event")

        const data = await $graphql.default.request(
            EXHIBITIONS_AND_EVENTS_LIST,
            {
                slug: params.slug,
            }
        )
        return {
            page: _get(data, "entry", {}),
            events: _get(data, "events", {}),
            series: _get(data, "series", {}),
            exhibitions: _get(data, "exhibitions", {}),
        }
    },
    data() {
        return {
            page: {},
            events: [],
            series: [],
            exhibitions: [],
            hits: [],
            title: "",
            noResultsFound: false,
            searchFilters: [],
            searchGenericQuery: {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            },
        }
    },
    async fetch() {
        this.events = []
        this.series = []
        this.exhibitions = []
        this.hits = []
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            this.$route.query.filters
        ) {
            if (!this.page.title) {
                const data = await this.$graphql.default.request(
                    EXHIBITIONS_AND_EVENTS_LIST
                )
                this.page["title"] = _get(data, "entry.title", "")
                this.page["text"] = _get(data, "entry.text", "")
            }
            let query_text = this.$route.query.q || "*"
            console.log("in router query in asyc data")
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.eventsExhibitionsList.searchFields,
                "sectionHandle:event",
                JSON.parse(this.$route.query.filters) || {},
                config.eventsExhibitionsList.sortField,
                config.eventsExhibitionsList.orderBy,
                config.eventsExhibitionsList.resultFields,
                config.eventsExhibitionsList.filters
            )
            // const exhibitionResults =
            //     await this.$dataApi.keywordSearchWithFilters(
            //         query_text,
            //         config.eventsExhibitionsList.searchFields,
            //         "sectionHandle:exhibition",
            //         JSON.parse(this.$route.query.filters) || {},
            //         config.eventsExhibitionsList.sortField,
            //         config.eventsExhibitionsList.orderBy,
            //         config.eventsExhibitionsList.resultFields,
            //         config.eventsExhibitionsList.filters
            //     )
            // const workshopOrEventSeriesResults =
            //     await this.$dataApi.keywordSearchWithFilters(
            //         query_text,
            //         config.eventsExhibitionsList.searchFields,
            //         "sectionHandle:workshopOrEventSeries",
            //         JSON.parse(this.$route.query.filters) || {},
            //         config.eventsExhibitionsList.sortField,
            //         config.eventsExhibitionsList.orderBy,
            //         config.eventsExhibitionsList.resultFields,
            //         config.eventsExhibitionsList.filters
            //     )
            console.log("getsearchdata method:" + JSON.stringify(results))
            // console.log(
            //     "getsearchdata method exhbition:" +
            //         JSON.stringify(exhibitionResults)
            // )
            // console.log(
            //     "getsearchdata method workshopOrEventSeries:" +
            //         JSON.stringify(workshopOrEventSeriesResults)
            // )
            this.events = []
            this.series = []
            this.exhibitions = []
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits

                this.events = []
                this.series = []
                this.exhibitions = []
                this.noResultsFound = false
            } else {
                this.hits = []
                this.events = []
                this.series = []
                this.exhibitions = []
                this.noResultsFound = true
            }
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
                queryFilters:
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                    {},
            }
        } else {
            this.hits = []
            // if route queries are empty fetch data from craft
            const data = await this.$graphql.default.request(
                EXHIBITIONS_AND_EVENTS_LIST
            )
            // console.log("data:" + data)
            this.page = _get(data, "entry", {})
            this.events = _get(data, "events", [])
            this.series = _get(data, "series", [])
            this.exhibitions = _get(data, "exhibitions", [])
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaDescription = removeTags(this.page.text)

        return {
            title: title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: metaDescription,
                },
            ],
        }
    },
    computed: {
        parsedFeaturedEventsAndExhibits() {
            return this.page.featuredEvents.map((obj) => {
                return {
                    ...obj,
                    title: obj.eventTitle ? obj.eventTitle : obj.title,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    startDate:
                        obj.typeHandle === "event"
                            ? obj.startDateWithTime
                            : obj.startDate,
                    endDate:
                        obj.typeHandle === "event"
                            ? obj.endDateWithTime
                            : obj.endDate,
                    text:
                        obj.typeHandle === "event"
                            ? obj.eventDescription
                            : obj.summary,
                    prompt:
                        obj.typeHandle === "exhibition"
                            ? "View exhibition"
                            : obj.workshopOrEventSeriesType ===
                              "visit/events-exhibitions"
                                ? "View event series"
                                : "View event",
                    locations:
                        obj.typeHandle === "exhibition"
                            ? obj.associatedLocationsAndPrograms
                            : obj.associatedLocations[0] != null
                                ? obj.associatedLocations
                                : obj.eventLocation != null
                                    ? obj.eventLocation
                                    : obj.associatedLocationsAndPrograms,
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
                            : obj.workshopOrEventSeriesType ===
                              "visit/events-exhibitions"
                                ? "Event Series"
                                : obj.workshopOrEventSeriesType ===
                              "help/services-resources"
                                    ? "Workshop Series"
                                    : obj.eventType != null
                                        ? obj.eventType[0].title
                                        : "Event",
                    title: obj.title,
                }
            })
        },
        parsedEvents() {
            return [...(this.events || [])].map((obj) => {
                const eventOrExhibtion = obj || {}

                return {
                    ...eventOrExhibtion,
                    to: `/${eventOrExhibtion.to}`,
                    image: _get(
                        eventOrExhibtion,
                        "heroImage[0].image[0]",
                        null
                    ),
                    startDate: _get(
                        eventOrExhibtion,
                        "startDateWithTime",
                        null
                    ),
                    endDate: _get(eventOrExhibtion, "endDateWithTime", null),
                    category: _get(
                        eventOrExhibtion,
                        "eventType[0].title",
                        null
                    ),
                    locations:
                        eventOrExhibtion.associatedLocations[0] != null
                            ? eventOrExhibtion.associatedLocations
                            : eventOrExhibtion.eventLocation,
                }
            })
        },
        parsedSeriesAndExhibitions() {
            return [...(this.series || []), ...(this.exhibitions || [])]
                .sort(sortByTitle)
                .map((obj) => {
                    const seriesOrExhibtion = obj || {}

                    return {
                        ...seriesOrExhibtion,
                        category:
                            seriesOrExhibtion.category ===
                            "visit/events-exhibitions"
                                ? "event series"
                                : seriesOrExhibtion.typeHandle === "exhibition"
                                    ? "exhibition"
                                    : seriesOrExhibtion.category,
                        to: `/${seriesOrExhibtion.to}`,
                        image: _get(
                            seriesOrExhibtion,
                            "heroImage[0].image[0]",
                            null
                        ),
                    }
                })
        },
        parseHitsResults() {
            return this.parseHits(this.hits)
        },
    },
    // This will recall fetch() when these query params change
    // watchQuery: ["offset", "q"],
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {
            console.log("watching queryText:" + newValue)
        },
        "$route.query.filters"(newValue) {
            console.log("watching filters:" + newValue)
        },
    },
    async mounted() {
        console.log("In mounted")
        this.setFilters()
    },
    methods: {
        queryFilterHasValues() {
            if (!this.$route.query.filters) return false
            let routeQueryFilters = JSON.parse(this.$route.query.filters)
            // console.log(
            //     "is route query exixts:" + JSON.stringify(routeQueryFilters)
            // )
            let configFilters = config.eventsExhibitionsList.filters
            for (const filter of configFilters) {
                if (
                    Array.isArray(routeQueryFilters[filter.esFieldName]) &&
                    routeQueryFilters[filter.esFieldName].length > 0
                ) {
                    return true
                } else if (
                    routeQueryFilters[filter.esFieldName] &&
                    !Array.isArray(routeQueryFilters[filter.esFieldName]) &&
                    routeQueryFilters[filter.esFieldName] != ""
                ) {
                    return true
                }
            }
            return false
        },
        async setFilters() {
            const searchAggsResponse = await this.$dataApi.getAggregations(
                config.eventsExhibitionsList.filters,
                "event"
            )
            console.log(
                "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.eventsExhibitionsList.filters
            )
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                return {
                    ...obj["_source"],
                    to: `/${obj["_source"].to}`,
                    image: _get(obj["_source"], "image[0].image[0]", null),
                    startDate: _get(obj["_source"], "startDateWithTime", null),
                    endDate: _get(obj["_source"], "endDateWithTime", null),
                    category: _get(obj["_source"], "eventType[0].title", null),
                }
            })
        },
        getSearchData(data) {
            console.log("On the page getsearchdata called " + data)
            this.$router.push({
                path: "/visit/events-exhibitions",
                query: {
                    q: data.text,
                    filters: JSON.stringify(data.filters),
                },
            })
        },
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "events-exhibitions-index",
}
</script>

<style lang="scss" scoped>
.page-events-exhibits {
}
</style>
