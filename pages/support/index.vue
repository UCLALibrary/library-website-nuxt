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
                :items="parsedEndowmentList"
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
import ENDOWMENT_LIST from "~gql/queries/EndowmentList"

export default {
    async asyncData({ $graphql, route }) {
        // console.log("route: " + route.path)
        const data = await $graphql.default.request(ENDOWMENTS_LIST, {})
        // console.log("data:" + data)
        return {
            page: _get(data, "entries", {}),
            entry: _get(data, "entry", {}),
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
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    category: _get(obj, "donors[0].title", null),
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

