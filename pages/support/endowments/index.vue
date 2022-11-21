<template lang="html">
    <main
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

        <!-- <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            @search-ready="getSearchData"
        /> -->

        <section-wrapper theme="divider">
            <divider-way-finder
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <section-staff-article-list
                :items="parsedEndowmentsList"
                section-title="All Endowments"
            />
            <!-- pagination -->
        </section-wrapper>    
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import ENDOWMENTS_LIST from "~/gql/queries/EndowmentList"

export default {
    async asyncData({ $graphql, route }) {
        // console.log("route: " + route.path)
        const data = await $graphql.default.request(ENDOWMENTS_LIST, {})
        // console.log("data:" + data)
        return {
            endowments: _get(data, "entries", {}),
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.entry ? this.page.title : "... loading"
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
                    category: (obj.donors[0].firstName != null) ? `Donor: ${obj.donors[0].firstName} ${obj.donors[0].lastName}` : `Donors: ${obj.donors[0].lastName}`
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-endowment-listing {
}
</style>

