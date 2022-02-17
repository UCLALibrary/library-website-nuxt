<template lang="html">
    <section class="page-service-detail">
        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            :category="page.typeHandle"
            :title="page.title"
            :text="page.shortDescription"
            :button-text="page.button.buttonText"
            :to="page.button.buttonUrl"
            :locations="page.locations"
        />
        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage.image"
            :to="page.button.buttonUrl"
            :prompt="page.button.buttonText"
            :title="page.title"
            :category="page.typeHandle"
            :locations="page.locations"
        />
        <divider-way-finder color="help" />

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
        <divider-way-finder color="help" />

        <section-cards
            v-if="page.helpTopic.length > 0"
            :items="
                page.helpTopic[0].helpTopicBlock[0]
                    .associatedServicesResourcesAndWorkshops
            "
            :title="page.helpTopic[0].title"
            :text="page.helpTopic[0].text"
            to="/help/services-resources"
        />
    </section>
</template>

<script>
// GQL
import SERVICE_DETAIL from "~/gql/queries/ServiceDetail"
import RESOURCE_DETAIL from "~/gql/queries/ResourceDetail"
import QUERY_HANDLE from "~/gql/queries/QueryHandle"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params }) {
        const handle = await $graphql.default.request(QUERY_HANDLE, {
            slug: params.slug,
        })
        const query =
            handle.entry.typeHandle == "service"
                ? SERVICE_DETAIL
                : RESOURCE_DETAIL
        const data = await $graphql.default.request(query, {
            slug: params.slug,
        })
        console.log("handle:" + handle.entry.typeHandle)
        return {
            page: _get(data, "entry", {}),
        }
    },
}
</script>

<style lang="scss" scoped>
.page-service-detail {
}
</style>
