<template lang="html">
    <component
        :is="componentType"
        :to="to"
        :class="classes"
    >
        <svg-heading-arrow class="svg" />
        <h2 :class="textClasses">
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
        textClasses() {
            return ["heading", `color-${this.componentType}`]
        },
    },
}
</script>

<style lang="scss" scoped>
.heading-arrow {
    display: flex;
    align-items: center;
    flex-direction: row;

    text-decoration: none;

    // themes
    --color-theme: var(--color-primary-blue);
    &.color-visit {
        --color-theme: var(--color-visit);
    }
    &.color-help {
        --color-theme: var(--color-help);
    }
    &.color-about {
        --color-theme: var(--color-about);
    }

    .top {
        stroke: var(--color-theme);
    }
    .heading {
        margin-left: 30px;
        font-size: 44px;
        line-height: 100%;
        text-transform: capitalize;

        &.color-nuxt-link {
            color: var(--color-white);
        }
        &.color-div {
            color: var(--color-primary-blue);
        }
    }

    @media #{$lte-phone} {
        .svg {
            height: 40px;
            margin-right: 0;
        }
        .heading {
            font-size: 28px;
            margin-left: -10px;
        }
    }
}
</style>
