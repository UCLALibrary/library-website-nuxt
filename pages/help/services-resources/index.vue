<template lang="html">
    <div class="page page-help">
        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
        />
        <br>
        <h3>Services and Resources</h3>
        <nuxt-link
            v-for="item in parsedServiceAndResourceList"
            :key="item.to"
            :to="item.to"
        >
            <div
                class="text"
                v-html="item.title"
            />
        </nuxt-link>
        <br>
        <h3>Help Topics</h3>
        <nuxt-link
            v-for="item in parsedHelpTopicList"
            :key="item.to"
            :to="item.to"
        >
            <div
                class="text"
                v-html="item.title"
            />
        </nuxt-link>
        <br>
    </div>
</template>

<script>
// gql
import SERVICE_RESOURCE_WORKSHOPSERIES_LIST from "~/gql/queries/ServiceResourceWorkshopSeriesList"
import HELP_TOPIC_LIST from "~/gql/queries/HelpTopicList"

// Utilities
import getListingFilters from "~/utils/getListingFilters"

export default {
    async asyncData({ $graphql, params, $dataApi }) {
        const filterFields = [
            { label: "Location", esFieldName: "locations.title.keyword" },
            {
                label: "Topic",
                esFieldName: "associatedTopics.title.keyword",
            },
        ]
        const searchAggsResponse = await $dataApi.getAggregations(
            filterFields,
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
            searchFilters: getListingFilters(searchAggsResponse, filterFields),
        }
    },
    computed: {
        parsedServiceAndResourceList() {
            return [
                ...(this.page.serviceOrResource || []),
                ...(this.page.workshopseries || []),
            ].map((obj) => {
                return {
                    ...obj,
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
}
</script>

<style lang="scss" scoped>
.page-help {
}
</style>
