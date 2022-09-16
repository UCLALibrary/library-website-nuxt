<template lang="html">
    <section class="page-jobs-detail">
        <h2>Jobs Listing Page</h2>
    </section>
</template>
<script>
// GQL
import JOBS_LIST from "~/gql/queries/JobsList"

export default {
    async asyncData({ $graphql, params, store }) {
        const data = await $graphql.default.request(JOBS_LIST)

        return {
            page: data,
        }
    },
}
</script>

<style lang="scss" scoped>
.page-jobs-detail {
}
</style>
