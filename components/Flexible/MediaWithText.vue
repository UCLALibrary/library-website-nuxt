<template lang="html">
    <div class="media-with-text">
        <div class="text-grouping">
            <div
                class="section-header"
                v-html="parsedContent[0].sectionHeader"
            />
            <responsive-image
                v-if="parsedContent[0].image[0]"
                :image="parsedContent[0].image[0]"
                :class="parsedContent[0].mobileClasses"
            />
            <div
                v-if="parsedContent[0].shortDescription"
                class="short-description"
                v-html="parsedContent[0].shortDescription"
            />
            <button-link
                class="button"
                :label="parsedContent[0].buttonText"
                :is-secondary="true"
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
            <responsive-image
                v-if="parsedContent[0].image[0]"
                :image="parsedContent[0].image[0]"
                :class="parsedContent[0].classes"
            />
        </div>
    </div>
</template>

<script>
// SVGs
import SvgArrowRightSmall from "~/assets/svg/arrow-right-small"
import SvgArrowDiagonal from "~/assets/svg/arrow-diagonal"

export default {
    components: {
        SvgArrowRightSmall,
        SvgArrowDiagonal,
    },
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedContent() {
            const mediaWithText = this.block.mediaWithText
            let output = ["image"]
            let mobile = ["image-mobile"]
            // switch (this.block.mediaWithText[0]) {
            //     case this.isVideo:
            //         output = ["image", "image-mobile", "image-video"]
            //         break
            //     case this.isAudio:
            //         output = ["image", "image-mobile", "image-audio"]
            //         break
            // }
            return mediaWithText.map((obj) => {
                console.log(obj)
                return {
                    ...obj,
                    classes: output,
                    mobileClasses: mobile,
                }
            })
        },
        isVideo() {
            return false
        },
        isAudio() {
            return false
        },

        isInternalLink() {
            return this.to.includes("library.ucla.edu") ? true : false
        },
        parsedTarget() {
            return this.isInternalLink ? "_self" : "blank"
        },
        parsedIconName() {
            return this.isInternalLink
                ? "svg-arrow-right-small"
                : "svg-arrow-diagonal"
        },
    },
}
</script>

<style lang="scss" scoped>
.media-with-text {
    display: flex;
    flex-direction: row;
    // flex-wrap: nowrap;
    // align-content: center;
    // align-items: center;

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
    .image {
        width: 426px;
        height: 240px;
        z-index: 0;
        position: relative;
    }
    .image-mobile {
        display: none;
    }

    .floating-highlight {
        z-index: 30;
        position: absolute;
        width: 123px;
        top: 156px;
        // left: 6px;
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
        width: 125px;
        height: 84px;
        box-sizing: border-box;
        background-color: var(--color-white);
        clip-path: polygon(
            0 0,
            calc(100% - 39px) 0,
            100% 84px,
            calc(100% - 1.5px) 84px,
            0 84px,
            0 1.5px
        );

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding-left: 32px;
        color: var(--color-primary-blue-03);
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
            .image {
                display: none;
            }
            .image-mobile {
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
