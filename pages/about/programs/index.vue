<template>
    <main class="page page-programs">
        <masthead-secondary
            :title="summaryData.programListTitle"
            :text="summaryData.programListSummary"
        />

        <section-wrapper>
            <section-staff-article-list
                :items="parsedProgramsList"
                section-title="All Programs"
            />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import PROGRAMS_LIST from "~/gql/queries/ProgramsList"

export default {
    async asyncData({ $graphql, route }) {
        // console.log("route: " + route.path)
        const data = await $graphql.default.request(PROGRAMS_LIST, {})
        // console.log("data:" + data)
        return {
            page: _get(data, "entries", {}),
            summaryData: _get(data, "entry", {}),
        }
    },
    computed: {
        parsedProgramsList() {
            console.log("Entries: " + this.page.entries)
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    staffName: `${obj.fullName}`,
                    category: _get(obj, "articleCategories[0].title", null),
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.page-programs {
    padding-left: 50px;

}
</style>
