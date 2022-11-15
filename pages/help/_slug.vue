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
            v-for="(block, index) in parsedHelpTopicBlocks"
            :key="`HelpTopicBlocksKey${index}`"
        >
            <section-wrapper>
                <simple-cards
                    :section-title="block.sectionTitle"
                    :section-summary="block.sectionSummary"
                    :items="block.parsedAssociatedEntries"
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

        <section-wrapper
            v-if="page.blocks.length > 0"
            theme="divider"
        >
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
    async asyncData({ $graphql, params, store, $elasticsearchplugin }) {
        const data = await $graphql.default.request(HELP_TOPIC_DETAIL, {
            slug: params.slug,
        })
        if (data) await $elasticsearchplugin.index(data.entry, params.slug)
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
}
</style>
