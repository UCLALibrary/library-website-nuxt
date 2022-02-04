<template lang="html">
    <div class="page page-impact-report">
        <banner-header
            class="section banner-header"
            :title="bannerHeader.title"
            :text="bannerHeader.text"
            :byline="bannerHeader.byline"
            :video="parseVideo"
            :to="bannerHeader.to"
            :align-right="true"
        />
        <div class="meta">
            <divider-way-finder
                color="about"
                class="divider"
            />

            <rich-text
                :text-blocks="mainStory.textBlocks"
                :pull-quote="mainStory.pullQuote"
                :images="parsedMainStoryImages"
                class="rich-text"
            />
        </div>
        <div class="breadcrumb-link">
            <nuxt-link
                to="/impact/"
                class="hover-text"
            >
                Read 2020-2021 UCLA Library Impact Report
            </nuxt-link>
            <svg-arrow-right class="svg-arrow-right" />
        </div>

        <divider-way-finder
            class="divider"
            color="about"
        />
        <div class="call-to-action">
            <a
                href="https://giveto.ucla.edu/area/libraries/"
                target="_blank"
                class="hover-text"
            >Find ways to give to UCLA Library</a>
            <svg-arrow-diagonal class="svg" />
        </div>
    </div>
</template>

<script>
import * as MOCK_IMPACT_API from "~/data/impact-report_slug.json"

// Utilities
import getS3Bucket from "~/utils/getS3Bucket"

export default {
    components: {
        SvgArrowDiagonal: () => import("~/assets/svg/arrow-diagonal"),
        SvgArrowRight: () => import("~/assets/svg/arrow-right-small"),
    },
    layout: "impact",
    data() {
        return {
            bannerHeader: MOCK_IMPACT_API.bannerHeader,
            mainStory: MOCK_IMPACT_API.mainStory,
        }
    },
    head() {
        return {
            title: this.bannerHeader.title,
        }
    },
    computed: {
        parseVideo() {
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
    },
}
</script>

<style lang="scss" scoped>
.page-impact-report {
    margin: 0 0 0 0;
    .section {
        margin: 1px auto;
    }
    .banner-header {
        margin-bottom: $layout-06 + px;
        padding: 0;
        max-width: 1440px;
    }
    .rich-text {
        margin: var(--unit-gutter) auto;
    }
    .breadcrumb-link {
        margin: $layout-06 + px auto;
        padding: 0 $margin-01 + px;
        max-width: $content-width-03 + px;
        font-style: var(--font-secondary);
        font-size: 20px;
        color: var(--color-primary-blue-03);
        font-weight: 400;

        display: flex;
        align-items: center;
    }
    .divider {
        margin: $layout-06 + px auto;
    }
    .divider-way-finder {
        max-width: $content-width-03 + px;
        margin: $layout-07 + px auto;
        &.divider {
            box-sizing: unset;
        }
    }
    .divider-general {
        margin: $layout-07 + px auto;
        max-width: $content-width-03 + px;
    }
    .call-to-action {
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
        margin: $layout-07 + px auto;
        padding: 0 $margin-01 + px;
        max-width: $content-width-03 + px;

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
            margin: $layout-06 + px auto;
            width: calc(100% - (var(--unit-gutter) * 2));
        }

        .rich-text {
            padding: 0 $margin-01 + px;
        }

        .divider-way-finder {
            margin: $layout-06 + px auto;
        }

        .call-to-action,
        .breadcrumb-link {
            margin: $layout-06 + px auto;
            padding: 0 $margin-01 + px;
        }
    }

    @media #{$small} {
        .divider-general {
            margin: $layout-05 + px auto;
            width: calc(100% - (var(--unit-gutter) * 2));
        }

        .rich-text {
            padding: 0 $margin-02 + px;
        }

        .divider-way-finder {
            margin: $layout-05 + px auto;
        }

        .call-to-action,
        .breadcrumb-link {
            margin: $layout-05 + px auto;
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
            @include hover;
        }
    }
}
</style>
