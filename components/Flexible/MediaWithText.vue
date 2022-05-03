<template lang="html">
    <div :class="classes">
        <div class="flexible-page-block-container">
            <h2 class="visually-hidden">
                Resources
            </h2>
            <div
                v-for="(item, index) in parsedContent"
                :key="`MediaWithTextKey${index}`"
                class="meta"
            >
                <block-media-with-text
                    :section-header="item.sectionHeader"
                    :short-description="item.description"
                    :image="item.parsedImage"
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
                let to = "/"
                // TODO
                // if (obj.mediaWithTextLink) {
                //     to = obj.mediaWithTextLink
                // } else if (obj.media.length && obj.media[0].url) {
                //     to = obj.media[0].url
                // }
                return {
                    ...obj,
                    parsedIsVideo: obj.mediaType == "video" ? true : false,
                    parsedIsAudio: obj.mediaType == "audio" ? true : false,
                    parsedTo: to,
                    parsedImage: obj.image ? obj.image[0] : "",
                    parsedIcon:
                        obj.mediaType == "otherResource"
                            ? "svg-arrow-download"
                            : "",
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
    justify-content: flex-end;
    background-color: var(--color-theme);

    width: 100%;

    .flexible-page-block-container {
        max-width: $container-l-main + px;
    }

    > .meta {
        width: 100%;
    }

    .visually-hidden {
        @include visually-hidden;
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
        .flexible-page-block-container {
            padding: 0 var(--unit-gutter);
        }

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
        .flexible-page-block-container {
            padding: 0 var(--unit-gutter);
        }

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
