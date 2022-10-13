<template lang="html">
    <section class="page-news-detail">
        <nav-breadcrumb
            to="/about/news"
            :title="page.title"
            parent-title="All Library News"
        />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            category="Library News"
            :title="page.title"
            :text="page.text"
            :byline="parsedBylineBannerText"
            article-type="news"
        />

        <section-wrapper class="section-banner">
            <banner-header
                v-if="page.heroImage && page.heroImage.length == 1"
                :image="page.heroImage[0].image[0]"
                :to="page.to"
                :title="page.title"
                category="Library News"
                :byline="parsedByline"
                :locations="page.locations"
                :date-created="page.dateCreated"
                :align-right="true"
                :text="page.text"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page.heroImage && page.heroImage.length == 1"
            theme="divider"
        >
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <flexible-blocks
            class="flexible-content"
            :blocks="page.blocks"
        />

        <section-wrapper
            v-if="parsedAssociatedStaffMember.length > 0"
            theme="divider"
        >
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper v-if="parsedAssociatedStaffMember.length > 0">
            <h2 class="section-heading">
                Associated Staff Member
            </h2>

            <section-staff-list :items="parsedAssociatedStaffMember" />
        </section-wrapper>
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
import format from "date-fns/format"

// GQL
import ARTICLE_DETAIL from "~/gql/queries/ArticleDetail"

export default {
    async asyncData({ $graphql, params, store }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(ARTICLE_DETAIL, {
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
        parsedByline() {
            let byline = (this.page.contributors || []).map((entry) => {
                return `${entry.byline} ${
                    entry.title || entry.staffMember[0].title
                }`
            })
            return byline.map((entry) => {
                return { title: entry }
            })
        },

        parsedBylineBannerText() {
            return (this.page.contributors || []).map((entry) => {
                return `${entry.byline} ${
                    entry.title || entry.staffMember[0].title
                }`
            })
        },

        parsedDate() {
            return format(new Date(this.page.dateCreated), "MMMM d, Y")
        },

        parsedAssociatedStaffMember() {
            return this.page.associatedStaffMember.map((obj) => {
                return {
                    ...obj,
                    to: `/about/staff/${obj.to}`,
                    image: _get(obj, "image[0]", null),
                    staffName: `${obj.nameFirst} ${obj.nameLast}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-news-detail {
    .section-banner {
        margin-top: 0;
    }
    .banner-text {
        --color-theme: varvar(--color-about-purple-03);
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
    .flexible-content {
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
    .section-heading {
        @include step-4;
        color: var(--color-primary-blue-03);
        margin: var(--space-xl) auto;
        max-width: $container-l-main + px;
    }

    @media #{$medium} {
        .section-heading,
        .block-campus-map,
        .section-block-spaces,
        .block-hours,
        .block-amenities,
        .simple-cards,
        .section-teaser-list,
        .section-teaser-card {
            padding: 0 var(--unit-gutter);
        }
    }

    @media #{$small} {
        .page {
            width: 100%;
        }
    }
}
</style>
