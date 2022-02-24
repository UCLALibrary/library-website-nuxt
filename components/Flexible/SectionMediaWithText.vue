<template lang="html">
    <div :class="classes">
        <h2 class="visually-hidden">
            Resources
        </h2>
        <div
            v-for="(item, index) in parsedContent"
            :key="index"
            class="meta"
        >
            <flexible-media-with-text
                :section-header="item.sectionHeader"
                :short-description="item.shortDescription"
                :image="item.image"
                :button-text="item.buttonText"
                :icon-name="item.parsedIcon"
                :to="item.parsedTo"
                :is-audio="item.parsedIsAudio"
                :is-video="item.parsedIsVideo"
                :is-vertical="item.parsedIsVertical"
                class="flexible-media-with-text"
            />

            <divider-general
                class="divider"
                :is-bold="isBoldDivider"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
        isGreyBackground: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        parsedContent() {
            const mediaWithText = this.block.mediaWithText

            return mediaWithText.map((obj) => {
                let to = ""
                if (obj.mediaWithTextLink) {
                    to = obj.mediaWithTextLink
                } else if (obj.downloadAssetLink) {
                    to = obj.downloadAssetLink
                }
                return {
                    ...obj,
                    parsedIsVideo: obj.mediaType == "video" ? true : false,
                    parsedIsAudio: obj.mediaType == "audio" ? true : false,
                    parsedIsVertical: obj.verticalImage == "yes" ? true : false,
                    parsedTo: to,
                    parsedIcon: obj.mediaWithTextLink
                        ? "svg-arrow-right"
                        : "svg-arrow-download",
                }
            })
        },
        isBoldDivider() {
            return this.isGreyBackground ? true : false
        },
        classes() {
            return this.isGreyBackground
                ? ["section-media-with-text", "color-grey"]
                : ["section-media-with-text"]
        },
    },
}
</script>

<style lang="scss" scoped>
.section-media-with-text {
    // Themes
    --color-theme: var(--color-white);
    &.color-grey {
        --color-theme: var(--color-secondary-grey-02);
    }

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: center;

    max-width: $container-xl-full-width + px;
    background-color: var(--color-theme);
    padding-top: 96px;
    padding-bottom: 114px;

    .visually-hidden {
        display: none;
    }
    .meta {
        margin: 0 var(--unit-gutter);
    }
    .flexible-media-with-text {
        margin-bottom: 56px;
    }
    ::v-deep .clipped-play {
        background-color: var(--color-theme);
    }
    .divider {
        max-width: $container-xl-full-width + px;
        margin-bottom: 56px;
    }
    .meta:last-child {
        .divider {
            display: none;
        }
    }

    // Breakpoints

    @media #{$medium} {
        &.section-media-with-text {
            padding-top: 40px;

            .flexible-media-with-text {
                margin-bottom: 32px;
            }
            .divider {
                margin-bottom: 32px;
            }
        }
    }
    @media #{$small} {
        &.section-media-with-text {
            padding-top: 32px;
            .flexible-media-with-text {
                margin-bottom: 24px;
            }
            .divider {
                margin-bottom: 24px;
            }
            ::v-deep .clipped-play-mobile {
                background-color: var(--color-theme);
            }
        }
    }
}
</style>
