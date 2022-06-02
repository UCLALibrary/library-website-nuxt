<template>
    <main class="page page-news">
        <h1>NEWS LIST</h1>
        <p>{{ parsedNewsList }}</p>
        <nuxt-link
            v-for="item in parsedNewsList"
            :key="item.to"
            :to="item.to"
        >
            <div
                class="text"
                v-html="item.title"
            />
        </nuxt-link>
    </main>
</template>

<script>
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
        parsedNewsList() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/about/news/${obj.to}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-news {
    .section-heading {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }

    .news-list {
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
