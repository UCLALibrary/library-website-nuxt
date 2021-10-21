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
            let theme = "theme-light"
            if (this.isDarkBlue) {
                theme = "theme-dark"
            }
            return ["container", theme]
        },

        sizeClasses() {
            let size = "size-full-width"
            if (this.isSmallSize) {
                size = "size-small"
            }
            return ["block-call-to-action", size]
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

// Size
    &.size-full-width {
        --block-width: 1046px;
        --block-height: 700px;
        --block-padding-title: 70px;
        --block-padding-text: 10px;
    }

    &.size-small {
        --block-width: 500px;
        --block-height: 520px;
        --block-padding-title: 114px;
        --block-padding-text: 112px;
    }

    .container {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;

    // Variations for dark blue and white backgrounds
    .theme-light {
        --background-color: var(--color-primary-blue-01);
        --color-title: var(--color-primary-blue-03); // --title-color
        --color-text: var(--color-primary-blue-05); // --text-color
        --color-theme-button: var(--color-primary-blue-03); //--button-color
        --color-theme-svg-outline: var(--color-primary-blue-03); // --svg-outline-color
        --color-theme-svg-lines: var(--color-help-green-03); // --svg-lines-color
    }

    .theme-dark {
        --background-color: var(--color-primary-blue-03);
        --color-title: var(---color-white); 
        --color-text: var(--color-primary-blue-05);
        --color-theme-button: var(--color-secondary-blue-03);
        --color-theme-svg-outline: var(--color-primary-blue-02);
        --color-theme-svg-lines: var(--color-white);
    }

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

$extra-large: "only screen and (min-width: 1441px)";
$large: "only screen and (max-width: 1440px)";
$medium: "only screen and (max-width: 1024px)";
$small: "only screen and (max-width: 750px)";
$has-hover: "(hover: hover)";
