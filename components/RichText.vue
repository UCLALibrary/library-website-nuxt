<template lang="html">
    <div class="rich-text">
        <div
            class="parsed-content"
            v-html="richTextContent"
        />
        <slot />
    </div>
</template>

<script>
export default {
    components: {},

    props: {
        richTextContent: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.rich-text {
    max-width: $container-l-main + px;
    margin: 0 auto;
    padding-right: 96px;

    ::v-deep h3 {
        font-family: var(--font-primary);
        color: var(--color-primary-blue-03);
        @include step-3;
        margin-bottom: var(--space-l);
        margin-top: var(--space-xl);
    }
    ::v-deep h4 {
        font-family: var(--font-primary);
        color: var(--color-primary-blue-03);
        @include step-2;
        margin-bottom: 24px;
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
        margin: var(--space-l) 0;
    }

    ::v-deep p:only-child {
        margin: 0;
    }

    ::v-deep p:last-child {
        margin-bottom: 0;
    }

    ::v-deep blockquote {
        border-left: 4px solid var(--color-default-cyan-03);
        border-radius: 2px;
        padding: 24px var(--spacing-text-left);
        --spacing-text-left: 64px;
        --container-width: $container-m-text + px;

        font-weight: 400;
        font-size: 20px;
        font-style: normal;
        line-height: 140%;
        align-items: center;
        text-transform: uppercase;
        color: var(--color-secondary-grey-05);
        margin-left: 50px;

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

    ::v-deep .figure {
        width: 50%;
        margin: var(--space-s);

        display: flex;
        flex-direction: column;
    }

    ::v-deep .image-right {
        float: right;
        margin-left: var(--space-s);
    }

    ::v-deep .image-left {
        float: left;
        margin-right: var(--space-s);
    }

    ::v-deep figcaption {
        font-family: var(--font-secondary);
        @include step--1;
        color: var(--color-secondary-grey-05);
        padding: 16px 16px 26px 16px;
    }

    ::v-deep iframe {
        width: 100%;
        height: 400px;
        object-fit: cover;
    }

    ::v-deep img {
        height: auto;
        object-fit: cover;
    }

    ::v-deep a {
        @include link-default;
        @include step-0;
        word-wrap: break-word;

        &:hover {
            @include link-hover;
        }
    }
    ::v-deep ul,
    ::v-deep ol {
        padding: 0 16px;
        margin: 0 0 32px;

        li {
            margin: var(--space-m) 0;
            padding-left: 16px;
            @include step-0;
        }
    }
    ::v-deep ol {
        margin-left: 24px;

        ::marker {
            font-family: var(--font-secondary);
            font-size: 20px;
            line-height: 1;
            color: var(--color-primary-blue-03);
        }
    }

    ::v-deep ul {
        list-style: none;
        list-style-position: outside;
    }

    ::v-deep ul li {
        background-image: url(~/assets/svg/molecule-bullet.svg?url);
        background-repeat: no-repeat;
        background-position-y: 5px; // This will shift the bullet down as needed
        background-size: 24px;
        padding-left: 40px;
    }

    ::v-deep table {
        padding: var(--space-xl);
        border: 2px solid var(--color-primary-blue-01);
        border-radius: 4px;
        width: 100%;

        th {
            @include step-0;
            font-weight: $font-weight-medium;
            color: var(--color-primary-blue-5);
        }
        tr {
            border-bottom: 2px dotted var(---color-secondary-grey-03);
            margin-bottom: 16px;
        }
        // no border on last row
        tr:last-child > td {
            border-bottom: 0;
        }
        td {
            @include step-0;
            color: var(--color-black);
        }
    }

    // Breakpoints
    @media #{$medium} {
        padding-right: 0;
        max-width: $container-l-main + px;
    }

    @media #{$small} {
        ::v-deep .figure {
            width: 100%;
            height: auto;
        }
        ::v-deep iframe {
            width: 100%;
            width: 100%;
            height: auto;
        }
        ::v-deep blockquote {
            --spacing-text-left: 24px;
            --container-width: 100%;
        }
    }
}
</style>
