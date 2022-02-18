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
        <h2 class="more-info">
            More Information
        </h2>
        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
        <divider-way-finder color="help" />
        <!-- TO DO write a computed property to parse associated content -->
        <!--section-cards
            v-if="page.resourceServiceWorkshop.length > 0"
            :items="
                page.resourceServiceWorkshop[0]
            "
            :title="page.helpTopic[0].title"
            :text="page.helpTopic[0].text"
            to="/help/services-resources"
        /-->
    </section>
</template>

<script>
// GQL
import SERVICE_OR_RESOURCE_DETAIL from "~/gql/queries/ServiceOrResourceDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(
            SERVICE_OR_RESOURCE_DETAIL,
            {
                slug: params.slug,
            }
        )
        return {
            page: _get(data, "entry", {}),
        }
    },
}
</script>

<style lang="scss" scoped>
.page-service-detail {
    .more-info {
        display: none;
    }
}
</style>
