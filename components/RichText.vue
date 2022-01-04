<template lang="html">
    <div class="rich-text">
        <div
            v-if="textBlocks[0]"
            class="text"
            v-html="textBlocks[0]"
        />

        <responsive-image
            v-if="image"
            class="image"
            :image="image"
            :caption="caption"
        />

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

    .text {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--color-black);
    }

    .image {
        margin: 10px 10px 10px 0px;
        // display: inline;
        width: 292px;
        float: left;
    }

    .pull-quote {
        margin: 10px 10px 10px 10px;
    }
}
</style>
