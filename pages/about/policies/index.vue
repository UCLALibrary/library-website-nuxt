<template>
    <main class="page page-policies">
        <masthead-secondary
            :title="page.title"
            :text="page.summary"
        />
        <!-- <h3>{{ policyBlock }}</h3> -->
        <!-- <h3>{{ page.policyBlock }}</h3>  -->
        <!-- <hr>
        <h4>{{ parsedAssociatedEnties }}</h4>
        <hr> -->
        <h3>page.policyBlock  --- {{ page.policyBlock[0] }}</h3>
        <hr>
        <h4>parsedPolicies --- {{ parsedPolicies }}</h4>
        <hr>
        <h3>{{ policyBlock[0].associatedEntries }}</h3>
        <hr>
        
        <div
            v-for="(policy, index) in parsedPolicies"
            :key="`PolicyBlocksKey${index}`"
        >
            <section-wrapper>
                <simple-cards
                    :section-title="policy.sectionTitle"
                    :section-summary="policy.sectionSummary"
                    :items="policy.associatedEntries"
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
        // parsedAssociatedEntries() {
        //     return this.page.policyBlock.map((item, index) => {
        //         return item.associatedEntries.map((entry) => {
        //             return {
        //                 to: `/${entry[index].to}`,
        //                 title: entry[index].title,
        //                 text: entry[index].text
        //             }
        //         })
        //     })
        // },

        parsedPolicies() {
            let policies = this.page.policyBlock

            return policies.map((obj) => {
                return {
                    ...obj,
                    sectionTitle: _get(obj, "sectionTitle", null),
                    sectionSummary: _get(obj, "sectionSummary", null),
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
