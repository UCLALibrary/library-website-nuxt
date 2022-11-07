<template>
    <main class="page page-programs">
        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :title="page.title"
            category="Programs"
            :to="to"
            :align-right="true"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

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
