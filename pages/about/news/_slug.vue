<template lang="html">
    <main
        id="main"
        class="page page-news-detail"
    >
        <nav-breadcrumb :title="page.title" />

        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :title="page.title"
            category="Library News"
            :byline="page.staffMember.title"
            :locations="page.locations"
            :date-created="page.dateCreated"
            :align-right="true"
        />

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
    async asyncData({ $graphql, params, store  }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for News detail from Craft for live preview"
        )
        const data = await $graphql.default.request(ARTICLE_NEWS_DETAIL, {
            slug: params.slug,
        })
        console.log("Data fetched: " + JSON.stringify(data))
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
        parsedBylines() {
            if (this.page.byline)
                return [
                    `${this.page.byline.title}`,
                ]
            return []
        },

        parsedDate() {
            return format(new Date(this.page.dateCreated), "MMMM d, Y")
        },
    },
}
</script>

<style lang="scss" scoped>
.page-news-detail {
    .banner-text {
        --color-theme: var(--color-help-green-03);
    }
}
</style>
