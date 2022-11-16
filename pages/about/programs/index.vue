<template>
    <main
        id="main"
        class="page page-programs"
    >
        <nav-breadcrumb
            to="/about"
            :title="entry.title"
            parent-title="About"
        />

        <banner-text
            :title="entry.title"
            :text="entry.summary"
        />

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper>
            <section-staff-article-list :items="parsedProgramsList" />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
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
            entry: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.entry.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedProgramsList() {
            console.log("Entries: " + this.page.entries)
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to:
                        obj.programUrlBehavior === "externalSite"
                            ? obj.buttonUrl[0].buttonUrl
                            : `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    staffName: `${obj.fullName}`,
                    category: _get(obj, "articleCategories[0].title", null),
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-programs {
}
</style>
