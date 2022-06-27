// articleType - nowhere // summary - nowhere // associatedLocations - nowhere
// department - nowhere // title // heroImage banner Image // articleCategories
(library news) // staffMember // allFpb // bannerheader // date published //
TODO // fix: ServiceOrResources // add: share links & icons component // fix:
author

<template lang="html">
    <section class="page-news-detail">
        <nav-breadcrumb :title="page.title" />

        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :title="page.title"
            category="Library News"
            :byline="parsedBylines"
            :locations="page.locations"
            :date-created="page.dateCreated"
            :align-right="true"
        />

        <div v-if="page.blocks">
            <divider-way-finder
                color="about"
                class="divider-way-finder"
            />

            <flexible-blocks
                class="content"
                :blocks="page.blocks"
            />
        </div>

        <div v-if="parsedAssociatedStaffMember.length > 0">
            <divider-way-finder
                color="about"
                class="divider-way-finder"
            />

            <h2 class="section-heading">
                Associated Staff Member
            </h2>
            <section-staff-list :items="parsedAssociatedStaffMember" />
        </div>
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
            let bylines = this.page.byline.map((name) => {
                return {
                    fullName: `${name.nameFirst} ${name.nameLast}`,
                }
            })

            return bylines.map(({ fullName }) => {
                return `${fullName}`
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

        parsedForm() {

        }

        // parsedLocations() {
        //     let places= this.page.locations.map((place) => {
        //         return {
        //             linkedLocation: `<a href="${place.uri}">${place.title}</a>`
        //         }
        //     })
        //     return places.map(({linkedLocation})=>{
        //         return (`${linkedLocation}`)
        //     })
        // }
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
