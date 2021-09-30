<template lang="html">
    <div :class="classes">
        <span class="label">{{ label }}</span>
        <span
            v-if="iconName"
            class="icon"
        >
            <arrow-right class="arrow-right" />
        </span>
    </div>
</template>

<script>
import ArrowRight from "~/assets/svg/arrow-right-small"

export default {
    components: {
        ArrowRight,
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
    },
}
</script>

<style lang="scss" scoped>
.button-link {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    height: 50px;
    background-color: var(--color-white);
    border: 1.5px solid var(--color-primary-blue-02);
    font-size: 18px;
    color: var(--color-black);
    padding: 14px 40px;

    transition-property: color, background-color;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

    .arrow-right {
        stroke: var(--color-default-cyan-03);
        padding-top: 5px;
    }

    &.is-secondary {
        background-color: var(--color-primary-blue-03);
        border: unset;
        color: var(--color-white);
        .arrow-right {
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
            .arrow-right {
                stroke: var(--color-white);
            }
            &.is-secondary {
                background-color: var(--color-white);
                border: 1.5px solid var(--color-primary-blue-02);
                color: var(--color-black);
                .arrow-right {
                    stroke: var(--color-default-cyan-03);
                }
            }
        }
    }
    // Breakpoints
    @media #{$lte-phone} {
        width: auto;
        height: 44px;
        margin: 0 var(--unit-gutter);
    }
}
</style>
