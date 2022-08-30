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
            v-if="
                page.richText &&
                    page.helpTopicBlocks &&
                    page.helpTopicBlocks.length
            "
            theme="divider"
        >
            <divider-way-finder color="about" />
        </section-wrapper>
        <section-wrapper
            v-for="(block, index) in parsedHelpTopicBlocks"
            v-if="page.helpTopicBlocks && page.helpTopicBlocks.length"
            :key="`HelpTopicBlocksKey${index}`"
            class="help-topic-section"
        >
            <simple-cards
                class="help-topic-block"
                :section-title="block.sectionTitle"
                :section-summary="block.sectionSummary"
                :items="block.parsedAssociatedEntries"
            />
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
    computed: {
        parsedHelpTopicBlocks() {
            return this.page.helpTopicBlocks.map((obj) => {
                return {
                    ...obj,
                    parsedAssociatedEntries: obj.associatedEntries.map(
                        (entry) => {
                            return {
                                ...entry,
                                to: entry.externalResourceUrl
                                    ? entry.externalResourceUrl
                                    : `/${entry.uri}`,
                            }
                        }
                    ),
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-help-topic {
    .banner-text,
    .banner-header {
        --color-theme: var(--color-about-purple-03);
    }

    .help-topic-section:last-child {
        .divider-way-finder {
            display: none;
        }
    }
}
</style>
