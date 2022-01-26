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
                As we close out the year, its worth reflecting on what we have
                accomplished as a Library community. When a pandemic scattered
                most of our faculty and students across the country and globe,
                we quickly adapted traditional in-person services for remote
                learning. This pivot made it possible for Bruins to access the
                materials, workshops, and research advice they needed, wherever
                they were. Our return to campus brings new priorities, and here
                is what we are focusing on in 2022: increasing opportunities for
                teaching with rare and unique materials, building capacity to
                recruit librarians who are experts in their field, and
                amplifying access to and safekeeping of digitally stored
                materials.
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
            class="banner banner-main-story-data"
            :title="impactBannerFeatured.title"
            :description="impactBannerFeatured.description"
            :category="impactBannerFeatured.category"
            :video="impactBannerFeatured.video"
            :to="impactBannerFeatured.to"
            :prompt="impactBannerFeatured.prompt"
            :ratio="42"
            :align-right="true"
        />

        <section-teaser-card
            class="teaser-card"
            :items="sectionTeaserCard.items"
        />

        <divider-way-finder
            class="divider"
            color="about"
        />

        <div class="section-grid">
            <h2 class="grid-gallery-title">
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

        <divider-way-finder
            class="divider"
            color="about"
        />

        <p class="credits">
            Thank you to UCLA Library Staff credit lines, Lorem ipsum dolor sit
            amet odio maximus quis posuere vivamus dapibus etiam. Consectetur
            luctus elementum tempor lacinia nascetur tristique orci est vehicula
            interdum. Vehicula non hendrerit orci justo urna lacinia quam lectus
            taciti. Enim eros dis felis ipsum malesuada posuere sollicitudin.
            Habitasse proin purus montes lorem cursus iaculis lacinia et.
            Elementum consectetuer aptent parturient nostra hendrerit sapien
            imperdiet vel.
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
                    console.log("key:" + innerKey)
                }
                parsedTimeline[key] = parsedTimelineByMonth
            }
            return parsedTimeline
        },
        timelineSortedByMonth() {
            const parsedTimeline = _.groupBy(this.value, (row) => row.monthYear)
            for (const key in parsedTimeline) {
                parsedTimeline[key] = parsedTimeline[key].map((obj) => {
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
        sectionTeaserCard() {
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

    .section-grid {
        max-width: 932px;

        display: flex;
        flex-direction: column;
        justify-content: left;

        margin: 0 auto;
        .grid-gallery-title {
            color: var(--color-primary-blue-03);
            font-size: 48px;
            line-height: 56px;
        }
        .sub-section-grid {
            margin: 24px auto;
        }
        .grid-gallery-subtitle {
            color: var(--color-primary-blue-03);
            font-size: 35.538px;
            line-height: 43px;
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
    .divider {
        margin: var(--unit-vertical-gap) auto;
    }
    @media #{$medium} {
        .grid-gallery-title {
            padding: 0 64px;
        }
        .section-grid {
            .grid-gallery-subtitle {
                padding: 0 64px;
            }
        }
    }
    @media #{$small} {
        .section-grid {
            .grid-gallery-title {
                padding: 0 24px;
            }
            .grid-gallery-subtitle {
                padding: 0 24px;
            }
        }
    }
}
.page .section {
    margin-top: 0px;
}
</style>
