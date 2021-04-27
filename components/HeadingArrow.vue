<template lang="html">
    <div class="heading-arrow">
        <svg-heading-arrow :class="classes" />
        {{ text }}
    </div>
</template>

<script>
import SvgHeadingArrow from "~/assets/svg/heading-arrow"
import getSectionName from "~/utils/getSectionName"

export default {
    components: {
        SvgHeadingArrow,
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
    color: var(--color-white);
    line-height: 100%;
    text-transform: capitalize;
}

.color-visit {
    padding-right: 30px;
    path.top {
        stroke: var(--color-visit);
    }
}
.color-help {
    padding-right: 30px;
    path.top {
        stroke: var(--color-help);
    }
}
.color-about {
    padding-right: 30px;
    path.top {
        stroke: var(--color-about);
    }
}
</style>
