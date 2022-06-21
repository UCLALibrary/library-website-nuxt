<template lang="html">
    <main class="page-help-topic">
        <MastheadSecondary
            :title="page.title"
            :text="page.summary"
        />
        <RichText
            v-if="page.richText"
            class="content"
            :rich-text-content="page.richText"
        />
        <DividerWayFinder color="help" />

        <simple-cards
            v-for="(block, index) in page.helpTopicBlocks"
            :key="`HelpTopicBlocksKey${index}`"
            class="help-topic-block"
            :section-title="block.sectionTitle"
            :section-summary="block.sectionSummary"
            :items="block.associatedEntries"
        />

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
    </main>
</template>

<script>
// GQL
import HELP_TOPIC_DETAIL from "~/gql/queries/HelpTopicDetail"

// Helpers
import _get from "lodash/get"
import RichText from "../../components/RichText.vue"
import DividerGeneral from "../../components/DividerGeneral.vue"

export default {
    components: { RichText, DividerGeneral },
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        const data = await $graphql.default.request(HELP_TOPIC_DETAIL, {
            slug: params.slug,
        })
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
    computed: {
        allBlocks() {
            return this.page.helpTopicBlocks
                .map((block) =>
                    Object.assign(block, {
                        typeHandle: "simpleCards",
                        title: block.sectionTitle,
                        text: block.sectionSummary,
                        cards: block.associatedEntries,
                    })
                )
                .concat(this.page.blocks)
        },
    },
}
</script>

<style lang="scss" scoped>
.page-help-topic {
    .content {
        margin: 0 auto;
        max-width: $container-l-main + px;
    }

    .help-topic-block {
    }
}
</style>
