<template lang="html">
    <main
        id="main"
        class="page page-endowment-listing"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />

        <!-- TODO: Add search/filter function
        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            @search-ready="getSearchData"
        /> -->

        <section-wrapper theme="divider">
            <divider-way-finder class="search-margin" 
                color="about"/>
        </section-wrapper>
        <section-wrapper
            v-if="page.featuredEndowments.length > 0"
            class="section-no-top-margin"
            :section-title = "page.featuredEndowments[0].titleGeneral"
            :section-summary = "page.featuredEndowments[0].sectionSummary"
        >
            <section-teaser-highlight
                class="section"
                :items="parsedFeaturedEndowments"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                color="about"
            />
        </section-wrapper>

        <section-wrapper section-title="All Endowments">
            <section-staff-article-list
                :items="parsedEndowmentsList"
            />
            <!-- pagination -->
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                svg-name="svg-call-to-action-money"
                title="Give to the UCLA Library"
                text="Your contributions help us build our collections for the benefit or our students, faculty, staff, and the general public."
                name="Donate"
                to="/give"
            />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import ENDOWMENTS_LIST from "~/gql/queries/EndowmentList"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(ENDOWMENTS_LIST, {})
        return {
            page: _get(data, "entry", {}),
            endowments: _get(data, "entries", {}),
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
    computed: {
        parsedFeaturedEndowments() {
            return this.page.featuredEndowments[0].featuredEndowments.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    // category: (obj.donors[0].firstName != null) ? `Donor: ${obj.donors[0].firstName} ${obj.donors[0].lastName}` : `Donor: ${obj.donors[0].lastName}`
                }
            })
        },

        parsedEndowmentsList() {
            return this.endowments.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    category: (obj.donors[0].firstName != null) ? `Donor: ${obj.donors[0].firstName} ${obj.donors[0].lastName}` : `Donor: ${obj.donors[0].lastName}`
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-endowment-listing {
    .search-margin {
        margin: var(--space-2xl) auto;
    }
}
</style>

