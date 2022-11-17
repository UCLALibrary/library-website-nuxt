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
        <h4 style="margin: 30px 400px">
            <br>
            No of hits
            {{
                parsedServiceAndResourceList.length ||
                    (hits && parseHitsResults.length)
            }}
        </h4>
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
    data() {
        return {
            page: {},
            summaryData: {},
            helpTopic: {},
            hits: [],
            searchGenericQuery: {
                queryText: this.$route.query.q || "",
                queryFilters: {},
            },
            bookmarked: true,
        }
    },
    async fetch() {
        console.log(
            "live preview  servicesorresourcesorworskhoporhelptopic list"
        )
        if (this.$route.query.q && this.$route.query.q !== "") {
            console.log("in router query in fetch call")
            this.page = {}
            this.helpTopic = {}
            const results = await this.$dataApi.keywordSearchWithFilters(
                this.$route.query.q || "*",
                "serviceOrResource",
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
                queryFilters: {},
            }
            const getSummaryData = await this.$graphql.default.request(
                SERVICE_RESOURCE_WORKSHOPSERIES_LIST
            )
            this.summaryData = _get(getSummaryData, "entry", {})
        } else {
            this.hits = []
            this.page = await this.$graphql.default.request(
                SERVICE_RESOURCE_WORKSHOPSERIES_LIST
            )
            this.helpTopic = await this.$graphql.default.request(
                HELP_TOPIC_LIST
            )
            this.summaryData = _get(this.page, "entry", {})
        }

        this.bookmarked = false
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
    computed: {
        parsedServiceAndResourceList() {
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
            /*console.log(
                "ParseHits Results checking results data:" +
                    JSON.stringify(this.hits)
            )*/

            return this.parseHits(this.hits)
        },
    },
    watch: {
        "$route.query": "$fetch",
        /*"$route.query.q"(newValue) {
            console.log("watching querytEXT:" + newValue)
        },
       */
    },
    async mounted() {
        console.log("In mounted")
        //console.log("ESREADkey:" + this.$config.esReadKey)
        //console.log("ESURLkey:" + this.$config.esURL)
        console.log("is bookmarked?:" + this.bookmarked)
        console.log("bookmarked query:" + this.$route.query.q)
        if (
            this.bookmarked &&
            this.$route.query.q &&
            this.$route.query.q !== ""
        ) {
            console.log("its bookmarked start")
            this.searchBookmarkedQuery()
            this.searchGenericQuery = {
                queryText: this.$route.query.q || "",
                queryFilters: {},
            }
        }
    },
    methods: {
        async searchBookmarkedQuery() {
            console.log("hello bookmarked query")
            const results = await this.$dataApi.keywordSearchWithFilters(
                this.$route.query.q || "*",
                "serviceOrResource",
                [],
                "",
                config.serviceOrResources.resultFields,
                []
            )
            console.log(
                "In bookmarked method data is:" + JSON.stringify(results)
            )

            if (results && results.hits && results.hits.total.value > 0) {
                this.hits = this.parseBookmarkedQueryResults(results.hits.hits)
            } else {
                this.page = {}
                this.helpTopic = {}
                this.hits = []
            }
        },
        parseHits(hits = []) {
            return hits.map((obj) => {
                console.log("category is missing?:" + obj["_source"].category)
                return {
                    title: obj["_source"].title,
                    to: `/${obj["_source"].uri}`,
                    iconName:
                        obj["_source"]["illustrationsResourcesAndServices"],
                    text: obj["_source"].text,
                    category: obj["_source"].type,
                }
            })
        },
        parseBookmarkedQueryResults(hits = []) {
            // console.log("checking results data:" + JSON.stringify(hits[0]))

            return this.parseHits(hits)
        },
        async getSearchData(data) {
            // console.log("from search-generic: " + JSON.stringify(data))
            // console.log(config.serviceOrResources.resultFields)
            this.$router.push({
                path: "/help/services-resources",
                query: {
                    q: data.text,
                    filters: {},
                },
            })
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
