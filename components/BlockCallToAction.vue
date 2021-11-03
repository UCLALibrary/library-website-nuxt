<template lang="html">
    <div
        :class="classes"
    >
        <component
            :is="parsedSvgName"
            class="svg"
        />
        <div
            class="title"
            v-html="title"
        />
        <div
            class="text"
            v-html="text"
        />
        <button-link
            :label="name"
            :to="to"
            class="button-link"
        />
    </div>
</template>

<script>
export default {
    components: {
        SvgCallToActionMoney: () => import("~/assets/svg/call-to-action-money"),
        SvgCallToActionChat: () => import("~/assets/svg/call-to-action-chat"),
        SvgCallToActionMail: () => import("~/assets/svg/call-to-action-mail"),
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
        parsedSvgName() {
            return `${this.svgName}`
        },
    },
}
</script>

<style lang="scss" scoped>
.block-call-to-action {
    max-width: var(--block-width);
    max-height: var(--block-height);
    background-color: var(--color-background);
    padding: 20px 0;
    height: 100%;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    // Sizes
    &.full-width {
        --block-width: 1046px;
        --block-height: 700px;
        --block-padding-title: 70px;
        --block-padding-text: 10px;
    }

    &.half-width {
        --block-width: calc((1046px / 2) - 10px);
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
        --button-link-bg-color-hover:  var(--color-white);
        --button-link-color-hover: var(--color-black);
    }

    &.theme-dark {
        --color-background:  var(--color-primary-blue-03);
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
        font-family: var(--font-primary);
        font-weight: 600;
        font-size: 36px;
        text-align: center;
        letter-spacing: .0025em;
        line-height: 100%;
        color: var(--color-title);
        padding-left: var(--block-padding-title);
        padding-right: var(--block-padding-title);
        margin-bottom: 16px;
        max-width: 640px;
    }

    .text {
        font-family: var(--font-primary);
        font-size: 20px;
        text-align: center;
        line-height: 30px;
        letter-spacing: .01em;
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
    @media #{$small} {
        width: 100%;

        &.full-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;
        }

        &.half-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;
        }

        .title {
            max-width: 234px;
        }

        .text {
            max-width: 234px;
        }
    }

    @media #{$medium}{

        &.full-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;
        }

        &.half-width {
            --block-padding-title: 48px;
            --block-padding-text: 48px;
        }
    }
}
</style>
