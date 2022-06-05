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

// {"entry":{"id":"4416","articleType":"news","title":"I Like Turtles","heroImage":[{"id":"5227","image":[{"id":"5225","src":"https://static.library.ucla.edu/craftassetstest/_fullscreen/I-like-turtles.png","height":2560,"width":2560,"srcset":"https://static.library.ucla.edu/craftassetstest/_375xAUTO_crop_center-center_none/I-like-turtles.png 375w, https://static.library.ucla.edu/craftassetstest/_960xAUTO_crop_center-center_none/I-like-turtles.png 960w, https://static.library.ucla.edu/craftassetstest/_1280xAUTO_crop_center-center_none/I-like-turtles.png 1280w, https://static.library.ucla.edu/craftassetstest/_1920xAUTO_crop_center-center_none/I-like-turtles.png 1920w, https://static.library.ucla.edu/craftassetstest/_2560xAUTO_crop_center-center_none/I-like-turtles.png 2560w","alt":"I like turtles","focalPoint":[0.5,0.5]}]}],"articleCategories":[],"staffMember":[{"id":"4169","nameFirst":"Courtney","nameLast":"Hoffner"}],"associatedLocations":[{"id":"523","title":"Powell Library","uri":"visit/locations/powell-library"}],"department":[{"id":"7248","title":"Information Technology Services","uri":"organization/information-technology-services"}],"description":"<p>A FACE-painted boy who went viral for his bizarre response to a TV reporter's question looks unrecognisable 15 years later.</p>\n<p>Jonathan Ware, 10, shot to fame in 2007 after a clip of him went viral on YouTube.</p>","blocks":[]}}

<template lang="html">
    <section class="page-news-detail">
        <h2>{{ page }}</h2>
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
            :title="page.title"
            :category="page.type"
            :text="page.text"
        />
        <divider-way-finder
            color="about"
            class="divider-way-finder"
        />

        <!-- <flexible-blocks
            class="content"
            :blocks="page.blocks"
        /> -->
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"

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
        parsedItems() {
            return this.page.entry
            //     to: `/news/${obj.to}`,
            //     image: _get(obj, "heroImage[0].image[0]", null),
            //     staffName: `${obj.nameFirst} ${obj.nameLast}`,
            // }
        }
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
