<template lang="html">
    <main
        id="main"
        class="page page-collections-explore"
    >
        <nav-breadcrumb
            to="/collections"
            title="Explore Featured Collections"
            parent-title="Collections"
        />
        <masthead-secondary
            :title="page.title"
            :text="page.summary"
        />
        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            :placeholder="parsedPlaceholder"
            @search-ready="getSearchData"
        />
        <section-wrapper theme="divider">
            <divider-way-finder class="search-margin" />
        </section-wrapper>

        <section-wrapper
            v-if="
                page &&
                    parsedCollectionList &&
                    parsedCollectionList.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            class="section-no-top-margin"
        >
            <section-teaser-card :items="parsedCollectionList" />
        </section-wrapper>

        <section-wrapper
            v-else-if="hits && hits.length > 0"
            class="section-no-top-margin"
        >
            <h2
                v-if="$route.query.q"
                class="about-results"
            >
                Displaying {{ hits.length }} results for
                <strong><em>“{{ $route.query.q }}”</em></strong>
            </h2>
            <h2
                v-else
                class="about-results"
            >
                Displaying {{ hits.length }} results
            </h2>
            <section-teaser-card :items="parseHitsResults" />
        </section-wrapper>

        <section-wrapper
            v-else
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
            <divider-way-finder
                class="divider-way-finder"
                color="default"
            />
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                class="section"
                :items="parsedAssociatedTopics"
                button-text="All services & resources"
                to="/help/services-resources"
                section-title="Associated Topics"
            />
        </section-wrapper>
    </main>
</template>

<script>
// UTILITIES
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"
import queryFilterHasValues from "~/utils/queryFilterHasValues"
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import COLLECTIONS_EXPLORE_LIST from "~/gql/queries/CollectionsExploreList.gql"

export default {
    async asyncData({ $graphql, route }) {
        const data = await $graphql.default.request(
            COLLECTIONS_EXPLORE_LIST,
            {}
        )

        // console.log("data:" + data)
        return {
            page: _get(data, "entry", {}),
            collections: _get(data, "entries", {}),
        }
    },
    data() {
        return {
            page: {},
            collections: [],
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
        this.collections = []
        this.hits = []
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            (this.$route.query.filters &&
                queryFilterHasValues(
                    this.$route.query.filters,
                    config.exploreCollection.filters
                ))
        ) {
            if (!this.page.title) {
                const data = await this.$graphql.default.request(
                    COLLECTIONS_EXPLORE_LIST
                )
                this.page["title"] = _get(data, "entry.title", "")
                this.page["text"] = _get(data, "entry.text", "")
            }
            let query_text = this.$route.query.q || "*"
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.exploreCollection.searchFields,
                "sectionHandle:collection",
                JSON.parse(this.$route.query.filters) || {},
                config.exploreCollection.sortField,
                config.exploreCollection.orderBy,
                config.exploreCollection.resultFields,
                config.exploreCollection.filters
            )
            console.log("getsearchdata method:" + JSON.stringify(results))
            this.collections = []
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.collections = []
                this.noResultsFound = false
            } else {
                this.hits = []
                this.collections = []
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
            const data = await this.$graphql.default.request(
                COLLECTIONS_EXPLORE_LIST
            )
            // console.log("data:" + data)
            this.page = _get(data, "entry", {})
            this.collections = _get(data, "entries", [])
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaDescription = removeTags(this.page.summary)

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
        parsedCollectionList() {
            return this.collections.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
                    image: _get(obj, "heroImage[0]image[0]", null),
                    category: obj.category.join(", "),
                    title: _get(obj, "title", ""),
                    text: _get(obj, "text", ""),
                }
            })
        },
        parsedAssociatedTopics() {
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
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
        async setFilters() {
            const searchAggsResponse = await this.$dataApi.getAggregations(
                config.exploreCollection.filters,
                "collection"
            )
            console.log(
                "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.exploreCollection.filters
            )
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                return {
                    ...obj["_source"],
                    to: obj["_source"].externalResourceUrl
                        ? obj["_source"].externalResourceUrl
                        : `/${obj["_source"].uri}`,
                    image: _get(obj["_source"], "heroImage[0]image[0]", null),
                    category: obj["_source"].physicalDigital.join(", "),
                }
            })
        },
        getSearchData(data) {
            console.log("On the page getsearchdata called")
            /*this.page = {}
            this.hits = []*/
            this.$router.push({
                path: "/collections/explore",
                query: {
                    q: data.text,
                    filters: JSON.stringify(data.filters),
                },
            })
        },
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "explore-collections-index",
}
</script>

<style lang="scss" scoped>
.page-collections-explore {
}
</style>
