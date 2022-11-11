<template lang="html">
    <main class="page page-help-topic">
        <MastheadSecondary
            :title="page.title"
            :text="page.summary"
        />

        <section-wrapper v-if="page.richText">
            <RichText :rich-text-content="page.richText" />
        </section-wrapper>

        <section-wrapper theme="divider">
            <DividerWayFinder color="help" />
        </section-wrapper>

        <div
            v-for="(block, index) in page.helpTopicBlocks"
            :key="`HelpTopicBlocksKey${index}`"
        >
            <section-wrapper>
                <simple-cards
                    :section-title="block.sectionTitle"
                    :section-summary="block.sectionSummary"
                    :items="block.associatedEntries"
                />
            </section-wrapper>
            <section-wrapper theme="divider">
                <DividerWayFinder color="help" />
            </section-wrapper>
        </div>

        <flexible-blocks :blocks="page.blocks" />
    </main>
</template>

<script>
// GQL
import HELP_TOPIC_DETAIL from "~/gql/queries/HelpTopicDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, store, $elasticsearchplugin }) {
        const data = await $graphql.default.request(HELP_TOPIC_DETAIL, {
            slug: params.slug,
        })
        await $elasticsearchplugin.index(data, params.slug)
        console.log("Data fetched: " + JSON.stringify(data))
        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
}
</script>

<style lang="scss" scoped>
.page-help-topic {
}
</style>
