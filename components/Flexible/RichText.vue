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
        isIframe() {
            return this.parsedRichText.includes("<iframe")
        },
    },
}
</script>

<style lang="scss" scoped>
.rich-text {
    max-width: 832px;

    /deep/ h2 {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 48px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--color-black);
    }
    /deep/ p {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--color-black);
    }

    /deep/ blockquote {
        background-color: var(--color-white);
        max-width: var(--container-width);
        text-align: left;
        font-family: var(--font-primary);
        font-size: 24px;
        font-style: italic;
        font-weight: 600;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--color-primary-blue-03);
        border-left: 4px solid var(--color-default-cyan-03);
        border-radius: 2px;
        padding: 24px var(--spacing-text-left);
        --spacing-text-left: 64px;
        --container-width: 600px;
    }

    /deep/ figcaption {
        font-family: var(--font-secondary);
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.01em;
        color: var(--color-secondary-grey-05);

        padding: 16px 16px 32px 16px;
    }

    // /deep/ iframe {
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    //     height: 100%;
    //     width: 100%;
    //     object-fit: contain;
    // }
}
</style>
