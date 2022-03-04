<template lang="html">
    <li
        tabindex="1"
        :class="classes"
    >
        <div class="meta">
            <span
                class="section"
                v-html="sectionName"
            />
            <h3>
                <smart-link
                    v-if="title"
                    :to="to"
                    :target="parsedTarget"
                    class="title"
                    v-html="title"
                />
            </h3>
            <div
                v-if="text"
                class="text"
                v-html="text"
            />
            <div
                class="svg-meta"
                aria-hidden="true"
            >
                <component
                    :is="parsedIconName"
                    class="svg"
                />
            </div>
        </div>
    </li>
</template>

<script>
// Helper functions
import getSectionName from "~/utils/getSectionName"

// SVGs
import SvgArrowRightSmall from "~/assets/svg/arrow-right-small"
import SvgArrowDiagonal from "~/assets/svg/arrow-diagonal"

export default {
    components: {
        SvgArrowRightSmall,
        SvgArrowDiagonal,
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
            return ["block-simple-card", `color-${this.sectionName}`]
        },
        sectionName() {
            return getSectionName(this.to)
        },
        isInternalLink() {
            return this.to.includes("library.ucla.edu") ? true : false
        },
        parsedTarget() {
            return this.isInternalLink ? "_self" : "blank"
        },
        parsedIconName() {
            return this.isInternalLink
                ? "svg-arrow-right-small"
                : "svg-arrow-diagonal"
        },
    },
}
</script>

<style lang="scss" scoped>
.block-simple-card {
    min-width: 300px;
    max-width: 458px;
    height: 314px;
    border-radius: var(--rounded-slightly-all);
    overflow: hidden;
    background-color: var(--color-primary-blue-01);
    transition-property: box-shadow, transform;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;
    position: relative;
    z-index: 0;

    display: flex;
    flex-direction: column;

    // Themes
    --color-theme: var(--color-default-cyan-01);
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
        margin: 56px 48px 20px 48px;
    }
    .section {
        display: none;
    }
    .title::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .title {
        font-family: var(--font-primary);
        font-style: normal;
        font-weight: 500;
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
    }
    .svg {
        right: 44px;
        bottom: 20px;
        position: absolute;
        z-index: 20;

        .arrow-right,
        .line {
            stroke: var(--color-primary-blue-03);
        }
        .arrow-diagonal {
            fill: var(--color-primary-blue-03);
        }
    }
    // Breakpoints
    @media #{$medium} {
        width: 300px;
    }

    // Hovers
    @media #{$has-hover} {
        &:hover,
        &:focus {
            transform: scale(1.1);
            box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);
            background-color: var(--color-theme);
            z-index: 30;

            .title {
                text-decoration-color: var(--color-default-cyan-03);
                text-decoration-thickness: 1.5px;
                color: var(--color-primary-blue-05);
            }
            .text {
                color: var(--color-primary-blue-05);
            }
            .svg {
                .arrow-right,
                .line {
                    stroke: var(--color-primary-blue-05);
                }
                .arrow-diagonal {
                    fill: var(--color-primary-blue-05);
                }
            }
        }
    }
}
</style>
