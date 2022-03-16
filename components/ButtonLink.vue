<template lang="html">
    <smart-link
        :to="to"
        :target="parsedTarget"
        :class="classes"
    >
        <span class="label">{{ label }}</span>
        <component
            :is="parsedIconName"
            class="arrow"
        />
    </smart-link>
</template>

<script>
// Helper functions
import isInternalLink from "~/utils/isInternalLink"

export default {
    components: {
        SvgArrowRight: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-arrow-right"),
        SvgArrowDiagonal: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-external-link"
            ),
        SvgArrowDownload: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-download"
            ),
    },
    props: {
        /**
         * Determines what text the button should have.
         */
        to: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "",
        },
        /**
         * Determines what icon should be used in button.
         */
        iconName: {
            type: String,
            default: "",
        },
        /**
         * Determines if the button should be displayed with secondary styles.
         */
        isSecondary: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                "button-link",
                {
                    "is-secondary": this.isSecondary,
                },
            ]
        },
        parsedTarget() {
            return isInternalLink(this.to) ? "_self" : "blank"
        },
        parsedIconName() {
            let output = ""
            if (this.iconName == "svg-arrow-download") {
                output = "svg-arrow-download"
            } else if (!this.iconName && isInternalLink(this.to)) {
                output = "svg-arrow-right"
            } else output = "svg-arrow-diagonal"
            return output
        },
    },
}
</script>

<style lang="scss" scoped>
// the button bg starts white with blue icons
.button-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background-color: var(--color-white);
    border: 1.5px solid var(--color-primary-blue-02);
    font-size: 18px;
    color: var(--color-black);
    padding: 14px 40px;
    transition-property: color, background-color;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;
    .arrow {
        stroke: var(--color-default-cyan-03);
        padding-top: 5px;
        padding-left: 5px;
    }

    // the button bg starts blue with white icons
    &.is-secondary {
        background-color: var(--color-primary-blue-03);
        border: unset;
        color: var(--color-white);
        .arrow {
            .svg__stroke--primary-blue-03 {
                stroke: var(--color-white);
            }
        }
        .svg__icon-external-link,
        .svg__icon-download {
            .svg__stroke--primary-blue-03 {
                stroke: var(--color-white);
            }
            .svg__fill--primary-blue-03 {
                fill: var(--color-white);
                stroke: transparent;
            }
        }
    }

    // Hover states
    @media #{$has-hover} {
        &:hover {
            background-color: var(--color-primary-blue-03);
            border: unset;
            color: var(--color-white);
            cursor: pointer;
            .arrow {
                stroke: var(--color-white);
            }

            &.is-secondary {
                background-color: var(--color-white);
                border: 1.5px solid var(--color-primary-blue-02);
                color: var(--color-black);
                .arrow {
                    .svg__stroke--primary-blue-03 {
                        stroke: var(--color-default-cyan-03);
                    }
                }
                .svg__icon-external-link,
                .svg__icon-download {
                    .svg__stroke--primary-blue-03 {
                        stroke: var(--color-default-cyan-03);
                    }
                    .svg__fill--primary-blue-03 {
                        fill: var(--color-default-cyan-03);
                        stroke: transparent;
                    }
                }
                .line {
                    stroke: var(--color-default-cyan-03);
                }
            }
        }
    }
    // Breakpoints
    @media #{$small} {
        width: auto;
        height: 44px;
        margin: 0 var(--unit-gutter);
    }
}
</style>
