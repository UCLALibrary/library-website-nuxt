<template>
    <main class="page page-policies">
        <masthead-secondary
            :title="page.title"
            :text="page.summary"
        />

        <div
            v-for="(policy, index) in parsedPolicyBlocks"
            :key="`PolicyBlocksKey${index}`"
        >
            <section-wrapper>
                <simple-cards
                    :section-title="policy.sectionTitle"
                    :section-summary="policy.sectionSummary"
                    :items="policy.parsedAssociatedEntries"
                    button="View all"
                />
            </section-wrapper>

            <section-wrapper theme="divider">
                <divider-way-finder
                    class="divider"
                    color="about"
                />
            </section-wrapper>
        </div>

        <flexible-blocks
            :blocks="page.blocks"
        />
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import POLICIES_LIST from "~/gql/queries/PoliciesList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(POLICIES_LIST, {
            uri: params.path,
        })

        return {
            page: _get(data, "entry", {}),
            policyBlock:  _get(data, "entry.policyBlock", {})
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedPolicyBlocks() {
            return this.page.policyBlock.map((obj) => {
                return {
                    ...obj,
                    parsedAssociatedEntries: obj.associatedEntries.map((entry) => {
                        return {
                            ...entry,
                            to: `/${entry.uri}`
                        }
                    })
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page-policies {
    // refactor simple cards component to fix truncation
    ::v-deep .simple-cards .text p {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
    }
}
</style>
