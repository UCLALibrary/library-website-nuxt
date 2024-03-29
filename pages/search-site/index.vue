<template lang="html">
    <main id="main" class="page page-search-site">
        <masthead-secondary title="Search Results" />

        <search-generic
            :search-generic-query="searchGenericQuery"
            placeholder="Search library website"
            :filters="searchFilters"
            @search-ready="getSearchData"
        />

        <section-wrapper theme="divider">
            <divider-way-finder class="search-margin" color="default" />
        </section-wrapper>

        <section-wrapper
            v-if="$fetchState.pending"
            class="results section-no-top-margin"
        >
            <div>
                <p>...Search results loading</p>
            </div>
        </section-wrapper>

        <section-wrapper v-else-if="$fetchState.error" class="results">
            <p>There is an error</p>
        </section-wrapper>

        <div v-else>
            <!--h4 style="margin: 30px 400px">
                <br>
                Total Value
                {{ page && page.hits && page.hits.total.value }}
                <br>
                No of current hits
                {{ page && page.hits && page.hits.hits.length }}
            </h4-->

            <section-wrapper
                v-if="page && page.hits && page.hits.hits.length > 0"
                class="meta section-no-top-margin"
            >
                <h2 class="about-results">
                    Displaying {{ page.hits.total.value }} results for
                    <strong
                        ><em>“{{ $route.query.q }}”</em></strong
                    >
                </h2>

                <section-wrapper
                    v-for="(result, index) in parsedSearchResults"
                    :key="`SearchResultBlock${index}`"
                    class="section-wrapper-block"
                >
                    <search-result
                        :title="result.title"
                        :category="parseCategory(result.sectionHandle)"
                        :summary="result.summary || result.text"
                        :to="result.to"
                        class="search-result-item"
                    />
                    <divider-general class="divider-general" />
                </section-wrapper>
                <section-wrapper v-if="page.hits.total.value > 10">
                    <section-pagination
                        :previous-to="parsePrev"
                        :next-to="parseNext"
                    />
                </section-wrapper>
            </section-wrapper>
            <section-wrapper v-else class="section-no-top-margin">
                <rich-text class="error-text">
                    <h2>Search for “{{ $route.query.q }}” not found.</h2>
                    <p>
                        We can’t find the page you are looking for, but we're
                        here to help. Try these regularly visited links or one
                        of the Additional Search Tools below.
                    </p>
                    <ul>
                        <li>
                            <a href="https://library.ucla.edu"
                                >UCLA Library Home</a
                            >
                        </li>
                        <li>
                            <a
                                href="https://www.library.ucla.edu/research-teaching-support/research-help"
                                >Research Help</a
                            >
                        </li>
                        <li>
                            <a href="/help/services-resources/ask-us">Ask Us</a>
                        </li>
                        <li>
                            <a
                                href="https://www.library.ucla.edu/use/access-privileges/disability-resources"
                                >Accessibility Resources</a
                            >
                        </li>
                    </ul>
                </rich-text>
            </section-wrapper>

            <section-wrapper>
                <divider-way-finder class="divider-way-finder" />
            </section-wrapper>

            <section-wrapper>
                <section-cards-with-illustrations
                    class="section-cards"
                    :items="searchAdditionalResources"
                    section-title="Additional Search Tools"
                />
            </section-wrapper>
        </div>
    </main>
</template>

<script>
// UTILITIES
import getListingFilters from "~/utils/getListingFilters"
import config from "~/utils/searchConfig"
import queryFilterHasValues from "~/utils/queryFilterHasValues"

