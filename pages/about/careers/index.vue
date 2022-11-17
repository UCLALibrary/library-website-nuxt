<template lang="html">
    <main
        id="main"
        class="page page-careers"
    >
        <nav-breadcrumb
            to="/about"
            title="Careers"
            parent-title="About"
        />

        <banner-text
            class="banner-text"
            :title="page.title"
            :text="page.text"
            :email="page.email"
            :phone="page.phoneNumber"
        />

        <!-- <h3>{{ page }}</h3>
        <hr> -->
        <h3>jobs ---- {{ jobs }}</h3>
        <hr>
        <h3>associatedTopics ---- {{ associatedTopics }}</h3>
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
            associatedTopics: _get(data, "entry.associatedTopics", {}),
            jobs: _get(data, "entries", {}),
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
