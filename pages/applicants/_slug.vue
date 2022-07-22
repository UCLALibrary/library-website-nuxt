<template lang="html">
    <main class="page page-help-topic">
        <nav-breadcrumb
            :title="page.title"
            class="breadcrumb"
        />
        <MastheadSecondary
            :title="page.title"
            :text="page.summary"
        />
        <RichText
            v-if="page.richText"
            class="content"
            :rich-text-content="page.richText"
        />

        <DividerWayFinder />
        <div
            v-for="(block, index) in page.helpTopicBlocks"
            :key="`HelpTopicBlocksKey${index}`"
            class="help-topic-section"
        >
            <SimpleCards
                class="help-topic-block"
                :section-title="block.sectionTitle"
                :section-summary="block.sectionSummary"
                :items="block.associatedEntries"
            />
            <!-- TO Do match width to general divider -->
            <DividerWayFinder class="help-topic-divider" />
        </div>

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
        <DividerWayFinder
            v-if="page.blocks"
            class="help-topic-divider"
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
    .breadcrumb {
        margin-top: var(--space-l);
        margin-bottom: var(--space-l);
    }

    @media #{$medium} {
        .help-topic-block {
            padding: 0 var(--unit-gutter);
        }
    }
}
</style>
