<template>
    <main class="page page-news">
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.summary"
        />

        <section-wrapper section-title="Highlighted News">
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
                class="banner"
            />
        </section-wrapper>

        <section-wrapper>
            <section-teaser-highlight
                class="section"
                :items="parsedSectionHighlight"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <section-staff-article-list
                :items="parsedNewsList"
                section-title="All News"
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
            page: _get(data, "entries", {}),
            summaryData: _get(data, "entry", {}),
        }
    },
    computed: {
        parsedFeaturedNews() {
            return this.summaryData.featuredNews.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    category: _get(obj, "category[0].title", ""),
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
        },
        parsedDate() {
            return format(new Date(this.page.dateCreated), "MMMM d, Y")
        },
        parsedByline() {
            let byline = (this.page.contributors || []).map((entry) => {
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
    padding-left: 50px;

    .entry-count {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin: var(--space-m);
    }

    .section-heading {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }

    .all-news-heading {
        @include step-1;
        color: var(--color-primary-blue-03);
    }

    .news-item-link {
        list-style: none;
        display: flex;
        justify-content: space-between;
        @include step-1;
        color: var(--color-primary-blue-03);
    }
}
</style>
