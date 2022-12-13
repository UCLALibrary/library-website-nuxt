<template lang="html">
    <main
        id="main"
        class="page page-news-detail"
    >
        <nav-breadcrumb
            to="/about/blogs"
            :title="page.title"
            parent-title="All Blogs"
        />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            category="Blog"
            :title="page.title"
            :text="page.text"
            :byline="parsedBylineBannerText"
            :locations="page.locations"
        />

        <section-wrapper
            v-if="page.heroImage && page.heroImage.length == 1"
            class="section-banner"
        >
            <banner-header
                :image="page.heroImage[0].image[0]"
                :to="page.to"
                category="Blog"
                :title="page.title"
                :text="page.text"
                :byline="parsedByline"
                :locations="page.locations"
                :date-created="page.dateCreated"
                :align-right="true"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
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
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import format from "date-fns/format"
import removeTags from "~/utils/removeTags"

// GQL
import ARTICLE_DETAIL from "~/gql/queries/ArticleDetail"

export default {
    async asyncData({ $graphql, params, store, $elasticsearchplugin, error }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(ARTICLE_DETAIL, {
            slug: params.slug,
        })
        if (!data.entry) {
            error({ statusCode: 404, message: 'Page not found' })
        }
        if (data) await $elasticsearchplugin.index(data.entry, params.slug)
        // console.log("Data fetched: " + JSON.stringify(data))

        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaClean = removeTags(this.page.text)
        let metaDescription = this.page ? metaClean : "UCLA Library Blogs"

        return {
            title: title,
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: metaDescription
                }
            ],
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
                return entry
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
    // TODO Make less gross
    //methods: {
    // removeTags() {
    //     let str = this.page.text
    //     let stripHtml = str.replace( /(<([^>]+)>)/ig, '')
    //     let removeQuotes = stripHtml.replace(/"/ig, '')
    //     return removeQuotes
    // }
    //},
}
</script>

<style lang="scss" scoped>
.page-news-detail {
    .flexible-content {
        margin: 0 auto;
    }
    .highlighted-news {
        @include visually-hidden;
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
