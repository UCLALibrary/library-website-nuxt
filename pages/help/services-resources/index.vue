<template lang="html">
    <main
        id="main"
        class="page page-help"
    >
        <masthead-secondary
            v-if="summaryData"
            :title="summaryData.servicesResourcesListTitle"
            :text="summaryData.servicesResourcesListSummary"
        />

        <search-generic
            search-type="help"
            class="generic-search"
            :search-generic-query="searchGenericQuery"
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
        <section-wrapper theme="divider">
            <divider-way-finder color="help" />
        </section-wrapper>

        <section-wrapper
            v-if="
                page.serviceOrResource ||
                    page.workshopseries ||
                    (hits && hits.length > 0)
            "
        >
            <section-cards-with-illustrations
                v-if="page.serviceOrResource || page.workshopseries"
                :items="parsedServiceAndResourceList"
                :is-horizontal="true"
            />
            <section-cards-with-illustrations
                v-else-if="hits && hits.length > 0"
                :items="parseHitsResults"
                :is-horizontal="true"
            />
        </section-wrapper>
        <h4 v-else>
            No results found
        </h4>

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

        <section-wrapper>
            <block-call-to-action
                class="block-call-to-action"
                :is-global="true"
            />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"
import sortByTitle from "~/utils/sortByTitle"

// gql
import SERVICE_RESOURCE_WORKSHOPSERIES_LIST from "~/gql/queries/ServiceResourceWorkshopSeriesList"
import HELP_TOPIC_LIST from "~/gql/queries/HelpTopicList"

// Utilities
import config from "~/utils/searchConfig"

export default {
    async asyncData({ $graphql, $elasticsearchplugin }) {
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
            "live preview  servicesorresourcesorworskhoporhelptopic list"
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
                "sectionHandle:serviceOrResource OR sectionHandle:workshopSeries OR sectionHandle:externalResource OR sectionHandle:helpTopic",
                [],
                "",
                config.serviceOrResources.resultFields,
                []
            )
            console.log("fetch method ES results:" + JSON.stringify(results))
            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
            } else {
                this.hits = []
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
        }
    },
    head() {
        let title =
            this.page && this.page.entry
                ? this.page.entry.servicesResourcesListTitle
                : "... loading"
        return {
            title: title,
        }
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "services-resources-workshops",
    computed: {
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
                                ? "workshop"
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
        //console.log("ESREADkey:" + this.$config.esReadKey)
        //console.log("ESURLkey:" + this.$config.esURL)
        /*  console.log("is bookmarked?:" + this.bookmarkedServiceOrResources)
        console.log("bookmarked query:" + this.$route.query.q)
        if (
            this.bookmarkedServiceOrResources &&
            !this.fetchCalled &&
            this.$route.query.q &&
            this.$route.query.q !== ""
        ) {
            console.log("its bookmarked start")
            this.searchBookmarkedQuery()
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
                queryFilters: {},
            }
        }*/
    },
    methods: {
        async searchBookmarkedQuery() {
            this.page = {}
            this.hits = []
            this.helpTopic = {}
            console.log("hello bookmarked query")
            const results = await this.$dataApi.keywordSearchWithFilters(
                this.$route.query.q || "*",
                "sectionHandle:serviceOrResource OR sectionHandle:workshopSeries OR sectionHandle:externalResource OR sectionHandle:helpTopic",
                [],
                "",
                config.serviceOrResources.resultFields,
                []
            )
            console.log(
                "In bookmarked method data is:" + JSON.stringify(results)
            )

            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = results.hits.hits
                this.parseHits()
                this.page = {}
                this.helpTopic = {}
            } else {
                this.page = {}
                this.hits = []
                this.helpTopic = {}
            }
        },
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
        /*parseBookmarkedQueryResults(hits = []) {
            // console.log("checking results data:" + JSON.stringify(hits[0]))

            return this.parseHits(hits)
        },*/
        async getSearchData(data) {
            this.page = {}
            this.hits = []
            this.helpTopic = {}
            // console.log("from search-generic: " + JSON.stringify(data))
            // console.log(config.serviceOrResources.resultFields)
            this.$router.push({
                path: "/help/services-resources",
                query: {
                    q: data.text,
                },
            })
            this.searchBookmarkedQuery()
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
                queryFilters: {},
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.page-help {
    // refactor styling of masthead-secondary component
    ::v-deep .masthead-secondary .container {
        padding-top: var(--space-xl);
        padding-bottom: var(--space-4xl);
    }
    // refactor styling of search-generic component
    .search-generic {
        margin-top: -72px;
        max-width: $container-l-cta + px;
        padding: 32px 48px 0;
    }
}
</style>
