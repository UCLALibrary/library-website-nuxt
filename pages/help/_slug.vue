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
            <divider-way-finder
                class="divider-way-finder"
                color="help" 
            />
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
                <divider-way-finder
                    class="divider-way-finder"
                    color="help"
                />
            </section-wrapper>
        </div>

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />

        <section-wrapper theme="divider"
            v-if="page.blocks.length > 0">
            <divider-way-finder
                class="divider-way-finder"
                color="help"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                class="block-call-to-action"
                :is-global="true"
            />
        </section-wrapper>
    </main>
</template>

<script>
// GQL
import HELP_TOPIC_DETAIL from "~/gql/queries/HelpTopicDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params }) {
        // Do not remove testing live preview

        const data = await $graphql.default.request(HELP_TOPIC_DETAIL, {
            slug: params.slug,
        })
        // console.log("Data fetched: " + JSON.stringify(data))
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
