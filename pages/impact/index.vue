<template lang="html">
    <div class="page page-impact-report">
        <div class="meta">
            <h2 class="intro">
                2020-2021 UCLA Library Impact Report
            </h2>
            <responsive-image
                :image="imagePortrait"
                :aspect-ratio="60"
                class="portrait-Ginny"
            />
            
            <p>
                As we close out the year, its worth reflecting on what we have accomplished as a Library community. When a pandemic scattered most of our faculty and students across the country and globe, we quickly adapted traditional in-person services for remote learning. This pivot made it possible for Bruins to access the materials, workshops, and research advice they needed, wherever they were. Our return to campus brings new priorities, and here is what we are focusing on in 2022: increasing opportunities for teaching with rare and unique materials, building capacity to recruit librarians who are experts in their field, and amplifying access to and safekeeping of digitally stored materials.
            </p>
            <p class="signature">
                - Virginia Steel, Norman and Armena Powell University Librarian
            </p>
        </div>

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
                Remote Learning by the Numbers:<br>Data from March 2020 through September 2021
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

        <p class="credits">
            Thank you to
            <a href="https://www.library.ucla.edu/staff">UCLA Library Staff</a> credit lines, Lorem ipsum dolor sit amet odio maximus quis posuere vivamus dapibus etiam. Consectetur luctus elementum tempor lacinia nascetur tristique orci est vehicula interdum. Vehicula non hendrerit orci justo urna lacinia quam lectus taciti. Enim eros dis felis ipsum malesuada posuere sollicitudin. Habitasse proin purus montes lorem cursus iaculis lacinia et. Elementum consectetuer aptent parturient nostra hendrerit sapien imperdiet vel.
        </p>

        <divider-way-finder
            class="divider"
            color="about"
        />
    </div>
</template>

<script>
import * as API from "~/stories/mock-api.json"
import _ from "lodash"
import * as IMPACT_API from "~/data/impact-report.json"
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
                        obj.imgSrc,
                        obj.imgAlt,
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
                        obj.imgSrc,
                        obj.imgAlt,
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
        margin: $layout-06 + px auto;
        max-width: $content-width-05 + px;
        .intro {
            font-size: 84px;
            font-weight: 300;
            line-height: 84px;
            color: var(--color-primary-blue-03);
        }
        .text {
            @include step-3;
        }
        .signature {
            @include step-3;
        }
    }
    .portrait-Ginny {
        width: 100%;
        max-width: 704px;
        float: right;
    }
    .banner {
        margin: $layout-07 + px auto;
    }
    .remote-learning {
        margin: var(--unit-gutter) var(--unit-gutter) $layout-05 + px
            var(--unit-gutter);
        color: var(--color-primary-blue-03);
        @include step-3;
        padding-left: 100px;
    }
    .grid-gallery-title {
        margin: var(--unit-gutter) var(--unit-gutter) 24px var(--unit-gutter);
        color: var(--color-primary-blue-03);
        @include step-3;
        padding-left: 100px;
    }
    .section-grid {
        max-width: 932px;

        display: flex;
        flex-direction: column;
        justify-content: left;

        margin: 0 auto;
        .title {
            color: var(--color-primary-blue-03);
            font-size: 48px;
            line-height: 56px;
            margin-bottom: $layout-05 + px;
        }
        .sub-section-grid {
            margin: 24px auto;
        }
        .grid-gallery-subtitle {
            color: var(--color-primary-blue-03);
            font-size: 35.538px;
            line-height: 43px;
        }
        .divider-section {
            max-width: 1100px;
            margin: $layout-07 + px 0;
        }
    }
    .teaser-card {
        margin: 0 auto;
    }
    .credits {
        max-width: 932px;
        margin: $layout-07 + px auto;
        // margin: ;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
    }
    .divider {
        max-width: 1100px;
        margin: $layout-07 + px auto;
    }
    .divider-general {
        margin-top: 75px;
        margin-bottom: 48px;
        max-width: $content-width-03 + px;
    }
}
.page .section {
    margin-top: 0px;
}
</style>
