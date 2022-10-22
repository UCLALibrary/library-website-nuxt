<template lang="html">
    <div class="page page-help">
        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            @search-ready="getSearchData"
        />
        <masthead-secondary
            :title="summaryData.locationHoursListTitle"
            :text="summaryData.locationHoursListSummary"
        />

        <section-wrapper
            v-if="page.serviceOrResource || page.workshopseries">
            <section-cards-with-illustrations
                :items="parsedServiceAndResourceList"
                :is-horizontal="true"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page.serviceOrResource || page.workshopseries"
        >
            <divider-way-finder
                class="divider-way-finder"
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                class="block-call-to-action"
                :is-global="true"
            />
        </section-wrapper>
    </div>
</template>

<script>
// gql
import SERVICE_RESOURCE_WORKSHOPSERIES_LIST from "~/gql/queries/ServiceResourceWorkshopSeriesList"
import HELP_TOPIC_LIST from "~/gql/queries/HelpTopicList"

// Utilities
import getListingFilters from "~/utils/getListingFilters"
import mergeFilters from "~/utils/mergeFilters"
import config from "~/utils/searchConfig"

// Helpers
import sortByTitle from "~/utils/sortByTitle"

export default {
    async asyncData({ $graphql, params, $dataApi }) {
        const searchAggsResponse = await $dataApi.getAggregations(
            config.serviceOrResources.filters,
            "serviceOrResource"
        )

        console.log(
            "Search Aggs Response: " + JSON.stringify(searchAggsResponse)
        )
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
            helpTopic: helpTopicData,
            searchFilters: getListingFilters(
                searchAggsResponse,
                config.serviceOrResources.filters
            ),
        }
    },
    computed: {
        parsedServiceAndResourceList() {
            return [
                ...(this.page.serviceOrResource || []),
                ...(this.page.workshopseries || []),
            ]
                .sort(sortByTitle)
                .map((obj) => {
                    return {
                        ...obj,
                        category:
                            obj.category === "help/services-resources"
                                ? "workshop"
                                : obj.category,
                        to: `/${obj.to}`,
                    }
                })
        },

        parsedHelpTopicList() {
            return this.helpTopic.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/help/${obj.to}`,
                }
            })
        },
    },
    methods: {
        async getSearchData(data) {
            console.log("from search-generic: " + JSON.stringify(data))
            console.log(config.serviceOrResources.resultFields)
            const filters = mergeFilters(data.filters)

            const results = await this.$dataApi.keywordSearchWithFilters(
                data.text || "*",
                "serviceOrResource",
                filters,
                "",
                config.serviceOrResources.resultFields,
                config.serviceOrResources.filters
            )
            console.log(results)
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
            console.log("checking results data:" + JSON.stringify(hits[0]))

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
}
</style>
