<template lang="html">
    <div class="page page-impact-report">
        <banner-header
            class="section banner-header"
            :title="bannerHeader.title"
            :text="bannerHeader.text"
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
        <divider-general class="divider divider-general" />
        <div class="credits">
            <h2 class="credit-header">
                Acknowledgements
            </h2>
            <em>
                <dl class="credit-list">
                    <dt>By</dt>
                    <dd>Cynthia Lee</dd>

                    <dt>Illustrations and Animation</dt>
                    <dd class="illustrator hover-text">
                        <a
                            href="https://www.brettaffrunti.com/"
                            target="_blank"
                        >Brett Affrunti</a>
                    </dd>
                </dl></em>
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
    },
    layout: "impact",
    data() {
        return {
            bannerHeader: MOCK_IMPACT_API.bannerHeader,
            mainStory: MOCK_IMPACT_API.mainStory,
        }
    },
    computed: {
        parseVideo() {
            let video = {
                videoUrl: getS3Bucket(
                    this.$config,
                    "ucla-impact-report-animation.mp4"
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
    .credits {
        max-width: $content-width-03 + px;
        margin: $layout-07 + px auto;
        padding: 0 $margin-01 + px;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 26px;
    }
    .credit-list {
        display: inline;
    }
    .credits dt,
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

    @media #{$medium} {
        .divider-general {
            margin: $layout-06 + px auto;
            width: calc(100% - (var(--unit-gutter)*2));
        }

        .rich-text {
            padding: 0 $margin-01 + px;
        }

        .divider-way-finder {
            margin: $layout-06 + px auto;
        }

        .credits,
        .call-to-action {
            margin: $layout-06 + px auto;
            padding: 0 $margin-01 + px;
        }
    }

    @media #{$small} {
        .divider-general {
            margin: $layout-05 + px auto;
            width: calc(100% - (var(--unit-gutter)*2));
        }

        .rich-text {
            padding: 0 $margin-02 + px;
        }

        .divider-way-finder {
            margin: $layout-05 + px auto;
        }

        .credits,
        .call-to-action {
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
