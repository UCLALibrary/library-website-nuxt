<template>
    <main
        id="main"
        class="page page-programs"
    >
        <nav-breadcrumb
            to="/about"
            :title="page.title"
            parent-title="About"
        />

        <banner-text
            :title="page.title"
            :text="page.text"
        />

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
        </section-wrapper>

        <section-wrapper v-if="parsedProgramsList.length">
            <section-staff-article-list :items="parsedProgramsList" />

            <section-wrapper theme="divider">
                <divider-way-finder color="about" />
            </section-wrapper>
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import PROGRAMS_LIST from "~/gql/queries/ProgramsList"

export default {
    async asyncData({ $graphql, route }) {
        // console.log("route: " + route.path)
        const data = await $graphql.default.request(PROGRAMS_LIST, {})
        // console.log("data:" + data)
        return {
            page: _get(data, "entry", {}),
            programs: _get(data, "entries", {}),
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
        parsedProgramsList() {
            return this.programs.map((obj) => {
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
Footer
