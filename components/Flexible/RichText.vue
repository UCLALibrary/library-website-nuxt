<template lang="html">
    <div class="rich-text">
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
    max-width: $content-width-02 + px;
    margin: var(--unit-gutter) auto;
    // padding: 0 var(--unit-gutter);
    padding-right: 96px;

    .text {
    }

    ::v-deep h3 {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 48px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--color-black);
    }
    ::v-deep p {
        font-family: var(--font-primary);
        font-weight: 400;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: var(--color-black);
    }

    ::v-deep blockquote {
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
        // margin: 20px 10px 20px 0;
    }

    ::v-deep figure {
        display: flex;
        flex-direction: column;

        max-width: 100%;
    }
    ::v-deep figcaption {
        font-family: var(--font-secondary);
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.01em;
        color: var(--color-secondary-grey-05);
        padding: 16px 16px 26px 16px;
    }

    ::v-deep iframe {
        max-width: 100%;
        object-fit: cover;
    }

    ::v-deep img {
        max-width: 100%;
        object-fit: cover;
    }

    // Breakpoints
    @media #{$small} {
        // .image-block {
        // max-width: 300px;
        // }
    }

    @media #{$medium} {
        padding: 0 $margin-02 + px;
        max-width: 928px;
    }
}
</style>
