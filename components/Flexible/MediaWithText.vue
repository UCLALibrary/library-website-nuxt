<template lang="html">
    <div class="media-with-text">
        <div class="text-grouping">
            <div
                class="section-header"
                v-html="parsedContent.sectionHeader"
            />
            <div
                class="short-description"
                v-html="parsedContent.shortDescription"
            />
            <button-link
                class="button"
                :label="parsedContent.buttonText"
                :is-secondary="true"
            />
        </div>
        <responsive-image
            :image="parsedContent.image[0]"
            class="image"
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
            return this.block.mediaWithText[0]
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
    .button {
        width: 176px;
    }

    // // Breakpoints
    // @media #{$medium} {
    //     width: 300px;
    // }
    //
}
</style>
