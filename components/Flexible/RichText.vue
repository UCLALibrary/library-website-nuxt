<template lang="html">
    <div class="rich-text">
        <div
            class="parsed-content"
            v-html="parsedContent"
        />
    </div>
</template>

<script>
export default {
    components: {},

    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedContent() {
            return this.block.richText
        },
    },
}
</script>

<style lang="scss" scoped>
.rich-text {
    max-width: $content-width-02 + px;
    margin: var(--unit-gutter) auto;
    padding-right: 96px;

    ::v-deep h3 {
        font-family: var(--font-primary);
        color: var(--color-black);
        @include step-3;
    }
    ::v-deep h4 {
        font-family: var(--font-primary);
        color: var(--color-black);
        @include step-2;
    }
    ::v-deep h5 {
        font-family: var(--font-primary);
        color: var(--color-black);
        @include step-1;
    }
    ::v-deep p,
    ::v-deep li {
        font-family: var(--font-primary);
        color: var(--color-black);
        @include step-0;
    }

    ::v-deep blockquote {
        border-left: 4px solid var(--color-default-cyan-03);
        border-radius: 2px;
        padding: 24px var(--spacing-text-left);
        --spacing-text-left: 64px;
        --container-width: 600px;

        font-weight: 400;
        font-size: 20px;
        font-style: normal;
        line-height: 140%;
        align-items: center;
        text-transform: uppercase;
        color: var(--color-secondary-grey-05);
        margin-left: 50px;

        // margin: 20px 10px 20px 0;
        p {
            font-size: 24px;
            font-style: italic;
            font-weight: 600;
            line-height: 150%;
            letter-spacing: 0.01em;
            color: var(--color-primary-blue-03);
            font-family: var(--font-primary);
            text-transform: none;
        }
    }

    ::v-deep figure {
        display: flex;
        flex-direction: column;

        max-width: 50% !important;
        width: 50% !important;
        height: auto !important;
        margin-left: 0 !important;
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
        // max-width: 50% !important;

        object-fit: cover;
    }

    ::v-deep img {
        // max-width: 50%;
        object-fit: cover;
    }

    ::v-deep a {
        text-decoration: underline;
        text-decoration-color: var(--color-default-cyan-03);
        text-decoration-thickness: 2px;
        text-underline-offset: 1px;

        font-family: var(--font-primary);
        color: var(--color-black);
        @include step-0;
    }
    ::v-deep ul,
    ::v-deep ol {
        padding: 0 16px;
        margin-bottom: 24px;
    }
    ::v-deep ol {
        li {
            padding-left: 16px;
            margin-bottom: 20px;
        }
        ::marker {
            font-family: var(--font-secondary);
            font-size: 20px;
            line-height: 1;
            color: var(--color-primary-blue-03);
        }
    }

    ::v-deep ul {
        li {
            padding-left: 16px;
            margin-bottom: 20px;
        }
        ::marker {
            content: url(~/assets/svg/molecule-bullet.svg?url);
        }
    }

    // Hover states
    @media #{$has-hover} {
        ::v-deep a:hover {
            color: var(--color-primary-blue-03);
            @include hover;
        }
    }

    // Breakpoints
    @media #{$medium} {
        .rich-text {
            padding: 0 $margin-02 + px;
            max-width: 928px;
        }
    }

    @media #{$small} {
        ::v-deep figure {
            display: flex;
            flex-direction: column;

            max-width: 100% !important;
            width: 100% !important;
            height: auto !important;
        }
        ::v-deep iframe {
            max-width: 100% !important;
            width: 100% !important;
            height: auto !important;
        }
        ::v-deep blockquote {
            --spacing-text-left: 24px;
            --container-width: 100%;
        }
    }
}
</style>
