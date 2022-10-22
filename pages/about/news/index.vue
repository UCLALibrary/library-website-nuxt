<template>
    <main class="page page-news">
        <masthead-secondary
            :title="summaryData.articleListTitle"
            :text="summaryData.articleListSummary"
        />

        <section-wrapper>
            <section-staff-article-list
                :items="parsedNewsList"
                section-title="All News"
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
