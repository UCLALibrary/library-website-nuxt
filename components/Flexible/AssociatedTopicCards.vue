<template lang="html">
    <section-cards-with-illustrations
        :items="block.associatedTopicsFlexiblePageBlock[0].topics"
        :title="block.sectionTitle"
        :text="block.sectionSummary"
        :is-horizontal="false"
    />
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedContent() {
            const mediaWithText = this.block.mediaWithText
            return mediaWithText.map((obj) => {
                return {
                    ...obj,
                    parsedTitle: obj.titleLink
                        ? obj.titleLink
                        : obj.titleUpload,
                    parsedIsVideo: obj.typeMedia == "video" ? true : false,
                    parsedIsAudio: obj.typeMedia == "audio" ? true : false,
                    parsedButtonUrl:
                        obj.upload && obj.typeMedia == "other"
                            ? obj.upload[0].src
                            : obj.buttonUrl,
                }
            })
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

    .section-header {
        margin-bottom: var(--space-xl);
    }

    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }

    .section-summary {
        @include step-0;
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
