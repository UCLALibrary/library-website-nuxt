<template lang="html">
    <main
        id="main"
        class="page page-endowment-listing"
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
            @search-ready="getSearchData"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                class="search-margin"
                color="about"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page.featuredEndowments.length"
            class="section-no-top-margin"
            :section-title="page.featuredEndowments[0].titleGeneral"
            :section-summary="page.featuredEndowments[0].sectionSummary"
        >
            <section-teaser-card
                v-if="parsedFeaturedEndowments.length"
                class="section"
                :items="parsedFeaturedEndowments"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page.featuredEndowments.length"
            theme="divider"
        >
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper section-title="All Collection Endowments">
            <section-generic-list :items="parsedEndowmentsList" />
            <!-- pagination -->
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                svg-name="svg-call-to-action-money"
                title="Give to the UCLA Library"
                text="Your contributions help us build our collections for the benefit or our students, faculty, staff and the general public."
                name="Give Now"
                to="/give"
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

// GQL
import ENDOWMENTS_LIST from "~/gql/queries/EndowmentList"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(ENDOWMENTS_LIST, {})
        return {
            page: _get(data, "entry", {}),
            endowments: _get(data, "entries", {}),
        }
    },
    data() {
        return {
            page: {},
            endowments: [],
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
        this.endowments = []
        this.hits = []
        if (
            (this.$route.query.q && this.$route.query.q !== "") ||
            this.$route.query.filters
        ) {
            if (!this.page.title) {
                const data = await this.$graphql.default.request(
                    ENDOWMENTS_LIST
                )
                console.log("data for masthead:" + data)
                this.page["title"] = _get(data, "entry.title", "")
                this.page["text"] = _get(data, "entry.text", "")
            }
            let query_text = this.$route.query.q || "*"
            console.log("in router query in asyc data")
            const results = await this.$dataApi.keywordSearchWithFilters(
                query_text,
                config.endowmentsList.searchFields,
                "sectionHandle:endowment",
                JSON.parse(this.$route.query.filters) || {},
                config.endowmentsList.sortField,
                config.endowmentsList.orderBy,
                config.endowmentsList.resultFields,
                config.endowmentsList.filters
            )
            console.log("getsearchdata method:" + JSON.stringify(results))
            this.endowments = []
            this.hits = []
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.endowments = []
                this.noResultsFound = false
            } else {
                this.hits = []
                this.endowments = []
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
            const data = await this.$graphql.default.request(ENDOWMENTS_LIST)
            // console.log("data:" + data)
            this.page = _get(data, "entry", {})
            this.endowments = _get(data, "entries", [])
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
        parsedFeaturedEndowments() {
            return this.page.featuredEndowments[0].featuredEndowments.map(
                (obj) => {
                    return {
                        ...obj,
                        to: `/${obj.to}`,
                        image: _get(obj, "heroImage[0].image[0]", null),
                        alternativeFullName: _get(
                            obj,
                            "alternativeName[0].fullName",
                            null
                        ),
                        language: _get(
                            obj,
                            "alternativeName[0].languageAltName",
                            null
                        ),
                    }
                }
            )
        },
        parsedEndowmentsList() {
            return this.endowments.map((obj) => {
                return {
                    ...obj,
                    jobPostingURL: `/${obj.to}`,
                    alternativeFullName: _get(
                        obj,
                        "alternativeName[0].fullName",
                        null
                    ),
                    language: _get(
                        obj,
                        "alternativeName[0].languageAltName",
                        null
                    ),
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
            let configFilters = config.endowmentsList.filters
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
                config.endowmentsList.filters,
                "endowment"
            )
            console.log(
                "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.endowmentsList.filters
            )
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                return {
                    ...obj["_source"],
                }
            })
        },
        getSearchData(data) {
            console.log("On the page getsearchdata called " + data)
            /*this.page = {}
            this.hits = []*/
            this.$router.push({
                path: "/give/endowments",
                query: {
                    q: data.text,
                    filters: JSON.stringify(data.filters),
                },
            })
        },
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "endowments-index",
}
</script>

<style lang="scss" scoped>
.page-endowment-listing {
    ::v-deep .block-highlight.is-vertical:not(.has-triangle) .image {
        height: 572px;
    }
    ::v-deep .block-highlight.is-vertical:not(.has-triangle) .image .media {
        object-fit: contain;
    }
    .search-margin {
        margin: var(--space-2xl) auto;
    }

    ::v-deep .section-teaser-card .card {
        width: calc((100% - 32px) / 2);
        @media #{$small} {
            width: 100%;
        }
    }

    @media #{$medium} {
        ::v-deep .block-highlight.is-vertical:not(.has-triangle) .image {
            height: 390px;
        }
    }
}
</style>
