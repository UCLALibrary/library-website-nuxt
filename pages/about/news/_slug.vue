<template lang="html">
    <main
        id="main"
        class="page page-news-detail"
    >
        <nav-breadcrumb
            to="/about/news"
            :title="page.title"
            parent-title="News"
        />
        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :category="parsedCategory"
            :title="page.title"
            :text="page.text"
            :byline="page.byline"
        />

        <section-wrapper class="section-banner">
            <banner-header
                v-if="page.heroImage && page.heroImage.length == 1"
                :image="page.heroImage[0].image[0]"
                :title="page.title"
                :text="page.text"
                :category="parsedCategory"
                :byline="page.byline"
                :locations="page.locations"
                :date-created="page.dateCreated"
                :align-right="true"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="visit"
            />
        </section-wrapper>

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import ARTICLE_NEWS_DETAIL from "~/gql/queries/ArticleNewsDetail"

export default {
    async asyncData({ $graphql, params, store, $elasticsearchplugin }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for News detail from Craft for live preview"
        )
        const data = await $graphql.default.request(ARTICLE_NEWS_DETAIL, {
            slug: params.slug,
        })
        if (data) await $elasticsearchplugin.index(data.entry, params.slug)
        return {
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
        parsedCategory() {
            return _get(this.page, "category[0].title", "")
        },
    },
}
</script>

<style lang="scss" scoped>
.page-news-detail {
    .banner-text,
    .banner-header {
        --color-theme: var(--color-visit-fushia-03);
    }

    .section-banner {
        margin-top: 0;
    }
}
</style>
