<template lang="html">
    <main
        id="main"
        class="page page-help"
    >
        <masthead-secondary
            :title="summaryData.servicesResourcesListTitle"
            :text="summaryData.servicesResourcesListSummary"
        />

        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            @search-ready="getSearchData"
        />

        <section-wrapper theme="divider">
            <divider-way-finder color="help" />
        </section-wrapper>

        <section-wrapper v-if="page.serviceOrResource || page.workshopseries">
            <section-cards-with-illustrations
                :items="parsedServiceAndResourceList"
                :is-horizontal="true"
            />
        </section-wrapper>

        <section-wrapper v-if="page.serviceOrResource || page.workshopseries">
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
import getListingFilters from "~/utils/getListingFilters"
import mergeFilters from "~/utils/mergeFilters"
import config from "~/utils/searchConfig"

export default {
    async asyncData({ $graphql, params, $dataApi }) {
        const data = await $graphql.default.request(
            SERVICE_RESOURCE_WORKSHOPSERIES_LIST,
            {
                uri: params.path,
            }
        )
        const helpTopicData = await $graphql.default.request(HELP_TOPIC_LIST, {
            uri: params.path,
        })
        return {
            page: data,
            summaryData: _get(data, "entry", {}),
            helpTopic: helpTopicData,
            searchFilters: [],
        }
    },
    head() {
        let title = this.page
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
    },
    async mounted() {
        //console.log("ESREADkey:" + this.$config.esReadKey)
        //console.log("ESURLkey:" + this.$config.esURL)
        if (process.client) {
            const searchAggsResponse = await this.$dataApi.getAggregations(
                config.serviceOrResources.filters,
                "serviceOrResource"
            )

            console.log(
                "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
            )
            this.searchFilters = getListingFilters(
                searchAggsResponse,
                config.serviceOrResources.filters
            )
        }
    },
    methods: {
        async getSearchData(data) {
            // console.log("from search-generic: " + JSON.stringify(data))
            // console.log(config.serviceOrResources.resultFields)
            const filters = mergeFilters(data.filters)

            const results = await this.$dataApi.keywordSearchWithFilters(
                data.text || "*",
                "serviceOrResource",
                filters,
                "",
                config.serviceOrResources.resultFields,
                config.serviceOrResources.filters
            )
            // console.log(results)
            if (results && results.hits && results.hits.total.value > 0)
                this.page.serviceOrResource = this.parseResults(
                    results.hits.hits
                )
            this.searchFilters = getListingFilters(
                results.aggregations,
                config.serviceOrResources.filters
            )
        },

        parseResults(hits = []) {
            // console.log("checking results data:" + JSON.stringify(hits[0]))

            return hits.map((obj) => {
                console.log(obj["_source"].to)
                return {
                    title: obj["_source"].title,
                    to: obj["_source"].to,
                    iconName:
                        obj["_source"]["illustrationsResourcesAndServices"],
                    text: obj["_source"].summary,
                    category: obj["_source"].serviceOrResourceType,
                }
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
