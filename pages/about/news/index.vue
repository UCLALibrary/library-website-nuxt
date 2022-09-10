<template>
    <main class="page page-news">
        <!-- <banner-header
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
        /> -->

        <!-- <section-teaser-highlight
            class="section"
            :items="highlightEvents"
        /> -->

        <h2 class="entry-count">
            Entry Count: {{ entryCount }}
        </h2>

        <divider-way-finder
            class="divider"
            color="about"
        />

        <section-staff-article-list
            :items="parsedNewsList"
            section-title="All News"
        />
    </main>
</template>

<script>
// Helpers
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import ARTICLE_LIST from "~/gql/queries/ArticleList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(ARTICLE_LIST, {
            uri: params.path,
        })

        return {
            page: data,
        }
    },
    computed: {
        entryCount() {
            return `${this.page.entryCount}`
        },

        parsedNewsList() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/about/news/${obj.to}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    staffName: `${obj.fullName}`,
                    category: _get(obj, "articleCategories[0].title", null),
                }
            })
        },

        parsedDate() {
            return format(new Date(this.page.dateCreated), "MMMM d, Y")
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
