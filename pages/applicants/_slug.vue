<template lang="html">
    <main class="page page-help-topic">
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
        <div
            v-for="(block, index) in page.helpTopicBlocks"
            :key="`HelpTopicBlocksKey${index}`"
            class="help-topic-section"
        >
            <simple-cards
                class="help-topic-block"
                :section-title="block.sectionTitle"
                :section-summary="block.sectionSummary"
                :items="block.associatedEntries"
            />
            <DividerWayFinder
                color="help"
                class="help-topic-divider"
            />
        </div>

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

export default {
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
}
</script>

<style lang="scss" scoped>
.page-help-topic {
    .content {
        margin: 0 auto;
        max-width: $container-l-main + px;
    }

    .help-topic-section {
        margin: var(--space-2xl) auto;
    }

    @media #{$medium} {
        .help-topic-section {
            padding: 0 var(--unit-gutter);
        }
    }
}
</style>
