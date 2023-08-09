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
            class="generic-search"
            :filters="searchFilters"
            :search-generic-query="searchGenericQuery"
            :placeholder="parsedPlaceholder"
            @search-ready="getSearchData"
        />
        <section-wrapper theme="divider">
            <divider-way-finder class="search-margin" />
        </section-wrapper>
        <!-- HIGHLIGHTED & FEATURED EVENTS -->
        <section-wrapper
            v-show="
                parsedFeaturedEventsAndExhibits.length > 0 &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            class="section-no-top-margin"
        >
            <banner-featured
                v-if="
                    parsedFeaturedEventsAndExhibits.length > 0 &&
                        hits.length == 0 &&
                        !noResultsFound
                "
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
            v-show="
                parsedFeaturedEventsAndExhibits.length > 0 &&
                    parsedEvents.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            theme="divider"
        >
            <divider-way-finder color="visit" />
        </section-wrapper>

        <!-- UPCOMING EVENTS -->
        <section-wrapper
            v-show="
                parsedEvents &&
                    parsedEvents.length > 0 &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            section-title="All Upcoming Events"
        >
            <section-teaser-list :items="parsedEvents" />
        </section-wrapper>

        <section-wrapper
            v-show="
                parsedEvents &&
                    parsedEvents.length > 0 &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            theme="divider"
        >
            <divider-way-finder color="visit" />
        </section-wrapper>

        <!-- EVENT SERIES & EXHIBITIONS -->
        <section-wrapper
            v-show="
                parsedSeriesAndExhibitions &&
                    parsedSeriesAndExhibitions.length > 0 &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            section-title="Event Series & Exhibitions"
        >
            <section-teaser-card :items="parsedSeriesAndExhibitions" />
        </section-wrapper>
        <section-wrapper
            v-show="hits && hits.length > 0"
            class="section-no-top-margin"
        >
            <h2
                v-if="$route.query.q"
                class="about-results"
            >
                Displaying {{ hits.length }} results for
                <strong><em>“{{ $route.query.q }}</em></strong>”
            </h2>
            <h2
                v-else
                class="about-results"
            >
                Displaying {{ hits.length }} results
            </h2>
            <section-teaser-list :items="parseHitsResults" />
        </section-wrapper>
        <!-- NO RESULTS -->
        <section-wrapper
            v-show="noResultsFound"
            class="section-no-top-margin"
        >
            <div class="error-text">
                <rich-text>
                    <h2>Search for “{{ $route.query.q }}” not found.</h2>
                    <p>
                        We can’t find the term you are looking for on this page,
                        but we're here to help. <br>
                        Try searching the whole site from
                        <a href="https://library.ucla.edu">UCLA Library Home</a>, or try one of the these regularly visited links:
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://www.library.ucla.edu/research-teaching-support/research-help"
                            >Research Help</a>
                        </li>
                        <li>
                            <a href="/help/services-resources/ask-us">Ask Us</a>
                        </li>
                        <li>
                            <a
                                href="https://www.library.ucla.edu/use/access-privileges/disability-resources"
                            >Accessibility Resources</a>
                        </li>
                    </ul>
                </rich-text>
            </div>
        </section-wrapper>

        <section-wrapper>
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
// UTILITIES
import config from "~/utils/searchConfig"
import removeTags from "~/utils/removeTags"
import sortByTitle from "~/utils/sortByTitle"
import queryFilterHasValues from "~/utils/queryFilterHasValues"
import getListingFilters from "~/utils/getListingFilters"

// HELPERS
import _get from "lodash/get"

