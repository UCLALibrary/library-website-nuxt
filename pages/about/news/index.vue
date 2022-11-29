<template>
    <main
        id="main"
        class="page page-news"
    >
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

        <section-wrapper
            v-if="page.featuredNews.length"
            class="section-no-top-margin"
        >
            <banner-featured
                :image="parsedBannerHeader.image"
                :title="parsedBannerHeader.title"
                breadcrumb="Featured"
                :byline="parsedByline"
                :locations="parsedBannerHeader.locations"
                :description="parsedBannerHeader.text"
                :date-created="parsedBannerHeader.dateCreated"
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

        <section-wrapper>
            <section-staff-article-list
                :items="parsedNewsList"
                section-title="All News"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                color="about"
            />
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
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import ARTICLE_LIST from "~/gql/queries/ArticleList"

export default {
    async asyncData({ $graphql, route }) {
        // console.log("route: " + route.path)
        const data = await $graphql.default.request(ARTICLE_LIST, {
            articleType: "news",
        })
        // console.log("data:" + data)
        return {
            news: _get(data, "entries", {}),
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
        parsedFeaturedNews() {
            return this.page.featuredNews.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    category: _get(obj, "articleCategories[0].title", ""),
                    dateCreated: _get(obj, "postDate", ""),
                    byline: _get(obj, "articleStaff", []),
                    bylineOne: _get(obj, "articleStaff[0].title", ""),
                    bylineTwo: _get(obj, "postDate", ""),
                }
            })
        },
        parsedBannerHeader() {
            return this.parsedFeaturedNews[0]
        },
        parsedSectionHighlight() {
            return this.parsedFeaturedNews.slice(1).map((obj) => {
                return {
                    ...obj,
                    bylineTwo:
                        obj.bylineTwo != null
                            ? format(new Date(obj.bylineTwo), "MMMM d, yyyy")
                            : "",
                }
            })
        },
        parsedNewsList() {
            return this.news.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    staffName: `${obj.fullName}`,
                    category: _get(obj, "articleCategories[0].title", null),
                }
            })
        },
        parsedDate() {
            return format(new Date(this.news.postDate), "MMMM d, Y")
        },
        parsedByline() {
            let byline = (this.news.contributors || []).map((entry) => {
                return `${entry.byline} ${
                    entry.title || entry.staffMember[0].title
                }`
            })
            return byline.map((entry) => {
                return entry
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-news {
}
</style>
