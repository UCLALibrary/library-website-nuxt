<template>
    <main
        id="main"
        class="page page-programs"
    >
        <nav-breadcrumb
            to="/about"
            :title="page.title"
            parent-title="About"
        />

        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />

        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            @search-ready="getSearchData"
        />

        <section-wrapper
            v-if="
                page &&
                    page.featuredPrograms &&
                    page.featuredPrograms.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            theme="divider"
        >
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper
            v-if="
                page &&
                    page.featuredPrograms &&
                    page.featuredPrograms.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            class="section-no-top-margin"
        >
            <banner-featured
                :image="parsedBannerHeader.image"
                :title="parsedBannerHeader.title"
                :category="parsedBannerHeader.category"
                breadcrumb="Featured"
                :byline="parsedByline"
                :description="parsedBannerHeader.text"
                :to="parsedBannerHeader.to"
                :align-right="true"
                prompt="View Program"
                class="banner section-featured-banner"
            />

            <divider-general
                v-if="
                    page &&
                        parsedSectionHighlight &&
                        parsedSectionHighlight.length &&
                        hits.length == 0 &&
                        !noResultsFound
                "
            />

            <section-teaser-highlight
                v-if="
                    page &&
                        parsedSectionHighlight &&
                        parsedSectionHighlight.length &&
                        hits.length == 0 &&
                        !noResultsFound
                "
                class="section"
                :items="parsedSectionHighlight"
            />
        </section-wrapper>

        <section-wrapper
            v-if="
                page &&
                    page.featuredPrograms &&
                    page.featuredPrograms.length &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            theme="divider"
        >
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper
            v-if="
                parsedProgramsList &&
                    parsedProgramsList.length > 0 &&
                    hits.length == 0 &&
                    !noResultsFound
            "
            section-title="All Programs & Initiatives"
        >
            <section-staff-article-list :items="parsedProgramsList" />
        </section-wrapper>
        <section-wrapper v-else-if="hits && hits.length > 0">
            <h3
                v-if="$route.query.q"
                class="about-results"
            >
                Displaying {{ hits.length }} results for “{{ $route.query.q }}”
            </h3>
            <h3
                v-else
                class="about-results"
            >
                Displaying {{ hits.length }} results
            </h3>
            <section-staff-article-list :items="parseHitsResults" />
        </section-wrapper>
        <section-wrapper v-else>
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

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                class="block-call-to-action"
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
import removeTags from "~/utils/removeTags"

// GQL
import PROGRAMS_LIST from "~/gql/queries/ProgramsList"

export default {
    async asyncData({ $graphql, route }) {
        // console.log("route: " + route.path)
        const data = await $graphql.default.request(PROGRAMS_LIST, {})
        // console.log("data:" + data)
        return {
            page: _get(data, "entry", {}),
            programs: _get(data, "entries", []),
        }
    },
    data() {
        return {
            page: {},
            programs: [],
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
        this.programs = []
        this.hits = []
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            this.$route.query.filters
        ) {
            if (!this.page.title) {
                const data = await this.$graphql.default.request(PROGRAMS_LIST)
                console.log("data for masthead:" + data)
                this.page["title"] = _get(data, "entry.title", "")
                this.page["text"] = _get(data, "entry.text", "")
            }
            let query_text = this.$route.query.q || "*"
            console.log("in router query in asyc data")
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.programsList.searchFields,
                "sectionHandle:program",
                JSON.parse(this.$route.query.filters) || {},
                config.programsList.sortField,
                config.programsList.resultFields,
                config.programsList.filters
            )
            console.log("getsearchdata method:" + JSON.stringify(results))
            this.programs = []
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.programs = []
            } else {
                this.hits = []
                this.programs = []
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
            const data = await this.$graphql.default.request(PROGRAMS_LIST)
            // console.log("data:" + data)
            this.page = _get(data, "entry", {})
            this.programs = _get(data, "entries", [])
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
        parsedFeaturedPrograms() {
            return this.page.featuredPrograms.map((obj) => {
                return {
                    ...obj,
                    image: _get(obj, "heroImage[0].image[0]", ""),
                    title: _get(obj, "title", ""),
                    text: obj.summary,
                    to: `/${obj.uri}`,
                    category: _get(obj, "programType[0].title", ""),
                }
            })
        },
        parsedBannerHeader() {
            return this.parsedFeaturedPrograms[0]
        },
        parsedSectionHighlight() {
            return this.parsedFeaturedPrograms.slice(1).map((obj) => {
                return {
                    ...obj,
                    image: _get(obj, "heroImage[0].image[0]", ""),
                    to: `/${obj.uri}`,
                    text: obj.summary,
                    category: _get(obj, "programType[0].title", ""),
                }
            })
        },
        parsedProgramsList() {
            return this.programs.map((obj) => {
                return {
                    ...obj,
                    to:
                        obj.programUrlBehavior === "externalSite"
                            ? obj.buttonUrl[0].buttonUrl
                            : `/${obj.uri}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    staffName: `${obj.fullName}`,
                    category: _get(obj, "programType[0].title", null),
                    description: _get(obj, "text", null),
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
        parseArticleCategory(categories) {
            if (!categories || categories.length == 0) return ""
            let result = ""
            categories.forEach((obj) => {
                result = result + obj.title + ", "
            })
            return result.slice(0, -2)
        },
        queryFilterHasValues() {
            if (!this.$route.query.filters) return false
            let routeQueryFilters = JSON.parse(this.$route.query.filters)
            // console.log(
            //     "is route query exixts:" + JSON.stringify(routeQueryFilters)
            // )
            let configFilters = config.programsList.filters
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
                config.programsList.filters,
                "program"
            )

            console.log(
                "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.programsList.filters
            )
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                // console.log(obj["_source"]["image"])
                return {
                    ...obj["_source"],
                    description: obj["_source"].text,
                    to:
                        obj["_source"].programUrlBehavior === "externalSite"
                            ? obj["_source"].buttonUrl[0].buttonUrl
                            : `/${obj["_source"].uri}`,
                    image: _get(obj["_source"], "heroImage[0].image[0]", null),
                    category: _get(
                        obj["_source"],
                        "programType[0].title",
                        null
                    ),
                }
            })
        },
        getSearchData(data) {
            console.log("On the page getsearchdata called")
            /*this.page = {}
            this.hits = []*/
            this.$router.push({
                path: "/about/programs",
                query: {
                    q: data.text,
                    filters: JSON.stringify(data.filters),
                },
            })
        },
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "programs-index",
}
</script>

<style lang="scss" scoped>
.page-programs {
    .about-results {
        margin-top: var(--space-xl);
        margin-bottom: var(--space-l);
    }
}
</style>
Footer
