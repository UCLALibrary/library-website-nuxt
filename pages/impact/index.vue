<template lang="html">
    <div class="page page-impact-report">
        <div class="meta">
            <h1 class="intro">
                2020-2021 UCLA Library Impact Report
            </h1>
            <responsive-image
                :image="imagePortrait"
                :aspect-ratio="60"
                class="portrait-Ginny"
                alt="Sketch of Ginny Steel wearing glasses and a grey blazer, with a yellow background"
            />

            <p class="text">
                It&#39;s no coincidence that the top universities in the nation are also home to its top academic libraries, including UCLA and UCLA Library. You can&#39;t have one without the other. So when the pandemic hit, UCLA Library struck back, ramping up remote services that kept knowledge moving forward. This report is designed to make visible the work of our Library community, whether by Zoom, from a home office, or in&#45;person at one of our eight campus locations. While none of us can predict what the future holds, one thing is certain&#58; the pandemic has revealed how vital the work of UCLA Library is to the life of the university, our students, faculty and researchers around the world.
            </p>
            <p class="signature">
                &#8212; <strong>Virginia Steel</strong>, Norman and Armena Powell University Librarian
            </p>
        </div>

        <h2 class="visually-hidden">Main Story</h2>

        <banner-featured
            class="banner"
            :title="impactBannerFeatured.title"
            :description="impactBannerFeatured.description"
            :category="impactBannerFeatured.category"
            :video="impactBannerFeatured.video"
            :to="impactBannerFeatured.to"
            :prompt="impactBannerFeatured.prompt"
            :ratio="42"
            :align-right="true"
        />

        <div class="section section-grid">
            <section-teaser-card
                class="teaser-card"
                :items="featuretteCard.items"
            />

            <divider-way-finder
                class="divider-section"
                color="about"
            />

            <h2 class="title">
                Remote Learning by the Numbers:<br>Data from March 2020
                through September 2021
            </h2>

            <section-teaser-card
                class="teaser-card"
                :items="remoteLearningCard.items"
            />

            <divider-way-finder
                class="divider-section"
                color="about"
            />

            <h2 class="title">
                2020-21: An Academic Year Like No Other
            </h2>

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
                    :month-year="propertySubName"
                    :items="subValue"
                />
            </div>
        </div>

        <divider-general class="divider divider-general" />


        <div class="credits">
            <em>
                <h2 class="credit-header">
                    Acknowledgements
                </h2>
                <dl class="credit-list">
                    <dt>Project Leads</dt>
                    <dd>Ariane Bicho, Director of Library Communications and Marketing; </dd>
                    <dd>Joshua Gomez, Head of Software Development and Library Systems </dd>

                    <dt>Illustrations and Animation</dt>
                    <dd class="illustrator">
                        <a
                            href="https://www.brettaffrunti.com/"
                            target="_blank"
                        >Brett Affrunti</a>
                    </dd>

                    <dt>Feature Writer</dt>
                    <dd>Cynthia Lee</dd>

                    <dt>Contributing Writers</dt>
                    <dd>Ben Alkaly,</dd> <dd>Courtney Hoffner,</dd> <dd> Jennifer Rhee</dd>

                    <dt>Photo Editors</dt>
                    <dd>Ben Alkaly,</dd> <dd>Jennifer Rhee</dd>

                    <dt>Editorial and Research Contributors</dt>
                    <dd>Suzy Lee,</dd> <dd>Marisa Soto</dd>

                    <dt>Lead Developer </dt>
                    <dd>Parinita Mulak</dd>

                    <dt>Developers</dt>
                    <dd>Jen Diamond,</dd> <dd>Casey Grzecka,</dd> <dd>Ashton Prigge,</dd> <dd>Andrew Wallace</dd>

                    <dt>Lead UX Designer</dt>
                    <dd>Axa Liauw</dd>
                    
                    <dt>UX Designer</dt>
                    <dd>Dianne Weinthal</dd>

                    <dt>Data Services</dt>
                    <dd>Dana Peterman,</dd> <dd>Jack Schwada,</dd> <dd>Sharon Shafer</dd>

                    <dt>Graphic Design</dt>
                    <dd>Sean Deyoe</dd>

                    <dt>Student Assistants</dt>
                    <dd>Dana Binfet,</dd> <dd>Marley Rodriguez</dd>
                </dl></em>
            </dl>
        </div>


        <divider-way-finder
            class="divider"
            color="about"
        />
    </div>
</template>

<script>
import * as API from "~/stories/mock-api.json"
import _ from "lodash"
import * as IMPACT_API from "~/data/impact-report_index.json"
// Utilities
import updateImageData from "~/utils/updateImageData"
import getS3Bucket from "~/utils/getS3Bucket"

