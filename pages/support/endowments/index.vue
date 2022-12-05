<template lang="html">
    <main
        id="main"
        class="page page-endowment-listing"
    >
        <nav-breadcrumb
            to="/support"
            title="Endowments"
            parent-title="Support Us"
        />

        <masthead-secondary
            :title="page.title"
            :text="page.summary"
        />

        <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            @search-ready="getSearchData"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                class="search-margin"
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
                title="Support us"
                text="Your contributions help us build our collections for the benefit or our students, faculty, staff, and the general public."
                name="Donate"
                to="https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463"
            />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"

// GQL
import ENDOWMENTS_LIST from "~/gql/queries/EndowmentList"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(ENDOWMENTS_LIST, {})
        return {
            endowments: _get(data, "entries", {}),
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

