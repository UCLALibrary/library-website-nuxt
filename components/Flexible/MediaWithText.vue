<template lang="html">
    <div class="media-with-text">
        <div class="text-grouping">
            <h3
                class="section-header"
                v-html="sectionHeader"
            />
            <div class="meta-mobile">
                <responsive-image
                    v-if="image"
                    :image="image"
                    class="image-mobile"
                />
                <div
                    v-else
                    class="no-image-mobile"
                />
                <div class="clippy">
                    <div
                        v-if="isVideo || isAudio"
                        class="floating-highlight-mobile"
                    />
                    <div
                        v-if="isVideo || isAudio"
                        class="clipped-date-mobile"
                    />
                    <svg-icon-play-filled
                        v-if="isVideo || isAudio"
                        class="icon-play-filled-mobile"
                    />
                </div>
                <svg-icon-headphones
                    v-if="isAudio"
                    class="icon-headphones-mobile"
                />
            </div>
            <div
                v-if="shortDescription"
                class="short-description"
                v-html="shortDescription"
            />
            <button-link
                v-if="to"
                class="button"
                :label="buttonText"
                :is-secondary="true"
                :to="to"
                :icon-name="parsedIconName"
            />
        </div>
        <div class="meta">
            <div class="clippy">
                <div
                    v-if="isVideo || isAudio"
                    class="floating-highlight"
                />
                <div
                    v-if="isVideo || isAudio"
                    class="clipped-date"
                />
                <svg-icon-play-filled
                    v-if="isVideo || isAudio"
                    class="icon-play-filled"
                />
            </div>
            <svg-icon-headphones
                v-if="isAudio"
                class="icon-headphones"
            />
            <svg-icon-headphones
                v-if="isAudio"
                class="icon-headphones"
            />
            <responsive-image
                v-if="image"
                :image="image"
                class="image"
            />
            <div
                v-else
                class="no-image"
            />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        SvgIconHeadphones: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-headphones"
            ),
        SvgIconPlayFilled: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-play"
            ),
    },
    props: {
        sectionHeader: {
            type: String,
            default: "",
        },
        shortDescription: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "",
        },
        iconName: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
        image: {
            type: Object,
            default: () => {},
        },
        isVertical: {
            type: Boolean,
            default: false,
        },
        isVideo: {
            type: Boolean,
            default: false,
        },
        isAudio: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        isInternalLink() {
            return this.to.includes("library.ucla.edu") ? true : false
        },
        parsedTarget() {
            return this.isInternalLink ? "_self" : "blank"
        },
        parsedIconName() {
            return this.iconName == "svg-arrow-right" && !this.isInternalLink
                ? "svg-arrow-diagonal"
                : this.iconName
        },
    },
}
</script>

<style lang="scss" scoped>
.media-with-text {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;

    max-width: $content-width-06 + px;

    .text-grouping {
        margin-right: 50px;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: flex-start;
        align-items: flex-start;
    }
    .section-header {
        @include step-3;
        color: var(--color-primary-blue-03);
        margin-bottom: 24px;
    }
    .short-description {
        @include step-0;
        margin-bottom: 24px;
    }
    .meta {
        max-width: 500px;
        z-index: 0;
        position: relative;
    }
    .image {
        z-index: 0;
        position: relative;
        max-width: 100%;
        min-width: 426px;
        height: auto;
    }
    .no-image {
        z-index: 0;
        position: relative;
        width: 426px;
        height: 240px;
        background-color: var(--color-primary-blue-02);
    }
    .meta-mobile {
        display: none;
    }
    .clippy {
        z-index: 100;
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .floating-highlight {
        z-index: 200;
        position: absolute;
        bottom: 8px;
        left: 5px;
        width: 112px;
        height: 72px;
        background-color: var(--color-visit-fushia-03);

        clip-path: polygon(
            0 0,
            calc(100% - 37px) 0,
            100% 75px,
            calc(100% - 1.5px) 75px,
            calc(100% - 38px) 1.5px,
            0 1.5px
        );
    }
    .clipped-date {
        bottom: 0;
        left: 0;
        z-index: 200;
        position: absolute;
        width: 112px;
        height: 72px;
        box-sizing: border-box;
        background-color: var(--color-white);

        clip-path: polygon(
            0 0,
            calc(100% - 38px) 0,
            100% 78px,
            calc(100% - 1.5px) 84px,
            0 84px,
            0 1.5px
        );
    }
    .svg__icon-play {
        fill: var(--color-primary-blue-03);
    }
    .icon-play-filled {
        z-index: 400;
        position: absolute;
        bottom: 16px;
        margin-left: 24px;
    }
    .icon-headphones {
        z-index: 400;
        position: absolute;
        left: 50%;
        margin-left: -40px;
        top: 50%;
        margin-top: -40px;
    }

    .button {
        width: 176px;
    }

    // Breakpoints
    @media #{$small} {
        &.media-with-text {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;

            max-width: 100%;

            .text-grouping {
                max-width: 100%;
                margin-right: 0;
            }
            .meta {
                display: none;
            }
            .meta-mobile {
                display: block;

                display: block;
                width: 100%;
                height: auto;
                margin-bottom: 24px;
                z-index: 0;
                position: relative;
            }
            .image-mobile {
                width: 100%;
                height: auto;
                z-index: 10;
                position: relative;
            }
            .no-image-mobile {
                width: 100%;
                height: 200px;
                z-index: 10;
                position: relative;
                background-color: var(--color-primary-blue-02);
            }
            .floating-highlight-mobile {
                z-index: 200;
                position: absolute;
                bottom: 8px;
                left: 5px;
                width: 112px;
                height: 72px;
                background-color: var(--color-visit-fushia-03);

                clip-path: polygon(
                    0 0,
                    calc(100% - 37px) 0,
                    100% 75px,
                    calc(100% - 1.5px) 75px,
                    calc(100% - 38px) 1.5px,
                    0 1.5px
                );
            }
            .clipped-date-mobile {
                bottom: 0;
                left: 0;
                z-index: 200;
                position: absolute;
                width: 112px;
                height: 72px;
                box-sizing: border-box;
                background-color: var(--color-white);

                clip-path: polygon(
                    0 0,
                    calc(100% - 38px) 0,
                    100% 78px,
                    calc(100% - 1.5px) 84px,
                    0 84px,
                    0 1.5px
                );
            }
            .icon-play-filled-mobile {
                z-index: 400;
                position: absolute;
                bottom: 16px;
                margin-left: 24px;
            }
            .icon-headphones-mobile {
                z-index: 400;
                position: absolute;
                left: 50%;
                margin-left: -40px;
                top: 50%;
                margin-top: -40px;
            }

            .button {
                width: 100%;
                margin-left: 0;
            }
        }
    }
}
</style>
