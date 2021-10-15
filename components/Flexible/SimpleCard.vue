<template lang="html">
    <nuxt-link
        :to="to"
        :class="classes"
    >
        <h3
            class="title"
            v-html="title"
        />
        <div
            class="text"
            v-html="text"
        />
    </nuxt-link>
</template>

<script>
// Helper functions
import getSectionName from "~/utils/getSectionName"

// SVGs
import SvgArrowRight from "~/assets/svg/arrow-right"

export default {
    components: {
        SvgArrowRight,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
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
            return ["simple-card", `color-${this.sectionName}`]
        },
        sectionName() {
            return getSectionName(this.to)
        },
    },
}
</script>

<style lang="scss" scoped>
.simple-card {
    max-width: 456px;
    max-height: 314px;
    border-radius: var(--rounded-slightly-all);
    box-sizing: border-box;

    transition-property: box-shadow, transform;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

    transition: background-color 400ms ease-in-out;
    background-color: var(--color-primary-blue-01);
    flex: 1 1 auto;

    // Themes
    --color-theme: var(--color-primary-blue-02);
    &.color-visit {
        --color-theme: var(--color-visit-fushia-01);
    }
    &.color-help {
        --color-theme: var(--color-help-green-01);
    }
    &.color-about {
        --color-theme: var(--color-visit-fushia-01);
    }

    .title {
        font-family: var(--font-primary);
        font-style: normal;
        font-weight: medium;
        font-size: 28px;
        line-height: 110%;
        letter-spacing: 0.0015em;
        color: var(--color-primary-blue-03);
    }
    .text {
        font-family: var(--font-secondary);
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.01em;
        color: var(--color-black);
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            transform: scale(1.1);
            box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);

            .simple-card {
                background-color: var(--color-theme);
            }
            .title {
                text-decoration-color: var(--color-default-cyan-03);
                text-decoration-thickness: 1.5px;
            }
        }
    }
}
</style>
