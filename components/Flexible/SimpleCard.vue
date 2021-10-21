<template lang="html">
    <div class="simple-card">
        <div class="meta">
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
                <svg-arrow-right-small class="svg" />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
// Helper functions
import getSectionName from "~/utils/getSectionName"

// SVGs
import SvgArrowRightSmall from "~/assets/svg/arrow-right-small"

export default {
    components: {
        SvgArrowRightSmall,
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
            return [`color-${this.sectionName}`]
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
    overflow: hidden;
    background-color: var(--color-primary-blue-01);
    transition-property: box-shadow, transform;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

    display: flex;
    flex-direction: column;

    // transition: background-color 400ms ease-in-out;
    // flex: 1 1 auto;

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
    .meta {
        padding: 20px 48px 20px 48px;
    }
    .title {
        font-family: var(--font-primary);
        font-style: normal;
        font-weight: medium;
        font-size: 28px;
        line-height: 110%;
        letter-spacing: 0.0015em;
        color: var(--color-primary-blue-03);
        padding-bottom: 16px;
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
    .svg {
        fill: black;
        stroke: black;
        padding-right: 45px;
    }

    // Hovers
    @media #{$has-hover} {
        &.simple-card:hover {
            transform: scale(1.1);
            box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);
            background-color: var(--color-theme);

            .title {
                text-decoration-color: var(--color-default-cyan-03);
                text-decoration-thickness: 1.5px;
            }
        }
    }
}
</style>
