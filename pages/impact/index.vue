<template lang="html">
    <div class="page page-impact-report">
        <div class="meta">
            <h2 class="intro">
                2020-2021 UCLA Library Impact Report
            </h2>
            <p class="text">
                <responsive-image
                    :image="imagePortrait.image"
                    :aspect-ratio="60"
                    class="portrait-Ginny"
                />
                As we close out the year, its worth reflecting on what we have accomplished as a Library community. When a pandemic scattered most of our faculty and students across the country and globe, we quickly adapted traditional in-person services for remote learning. This pivot made it possible for Bruins to access the materials, workshops, and research advice they needed, wherever they were. Our return to campus brings new priorities, and here is what we are focusing on in 2022: increasing opportunities for teaching with rare and unique materials, building capacity to recruit librarians who are experts in their field, and amplifying access to and safekeeping of digitally stored materials.
            </p>
            <responsive-image
                :image="imageSignature.image"
                :aspect-ratio="60"
                class="signature-image"
            />
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
                class="divider divider-top"
                color="about"
            />

            <h2 class="grid-gallery-title">
                Remote Learning by the Numbers:<br>Data from March 2020 through September 2021
            </h2>

            <section-teaser-card
                class="teaser-card"
                :items="remoteLearningCard.items"
            />

            <divider-way-finder
                class="divider divider-top"
                color="about"
            />

        
            <h2 class="grid-gallery-title">
                2020-21: An Academic Year Like No Other
            </h2>

            <h3 class="grid-gallery-subtitle">
                The Great Pivot: March - October 2020
            </h3>

            <grid-gallery
                v-for="(value, propertyName) in timelineSortedByMonth"
                :key="propertyName"
                :month-year="propertyName"
                :items="value"
                class="grid-gallery"
            />
        </div>

        <divider-way-finder
            class="divider divider-center"
            color="about"
        />

        <p class="credits">
            Thank you to <a href="https://www.library.ucla.edu/staff">UCLA Library Staff</a> credit lines, Lorem ipsum dolor sit amet odio maximus quis posuere vivamus dapibus etiam. Consectetur luctus elementum tempor lacinia nascetur tristique orci est vehicula interdum. Vehicula non hendrerit orci justo urna lacinia quam lectus taciti. Enim eros dis felis ipsum malesuada posuere sollicitudin. Habitasse proin purus montes lorem cursus iaculis lacinia et. Elementum consectetuer aptent parturient nostra hendrerit sapien imperdiet vel.
        </p>

        <divider-way-finder
            class="divider divider-bottom"
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
                alt: "Illustration of woman wearing glasses and a grey blazer, with a yellow background"
            }
            return portrait
        },
        imageSignature() {
            const signature = {
                src: getS3Bucket(this.$config, "ginny-steel-signature.jpg"),
                sizes: "100vw",
                height: 1080,
                width: 1920,
                alt: "Signature image"
            }
            return signature
        },
        timelineSortedByMonth() {
            const parsedTimeline = _.groupBy(
                this.page.timelineGallery,
                (month) => month.monthYear
            )
            for (const key in parsedTimeline) {
                parsedTimeline[key] = parsedTimeline[key].map((obj) => {
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
                // console.log("key:" + key)
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
        margin: var(--unit-gutter);
        .intro {
            font-size: 84px;
            font-weight: 300;
            line-height: 84px;
            color: var(--color-primary-blue-03);
        }
        .text {
            font-size: 47px;
            line-height: 56px;
        }
        .signature {
            font-size: 48px;
            line-height: 57px;
        }
    }
    .portrait-Ginny {
        width: 100%;
        max-width: 704px;
        float: right;
    }
     .signature-image {
        width: 100%;
        max-width: 704px;
    }
    .banner {
        margin: var(--unit-vertical-gap) auto;
    }
    .grid-gallery-title {
        margin: var(--unit-gutter) var(--unit-gutter) 24px
            var(--unit-gutter);
        color: var(--color-primary-blue-03);
        font-size: 48px;
        line-height: 56px;
        padding-left:100px;
    }
    .section-grid {
        .grid-gallery-title {
            margin: var(--unit-gutter) var(--unit-gutter) 24px
                var(--unit-gutter);
            color: var(--color-primary-blue-03);
            font-size: 48px;
            line-height: 56px;
            padding-left:100px;
        }
        .grid-gallery-subtitle {
            margin: 0 var(--unit-gutter) 0 var(--unit-gutter);
            color: var(--color-primary-blue-03);
            font-size: 35.538px;
            line-height: 43px;
            padding-left:100px;
        }
        .grid-gallery {
            margin: 0 auto;
        }
    }
    .teaser-card {
        margin: 0 auto;
    }
    .credits {
        max-width: 932px;
        padding-bottom: 138px;
        margin: 0 auto;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
    }
    .divider-top {
        margin-top: 100px;
        margin-bottom: 100px;
        max-width: 1100px;
    }
    .divider-center {
        margin-top: 75px;
        margin-bottom: 48px;
        max-width: 1100px;
    }
    .divider-bottom {
        margin-bottom: 92px;
        max-width: 1100px;
    }
}
.page .section {
    margin-top: 0px;
}
</style>
