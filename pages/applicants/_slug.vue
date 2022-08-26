<template lang="html">
    <main
        id="main"
        class="page page-help-topic"
    >
        <nav-breadcrumb
            :title="page.title"
            class="breadcrumb"
        />
        <masthead-secondary
            :title="page.title"
            :text="page.summary"
        />

        <section-wrapper>
            <rich-text
                v-if="page.richText"
                class="content"
                :rich-text-content="page.richText"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page.richText && page.helpTopicBlocks && page.helpTopicBlocks.length"
            theme="divider"
        >
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper
            v-for="(block, index) in page.helpTopicBlocks"
            v-if="page.helpTopicBlocks && page.helpTopicBlocks.length"
            :key="`HelpTopicBlocksKey${index}`"
            class="help-topic-section"
        >
            <simple-cards
                class="help-topic-block"
                :section-title="block.sectionTitle"
                :section-summary="block.sectionSummary"
                :items="block.associatedEntries"
            />
        </section-wrapper>

        <section-wrapper
            v-if="(page.richText ||
                (page.helpTopicBlocks && page.helpTopicBlocks.length)) &&
                page.blocks &&
                page.blocks.length"
            theme="divider"
        >
            <divider-way-finder color="about" />
        </section-wrapper>

        <flexible-blocks
            v-if="page.blocks && page.blocks.length"
            class="flexible-content"
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
</style>
