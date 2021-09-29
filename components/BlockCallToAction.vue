<template lang="html">
    <div :class="sizeClasses">
        <div :class="colorClasses">
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
                icon-name="svg-arrow-right"
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

        colorClasses() {
            let output = ["container"]

            // TODO I don't think you need all these clases. Just have theme-dark OR theme-light

            if (this.isDarkBlue) {
                output = [
                    "container",
                    "color-dark-blue",
                    "color-light-title",
                    "color-light-text",
                    "color-dark-blue",
                    "color-theme-svg-outline-dark",
                    "color-theme-svg-lines-dark",
                ]
            }
            return output
        },
        sizeClasses() {
            let output = ["block-call-to-action"]
            if (this.isSmallSize) {
                // TODO Probably only need one class for all of this, size-small OR size-large

                output = [
                    "block-call-to-action",
                    "block-width-small",
                    "block-height-small",
                    "block-padding-title-small",
                    "block-padding-text-small",
                ]
            }
            return output
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
    background-color: var(--color-white);

    // Sizes
    --block-width: 1046px;
    &.block-width-small {
        --block-width: 500px;
    }

    --block-height: 700px;
    &.block-height-small {
        --block-height: 520px;
    }
    // Padding Sizes Title
    --block-padding-title: 70px;
    &.block-padding-title-small {
        --block-padding-title: 114px;
    }

    // Padding Sizes Text
    --block-padding-text: 10px;
    &.block-padding-text-small {
        --block-padding-text: 112px;
    }

    .container {
        background-color: var(--color-theme);
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;

        // Themes for background
        --color-theme: var(--color-primary-lightest-blue);

        &.color-dark-blue {
            --color-theme: var(--color-secondary-blue-02);
        }

        // Themes for title and text
        --color-title: var(--color-primary-blue);

        &.color-light-title {
            --color-title: var(--color-white);
        }
        --color-text: var(--color-primary-darkest-blue);

        &.color-light-text {
            --color-text: var(--color-white);
        }

        // Themes for button color
        --color-theme-button: var(--color-primary-blue);

        &.color-dark-blue {
            --color-theme-button: var(--color-secondary-blue-02);
        }

        // Themes for svg colors
        --color-theme-svg-outline: var(--color-primary-blue);

        &.color-theme-svg-outline-dark {
            --color-theme-svg-outline: var(--color-primary-light-blue);
        }

        // Themes for svg colors
        --color-theme-svg-lines: var(--color-help-green-base);

        &.color-theme-svg-lines-dark {
            --color-theme-svg-lines: var(--color-white);
        }
    }

    // NOTE Drew's quick code of what this could be
    // &.size-small {
    //     padding: 0 30px;
    //     max-width: 400px;
    // }
    // &.theme-dark {
    //     background-color: red;
    //
    //     .svg {
    //         stroke: green;
    //     }
    //     .color: {
    //         stroke: yellow;
    //     }
    // }

    .svg {
        margin-bottom: 35px;
        margin-top: 60px;

        flex-grow: 0;
        flex-shrink: 0;

        .outline {
            stroke: var(--color-theme-svg-outline);
        }

        .color {
            stroke: var(--color-theme-svg-lines);
        }
    }

    .title {
        font-family: var(--font-primary);
        font-weight: 500;
        font-size: 40px;
        line-height: 100%;
        color: var(--color-title);
        text-align: center;
        padding-left: var(--block-padding-title);
        padding-right: var(--block-padding-title);
        max-width: 630px;
        margin-bottom: 16px;
    }

    .text {
        font-size: 18px;
        line-height: 140%;
        color: var(--color-text);
        text-align: center;
        padding-left: var(--block-padding-text);
        padding-right: var(--block-padding-text);
        max-width: 630px;
        margin-bottom: 35px;
    }

    .button-link {
        width: 280px;
        font-size: 18px;
        background-color: var(--color-theme-button);
        color: var(--color-white);
        margin-bottom: 60px;
    }

    /deep/ {
        .button-link {
            .arrow-right {
                stroke: var(--color-white);
            }
        }
    }
}
</style>
