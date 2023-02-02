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

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper
            v-if="page.featuredPrograms.length"
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

            <divider-general v-if="parsedSectionHighlight.length" />

            <section-teaser-highlight
                v-if="parsedSectionHighlight.length"
                class="section"
                :items="parsedSectionHighlight"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper
            v-if="parsedProgramsList.length"
            section-title="All Programs & Initiatives"
        >
            <section-staff-article-list :items="parsedProgramsList" />
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
            programs: [],
            hits: [],
            title: "",
            searchFilters: [],
            // searchGenericQuery: {
            //     queryText: this.$route.query.q || "",
            //     queryFilters:
            //         (this.$route.query.filters &&
            //             JSON.parse(this.$route.query.filters)) ||
            //         {},
            // },
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
                            : `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    staffName: `${obj.fullName}`,
                    category: _get(obj, "programType[0].title", null),
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
            console.log(
                "is route query exixts:" + JSON.stringify(routeQueryFilters)
            )
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
                "article"
            )

            console.log(
                "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.programsList.filters
            )
        },
        // parseHits(hits = []) {
        //     return hits.map((obj) => {
        //         // console.log(obj["_source"]["image"])
        //         return {
        //             ...obj["_source"],
        //             description: obj["_source"].text,
        //             date: obj["_source"].postDate,
        //             articleCategories: obj["_source"].category,
        //             to: `/${obj["_source"].uri}`,
        //             image: _get(obj["_source"], "heroImage[0].image[0]", null),
        //             staffName: obj["_source"].fullName,
        //             //category: _get(obj["_source"], "category[0].title", null),
        //             category: this.parseArticleCategory(
        //                 obj["_source"].category
        //             ),
        //         }
        //     })
        // },
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
}
</style>
Footer
