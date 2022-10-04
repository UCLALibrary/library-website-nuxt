<template lang="html">
    <main class="page page-help-topic">
        <MastheadSecondary
            :title="page.title"
            :text="page.summary"
        />
        
        <section-wrapper>
            <RichText
                v-if="page.richText"
                :rich-text-content="page.richText"
            />
        </section-wrapper>
        
        <section-wrapper theme="divider">
            <DividerWayFinder color="help" />
        </section-wrapper>
        
        <section-wrapper
            v-for="(block, index) in page.helpTopicBlocks"
            :key="`HelpTopicBlocksKey${index}`"
            class="help-topic-section"
        >
            <section-wrapper>
                <simple-cards
                    class="help-topic-block"
                    :section-title="block.sectionTitle"
                    :section-summary="block.sectionSummary"
                    :items="block.associatedEntries"
                />
            </section-wrapper>
            <section-wrapper theme="divider">
                <DividerWayFinder
                    color="help"
                    class="help-topic-divider"
                />
            </section-wrapper>
        </section-wrapper>

        <section-wrapper>
            <flexible-blocks
                class="content"
                :blocks="page.blocks"
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
