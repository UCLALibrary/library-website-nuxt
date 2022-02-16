<template lang="html">
    <div class="media-with-text">
        <div class="text-grouping">
            <div
                class="section-header"
                v-html="sectionHeader"
            />
            <responsive-image
                v-if="image"
                :image="image"
                :class="mobileImageClasses"
            />
            <div
                v-else
                class="no-image-mobile"
            />
            <div
                v-if="shortDescription"
                class="short-description"
                v-html="shortDescription"
            />
            <button-link
                class="button"
                :label="buttonText"
                :is-secondary="true"
                :to="to"
            />
        </div>
        <div class="meta">
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
            <svg-icon-headphones
                v-if="isAudio"
                class="icon-headphones"
            />
            <responsive-image
                v-if="image"
                :image="image"
                :class="imageClasses"
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
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-play-filled"
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
        imageClasses() {
            return this.isVertical
                ? ["image is-vertical"]
                : ["image is-horizontal"]
        },
        mobileImageClasses() {
            return this.isVertical
                ? ["image-mobile is-vertical"]
                : ["image-mobile is-horizontal"]
        },
        // isInternalLink() {
        //     return this.to.includes("library.ucla.edu") ? true : false
        // },
        // parsedTarget() {
        //     return this.isInternalLink ? "_self" : "blank"
        // },
        // parsedIconName() {
        //     return this.isInternalLink
        //         ? "svg-arrow-right-small"
        //         : "svg-arrow-diagonal"
        // },
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
        max-width: 40%;
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
    }
    .is-horizontal {
        width: 426px;
        height: 240px;
    }
    .is-vertical {
        width: 426px;
        height: 568px;
    }

    .no-image {
        z-index: 0;
        position: relative;
        width: 426px;
        height: 240px;
        background-color: var(--color-primary-blue-02);
    }

    .image-mobile {
        display: none;
    }
    .no-image-mobile {
        display: none;
    }

    .floating-highlight {
        z-index: 30;
        position: absolute;
        width: 123px;
        top: 156px;
        margin-left: 5px;
        height: 90px;
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
        margin-top: 54px;
        z-index: 30;
        position: absolute;
        top: 108px;
        width: calc(100% - 300px);
        height: calc(100% - 100px);
        box-sizing: border-box;
        background-color: var(--color-white);
        // background-color: blue;
        clip-path: polygon(
            0 0,
            calc(100% - 39px) 0,
            100% 84px,
            calc(100% - 1.5px) 84px,
            0 84px,
            0 1.5px
        );
    }
    .icon-play-filled {
        z-index: 40;
        position: absolute;
        top: 180px;
        margin-left: 16px;
    }
    .icon-headphones {
        z-index: 30;
        position: absolute;
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

            padding: 32px;

            .text-grouping {
                max-width: 100%;
                // margin-top: 50px;
                margin-right: 0;
            }
            .image,
            .no-image,
            .icon-play-filled,
            .icon-headphones {
                display: none;
            }
            .image-mobile,
            .no-image-mobile {
                display: block;
                width: 100%;
                height: auto;
                margin-bottom: 24px;
            }
            .floating-highlight {
                display: none;
            }
            .floating-highlight {
                display: none;
            }
            .clipped-date {
                display: none;
            }

            .button {
                width: 100%;
                margin-left: 0;
            }
        }
    }
}
</style>
