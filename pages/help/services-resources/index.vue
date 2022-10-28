<template lang="html">
    <div class="page page-help">
        <masthead-secondary 
            :title="page.entry.titleGeneral"
            :text="page.entry.summary"
        />

        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
        />

        <section-wrapper theme="divider">
            <divider-way-finder 
                color="help"/>
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                :items="parsedServiceAndResourceList"
                :isHorizontal="true"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder 
                color="help"/>
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
import config from "~/utils/searchConfig"

export default {
    async asyncData({ $graphql, params, $dataApi }) {
        const searchAggsResponse = await $dataApi.getAggregations(
            config.serviceOrResourceFilters,
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
                config.serviceOrResourceFilters
            ),
        }
    },
    head() {
        let title = this.page ? this.page.entry.titleGeneral : "... loading"
        return {
            title: title,
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
                    text: obj.summary,
                    category: obj.serviceOrResourceType || "Workshop",
                    iconName: obj.illustrationsResourcesAndServices,
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
    // TODO: Fix this at the component library level
    ::v-deep .block-card-with-illustration.color-help {
        --color-theme: var(--color-primary-blue-01);

        &:hover {
            --color-theme: var(--color-help-green-01);
        }
    }

    ::v-deep .section-wrapper.top-level .block-call-to-action {
        padding: var(--space-2xl);
        max-width: var(--block-width);
    }
}
</style>
