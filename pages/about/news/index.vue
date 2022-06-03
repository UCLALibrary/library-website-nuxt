<template>
    <main class="page page-news">
        <!-- <banner-featured
            class="section banner-featured"
            :title="firstEvent.title"
            :image="firstEvent.image"
            :to="firstEvent.to"
            prompt="View exhibit"
            :breadcrumb="firstEvent.breadcrumb.text"
            :align-right="false"
            :dates="firstEvent.dates"
            :start-date="firstEvent.startDate"
            :end-date="firstEvent.endDate"
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
import _get from "lodash/get"

// GQL
import ARTICLE_NEWS_LIST from "~/gql/queries/ArticleNewsList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(ARTICLE_NEWS_LIST, {
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

    @media #{$medium} {
        .search-container {
            margin-top: -64px;
            width: calc(100% - (var(--unit-gutter) * 2));
        }
        .browse-by {
            padding: 0 var(--unit-gutter);
        }
    }

    @media #{$small} {
        .search-container {
            margin-top: -48px;
        }

        .browse-by-options {
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
            gap: 4px 0;
        }

        li {
            padding: 4px;
            min-width: 44px;
        }
    }
}
</style>
