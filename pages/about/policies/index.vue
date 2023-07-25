<template>
    <main
        id="main"
        class="page page-policies"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />

        <page-anchor
            v-if="h2Array.length >=3"
            :section-titles= h2Array
        />

        <div
            v-for="(policy, index) in parsedPolicyBlocks"
            :key="`PolicyBlocksKey${index}`"
        >
            <section-wrapper
                :section-title="policy.sectionTitle"
                :section-summary="policy.sectionSummary"
            >
                <simple-cards
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
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

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
        let metaDescription = removeTags(this.page.text)

        return {
            title: title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: metaDescription
                }
            ],
        }
    },
    data() {
        return {
            h2Array: [] // anchor tags
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
    },
    mounted() {
        // Find all elements with class name "section-header2" or "section-header3"
        const elements = document.querySelectorAll('.section-header2, .section-header3');

        const h2Array = [];

        // Loop through each section-header element and push it into the array
        // Excludes the section-header2 More Information
        // which is a visually-hidden element above the divider-way-finder
        // in the Flexible Block component
        elements.forEach((element) => {
            // if(.banner-header || BannerText || MastheadSecondary)
            if(element.textContent !== "More Information") this.h2Array.push(element.textContent);
        })
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
