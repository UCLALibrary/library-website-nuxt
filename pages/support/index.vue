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
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
}
</script>

<style lang="scss" scoped>
.page-endowment-listing {
}
</style>

