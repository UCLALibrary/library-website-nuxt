<template lang="html">
    <main
        id="main"
        class="page page-location"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />


        <search-generic
            search-type="visit"
            :filters="searchFilters"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            @search-ready="getSearchData"
        />

        <h3>HITS -- {{ hits }}</h3>


        <section-wrapper
            v-if="
                page &&
                    parsedUclaLibraries &&
                    parsedUclaLibraries.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            theme="divider"
        >
            <divider-way-finder color="visit" />
        </section-wrapper>


        <!-- UCLA LIBRARIES -->
        <section-wrapper
            v-if="
                parsedUclaLibraries &&
                    parsedUclaLibraries.length > 0 &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            section-title="UCLA Library Locations"
        >
            <section-location-list
                class="blockLocationListWrapper"
                :items="parsedUclaLibraries"
            />
            <!-- TODO implement show-hide instead of button-more -->
            <button-more
                text="See More"
                @click.native="showMoreOtherCampusLibrary()"
            />
        </section-wrapper>


        <!-- AFFILIATE LIBRARIES -->
        <section-wrapper
            v-if="affiliateLibraries && showOtherCampus"
            section-title="Other Campus Libraries & Archives"
        >
            <section-location-list
                class="blockLocationListWrapper"
                :items="parsedAffiliateLibraries"
            />

            <divider-way-finder
                class="divider-way-finder"
                color="visit"
            />
        </section-wrapper>

        <!-- RESULTS-->
        <section-wrapper v-else-if="hits && hits.length > 0">
            <div
                v-if="$route.query.q"
                class="about-results"
            >
                Displaying {{ hits.length }} results for
                <strong><em>“{{ $route.query.q }}”</em></strong>
            </div>
            <div
                v-else
                class="about-results"
            >
                Displaying {{ hits.length }} results
            </div>
            <section-teaser-card :items="parseHitsResults" />
        </section-wrapper>

        <!-- NO RESULTS-->
        <section-wrapper v-else-if="noResultsFound">
            <div class="error-text">
                <rich-text>
                    <h1>Search for “{{ $route.query.q }}” not found.</h1>
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
// HELPERS
import _get from "lodash/get"

// GQL
import LOCATIONS_LIST from "~/gql/queries/LocationsList"

// SEARCH UTILITIES
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"
import queryFilterHasValues from "~/utils/queryFilterHasValues"

// HELPERS
import parseAddress from "~/utils/parseAddress"
import parseAmenities from "~/utils/parseAmenities"
import removeTags from "~/utils/removeTags"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(LOCATIONS_LIST, {
            uri: params.path,
        })

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
        this.uclaLibraries= []
        this.hits = []

        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            (this.$route.query.filters &&
                queryFilterHasValues(
                    this.$route.query.filters,
                    config.locationsList.filters
                ))
        ) {
            if (!this.page.title) {
                const data = await this.$graphql.default.request(LOCATIONS_LIST)
                console.log("data for masthead:" + data)
                this.page["title"] = _get(data, "entry.title", "")
                this.page["text"] = _get(data, "entry.text", "")
            }

            let query_text = this.$route.query.q || "*"
            // console.log("in router query in async data")
            // console.log("PAGE-TITLE" + this.page["title"])
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.locationsList.searchFields,
                "sectionHandle:location",
                JSON.parse(this.$route.query.filters) || {},
                config.locationsList.sortField,
                config.locationsList.orderBy,
                config.locationsList.resultFields,
                config.locationsList.filters
            )
            console.log("GETSEARCHDATA method:" + JSON.stringify(results))

            this.uclaLibraries = []
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.uclaLibraries = []
                console.log("HITS" + this.hits)
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
            // if route queries are empty fetch data from craft
            const data = await this.$graphql.default.request(LOCATIONS_LIST)
            // console.log("DATA: :" + data)
            this.page = _get(data, "entry", {})
            this.uclaLibraries = _get(data, "entries", [])
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
        parseHitsResults() {
            return this.parseHits(this.hits)
        },
    },
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {
            console.log("WATCHING querytEXT:" + newValue)
        },
        "$route.query.filters"(newValue) {
            console.log("WATCHING filters:" + newValue)
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
            console.log(
                "is route query exixts:" + JSON.stringify(routeQueryFilters)
            )
            let configFilters = config.locationsList.filters
            for (const filter of configFilters) {
                if (
                    Array.isArray(routeQueryFilters[filter.esFieldName]) &&
                    routeQueryFilters[filter.esFieldName].length > 0
                ) {
                    console.log(
                        "why is this true is Array: " +
                            routeQueryFilters[filter.esFieldName]
                    )
                    return true
                } else if (
                    routeQueryFilters[filter.esFieldName] &&
                    !Array.isArray(routeQueryFilters[filter.esFieldName]) &&
                    routeQueryFilters[filter.esFieldName] != ""
                ) {
                    console.log(
                        "why is this truenot Array: " +
                            routeQueryFilters[filter.esFieldName] +
                            "config filter name is " +
                            filter.esFieldName
                    )
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
                // console.log(obj["_source"]["image"])
                return {
                    ...obj["_source"],
                    to: obj["_source"].uri ? `/${obj["_source"].uri}` : null,
                    image: _get(obj["_source"], "heroImage[0].image[0]", null),
                    address: parseAddress(obj["_source"])[0],
                    addressLink: `https://map.ucla.edu/?id=${obj.campusMapId}&e=true`,
                    amenities:
                        obj["_source"].amenitiesIcons.length > 0
                            ? parseAmenities(obj["_source"])
                            : null,
                    isUclaLibrary: true,
                }
            })
        },
        getSearchData(data) {
            console.log("On the page getsearchdata called" + data)
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
    // .section-heading {
    //     @include step-4;
    //     color: var(--color-primary-blue-03);
    //     margin: var(--space-xl) auto;
    //     max-width: $container-l-main + px;
    // }

    // .blockLocationListWrapper {
    //     display: flex;
    //     flex-direction: column;
    //     gap: var(--space-m);

    //     max-width: $container-l-main + px;
    //     margin: 0 auto var(--space-3xl);
    // }
}
</style>
