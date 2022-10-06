<template lang="html">
    <div class="page page-impact-report">
        <section-wrapper class="section-banner">
            <banner-header
                v-if="isVideo"
                :title="page.title"
                :text="page.text"
                :align-right="true"
                :video="parsedVideo"
                :byline="parsedByline"
            />
            <banner-text
                v-else
                class="banner-text"
                :title="page.title"
                :text="page.text"
                :byline="parsedByline"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
    </div>
</template>

<script>
// gql
import IMPACT_REPORT_STORY from "~/gql/queries/ImpactReportStory"

// Helpers
import _get from "lodash/get"

export default {
    layout: "impact",
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(IMPACT_REPORT_STORY, {
            slug: params.slug,
        })
        console.log("Data fetched: " + JSON.stringify(data))

        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        return {
            title: this.page.title,
        }
    },
    computed: {
        isVideo() {
            let fileName = this.page.heroImage[0].image[0].src.toLowerCase()
            let extension = fileName.split(".").pop()

            if (
                extension == "mp4" ||
                extension == "m4a" ||
                extension == "f4v" ||
                extension == "m4b" ||
                extension == "mov"
            ) {
                return true
            }
            return false
        },

        parsedVideo() {
            if (this.isVideo) {
                let mainVideo = this.page.heroImage[0].image[0]
                let video = {
                    videoUrl: mainVideo.src,
                    sizes: mainVideo.sizes,
                    height: mainVideo.height,
                    width: mainVideo.width,
                    altText: mainVideo.alt,
                    caption: mainVideo.caption,
                    poster: mainVideo.poster,
                }
                return video
            } else {
                return {}
            }
        },
        parsedByline() {
            let bannerFeaturedByline = this.page.contributors.map((obj) => {
                if (obj.typeHandle === "externalContributor") {
                    return { title: `${obj.byline + " " + obj.title}` }
                } else if (obj.typeHandle === "staffMember") {
                    return {
                        title: `${obj.byline + " " + obj.staffMember[0].title}`,
                    }
                } else {
                    return []
                }
            })
            return bannerFeaturedByline
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
        margin-bottom: 0;
    }
    .banner-header {
        // margin-bottom: var(--space-xl);
        padding: 0;
        max-width: $container-xl-full-width + px;
    }
    ::v-deep .banner-header {
        margin-bottom: 0px;
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