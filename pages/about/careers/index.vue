<template lang="html">
    <main
        id="main"
        class="page page-careers"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.summary"
        />
        <h3>{{ page }}</h3>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import JOBS_LIST from "~/gql/queries/CareerJobsList"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(JOBS_LIST)
        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page
            ? this.page.title
            : "... loading"
        return {
            title: title,
        }
    },
}
</script>

<style lang="scss" scoped>
.page-careers {
}
</style>
