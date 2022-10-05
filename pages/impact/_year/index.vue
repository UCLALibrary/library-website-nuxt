<template lang="html">
    <div class="page page-impact-report">
        <!-- This is template for impact reports -->
        <div class="meta">
            <h1
                class="intro"
                v-html="page.title"
            />

            <responsive-image
                v-if="page.portrait && page.portrait.length > 0"
                :image="page.portrait[0]"
                :aspect-ratio="60"
                class="portrait-Ginny"
                alt="Sketch of Ginny Steel wearing glasses and a grey blazer, with a yellow background"
            />

            <rich-text
                class="text"
                v-html="page.text"
            />
        </div>
        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>
        <h2 class="visually-hidden">
            Main Story
        </h2>

        <flexible-blocks
            v-if="page.blocks"
            class="flexible-content"
            :blocks="page.blocks"
        />

        <section-wrapper :section-title="page.timelineTitle">
            <div
                v-for="(value, propertyName) in timelineSortedBySubtitle"
                :key="propertyName"
                class="sub-section-grid"
            >
                <h3
                    class="grid-gallery-subtitle"
                    v-html="propertyName"
                />

                <grid-gallery
                    v-for="(subValue, propertySubName) in value"
                    :key="propertySubName"
                    :section-summary="propertySubName"
                    :items="subValue"
                />
            </div>
        </section-wrapper>
        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>
        <section-wrapper
            v-if="page.acknowledgements && page.acknowledgements.length == 1"
        >
            <h2
                :class="
                    page.acknowledgements[0].displaySectionTitle === 'true'
                        ? ''
                        : 'visually-hidden'
                "
            >
                {{ page.acknowledgements[0].titleGeneral }}
            </h2>
            <rich-text
                class="credits"
                v-html="page.acknowledgements[0].acknowledgements"
            />
        </section-wrapper>
    </div>
</template>
<router>
  {
    path:'/impact/:year?',
    alias: '/impact',
    
  }
</router>
<script>
// gql
import IMPACT_REPORT from "~/gql/queries/ImpactReport"

// import * as API from "~/data/mock-api.json"
// Helpers
import _get from "lodash/get"
import _ from "lodash"

// import * as IMPACT_API from "~/data/impact-report_index.json"
// Utilities
import flattenTimeLineStructure from "~/utils/flattenTimeLineStructure"

export default {
    layout: "impact",
    async asyncData({ $graphql, params }) {
        // console.log("impact report query")
        // TO DO since we are using alias to use this template for both /impact which will bring up the latest impact report and /impact/{2021} for past report based on path
        // console.log(params)
        let path = params && params.year ? `impact/${params.year}` : "*"
        // console.log("path is " + path)
        const craftresponse = await $graphql.default.request(IMPACT_REPORT, {
            path: path,
        })
        /* console.log(
            "craft-response:" + JSON.stringify(craftresponse.entry.blocks)
        )*/
        //const timelineGallery = IMPACT_API.timelineGallery

        /*const data = {
            timelineGallery: timelineGallery,
            mainStoryData: IMPACT_API.mainStoryData,
        }*/

        return {
            page: _get(craftresponse, "entry", {}),
        }
    },
    head() {
        return {
            title: this.page.title,
        }
    },
    computed: {
        /* imagePortrait() {
            const portrait = {
                src: getS3Bucket(this.$config, "ginny-steel-ucla-library.jpg"),
                sizes: "100vw",
                height: 1080,
                width: 1920,
                alt: "Illustration of woman wearing glasses and a grey blazer, with a yellow background",
            }
            return portrait
        },
        imageSignature() {
            const signature = {
                src: getS3Bucket(this.$config, "ginny-steel-signature.jpg"),
                sizes: "100vw",
                height: 1080,
                width: 1920,
                alt: "Signature image",
            }
            return signature
        }, */
        timelineSortedBySubtitle() {
            const timelineData = flattenTimeLineStructure(
                this.page.timelineGallery
            )
            // console.log("did it flatten?" + timelineData)
            const groupBySubtitle = _.groupBy(
                timelineData,
                (row) => row.subtitle
            )
            /*console.log(
                "parsed timeline by subtitle: " +
                    JSON.stringify(groupBySubtitle)
            )*/
            for (const key in groupBySubtitle) {
                const groupByTimelineBySummary = _.groupBy(
                    groupBySubtitle[key],
                    (row) => row.sectionSummary
                )
                console.log(
                    "parsed timeline by summary: " +
                        JSON.stringify(groupByTimelineBySummary)
                )
                for (const innerKey in groupByTimelineBySummary) {
                    groupByTimelineBySummary[innerKey] =
                        groupByTimelineBySummary[innerKey].map((obj) => {
                            return {
                                ...obj,
                            }
                        })
                    // console.log("key:" + innerKey)
                }
                groupBySubtitle[key] = groupByTimelineBySummary
            }
            return groupBySubtitle
        },
        /* impactBannerFeatured() {
            const mainStoryFeatured = {
                video: {
                    videoUrl: getS3Bucket(
                        this.$config,
                        this.page.mainStoryData.asset
                    ),
                },
                to: "/impact/2021/ucla-library-reimagined", // this.page.mainStoryData.link
                title: this.page.mainStoryData.title,
                description: this.page.mainStoryData.description,
                prompt: this.page.mainStoryData.buttonText,
                alignRight: true,
            }
            return mainStoryFeatured
        },
        featuretteCard() {
            const featurettes = IMPACT_API.featurette
            const parsedFeaturettes = featurettes.map((obj) => {
                return {
                    ...obj,
                    image: updateImageData(
                        obj
                    ),
                }
            })
            return { items: parsedFeaturettes }
        }, */
        /* remoteLearningCard() {
            const remoteLearnings = IMPACT_API.remoteLearning
            const parsedremoteLearnings = remoteLearnings.map((obj) => {
                return {
                    ...obj,
                    image: updateImageData(
                        obj
                    ),
                }
            })
            return { items: parsedremoteLearnings }
        }, */
    },
}
</script>

