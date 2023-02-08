<template lang="html">
    <main
        id="main"
        class="page page-location"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />

        <!-- SEARCH -->
        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            :placeholder="parsedPlaceholder"
            @search-ready="getSearchData"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                color="visit"
                class="search-margin"
            />
        </section-wrapper>

        <!-- UCLA LIBRARIES -->
        <section-wrapper
            v-if="
                page &&
                    uclaLibraries &&
                    parsedUclaLibraries.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            class="section-no-top-margin"
            section-title="UCLA Library Locations"
        >
            <section-location-list
                class="blockLocationListWrapper"
                :items="parsedUclaLibraries"
            />
            <button-more
                text="See More"
                @click.native="showMoreOtherCampusLibrary()"
            />
        </section-wrapper>

        <!-- AFFILIATE LIBRARIES -->
        <section-wrapper
            v-if="
                page &&
                    affiliateLibraries &&
                    parsedAffiliateLibraries.length &&
                    showOtherCampus &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            section-title="Other Campus Libraries & Archives"
        >
            <section-location-list
                class="blockLocationListWrapper"
                :items="parsedAffiliateLibraries"
            />
        </section-wrapper>

        <!-- RESULTS -->

        <section-wrapper
            v-else-if="hits && hits.length > 0"
            class="meta section-no-top-margin"
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

            <section-location-list
                class="blockLocationListWrapper"
                :items="parseHitsResults"
            />
        </section-wrapper>

        <!-- NO RESULTS -->
        <section-wrapper
            v-else-if="noResultsFound"
            class="meta section-no-top-margin"
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

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider-way-finder"
                color="visit"
            />
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
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"

// HELPERS
import _get from "lodash/get"
import parseAddress from "~/utils/parseAddress"
import parseAmenities from "~/utils/parseAmenities"
import removeTags from "~/utils/removeTags"

// GQL
import LOCATIONS_LIST from "~/gql/queries/LocationsList"

export default {
    async asyncData({ $graphql, params, $elasticsearchplugin }) {
        const data = await $graphql.default.request(LOCATIONS_LIST, {
            uri: params.path,
        })

        const serverData = await $graphql.default.request(LOCATIONS_LIST)
        console.log(
            "ALL External Resource indexing:" +
                JSON.stringify(serverData.affiliateLibraries)
        )
        if (
            serverData.affiliateLibraries &&
            serverData.affiliateLibraries.length > 0
        ) {
            console.log("External Resource indexing:")
            for (let affiliateLibrary of serverData.affiliateLibraries) {
                console.log(
                    "External Resource indexing:" + affiliateLibrary.slug
                )
                await $elasticsearchplugin.index(
                    affiliateLibrary,
                    affiliateLibrary.slug
                )
            }
        }

        return {
            page: _get(data, "entry", {}),
            uclaLibraries: _get(data, "uclaLibraries", {}),
            affiliateLibraries: _get(data, "affiliateLibraries", {}),
        }
    },
    data() {
        return {
            showOtherCampus: false,
            page: {},
            uclaLibraries: [],
            affiliateLibraries: [],
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
        this.uclaLibraries = []
        this.hits = []
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            this.$route.query.filters
        ) {
            if (!this.page.title) {
                const data = await this.$graphql.default.request(LOCATIONS_LIST)
                console.log("data for masthead:" + data)
                this.page["title"] = _get(data, "entry.title", "")
                this.page["text"] = _get(data, "entry.text", "")
            }
            let query_text = this.$route.query.q || "*"
            console.log("in router query in asyc data")
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.locationsList.searchFields,
                "sectionHandle:location OR sectionHandle:affiliateLibrary",
                JSON.parse(this.$route.query.filters) || {},
                config.locationsList.sortField,
                config.locationsList.orderBy,
                config.locationsList.resultFields,
                config.locationsList.filters
            )
            console.log("getsearchdata method:" + JSON.stringify(results))
            this.uclaLibraries = []
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.uclaLibraries = []
                this.noResultsFound = false
            } else {
                this.hits = []
                this.uclaLibraries = []
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
            this.noResultsFound = false
            // if route queries are empty fetch data from craft
            const data = await this.$graphql.default.request(LOCATIONS_LIST)
            // console.log("data:" + data)
            this.page = _get(data, "entry", {})
            this.uclaLibraries = _get(data, "uclaLibraries", [])
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
        parsedUclaLibraries() {
            return this.uclaLibraries.map((obj) => {
                return {
                    ...obj,
                    to: obj.uri ? `/${obj.uri}` : null,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    address: parseAddress(obj)[0],
                    addressLink: `https://map.ucla.edu/?id=${obj.campusMapId}&e=true`,
                    amenities:
                        obj.amenitiesIcons.length > 0
                            ? parseAmenities(obj)
                            : null,
                    isUclaLibrary: true,
                }
            })
        },
        parsedAffiliateLibraries() {
            return this.affiliateLibraries.map((obj) => {
                return {
                    ...obj,
                    to: obj.affiliateLibraryUrl
                        ? obj.affiliateLibraryUrl
                        : null,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    address: parseAddress(obj)[0],
                    addressLink: `https://map.ucla.edu/?id=${obj.campusMapId}&e=true`,
                    amenities:
                        obj.amenitiesIcons.length !== 0
                            ? parseAmenities(obj)
                            : null,
                    isUclaLibrary: false,
                }
            })
        },
        parsedPlaceholder() {
            return `Search ${this.page.title}`
        },
        parseHitsResults() {
            return this.parseHits(this.hits)
        },
    },
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {
            console.log("watching querytEXT:" + newValue)
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
        showMoreOtherCampusLibrary() {
            this.showOtherCampus = !this.showOtherCampus
        },
        queryFilterHasValues() {
            if (!this.$route.query.filters) return false
            let routeQueryFilters = JSON.parse(this.$route.query.filters)
            // console.log(
            //     "is route query exixts:" + JSON.stringify(routeQueryFilters)
            // )
            let configFilters = config.locationsList.filters
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
                config.locationsList.filters,
                "location"
            )

            console.log(
                "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.locationsList.filters
            )
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                // console.log(obj["_source"]["_source"]["image"])
                return {
                    ...obj["_source"],
                    to:
                        obj["_source"].locationType === "affiliateLibrary"
                            ? obj["_source"].affiliateLibraryUrl
                            : `/${obj["_source"].uri}`,
                    image: _get(obj["_source"], "heroImage[0].image[0]", null),
                    address: parseAddress(obj["_source"])[0],
                    addressLink: `https://map.ucla.edu/?id=${obj["_source"].campusMapId}&e=true`,
                    amenities:
                        obj["_source"].amenitiesIcons.length !== 0
                            ? parseAmenities(obj["_source"])
                            : null,
                    isUclaLibrary:
                        obj["_source"].locationType === "affiliateLibrary"
                            ? false
                            : true,
                }
            })
        },
        getSearchData(data) {
            console.log("On the page getsearchdata called " + data)
            /*this.page = {}
            this.hits = []*/
            this.$router.push({
                path: "/visit/locations",
                query: {
                    q: data.text,
                    filters: JSON.stringify(data.filters),
                },
            })
        },
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "locations-index",
}
</script>

<style lang="scss" scoped>
.page-location {
    .about-results {
        margin-top: var(--space-xl);
        margin-bottom: var(--space-l);
    }
}
</style>
