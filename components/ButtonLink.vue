<template lang="html">
    <div :class="classes">
        <span class="label">{{ label }}</span>
        <span
            v-if="iconName"
            class="icon"
        >
            <component
                :is="parsedIconName"
                class="arrow"
            />
        </span>
    </div>
</template>

<script>
export default {
    components: {
        SvgArrowRight: () => import("~/assets/svg/arrow-right-small"),
        SvgArrowDiagonal: () => import("~/assets/svg/arrow-diagonal"),
        SvgArrowDownload: () => import("~/assets/svg/arrow-download"),
    },
    props: {
        /**
         * Determines what text the button should have.
         */
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
        parsedIconName() {
            return `${this.iconName}`
        },
    },
}
</script>

<style lang="scss" scoped>
.button-link {
    display: flex;
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

    &.is-secondary {
        background-color: var(--color-primary-blue-03);
        border: unset;
        color: var(--color-white);
        .arrow {
            stroke: var(--color-white);
            // fill: var(--color-white);
        }
        .line {
            stroke: var(--color-white);
        }
        .arrow-diagonal {
            fill: var(--color-white);
        }
        .arrow-download {
            fill: var(--color-white);
            stroke: var(--color-white);
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
                    stroke: var(--color-default-cyan-03);
                }
                .arrow-diagonal {
                    fill: var(--color-default-cyan-03);
                }
                .arrow-download {
                    fill: var(--color-default-cyan-03);
                    stroke: var(--color-default-cyan-03);
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
