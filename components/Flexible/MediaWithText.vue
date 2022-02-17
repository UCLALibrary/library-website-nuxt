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
        <responsive-image
            v-if="parsedContent[0].image[0]"
            :image="parsedContent[0].image[0]"
            :class="parsedContent[0].classes"
        />
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
    .image {
        width: 426px;
        height: 240px;
    }
    .image-mobile {
        display: none;
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

            .button {
                width: 100%;
                margin-left: 0;
            }
        }
    }
}
</style>
