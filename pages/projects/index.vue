<template lang="html">
    <main
        id="main"
        class="page page-project-list"
    >
        <masthead-secondary
            :title="summaryData.projectListTitle"
            :text="summaryData.projectListSummary"
        />

        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            placeholder="Search Projects"
            @search-ready="getSearchData"
        />
        <section-wrapper theme="divider">
            <divider-way-finder class="search-margin" />
        </section-wrapper>
        <section-wrapper
            v-show="
                page &&
                    projectList.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            section-title="All Projects"
        >
            <section-teaser-card :items="projectList" />
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

            <section-teaser-card :items="parseHitsResults" />
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
                        We can’t find the term you are looking for on this page.
                        <br>
                        <!-- Try searching the whole site from
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
                    </ul> -->
                    </p>
                </rich-text>
            </div>
        </section-wrapper>
        <section-wrapper
            v-if="parsedAssociatedTopics && parsedAssociatedTopics.length"
            theme="divider"
        >
            <divider-way-finder color="help" />
        </section-wrapper>

        <section-wrapper
            v-if="parsedAssociatedTopics && parsedAssociatedTopics.length"
        >
            <section-cards-with-illustrations
                :items="parsedAssociatedTopics"
                title="Associated Topics"
                button-text="All Resources"
                to="/applicants/resources"
            />
        </section-wrapper>
    </main>
</template>

<script>
// GQL
import PROJECT_LIST from "~/gql/queries/ProjectList"
// Helpers
import _get from "lodash/get"
import stripMeapFromURI from "~/utils/stripMeapFromURI"
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"
import queryFilterHasValues from "~/utils/queryFilterHasValues"

export default {
    async asyncData({ $graphql, params, store }) {
        const data = await $graphql.default.request(PROJECT_LIST, {})
        return {
            summaryData: _get(data, "entry", {}),
            page: _get(data, "entries", {}),
        }
    },
    data() {
        return {
            summaryData: {},
            page: [],
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
        this.summaryData = {}
        this.page = []
        this.hits = []
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            (this.$route.query.filters &&
                queryFilterHasValues(
                    this.$route.query.filters,
                    config.meapProject.filters
                ))
        ) {
            if (!this.summaryData.title) {
                const data = await this.$graphql.default.request(PROJECT_LIST)
                //console.log("data for masthead:" + data)
                this.summaryData["title"] = _get(data, "entry.title", "")
                this.summaryData["text"] = _get(data, "entry.text", "")
            }
            let query_text = this.$route.query.q || "*"
            //console.log("in router query in asyc data")
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.meapProject.searchFields,
                "sectionHandle:meapProject",
                JSON.parse(this.$route.query.filters) || {},
                config.meapProject.sortField,
                config.meapProject.orderBy,
                config.meapProject.resultFields,
                config.meapProject.filters
            )
            //console.log("getsearchdata method:" + JSON.stringify(results))
            this.page = []
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.page = []
                this.noResultsFound = false
            } else {
                this.hits = []
                this.page = []
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
            const data = await this.$graphql.default.request(PROJECT_LIST)
            // //console.log("data:" + data)
            this.summaryData = _get(data, "entry", {})
            this.page = _get(data, "entries", [])
        }
    },
    head() {
        let title = this.summaryData
            ? this.summaryData.projectListTitle
            : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        projectList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/${stripMeapFromURI(obj.to)}`,
                    image: _get(obj, "image[0].image[0]", {}),
                }
            })
        },
        parsedAssociatedTopics() {
            if (!this.summaryData.featuredMeapResourcesListing) {
                return []
            }
            return this.summaryData.featuredMeapResourcesListing.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${stripMeapFromURI(obj.uri)}`,
                }
            })
        },
        parseHitsResults() {
            return this.parseHits(this.hits)
        },
    },
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {},
        "$route.query.filters"(newValue) {},
    },
    async mounted() {
        this.setFilters()
    },
    methods: {
        queryFilterHasValues() {
            if (!this.$route.query.filters) return false
            let routeQueryFilters = JSON.parse(this.$route.query.filters)
            let configFilters = config.meapProject.filters
            for (const filter of configFilters) {
                console.log(filter)
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
                config.meapProject.filters,
                "meapProject"
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.meapProject.filters
            )
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                return {
                    ...obj["_source"],
                    to: `/${stripMeapFromURI(obj["_source"].uri)}`,
                    image: _get(obj["_source"], "heroImage[0].image[0]", null),
                    text: _get(obj["_source"], "summary", null),
                }
            })
        },
        getSearchData(data) {
            //console.log("On the page getsearchdata called " + data)
            /*this.page = {}
            this.hits = []*/
            this.$router.push({
                path: "/projects",
                query: {
                    q: data.text,
                    filters: JSON.stringify(data.filters),
                },
            })
        },
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "projects-index",
}
</script>

<style lang="scss" scoped></style>
