<template lang="html">
    <div :class="sizeClasses">
        <div :class="themeClasses">
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
        isDarkBlue: {
            type: Boolean,
            default: false,
        },
        isSmallSize: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        parsedSvgName() {
            return `${this.svgName}`
        },

        themeClasses() {
            let theme = ["container", "theme-light" ]
            if (this.isDarkBlue) {
                theme = ["container", "theme-dark" ]
            }
            return theme
        },
        sizeClasses() {
            let size= ["block-call-to-action", "full-width"]
            if (this.isSmallSize) {
                size = ["block-call-to-action", "half-width"]
            }
            return size
        },
    },
}
</script>

<style lang="scss" scoped>
.block-call-to-action {
    max-width: var(--block-width);
    max-height: var(--block-height);
    margin-left: auto;
    margin-right: auto;

    // Sizes
    &.full-width {
        --block-width: var(--unit-container-max-default);
        --block-height: 700px;
        --block-padding-title: 70px;
        --block-padding-text: 10px;
    }

    &.half-width {
        --block-width: var(--unit-container-max-half-width);
        --block-height: 566px;
        --block-padding-title: 114px;
        --block-padding-text: 112px;
    }

    .container {
        background-color: var(--color-background);
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;

        &.theme-light {
            --color-background: var(--color-primary-blue-01);
            --color-title: var(--color-primary-blue-03);
            --color-text: var(--color-black);
            --color-button-background: var(--color-primary-blue-03);
            --color-svg-molecule-outline: var(--color-primary-blue-03); // outer polygon
            --color-svg-molecule-inner-highlight: var(--color-help-green-03); // inner polygon highlight
        }

        &.theme-dark {
            --color-background:  var(--color-primary-blue-03);
            --color-title: var(--color-white); 
            --color-text: var(--color-white);
            --color-button-background: var(--color-secondary-blue-03);
            --color-svg-molecule-outline: var(--color-primary-blue-02); // outer polygon
            --color-svg-molecule-inner-highlight: var(--color-white); // inner polygon highlight
            --color-button-border: 2px solid var(--color-default-cyan-02);
        }
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
        line-height: 100%;
        letter-spacing: .0025em;
        color: var(--color-title);
        text-align: center;
        padding-left: var(--block-padding-title);
        padding-right: var(--block-padding-title);
        max-width: 640px;
        margin-bottom: 16px;
    }

    .text {
        font-size: 20px;
        font-family: var(--font-primary);
        line-height: 30px;
        letter-spacing: .01em;
        color: var(--color-text);
        text-align: center;
        padding-left: var(--block-padding-text);
        padding-right: var(--block-padding-text);
        max-width: 640px;
        margin-bottom: 32px;
    }

    .button-link {
        width: 280px;
        font-size: 20px;
        background-color: var(--color-button-background);
        color: var(--color-white);
        margin-bottom: 60px;
        border: var(--color-button-border);
    }
}
</style>
