<template lang="html">
    <div class="heading-arrow">
        <svg-heading-arrow-green :class="classes" />
        <slot>
            {{ this.text }}
        </slot>
    </div>
</template>

<script>
import SvgHeadingArrowGreen from "~/assets/svg/heading-arrow-green"
import getSectionName from "~/utils/getSectionName"

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
            return [`color-${this.sectionName}`]
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

.color-visit {
    padding-right: 20px;
    path {
        stroke: var(--color-visit);
    }
}
.color-help {
    padding-right: 20px;
    path {
        stroke: var(--color-help);
    }
}
.color-about {
    padding-right: 20px;
    path {
        stroke: var(--color-about);
    }
}
</style>
