<template lang="html">
    <main
        id="main"
        class="page page-help"
    >
        <masthead-secondary
            v-if="summaryData"
            :title="summaryData.title || ''"
            :text="summaryData.text || ''"
        />

        <search-generic
            search-type="help"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
            :placeholder="parsedPlaceholder"
            @search-ready="getSearchData"
        />

        <!--h4 style="margin: 30px 400px">
            No of hits

            {{ `from craft is ${parsedPages.length}` }}
        </h4>
        <h4 style="margin: 30px 400px">
            No of hits from ES
            {{
                hits &&
                    `calling parsedhitsresults length
            ${hits.length}`
            }}
        </h4-->

        <section-wrapper
            v-if="
                (page.serviceOrResource || page.workshopseries) &&
                    hits.length == 0
            "
            theme="divider"
        >
            <divider-way-finder class="search-margin" />
        </section-wrapper>

        <section-wrapper
            v-if="
                (page.serviceOrResource || page.workshopseries) &&
                    hits.length == 0
            "
            class="section-no-top-margin"
        >
            <section-cards-with-illustrations
                :items="parsedServiceAndResourceList"
                :is-horizontal="true"
            />
        </section-wrapper>
        <section-wrapper v-else-if="hits && hits.length > 0">
            <h3
                v-if="$route.query.q"
                class="about-results"
            >
                Displaying {{ hits.length }} results for
                <strong><em>“{{ $route.query.q }}</em></strong>”
            </h3>
            <h3
                v-else
                class="about-results"
            >
                Displaying {{ hits.length }} results
            </h3>
            <section-cards-with-illustrations
                :items="parseHitsResults"
                :is-horizontal="true"
            />
        </section-wrapper>

        <section-wrapper
            v-if="
                page.serviceOrResource ||
                    page.workshopseries ||
                    (hits && hits.length > 0)
            "
        >
            <divider-way-finder
                class="divider-way-finder"
                color="help"
            />
        </section-wrapper>
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
            <block-call-to-action
                class="block-call-to-action"
                :is-global="true"
            />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import sortByTitle from "~/utils/sortByTitle"
import removeTags from "~/utils/removeTags"

// GQL
import SERVICE_RESOURCE_WORKSHOPSERIES_LIST from "~/gql/queries/ServiceResourceWorkshopSeriesList"
import HELP_TOPIC_LIST from "~/gql/queries/HelpTopicList"

// UTILITIES
import config from "~/utils/searchConfig"

