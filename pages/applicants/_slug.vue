<template lang="html">
    <main class="page page-help-topic">
        <nav-breadcrumb
            :title="page.title"
            class="breadcrumb"
        />
        <masthead-secondary
            :title="page.title"
            :text="page.summary"
        />
        <divider-way-finder
            v-if="page.richText"
            color="about"
        />
        <rich-text
            v-if="page.richText"
            class="content"
            :rich-text-content="page.richText"
        />

        <divider-way-finder color="about" />
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
            <divider-way-finder
                color="about"
                class="help-topic-divider"
            />
        </div>
        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />
        <divider-way-finder
            v-if="page.blocks.length"
            class="help-topic-divider"
            color="about"
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
    .content,
    .flexible-content {
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
        .content {
            padding: 0 var(--unit-gutter);
        }
        .help-topic-block {
            padding: 0 var(--unit-gutter);
        }
    }
}
</style>
