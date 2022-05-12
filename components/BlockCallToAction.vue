<template lang="html">
    <div :class="classes">
        <component
            :is="parsedContent.svgName"
            class="svg"
        />
        <div
            class="title"
            v-html="parsedContent.title"
        />
        <div
            class="text"
            v-html="parsedContent.text"
        />
        <button-link
            :label="parsedContent.label"
            :to="parsedContent.to"
            class="button-link"
        />
    </div>
</template>

<script>
export default {
    components: {
        SvgCallToActionMoney: () => import("~/assets/svg/call-to-action-money"),
        SvgCallToActionChat: () => import("~/assets/svg/call-to-action-chat"),
        SvgCallToActionMail: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/call-to-action-mail"
            ),
        SvgCallToActionFind: () => import("~/assets/svg/call-to-action-find"),
    },
    props: {
        svgName: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        text: {
            type: String,
            default: "",
        },
        name: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
        isDark: {
            type: Boolean,
            default: false,
        },
        isSmallSize: {
            type: Boolean,
            default: false,
        },
        isGlobal: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                "block-call-to-action",
                { "full-width": !this.isSmallSize },
                { "half-width": this.isSmallSize },
                { "theme-light": !this.isDark },
                { "theme-dark": this.isDark },
            ]
        },
        askALibrarian() {
            return this.$store.state.globals.askALibrarian
        },
        // Use Global Ask A Libarian data if isGlobal is true
        parsedContent() {
            if (this.isGlobal) {
                return {
                    to: this.askALibrarian.buttonUrl[0].buttonUrl,
                    title: this.askALibrarian.askALibrarianTitle,
                    text: this.askALibrarian.askALibrarianText,
                    label: this.askALibrarian.buttonUrl[0].buttonText,
                    svgName: "svg-call-to-action-chat",
                }
            } else {
                return {
                    to: this.to,
                    title: this.title,
                    text: this.text,
                    label: this.name,
                    svgName: this.svgName,
                }
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.block-call-to-action {
    max-width: var(--block-width);
    background-color: var(--color-background);
    height: auto;
    margin: var(--unit-gutter) auto;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    // Sizes
    &.full-width {
        --block-width: #{$container-l-cta}px;
        --block-height: 700px;
        --block-padding-title: 70px;
        --block-padding-text: 10px;
    }

    &.half-width {
        --block-width: calc((#{$container-l-cta} / 2) - 10px);
        --block-height: 566px;
        --block-padding-title: 114px;
        --block-padding-text: 112px;
    }

    // Color Themes
    &.theme-light {
        --color-background: var(--color-primary-blue-01);
        --color-title: var(--color-primary-blue-03);
        --color-text: var(--color-black);
        --color-button-background: var(--color-primary-blue-03);
        --color-svg-molecule-outline: var(--color-primary-blue-03);
        --color-svg-molecule-inner-highlight: var(--color-help-green-03);
        // Hover
        --button-link-border-hover: 2px solid var(--color-primary-blue-02);
        --button-link-bg-color-hover: var(--color-white);
        --button-link-color-hover: var(--color-black);
    }

    &.theme-dark {
        --color-background: var(--color-primary-blue-03);
        --color-title: var(--color-white);
        --color-text: var(--color-white);
        --color-svg-molecule-outline: var(--color-primary-blue-02);
        --color-svg-molecule-inner-highlight: var(--color-white);
        --color-button-background: var(--color-primary-blue-03);
        --color-button-border: 2px solid var(--color-default-cyan-02);
        // Hover
        --button-link-border-hover: 2px solid var(--color-white);
        --button-link-color-hover: var(--color-white);
    }

    .svg {
        margin-bottom: 32px;
        margin-top: 60px;

        flex-grow: 0;
        flex-shrink: 0;

        .outline {
            stroke: var(--color-svg-molecule-outline);
        }

        .color {
            stroke: var(--color-svg-molecule-inner-highlight);
        }
    }

    .title {
        @include step-2;
        line-height: $line-height--1;
        text-align: center;
        letter-spacing: 0.0025em;
        color: var(--color-title);
        padding-left: var(--block-padding-title);
        padding-right: var(--block-padding-title);
        margin-bottom: 16px;
        max-width: 640px;
    }

    .text {
        @include step-0;
        text-align: center;
        color: var(--color-text);
        padding-left: var(--block-padding-text);
        padding-right: var(--block-padding-text);
        margin-bottom: 32px;
        max-width: 640px;
    }

    .button-link {
        width: 280px;
        font-size: 20px;
        background-color: var(--color-button-background);
        color: var(--color-white);
        margin-bottom: 60px;
        border: var(--color-button-border);
    }

    // Hover
    @media #{$has-hover} {
        .button-link:hover {
            border: var(--button-link-border-hover);
            background-color: var(--button-link-bg-color-hover);
            color: var(--button-link-color-hover);
        }
    }

    // Breakpoints
    @media #{$medium} {
        &.full-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;

            margin: var(--unit-gutter);
        }

        &.half-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;
        }

        .title,
        .text {
            padding: 0;
        }
    }

    @media #{$small} {
        width: 100%;

        &.full-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;

            margin: 0;
        }

        &.half-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;
        }
    }
}
</style>