<style lang="scss" scoped>
.page-impact-report {
    .meta {
        padding: 0 var(--unit-gutter);
        margin: var(--space-xl) auto 0 auto;
        max-width: $container-xl-banner + px;
        .intro {
            @include step-5;
            margin-bottom: var(--space-xl);
            color: var(--color-primary-blue-03);
        }
        .rich-text {
            margin: 0;
            padding-right: 0;
            margin-right: 0;
            max-width: $container-xl-banner + px;
        }
        .text {
            @include step-3;
            line-height: 120%;

            ::v-deep p {
                @include step-3;
            }
        }
    }
    .portrait-Ginny {
        width: 100%;
        max-width: 50%;
        float: right;
    }
    /* .banner {
        margin: var(--space-3xl) auto;
    }*/

    /* .section-grid {
        max-width: $container-l-main + px;

        display: flex;
        flex-direction: column;
        justify-content: left;

        margin: 0 auto;
        .title {
            color: var(--color-primary-blue-03);
            font-size: 48px;
            line-height: 56px;
            margin-bottom: var(--space-xl);
            @include step-3;
        }
        .sub-section-grid {
            margin: 12px auto;
            position: relative;
        }
        .grid-gallery-subtitle {
            color: var(--color-primary-blue-03);
            font-size: 35.538px;
            line-height: 43px;
            @include step-2;
            position: sticky;
            top: 0;
            background-color: var(--color-white);
            padding-top: 8px;
            z-index: 30;
            min-height: 46px;
        }
        .divider-section {
            max-width: $container-l-main + px;
            margin: var(--space-3xl) 0;
        }
    }*/
    .sub-section-grid {
        margin: 12px auto;
        position: relative;
    }
    .grid-gallery-subtitle {
        color: var(--color-primary-blue-03);
        font-size: 35.538px;
        line-height: 43px;
        @include step-2;
        position: sticky;
        top: 0;
        background-color: var(--color-white);
        padding-top: 8px;
        z-index: 30;
        min-height: 46px;
    }
    .teaser-card {
        margin: 0 auto;
    }
    .credits {
        max-width: $container-l-main + px;
        margin: var(--space-3xl) auto;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
    }
    /* .credit-list {
        display: inline;
    }*/
    .divider {
        max-width: $container-l-main + px;
        margin: var(--space-3xl) auto;
    }
    .divider-general {
        margin-top: var(--space-3xl);
        margin-bottom: var(--space-3xl);
        max-width: $container-l-main + px;
    }
    /* .credits dt,
    dd {
        display: inline;
        font-family: var(--font-secondary);
        line-height: 26px;
    }
    .credits dd,
    .credits dl {
        margin: 0;
        color: var(--color-secondary-grey-04);
    }
    dt {
        font-weight: 600;
        padding-left: 2px;
    }
    .credit-header {
        display: inline;
        color: var(--color-primary-blue-03);
        font-weight: 700;
        font-size: 18px;
        padding-right: 5px;
    }
    .illustrator a {
        text-decoration: underline;
        text-decoration-color: var(--color-default-cyan-03);
        text-decoration-thickness: 2px;
        text-underline-offset: 1px;
    }*/
    // Hover states
    @media #{$has-hover} {
        /* .illustrator:hover {
            color: var(--color-primary-blue-03);
            @include link-hover;
        }*/
    }

    @media #{$medium} {
        .meta {
            padding: 0 $whitespace-m-sides + px;
            margin-top: 24px;

            .portrait-Ginny {
                float: none;
                max-width: 100%;
                margin: 32px auto;
            }
        }

        .divider-general {
            width: calc(100% - (var(--unit-gutter) * 2));
        }

        .sub-section-grid {
            ::v-deep .grid-gallery {
                padding: unset;
            }
        }

        .credits {
            padding: 0 $whitespace-m-sides + px;
        }
    }
    @media #{$small} {
        .meta {
            padding: 0 $whitespace-s-sides + px;
            .portrait-Ginny {
                width: 100%;
            }
        }

        .grid-gallery-subtitle {
            height: 80px;
        }

        .credits {
            padding: 0 var(--unit-gutter);
        }
    }

    @media (min-width: 400px) {
        .grid-gallery-subtitle {
            height: 60px;
        }
    }

    @media (min-width: 860px) {
        .grid-gallery-subtitle {
            height: 40px;
        }
    }
}
</style>
