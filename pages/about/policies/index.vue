<template>
    <main class="page page-policies">
        <masthead-secondary
            :title="page.title"
            :text="page.summary"
        />

        <!-- TODO: fix the :to in simple-cards
            (currently the link is http://192.168.86.198:3000/about/about/policies/shhh)
            and this code could be prettier
            Add VIEW ALL button
        -->
        <div
            v-for="(block, index) in page.policyBlock"
            :key="`PolicyBlocksKey${index}`"
        >
            <section-wrapper>
                <simple-cards
                    :section-title="block.sectionTitle"
                    :section-summary="block.sectionSummary"
                    :items="block.associatedEntries"
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
