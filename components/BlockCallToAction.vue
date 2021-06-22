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
        isLightBlue: {
            type: Boolean,
            default: true,
        },
        isFullSize: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        parsedSvgName() {
            return `${this.iconName}`
        },
        classes() {
            if (this.isLightBlue !== true) {
                return [
                    "block-call-to-action",
                    "color-dark-blue",
                    "color-light",
                ]
            } else {
                return ["block-call-to-action"]
            }
        },
        sizeClasses() {
            if (this.isFullsize !== true) {
                return ["block-call-to-action-small"]
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.block-call-to-action {
    max-width: 1046px;
    max-height: 700px;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--color-theme);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    // Themes
    --color-theme: var(--color-primary-lightest-blue);
    &.color-dark-blue {
        --color-theme: var(--color-secondary-blue-02);
    }
    .block-call-to-action-small {
        max-width: 500px;
        max-height: 520px;
    }

    .svg {
        margin-bottom: 35px;
        margin-top: 60px;
        flex-grow: 0;
        flex-shrink: 0;
    }
    // Themes
    --color-text: var(--color-primary-blue);
    &.color-light {
        --color-text: var(--color-white);
    }
    .title {
        font-family: var(--font-primary);
        font-weight: 500;
        font-size: 40px;
        line-height: 100%;
        color: var(--color-text);
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
