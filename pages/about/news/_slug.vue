// articleType
// title
// heroImage banner Image
// articleCategories (library news)
// staffMember
// summary - nowhere
// associatedLocations - nowhere
// department - nowhere
// allFpb
// bannerheader
// date published
// ServiceOrResources
// share links & icons component
// pipe instead of purple dot
// fancy wayfinder divider

<template lang="html">
    <section class="page-news-detail">
        <nav-breadcrumb :title="page.title" />
        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :category="page.type"
            :title="page.title"
            :text="page.text"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
        />
        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :to="parsedButtonTo"
            :prompt="parsedButtonText"
            :title="page.title"
            :category="page.type"
            :text="page.text"
        />
        <divider-way-finder
            color="about"
            class="divider-way-finder"
        />
        <h2 class="highlighted-news">
            Highlighted News
        </h2>

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
        <divider-way-finder
            color="help"
            class="divider-way-finder"
        />

        <section-staff-article-list
            :items="items"
            section-title="Articles"
        />

        <block-call-to-action
            class="block-call-to-action"
            :is-global="true"
        />
    </section>
</template>

<script>
// GQL
import ARTICLE_NEWS_DETAIL from "~/gql/queries/ArticleNewsDetail"

// Helpers
import _get from "lodash/get"

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
        parsedAssociatedTopics() {
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.researchGuideUrl ? obj.researchGuideUrl : obj.uri,
                }
            })
        },
        parsedButtonText() {
            return _get(this.page, "button[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "button[0].buttonUrl", "")
        },
    },
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
