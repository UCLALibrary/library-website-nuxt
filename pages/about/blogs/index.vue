<template>
    <main
        id="main"
        class="page page-news"
    >
        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :title="page.title"
            category="Library News"
            :byline="parsedBylines"
            :locations="locations"
            :date-created="parsedDate"
            :to="to"
            :authors="authors"
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
                :items="parsedNewsList"
                section-title="All Blogs"
            />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import ARTICLE_LIST from "~/gql/queries/ArticleList"

export default {
    async asyncData({ $graphql, route }) {
        // console.log("route: " + route.path)
        const data = await $graphql.default.request(ARTICLE_LIST, {
            articleType: "blogs",
        })
        // console.log("data:" + data)
        return {
            page: data,
        }
    },
    computed: {
        parsedNewsList() {
            return this.page.entries.map((obj) => {
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
