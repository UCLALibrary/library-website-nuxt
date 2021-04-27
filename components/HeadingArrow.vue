<template lang="html">
    <component
        :is="componentType"
        :to="to"
        :class="classes"
    >
        <svg-heading-arrow />
        <h2 class="heading-arrow-text">
            {{ text }}
        </h2>
    </component>
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
        section: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return ["heading-arrow", `color-${this.sectionName}`]
        },
        sectionName() {
            return this.section || getSectionName(this.to)
        },
        componentType() {
            let output = "div"
            if (this.to) {
                output = "nuxt-link"
            }
            return output
        },
    },
}
</script>

<style lang="scss" scoped>
// --color-theme: var(--color-primary-blue);

// .color-help {
//      --color-theme: var(--color-about);
// }

// .top {
//      stroke: var(--color-theme);
// }

.heading-arrow {
    display: flex;
    align-items: center;
    flex-direction: row;

    text-decoration: none;

    &.color-visit {
        path.top {
            stroke: var(--color-visit);
        }
    }
    &.color-help {
        path.top {
            stroke: var(--color-help);
        }
    }
    &.color-about {
        path.top {
            stroke: var(--color-about);
        }
    }
}

.heading-arrow-text {
    padding-left: 30px;
    font-size: 44px;
    color: var(--color-white);
    line-height: 100%;
    text-transform: capitalize;
}
</style>
