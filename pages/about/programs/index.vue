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

        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />

        <section-wrapper theme="divider">
            <divider-way-finder color="about" />
        </section-wrapper>

{{parsedFeaturedPrograms}}

        <section-wrapper
            v-if="page.featuredPrograms.length > 0"
            class="section-no-top-margin"
        >
            <banner-featured
                :image="parsedBannerHeader.image"
                :title="parsedBannerHeader.title"
                :category="parsedBannerHeader.category"
                breadcrumb="Featured"
                :byline="parsedByline"
                :description="parsedBannerHeader.text"
                :to="parsedBannerHeader.to"
                :align-right="true"
                prompt="View Program"
                class="banner section-featured-banner"
            />

            <divider-general />

            <section-teaser-highlight
                v-if="parsedSectionHighlight.length"
                class="section"
                :items="parsedSectionHighlight"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                color="about"
            />
        </section-wrapper>

        <section-wrapper v-if="parsedProgramsList.length">
            <section-staff-article-list :items="parsedProgramsList" />
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
        parsedFeaturedPrograms() {
            return this.page.featuredPrograms.map((obj) => {
                return {
                    ...obj,
                    image: _get(obj, "heroImage[0].image[0]", ""),
                    title: _get(obj, "title", ""),
                    text: obj.summary,
                    to: `/${obj.uri}`,
                    category: _get(obj,"programType[0].title", ""),
                }
            })
        },
        parsedBannerHeader() {
            return this.parsedFeaturedPrograms[0]
        },
        parsedSectionHighlight() {
            return this.parsedFeaturedPrograms.slice(1).map((obj) => {
                return {
                    ...obj,
                    image: _get(obj, "heroImage[0].image[0]", ""),
                    to: `/${obj.uri}`,
                    text: obj.summary,
                    category: _get(obj,"programType[0].title", ""),
                }
            })
        },
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
    methods: {
        parseProgramCategory(categories) {
            let result = ""
            categories.forEach((obj) => {
                result = result + obj.title + ", "
            })
            return result.slice(0, -2)
        },
    },
}
</script>

<style lang="scss" scoped>
.page-programs {
}
</style>
Footer
