<template lang="html">
    <div class="rich-text">
        <div
            v-if="textBlocks[0]"
            class="text"
            v-html="textBlocks[0]"
        />

        <div
            v-if="image"
            class="image-block"
        >
            <responsive-image
                v-if="image"
                class="image"
                :image="image"
                :aspect-ratio="56.25"
            />
            <div
                v-if="image.caption"
                class="caption"
                v-html="image.caption"
            />
        </div>

        <div
            v-if="textBlocks[1]"
            class="text"
            v-html="textBlocks[1]"
        />

        <pull-quote
            v-if="pullQuote"
            class="pull-quote"
            :text="pullQuote.text"
            :attribution="pullQuote.attribution"
        />
        <div
            v-if="textBlocks[2]"
            class="text"
            v-html="textBlocks[2]"
        />
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        caption: {
            type: String,
            default: "",
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

        float: left;
    }

    .image {
        margin: 10px 10px 0 0;
        // display: inline;
        width: 448px;
    }

    ::v-deep .caption {
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
}
</style>