// GQL
import EXHIBITIONS_AND_EVENTS_LIST from "~/gql/queries/ExhibitionsAndEventsList.gql"
import EXHIBITIONS_AND_EVENTS_LIST_SINGLE from "~/gql/queries/ExhibitionsAndEventsListSingle.gql"
export default {
    async asyncData({ $graphql, params, store }) {
        //console.log("in asyncdata calling axios get event")
        const data = await $graphql.default.request(EXHIBITIONS_AND_EVENTS_LIST)
        const single = await $graphql.default.request(
            EXHIBITIONS_AND_EVENTS_LIST_SINGLE
        )
        return {
            page: _get(single, "entry", {}),
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
            searchFilters: [],
            noResultsFound: false,
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
        // this.events = []
        this.hits = []
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            (this.$route.query.filters &&
                queryFilterHasValues(
                    this.$route.query.filters,
                    config.eventsExhibitionsList.filters
                ))
        ) {
            if (!this.page.title) {
                const data = await this.$graphql.default.request(
                    EXHIBITIONS_AND_EVENTS_LIST_SINGLE
                )
                this.page["title"] = _get(data, "entry.title", "")
                this.page["text"] = _get(data, "entry.text", "")
            }
            let query_text = this.$route.query.q || "*"
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.eventsExhibitionsList.searchFields,
                "sectionHandle:event OR sectionHandle:exhibition OR sectionHandle:eventSeries",
                (this.$route.query.filters &&
                    JSON.parse(this.$route.query.filters)) ||
                    {},
                config.eventsExhibitionsList.sortField,
                config.eventsExhibitionsList.orderBy,
                config.eventsExhibitionsList.resultFields,
                config.eventsExhibitionsList.filters,
                config.eventsExhibitionsList.extraFilters,
            )
            //console.log("getsearchdata method:" + JSON.stringify(results))
            // this.events = []
            // this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                /*this.events = []
                this.series = []
                this.exhibitions = []*/
                this.noResultsFound = false
            } else {
                this.hits = []
                /*this.events = []
                this.series = []
                this.exhibitions = []*/
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
            // if route queries are empty fetch data from craft
            this.hits = []
            this.noResultsFound = false
            this.searchGenericQuery = {
                queryText: "",
                queryFilters: {},
            }
            /*const single = await this.$graphql.default.request(
                EXHIBITIONS_AND_EVENTS_LIST_SINGLE
            )
            const data = await this.$graphql.default.request(
                EXHIBITIONS_AND_EVENTS_LIST
            )
            //console.log("data:" + data)
            this.single = _get(data, "entry", {})
            this.events = _get(data, "events", {})
            this.series = _get(data, "series", {})
            this.exhibitions = _get(data, "exhibitions", {})*/
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
                    to: `/${obj.to}`,
                    title: obj.eventTitle ? obj.eventTitle : obj.title,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    startDate:
                        obj.typeHandle === "event"
                            ? obj.startDateWithTime
                            : obj.startDate,
                    endDate:
                        obj.typeHandle === "event"
                            ? obj.endDateWithTime
                            : obj.endDate,
                    prompt:
                        obj.typeHandle === "exhibition"
                            ? "View exhibition"
                            : obj.workshopOrEventSeriesType ===
                              "visit/events-exhibitions"
                                ? "View event series"
                                : "View event",
                    text:
                        obj.typeHandle === "event"
                            ? obj.eventDescription
                            : obj.summary,
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
                                    : obj.eventType != null && obj.eventType.length > 0
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
                    image: _get(eventOrExhibtion, "image[0]", null),
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
            return [...(this.page.featuredEventSeriesAndExhibitions || [])]
                .sort(sortByTitle)
                .map((obj) => {
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
                        to: `/${obj.to}`,
                        image: _get(obj, "heroImage[0].image[0]", null),
                    }
                })
        },
        parseHitsResults() {
            return this.parseHits(this.hits)
        },
        parsedPlaceholder() {
            return `Search ${this.page.title}`
        },
    },
    // This will recall fetch() when these query params change
    // watchQuery: ["offset", "q"],
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {
            //console.log("watching queryText:" + newValue)
        },
        "$route.query.filters"(newValue) {
            //console.log("watching filters:" + newValue)
        },
    },
    async mounted() {
        //console.log("In mounted")
        /*//console.log("ESREADkey:" + this.$config.esReadKey)
        //console.log("ESURLkey:" + this.$config.esURL)*/
        // bookmarked search queries are not calling fetch
        this.setFilters()
    },
    methods: {
        async setFilters() {
            const searchAggsResponse = await this.$dataApi.getAggregations(
                config.eventsExhibitionsList.filters,
                "event"
            )
            /*console.log(
                "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
            )*/
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.eventsExhibitionsList.filters
            )
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                if (obj["_source"].sectionHandle === "event") {
                    return {
                        ...obj["_source"],
                        to: `/${obj["_source"].to}`,
                        image: _get(obj["_source"], "image[0].image[0]", null),
                        startDate: _get(
                            obj["_source"],
                            "startDateWithTime",
                            null
                        ),
                        endDate: _get(obj["_source"], "endDateWithTime", null),
                        category: _get(
                            obj["_source"],
                            "eventType[0].title",
                            null
                        ),
                    }
                } else if (obj["_source"].sectionHandle === "exhibition") {
                    return {
                        ...obj["_source"],
                        to: `/${obj["_source"].uri}`,
                        image: _get(obj["_source"], "image[0].image[0]", null),
                        startDate: _get(obj["_source"], "startDate", null),
                        endDate: _get(obj["_source"], "endDate", null),
                        category: _get(obj["_source"], "sectionHandle", null),
                    }
                } else if (obj["_source"].sectionHandle === "eventSeries") {
                    return {
                        ...obj["_source"],
                        to: `/${obj["_source"].uri}`,
                        image: _get(obj["_source"], "image[0].image[0]", null),
                        startDate: _get(obj["_source"], "startDate", null),
                        endDate: _get(obj["_source"], "endDate", null),
                        category: "Event Series",
                    }
                } else {
                    return {
                        ...obj["_source"],
                        to: `/${obj["_source"].uri}`,
                    }
                }
            })
        },
        getSearchData(data) {
            //console.log("On the page getsearchdata called " + data)
            const filterData =
                (data.filters && JSON.stringify(data.filters)) || ""
            this.$router.push({
                path: "/visit/events-exhibitions",
                query: {
                    q: data.text,
                    filters: filterData,
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
