<template lang="html">
    <main
        id="main"
        class="page page-location"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />
        <h3>{{ }}</h3>
        <search-generic
            search-type="visit"
            :filters="searchFilters"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            @search-ready="getSearchData"
        />
        <section-wrapper
            v-if="
                page &&
                    parsedUclaLibraries &&
                    parsedUclaLibraries.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
        >
            <divider-way-finder
                class="divider-way-finder"
                color="visit"
            />
        </section-wrapper>

        <section-wrapper
            v-if="uclaLibraries"
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

        <section-wrapper
            v-if="affiliateLibraries && showOtherCampus"
            section-title="Other Campus Libraries & Archives"
        >
            <section-location-list
                class="blockLocationListWrapper"
                :items="parsedAffiliateLibraries"
            />
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
// HELPERS
import _get from "lodash/get"

// GQL
import LOCATIONS_LIST from "~/gql/queries/LocationsList"

// UTILITIES
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"
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
        this.locations = []
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

            console.log("in router query in async data")

            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.locationsList.searchFields,
                "sectionHandle:location",
                JSON.parse(this.$route.query.filters) || {},
                config.locationsList.sortField,
                config.locationsList.resultFields,
                config.locationsList.filters
            )
            console.log("getsearchdata method:" + JSON.stringify(results))

            this.locations = []
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.locations = []
            } else {
                this.hits = []
                this.locations = []
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
            // console.log("data:" + data)
            this.page = _get(data, "entry", {})
            this.locations = _get(data, "entries", [])
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
                    description: obj["_source"].text,
                    to:
                        obj["_source"].externalResourceUrl
                            ? obj["_source"].buttonUrl[0].buttonUrl
                            : `/${obj["_source"].uri}`,
                    image: _get(obj["_source"], "heroImage[0].image[0]", null),
                }

                // to: obj.uri ? `/${obj.uri}` : null,
                //     image: _get(obj, "heroImage[0].image[0]", null),
                //     address: parseAddress(obj)[0],
                //     addressLink: `https://map.ucla.edu/?id=${obj.campusMapId}&e=true`,
                //     amenities:
                //         obj.amenitiesIcons.length > 0
                //             ? parseAmenities(obj)
                //             : null,
                //     isUclaLibrary: true,


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
