<template lang="html">
    <div class="heading-arrow">
        <svg-heading-arrow-green class="heading-arrow-svg" />
        <slot>
            {{ this.text }}
        </slot>
    </div>
</template>

<script>
import SvgHeadingArrowGreen from "~/assets/svg/heading-arrow-green"

export default {
    components: {
        SvgHeadingArrowGreen,
    },
    props: {
        text: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return ["example-component", `section-${this.sectionName}`]
        },
        sectionName() {
            return getSectionName(this.to)
        },
    },
}
</script>

<style lang="scss" scoped>
.heading-arrow {
    display: flex;
    align-items: center;
    flex-direction: row;

    font-size: 44px;
    font-weight: 300;
    color: var(--color-white);
    line-height: 100%;
}

.heading-arrow-help-svg {
    padding-right: 20px;
    path {
        stroke: var(--color-help);
    }
.heading-arrow-visit-svg {
    padding-right: 20px;
    path {
        stroke: var(--color-visit);
    }
.heading-arrow-about-svg {
    padding-right: 20px;
    path {
        stroke: var(--color-about);
    }
}
</style>
