// articleType - nowhere
// summary - nowhere
// associatedLocations - nowhere
// department - nowhere

// title
// heroImage banner Image
// articleCategories (library news)
// staffMember

// allFpb
// bannerheader
// date published
// ServiceOrResources
// share links & icons component
// pipe instead of purple dot
// fancy wayfinder divider

<template lang="html">
    <section class="page-news-detail">
        <h2>{{ page }}</h2>
        <br>
        <h1>DATE: {{ page.dateCreated }}</h1>

        <nav-breadcrumb :title="page.title" />

        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :title="page.title"
            category="Library News"
            :byline="parsedBylines"
            :date-created="page.dateCreated"
            :align-right="true"
        />
        <divider-way-finder
            color="about"
            class="divider-way-finder"
        />

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
        </banner-header>
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import ARTICLE_NEWS_DETAIL from "~/gql/queries/ArticleNewsDetail"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(
            ARTICLE_NEWS_DETAIL,
            {
                slug: params.slug,
            }
        )
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
            let bylines = this.page.byline.map((name) => {
                return {
                    fullName: `${name.nameFirst} ${name.nameLast}`
                }
            })

            return bylines.map(({fullName})=>{ 
                return (`${fullName}`)
            })
        },

        parsedDate(){
            let articleDate = this.page.dateCreated
            return format(new Date(articleDate), "MMMM d, Y")
        },
        // :date="parsedDate"
    }
}

</script>

<style lang="scss" scoped>
.page-news-detail {
    .banner-text {
        --color-theme: var(--color-help-green-03);
    }
    .banner-header {
        margin-bottom: var(--space-xl);
        padding: 0;
        max-width: $container-xl-full-width + px;
        margin: var(--unit-gutter) auto;
    }
    .banner-text + .divider-way-finder {
        margin: 0 auto var(--space-2xl);
    }
    .divider-way-finder {
        max-width: $container-l-main + px;
        margin: var(--space-3xl) auto;
    }
    .content {
        margin: 0 auto;
    }
    .section-cards {
        margin: var(--space-3xl) auto;
    }
    .highlighted-news {
        @include visually-hidden;
    }
    .block-call-to-action {
        margin: var(--space-3xl) auto;
    }
}
</style>