export default {
    components: {},
    layout: "impact",
    async asyncData() {
        const timelineGallery = IMPACT_API.timelineGallery

        const data = {
            timelineGallery: timelineGallery,
            mainStoryData: IMPACT_API.mainStoryData,
        }

        return {
            page: data,
        }
    },
    head(){
        return {
            title: '2020-2021 UCLA Library Impact Report',
        }
    },
    computed: {
        imagePortrait() {
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
        },
        timelineSortedBySubtitle() {
            const parsedTimeline = _.groupBy(
                this.page.timelineGallery,
                (row) => row.subtitle
            )
            for (const key in parsedTimeline) {
                const parsedTimelineByMonth = _.groupBy(
                    parsedTimeline[key],
                    (row) => row.monthYear
                )
                for (const innerKey in parsedTimelineByMonth) {
                    parsedTimelineByMonth[innerKey] = parsedTimelineByMonth[
                        innerKey
                    ].map((obj) => {
                        return {
                            ...obj,
                            imgclasses: `image ${obj.class}`,
                            image: updateImageData(
                                obj.src,
                                obj.alt,
                                Object.assign({}, API.image),
                                this.$config
                            ),
                        }
                    })
                    // console.log("key:" + innerKey)
                }
                parsedTimeline[key] = parsedTimelineByMonth
            }
            return parsedTimeline
        },
        impactBannerFeatured() {
            const mainStoryFeatured = {
                video: {
                    videoUrl: getS3Bucket(
                        this.$config,
                        this.page.mainStoryData.asset
                    ),
                },
                to: this.page.mainStoryData.link,
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
                        obj.src,
                        obj.alt,
                        Object.assign({}, API.image),
                        this.$config
                    ),
                }
            })
            return { items: parsedFeaturettes }
        },
        remoteLearningCard() {
            const remoteLearnings = IMPACT_API.remoteLearning
            const parsedremoteLearnings = remoteLearnings.map((obj) => {
                return {
                    ...obj,
                    image: updateImageData(
                        obj.src,
                        obj.alt,
                        Object.assign({}, API.image),
                        this.$config
                    ),
                }
            })
            return { items: parsedremoteLearnings }
        },
    },
}
</script>

<style lang="scss" scoped>
.page-impact-report {
    .meta {
        padding: 0 var(--unit-gutter);
        margin: $layout-06 + px auto 0 auto;
        max-width: $content-width-05 + px;
        .intro {
            @include step-5;
            margin-bottom: $layout-05 + px;
            color: var(--color-primary-blue-03);
        }
        .text {
            @include step-3;
            line-height: 120%;
        }
        .signature {
            @include step-3;
        }
    }
    .portrait-Ginny {
        width: 100%;
        max-width: 50%;
        float: right;
    }
    .banner {
        margin: $layout-07 + px auto;
    }

    .section-grid {
        max-width: $content-width-03 + px;

        display: flex;
        flex-direction: column;
        justify-content: left;

        margin: 0 auto;
        .title {
            color: var(--color-primary-blue-03);
            font-size: 48px;
            line-height: 56px;
            margin-bottom: $layout-05 + px;
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
            max-width: $content-width-03 + px;
            margin: $layout-07 + px 0;
        }
    }
    .teaser-card {
        margin: 0 auto;
    }
    .credits {
        max-width: $content-width-03 + px;
        margin: $layout-07 + px auto;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
    }
    .credit-list {
        display: inline;
    }
    .divider {
        max-width: $content-width-03 + px;
        margin: $layout-07 + px auto;
    }
    .divider-general {
        margin-top: 75px;
        margin-bottom: 48px;
        max-width: $content-width-03 + px;
    }
    .credits dt, dd {
      display: inline;
      font-family: var(--font-secondary);
      line-height: 26px;
    }
    .credits dd,.credits dl {
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
    .illustrator a{
        text-decoration: underline;
        text-decoration-color: var(--color-default-cyan-03);
        text-decoration-thickness: 2px;
        text-underline-offset: 1px;
    }
    // Hover states
    @media #{$has-hover} {
    .illustrator:hover {
        color: var(--color-primary-blue-03);
        @include hover;
        }
    }

    @media #{$medium} {
        .meta {
            padding: 0 $margin-01 + px;
            margin-top: $margin-02 + px;

            .intro {
                margin-bottom: $layout-04 + px;
            }

            .portrait-Ginny {
                float: none;
                max-width: 100%;
                margin: 32px auto;
            }
        }
        .banner {
            margin: $layout-06 + px auto;
        }

        .section-grid .divider-section,
        .divider {
            margin: $layout-06 + px 0;
        }

        .divider-general {
            margin: $layout-06 + px auto;
            width: calc(100% - (var(--unit-gutter)*2));
        }

        .section {
            .sub-section-grid {
                ::v-deep .grid-gallery {
                    padding: unset;
                }
            }
        }
        .credits {
            padding: 0 $margin-01 + px;
            margin: $layout-05 + px auto;
        }
    }
    @media #{$small} {
        .meta {  
            padding: 0 $margin-02 + px;     
            .portrait-Ginny {
                width: 100%;
            }
        }
        .banner {
            margin: $layout-05 + px auto;
        }

        .grid-gallery-subtitle {
            height: 80px;
        }

        .section-grid .divider-section,
        .divider {
            margin: $layout-05 + px 0;
        }

        .divider-general {
            margin: $layout-05 + px auto;
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
