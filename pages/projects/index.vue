<template lang="html">
    <main class="page page-project-topic">
        <nuxt-link
            v-for="item in projectList"
            :key="item.to"
            :to="item.to"
        >
            <div
                class="text"
                v-html="item.title"
            />
        </nuxt-link>
    </main>
</template>

<script>
// GQL
import PROJECT_LIST from "~/gql/queries/ProjectList"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        const data = await $graphql.default.request(PROJECT_LIST, {
            slug: params.slug,
        })
        return {
            page: _get(data, "entries", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        projectList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/projects/${obj.to}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
