<template lang="html">
    <div class="page page-help">
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
    </div>
</template>

<script>
// gql
import SERVICE_RESOURCE_WORKSHOPSERIES_LIST from "~/gql/queries/ServiceResourceWorkshopSeriesList"
import HELP_TOPIC_LIST from "~/gql/queries/HelpTopicList"

export default {
    async asyncData({ $graphql, params }) {
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
        }
    },
    computed: {
        parsedServiceAndResourceList() {
            return [
                ...this.page.serviceOrResource,
                ...this.page.workshopseries,
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
