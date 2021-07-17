<template lang="html">
    <section class="page-service-detail">
        Service detail goes here

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
    </section>
</template>

<script>
// GQL
import SERVICE_DETAIL from "~/gql/queries/ServiceDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(SERVICE_DETAIL, {
            slug: params.slug,
        })

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
