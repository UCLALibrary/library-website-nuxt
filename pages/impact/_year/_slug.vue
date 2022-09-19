<template lang="html">
    <div class="page page-impact-report">
        <banner-text
            v-if="!parsedVideo"
            class="banner-text"
            :title="page.title"
            :text="page.text"
        />

        <banner-header
            :title="bannerHeader.title"
            :text="bannerHeader.text"
            :video="parsedVideo"
            :to="bannerHeader.to"
            :align-right="true"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <flexible-blocks
                class="content"
                :blocks="page.entry.blocks"
            />
        </section-wrapper>

        <section-wrapper>
            <div class="breadcrumb-link">
                <nuxt-link
                    to="/impact/"
                    class="hover-text"
                >
                    Read the 2022 UCLA Library Impact Report
                </nuxt-link>
                <svg-arrow-right class="svg-arrow-right" />
            </div>
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <div class="call-to-action">
                <a
                    href="https://giveto.ucla.edu/area/libraries/"
                    target="_blank"
                    class="hover-text"
                >Find ways to give to UCLA Library</a>
                <svg-arrow-diagonal class="svg" />
            </div>
        </section-wrapper>
        </section-wrapper>
    </div>
</template>

<script>
// gql
import IMPACT_REPORT_STORY from "~/gql/queries/ImpactReportStory"

import * as MOCK_IMPACT_API from "~/data/impact-report_slug.json"

// Utilities
import getS3Bucket from "~/utils/getS3Bucket"

//svg components
import SvgArrowDiagonal from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-external-link"
import SvgArrowRight from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-arrow-right"

export default {
    components: {
        SvgArrowDiagonal,
        SvgArrowRight,
    },
    layout: "impact",
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(IMPACT_REPORT_STORY, {
            slug: params.slug,
        })
        console.log("Data fetched: " + JSON.stringify(data))

        return {
            page: data,
            bannerHeader: MOCK_IMPACT_API.bannerHeader,
            mainStory: MOCK_IMPACT_API.mainStory,
        }
    },
    head() {
        return {
            title: this.page.entry.title,
        }
    },
    computed: {
        parsedVideo() {
            let video = {
                videoUrl: getS3Bucket(
                    this.$config,
                    "ucla-impact-report-feature-story-animation.mp4"
                ),
            }
            return video
        },
        parsedMainStoryImages() {
            const mainStory = MOCK_IMPACT_API.mainStory
            return this.mainStory.images.map((obj) => {
                return {
                    src: getS3Bucket(this.$config, obj.src),
                    sizes: "100vw",
                    height: 1080,
                    width: 1920,
                    alt: obj.alt,
                    caption: obj.caption,
                }
            })
        },
        parsedByline() {
            let byline = (this.page.contributors || []).map((entry) => {
                return `${entry.byline} ${entry.title || entry.staffMember[0].title}`
            })
            return byline.map((entry) => {
                return {"title": entry}
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-impact-report {
    margin: 0 0 0 0;
    .section {
        margin: 1px auto;
    }
    .section-banner {
        margin-top: 0;
    }
    .banner-header {
        margin-bottom: var(--space-xl);
        padding: 0;
        max-width: $container-xl-full-width + px;
    }
    .rich-text {
        margin: var(--unit-gutter) auto;
    }
    .breadcrumb-link {
        margin: var(--space-xl) auto;
        padding: 0 $whitespace-m-sides + px;
        max-width: $container-l-main + px;
        font-style: var(--font-secondary);
        font-size: 20px;
        color: var(--color-primary-blue-03);
        font-weight: 400;

        display: flex;
        align-items: center;
    }
    .divider {
        margin: var(--space-xl) auto;
    }
    .divider-way-finder {
        max-width: $container-l-main + px;
        margin: var(--space-3xl) auto;
        &.divider {
            box-sizing: unset;
        }
    }
    .divider-general {
        margin: var(--space-3xl) auto;
        max-width: $container-l-main + px;
    }
    .call-to-action {
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        margin: var(--space-3xl) auto;
        padding: 0 $whitespace-m-sides + px;
        max-width: $container-l-main + px;

        display: flex;
        align-items: center;
    }
    .svg {
        text-decoration: underline;
        text-decoration-color: var(--color-primary-blue-03);
        padding-left: 5px;
        .line {
            stroke: var(--color-primary-blue-03);
        }
        .arrow-diagonal {
            fill: var(--color-primary-blue-03);
        }
    }
    .svg-arrow-right {
        flex-shrink: 0;
        .arrow-right {
            stroke: var(--color-primary-blue-03);
        }
    }

    @media #{$medium} {
        .divider-general {
            width: calc(100% - (var(--unit-gutter) * 2));
        }

        .rich-text {
            padding: 0 var(--unit-gutter);
        }

        .call-to-action,
        .breadcrumb-link {
            padding: 0 var(--unit-gutter);
        }
    }

    @media #{$has-hover} {
        .svg:hover {
            .arrow {
                path {
                    fill: var(--color-primary-blue-03);
                }
            }
            path {
                fill: var(--color-primary-blue-03);
                .arrow-diagonal {
                    color: var(--color-primary-blue-03);
                }
            }
        }

        .hover-text:hover {
            color: var(--color-primary-blue-03);
            @include link-hover;
        }
    }
}
</style>
