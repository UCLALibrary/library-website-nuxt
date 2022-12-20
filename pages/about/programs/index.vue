<template>
    <main
        id="main"
        class="page page-programs"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />

        <!-- TODO: Add search function -->
        <!-- <search-generic
            search-type="about"
            :filters="searchFilters"
            class="generic-search"
            @search-ready="getSearchData"
        /> -->

        <section-wrapper theme="divider">
            <divider-way-finder class="search-margin" />
        </section-wrapper>

        <section-wrapper
            v-if="page.featuredPrograms.length"
            class="section-no-top-margin"
        >
            <banner-featured
                :image="parsedBannerHeader.image"
                :title="parsedBannerHeader.title"
                :category="parsedBannerHeader.category"
                breadcrumb="Featured"
                :description="parsedBannerHeader.text"
                :to="parsedBannerHeader.to"
                :align-right="true"
                prompt="Read More"
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

        <section-wrapper 
            v-if="parsedProgramsList.length"
            section-title="All Programs & Initiatives">
            <section-staff-article-list :items="parsedProgramsList" />
            <!-- pagination -->

            <section-wrapper theme="divider">
                <divider-way-finder color="about" />
            </section-wrapper>
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                class="block-call-to-action"
                :is-global="true"
            />
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
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    category: _get(obj, "programType[0].title", null),
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
                    category: _get(obj, "programType[0].title", null),
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-programs {
    .search-margin {
        margin: var(--space-2xl) auto;
    }
}
</style>
Footer
