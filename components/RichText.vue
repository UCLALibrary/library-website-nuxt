<template lang="html">
    <div class="rich-text">
        <div
            v-if="textBlocks[0]"
            class="text"
            v-html="textBlocks[0]"
        />

        <div
            v-if="images[0]"
            class="image-block"
        >
            <responsive-image
                v-if="images[0]"
                class="image"
                :image="images[0]"
                :aspect-ratio="parsedRatio"
            />
            <div
                v-if="images[0].caption"
                class="caption"
                v-html="images[0].caption"
            />
        </div>

        <div
            v-if="textBlocks[1]"
            class="text"
            v-html="textBlocks[1]"
        />
        <div
            v-if="images[1]"
            class="image-block"
        >
            <responsive-image
                v-if="images[1]"
                class="image"
                :image="images[1]"
                :aspect-ratio="parsedRatio"
            />
            <div
                v-if="images[1].caption"
                class="caption"
                v-html="images[1].caption"
            />
        </div>

        <div
            v-if="textBlocks[2]"
            class="text"
            v-html="textBlocks[2]"
        />
        <div
            v-if="images[2]"
            class="image-block"
        >
            <responsive-image
                v-if="images[2]"
                class="image"
                :image="images[2]"
                :aspect-ratio="parsedRatio"
            />
            <div
                v-if="images[2].caption"
                class="caption"
                v-html="images[2].caption"
            />
        </div>

        <div
            v-if="textBlocks[3]"
            class="text"
            v-html="textBlocks[3]"
        />
        <pull-quote
            v-if="pullQuote"
            class="pull-quote"
            :text="pullQuote.text"
            :attribution="pullQuote.attribution"
        />
        <div
            v-if="textBlocks[4]"
            class="text"
            v-html="textBlocks[4]"
        />
    </div>
</template>

<script>
export default {
    props: {
        //Array of image objects
        images: {
            type: Array,
            default: () => [],
        },
        pullQuote: {
            type: Object,
            default: () => {},
        },
        textBlocks: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        parsedRatio() {
            // If on mobile, change ratio of image
            let output = this.ratio
            if (this.$store.state.winWidth <= 750) {
                output = 100
            }
            return output
        },
    },
}
</script>

<style lang="scss" scoped>
.rich-text {
    max-width: 832px;
    margin: var(--unit-gutter) auto;
    padding: 0 var(--unit-gutter);
    .text {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--color-black);
    }
    .image-block {
        display: flex;
        flex-direction: column;

        width: 832px;
    }
    .image {
        margin: 30px 10px 0 0;
    }
    .caption {
        font-family: var(--font-secondary);
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.01em;
        color: var(--color-secondary-grey-05);
        padding: 16px 16px 26px 16px;
    }
    .pull-quote {
        margin: 20px 10px 20px 0;
    }

    // Breakpoints
    @media #{$small} {
        .image-block {
            max-width: 300px;
        }
    }
}
</style>
