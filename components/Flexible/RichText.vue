<template lang="html">
    <div class="rich-text">
        <divider-way-finder class="divider-way-finder" />
        <div
            class="text"
            v-html="parsedRichText"
        />
    </div>
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
    },
}
</script>

<style lang="scss" scoped>
.rich-text {
    .divider-way-finder {
        width: 100%;
    }

    .text {
        max-width: 832px;
    }

    /deep/ h3 {
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
        max-width: 448px;
        padding: 16px 16px 32px 16px;
    }

    /deep/ iframe {
        max-width: 448px;
    }
    /deep/ figure {
        max-width: 448px;
        margin: 10px 10px 10px 10px;
        display: inline;
        // width: 448 !important;
        max-width: 448px !important;
    }
    /deep/ img {
        max-width: 448px;
    }
}
</style>