export default {
    data() {
        return {
            page: {},
            from: 0,
            previous: false,
            next: false,
            prevFrom: 0,
            nextFrom: 0,
            size: 10,
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
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "search-site",
    async fetch() {
        // check if there is a url query, if there is then pass that to siteSearch
        // let data = await $dataApi.siteSearch() // using mounted and will fetch ES data in mounted below
        this.page = {}
        //console.log("In fetch start")
        try {
            if (
                (this.$route.query.q && this.$route.query.q !== "") ||
                (this.$route.query.filters &&
                    queryFilterHasValues(
                        this.$route.query.filters,
                        config.siteSearch.filters
                    ))
            ) {
                console.log("in router query in asyc data")
                this.page = await this.$dataApi.siteSearch(
                    this.$route.query.q || "*",
                    this.$route.query.from || this.from,
                    (this.$route.query.filters &&
                        JSON.parse(this.$route.query.filters)) ||
                        {},
                    config.siteSearch.sectionHandleMapping
                )
                if (
                    this.page &&
                    this.page.hits &&
                    this.page.hits.total.value > 0
                ) {
                    //console.log("search success")
                    // This is pagination logic
                    this.from = Number(this.$route.query.from || 0)
                    //console.log("from 1: " + this.from)
                    if (this.from + this.size >= this.page.hits.total.value)
                        this.next = false
                    else this.next = true

                    if (this.from == 0) this.previous = false
                    else this.previous = true

                    if (this.next) this.nextFrom = this.from + this.size
                    if (this.previous) this.prevFrom = this.from - this.size
                    //console.log("what is start now:" + this.from)
                    // Pagination logic ends
                } else {
                    this.page = {}
                    this.from = 0
                    this.previous = false
                    this.next = false
                }
                this.searchGenericQuery = {
                    queryText: this.$route.query.q || "",
                    queryFilters:
                        (this.$route.query.filters &&
                            JSON.parse(this.$route.query.filters)) ||
                        {},
                }
            } else {
                this.page = {}
            }
            //console.log("Search Response: " + JSON.stringify(this.page))
        } catch (e) {
            throw new Error("Some Error with ES search " + e)
        }
    },
    computed: {
        parsedSearchResults() {
            return this.page.hits.hits.map((obj) => {
                if (obj._source.sectionHandle == "Libguide")
                    obj._source.sectionHandleDisplayName = "Libguide"
                if (
                    obj._source.sectionHandle == "Libguide" ||
                    obj._source.sectionHandle == "externalResource" ||
                    obj._source.sectionHandle == "affiliateLibrary"
                ) {
                    return {
                        ...obj["_source"],
                        to: obj._source.uri ? obj._source.uri : obj._source.to,
                    }
                } else {
                    return {
                        ...obj["_source"],
                        to: obj._source.uri
                            ? `/${obj._source.uri}`
                            : `/${obj._source.to}`,
                    }
                }
            })
        },
        parsePrev() {
            if (this.previous)
                return `${this.$route.path}?q=${this.$route.query.q}&from=${this.prevFrom}`
            return ""
        },
        parseNext() {
            if (this.next)
                return `${this.$route.path}?q=${this.$route.query.q}&from=${this.nextFrom}`
            return ""
        },
        searchAdditionalResources() {
            return [
                {
                    iconName: "illustration-book-binding",
                    to: "https://search.library.ucla.edu/discovery/search?vid=01UCS_LAL:UCLA&_ga=2.45842788.1343136842.1666633264-241535065.1664829276",
                    title: "UC Library Search",
                    text: "Locate books, journal articles, course reserves and other content at UCLA, other UC schools and beyond.",
                    isHorizontal: false,
                },
                {
                    iconName: "illustration-find-space",
                    to: "https://guides.library.ucla.edu/az.php?&_ga=2.94193502.2106042584.1646675621-1729352043.1643913957",
                    title: "A-Z Databases",
                    text: "Find the best library databases for your research.",
                    isHorizontal: false,
                },
                {
                    iconName: "illustration-digitized-resources",
                    to: "https://guides.library.ucla.edu/index.php",
                    title: "Library Research Guides",
                    text: "Our research guides help users of all backgrounds discover resources by subject, course, format or topic.",
                    isHorizontal: false,
                },
            ]
        },
    },
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {
            //console.log("watching querytEXT:" + newValue)
        },
        "$route.query.filters"(newValue) {
            //console.log("watching filters:" + newValue)
        },
    },
    async mounted() {
        //console.log("In mounted")
        this.setFilters()
    },
    methods: {
        parseCategory(sectionHandle) {
            if (!sectionHandle) return
            if (sectionHandle == "Libguide") {
                return "RESEARCH GUIDE"
            } else
                return sectionHandle
                    .split(/(?=[A-Z])/)
                    .join(" ")
                    .toUpperCase()
        },
        async setFilters() {
            /*const searchAggsResponse =
                await this.$dataApi.getAggregationsForSiteSearch(
                    config.siteSearch.sectionHandleMapping
                )*/

            /*console.log(
                "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
            )*/
            const filters = []

            let obj = {
                label: config.siteSearch.filters[0].label,
                esFieldName: config.siteSearch.filters[0].esFieldName,
                inputType: config.siteSearch.filters[0].inputType,
                items:
                    config.siteSearch.sectionHandleMapping.reduce(
                        (accumulator, value) => {
                            return [...accumulator, { name: value.key }]
                        },
                        []
                    ) || [],
            }
            console.log("getlisting obj:" + JSON.stringify(obj))
            filters.push(obj)

            this.searchFilters = filters
        },

        async getSearchData(data) {
            //const queryString = new URLSearchParams(data.filters).toString()
            // console.log("using url search params:" + queryString)
            try {
                this.$router.push({
                    path: this.$route.path,
                    query: {
                        q: data.text,
                        filters: JSON.stringify(data.filters),
                    },
                })
            } catch (e) {
                throw new Error("ES error maybe: " + e)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.section-wrapper-block:last-child {
    .divider-general {
        display: none;
    }
}
</style>
