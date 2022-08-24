<template lang="html">
    <main class="page page-help-topic">
        <section-wrapper>
            <nuxt-link
                v-for="item in helpTopicList"
                :key="item.to"
                :to="item.to"
            >
                <div
                    class="text"
                    v-html="item.title"
                />
            </nuxt-link>
        </section-wrapper>
    </main>
</template>

<script>
// GQL
import HELP_TOPIC_LIST from "~/gql/queries/HelpTopicList"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        const data = await $graphql.default.request(HELP_TOPIC_LIST, {
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
        helpTopicList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/applicants/${obj.to}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
