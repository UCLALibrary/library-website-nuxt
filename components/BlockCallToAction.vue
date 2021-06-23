<template lang="html">
    <div :class="sizeClasses">
        <div :class="classes">
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
                :icon-name="iconName"
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
        iconName: {
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
            return `${this.iconName}`
        },

        classes() {
            let output = ["container"]
            if (this.isDarkBlue) {
                output = [
                    "container",
                    "color-dark-blue",
                    "color-light-title",
                    "color-light-text",
                ]
            }
            return output
        },
        sizeClasses() {
            let output = ["block-call-to-action"]
            if (this.isSmallSize) {
                output = [
                    "block-call-to-action",
                    "block-width-small",
                    "block-height-small",
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

    // Sizes
    --block-width: 1046px;
    &.block-width-small {
        --block-width: 500px;
    }

    --block-height: 700px;
    &.block-height-small {
        --block-height: 520px;
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
    }

    .svg {
        margin-bottom: 35px;
        margin-top: 60px;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .title {
        font-family: var(--font-primary);
        font-weight: 500;
        font-size: 40px;
        line-height: 100%;
        color: var(--color-title);
        text-align: center;
        padding-left: 70px;
        padding-right: 70px;
        max-width: 630px;
        margin-bottom: 16px;
    }

    .text {
        margin-bottom: 35px;
        font-size: 18px;
        text-align: center;
        line-height: 140%;
        padding-left: 10px;
        padding-right: 10px;
        max-width: 630px;
        color: var(--color-text);
    }

    .button-link {
        width: 280px;
        margin-bottom: 60px;
        background-color: var(--color-primary-blue);
        color: var(--color-white);
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