export default {
    async asyncData({ $graphql, $elasticsearchplugin }) {
        console.log(
            "In asyncdata hook  servicesorresourcesorworskhoporhelptopic list"
        )
        const serverData = await $graphql.default.request(
            SERVICE_RESOURCE_WORKSHOPSERIES_LIST
        )
        console.log(
            "ALL External Resource indexing:" +
                JSON.stringify(serverData.externalResource)
        )
        if (
            serverData.externalResource &&
            serverData.externalResource.length > 0
        ) {
            console.log("External Resource indexing:")
            for (let externalResource of serverData.externalResource) {
                console.log(
                    "External Resource indexing:" + externalResource.slug
                )
                await $elasticsearchplugin.index(
                    externalResource,
                    externalResource.slug
                )
            }
        }
        let pageAsyncData = await $graphql.default.request(
            SERVICE_RESOURCE_WORKSHOPSERIES_LIST
        )
        let helpTopicAsyncData = await $graphql.default.request(HELP_TOPIC_LIST)

        return {
            page: pageAsyncData,
            helpTopic: helpTopicAsyncData,
            summaryData: _get(pageAsyncData, "entry", {}),
        }
    },

    data() {
        return {
            page: {},
            summaryData: {},
            helpTopic: {},
            hits: [],
            searchGenericQuery: {
                queryText: this.$route.query.q || "",
            },
        }
    },
    async fetch() {
        console.log(
            "In fetch hook  servicesorresourcesorworskhoporhelptopic list"
        )
        this.page = {}
        this.hits = []
        this.helptopic = {}
        if (this.$route.query.q && this.$route.query.q !== "") {
            console.log("in router query in fetch call")
            this.page = {}
            this.hits = []
            this.helptopic = {}
            const results = await this.$dataApi.keywordSearchWithFilters(
                this.$route.query.q || "*",
                config.serviceOrResources.searchFields,
                "sectionHandle:serviceOrResource OR sectionHandle:workshopSeries OR sectionHandle:externalResource OR sectionHandle:helpTopic",
                [],
                config.serviceOrResources.sortField,
                config.serviceOrResources.orderBy,
                config.serviceOrResources.resultFields,
                []
            )
            console.log("fetch method ES results:" + JSON.stringify(results))
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.noResultsFound = false
            } else {
                this.hits = []
                this.noResultsFound = true
            }
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
            }
            const getSummaryData = await this.$graphql.default.request(
                SERVICE_RESOURCE_WORKSHOPSERIES_LIST
            )
            this.summaryData = _get(getSummaryData, "entry", {})
        } else {
            this.hits = []
            this.noResultsFound = false
            this.page = {}
            this.helptopic = {}
            this.page = await this.$graphql.default.request(
                SERVICE_RESOURCE_WORKSHOPSERIES_LIST
            )

            this.helpTopic = await this.$graphql.default.request(
                HELP_TOPIC_LIST
            )
            this.summaryData = _get(this.page, "entry", {})
            this.hits = []
            this.searchGenericQuery.queryText = ""
        }
    },
    head() {
        let title = this.page ? this.summaryData.title : "... loading"
        let metaDescription = removeTags(this.summaryData.text)

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
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "services-resources-workshops",
    computed: {
        parseDisplayResultsText() {
            if (this.hits.length > 1)
                return `Displaying ${this.hits.length} results`
            else return `Displaying ${this.hits.length} result`
        },
        parsedPages() {
            if (
                this.page &&
                (this.page.serviceOrResource ||
                    this.page.workshopseries ||
                    this.page.externalResource ||
                    this.helpTopic.entries)
            ) {
                return [
                    ...(this.page.serviceOrResource || []),
                    ...(this.page.workshopseries || []),
                    ...(this.page.externalResource || []),
                    ...(this.helpTopic.entries || []),
                ]
            } else {
                return []
            }
        },
        parsedServiceAndResourceList() {
            console.log("static mode what is parsedServiceAndResourceList")
            return [
                ...(this.page.serviceOrResource || []),
                ...(this.page.workshopseries || []),
                ...(this.page.externalResource || []),
                ...(this.helpTopic.entries || []),
            ]
                .sort(sortByTitle)
                .map((obj) => {
                    return {
                        ...obj,
                        category:
                            obj.category === "help/services-resources"
                                ? "workshop series"
                                : obj.typeHandle === "helpTopic"
                                    ? "help topic"
                                    : obj.typeHandle === "externalResource"
                                        ? "resource"
                                        : obj.category,
                        to:
                            obj.typeHandle === "externalResource"
                                ? `${obj.to}`
                                : `/${obj.to}`,
                    }
                })
        },
        parsedPlaceholder() {
            return `Search ${this.summaryData.title}`
        },
        parseHitsResults() {
            console.log(
                "ParseHitsResults checking results data:" +
                    JSON.stringify(this.hits)
            )

            return this.parseHits()
        },
    },
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {
            console.log("watching querytEXT:" + newValue)
            // if (newValue === "") this.hits = []
        },
    },
    async mounted() {
        console.log("In mounted")
    },
    methods: {
        parseHits() {
            console.log("static mode what is parseHits")
            return this.hits.map((obj) => {
                console.log(
                    "what should be the category?:" +
                        obj["_source"].sectionHandle
                )
                return {
                    title: obj["_source"].title,
                    sectionHandle: obj["_source"].sectionHandle,
                    to:
                        obj["_source"].sectionHandle === "externalResource"
                            ? `${obj["_source"].externalResourceUrl}`
                            : `/${obj["_source"].uri}`,
                    iconName:
                        obj["_source"]["illustrationsResourcesAndServices"],
                    text: obj["_source"].text || obj["_source"].summary,

                    category:
                        obj["_source"].sectionHandle === "workshopSeries"
                            ? "workshop"
                            : obj["_source"].sectionHandle === "helpTopic"
                                ? "help topic"
                                : obj["_source"].sectionHandle ===
                              "externalResource"
                                    ? "resource"
                                    : obj["_source"].type,
                }
            })
        },

        async getSearchData(data) {
            // console.log("from search-generic: " + JSON.stringify(data))
            // console.log(config.serviceOrResources.resultFields)
            this.$router.push({
                path: "/help/services-resources",
                query: {
                    q: data.text,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-help {
    
}
</style>
