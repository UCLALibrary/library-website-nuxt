<template>
    <main class="page page-policies">
        <masthead-secondary
            :title="page.title"
            :text="page.summary"
        />
        <h3>{{ page.policyBlock }}</h3>
        <hr>
        <!-- <h3>{{ parsedAssociatedEnties }}</h3> -->
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
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedAssociatedEnties() {
            let policies =  this.page.policyBlock.map((obj) => {
                return {
                    ...obj
                }
            })

            let allEntries = policies.map((entry) => {
                return entry.associatedEntries
            })

            return allEntries.map((entry) => {
                return  entry.map((entry) => {
                    // return entry.title
                    return {
                        to: `/${entry.to}`,
                        title: entry.title,
                        text: entry.text
                    }
                })
            })
        },
        parsedSpecialCollections() {
            return 
        },
        // parsedAssociatedEnties() {
        //     return this.page.policyBlock.map((obj) => {
        //         return {
        //             ...obj,
        //             obj.associatedEntries.map(element => {
        //                 return {
        //                     ...element,
        //                     to: `/${element.to}`,
        //                      title: element.title,
        //                      text:element.text
        //                 }
        //             })
        //         }
        //     })
        // },
        // return data.entry.policyBlock.map(item => {
        //     return item.associatedEntries.map(element => {
        //         return element.to = `/${element.to}`
        //         })
        // })
        parsedPolicies() {
            let policies = this.page.policyBlock

            return policies.map((obj) => {
                return {
                    ...obj,
                    sectionTitle: _get(obj, "sectionTitle", null),
                    sectionSummary: _get(obj, "sectionSummary", null),
                    items: this.parsedAssociatedEnties
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
