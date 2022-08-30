<template>
    <main
        id="main"
        class="page page-news"
    >
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.summary"
        />
        <h2 class="visually-hidden">
            Highlighted News
        </h2>

        <banner-header
            :image="parsedBannerHeader.image"
            :title="parsedBannerHeader.title"
            category="Highlighted News"
            :byline="parsedBannerHeader.byline"
            :locations="parsedBannerHeader.locations"
            :description="parsedBannerHeader.text"
            :date-created="parsedBannerHeader.dateCreated"
            :to="parsedBannerHeader.to"
            :align-right="true"
            prompt="Read More"
            class="banner"
        />
        <section-wrapper>
            <section-teaser-highlight
                class="section"
                :items="parsedSectionHighlight"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="visit"
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
                class="divider"
                color="visit"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action :is-meap-global="true" />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import ARTICLE_NEWS_LIST from "~/gql/queries/ArticleNewsList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(ARTICLE_NEWS_LIST, {})
        return {
            summaryData: _get(data, "entry", {}),
            page: _get(data, "entries", {}),
        }
    },
    head() {
        let title = this.summaryData ? this.summaryData.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedFeaturedNews() {
            return this.summaryData.meapNewsListing.map((obj) => {
                return {
                    ...obj,
                    to: `/about/news/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    category: _get(obj, "category[0].title", ""),
                    dateCreated: _get(obj, "dateCreated", ""),
                    byline: _get(obj, "articleStaff", []),
                    bylineOne: _get(obj, "articleStaff[0].title", ""),
                    bylineTwo: _get(obj, "dateCreated", ""),
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
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/about/news/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    category: _get(obj, "category[0].title", ""),
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-news {
    .banner {
        margin: 0 auto;
        margin-top: var(--space-3xl);
        margin-bottom: var(--space-xl);
    }

    .banner-header.color-about {
        --color-theme: var(--color-visit-fushia-03);
    }

    ::v-deep .block-highlight.color-about {
        --floating-highlight-color-theme:  var(--color-visit-fushia-03);
    }

    @media #{$medium} {
        .banner-header {
            margin-top: 0;
        }
    }
}
</style>
