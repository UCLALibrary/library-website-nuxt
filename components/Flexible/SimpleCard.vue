<template lang="html">
    <div :class="classes">
        <div class="meta">
            <nuxt-link :to="to">
                <h2
                    class="section"
                    v-html="sectionName"
                />
                <h3
                    v-if="title"
                    class="title"
                    v-html="title"
                />
                <div
                    v-if="text"
                    class="text"
                    v-html="text"
                />
                <div class="svg-meta">
                    <svg-arrow-right-small class="svg" />
                </div>
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
    min-width: 300px;
    max-width: 458px;
    height: 314px;
    border-radius: var(--rounded-slightly-all);
    box-sizing: border-box;
    overflow: hidden;
    background-color: var(--color-primary-blue-01);
    transition-property: box-shadow, transform;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

    display: flex;
    flex-direction: column;

    // Themes
    --color-theme: var(--color-primary-blue-02);
    &.color-visit {
        --color-theme: var(--color-visit-fushia-01);
    }
    &.color-help {
        --color-theme: var(--color-help-green-01);
    }
    &.color-about {
        --color-theme: var(--color-about-purple-01);
    }
    .meta {
        margin: 20px 48px 20px 48px;
    }
    .section {
        display: none;
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
        color: var(--color-black);
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 160%;
        letter-spacing: 0.01em;
        max-height: 175px;
        margin-bottom: 20px;
        overflow: hidden;
    }
    .svg-meta {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-content: flex-end;
        align-items: center;

        // position: fixed;
        // z-index: 20;
        // bottom: 20px;
    }
    .svg {
        bottom: -20px;
        stroke: var(--color-primary-blue-03);
    }
}

// Hovers
@media #{$has-hover} {
    .simple-card:hover {
        transform: scale(1.1);
        box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);
        background-color: var(--color-theme);

        .title {
            text-decoration-color: var(--color-default-cyan-03);
            text-decoration-thickness: 1.5px;
            color: var(--color-primary-blue-05);
        }
        .text {
            color: var(--color-primary-blue-05);
        }
        .svg {
            stroke: var(--color-primary-blue-05);
        }
    }
}
</style>
