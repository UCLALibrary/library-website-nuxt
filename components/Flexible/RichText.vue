<template lang="html">
    <div
        class="rich-text"
        v-html="parsedRichText"
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
        parsedRichText() {
            return this.block.richText
        },
        classes() {
            return ["rich-text", "p", "blockquote"]
        },
    },
}
</script>

<style lang="scss" scoped>
.rich-text {
    max-width: 832px;

    //TODO figure out how to style html elements as they come in from the props
    p {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--color-black);
    }

    blockquote {
        color: red;
    }
}
</style>
