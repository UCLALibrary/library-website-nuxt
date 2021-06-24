<template lang="html">
    <div :class="classes">
        <div class="molecule row" />

        <div class="text row">
            <span
                class="category"
                v-html="category"
            />

            <h2
                class="title"
                v-html="title"
            />

            <h3
                class="dates"
                v-html="dates"
            />

            <nuxt-link
                :class="classes"
                :to="to"
                v-html="prompt"
            />
        </div>

        <div class="sizer" />
    </div>
</template>

<script>
import getSectionName from "~/utils/getSectionName"

export default {
    props: {
        title: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        dates: {
            type: String,
            default: "",
        },
        prompt: {
            type: String,
            default: "View",
        },
        to: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return ["block-event", `button color-${this.sectionName}`]
        },
        sectionName() {
            return getSectionName(this.to)
        },
    },
}
</script>

<style lang="scss" scoped>
.block-event {
    position: relative;
    z-index: 0;
    background-color: var(--color-primary-blue);
    color: var(--color-white);
    font-family: var(--font-primary);
    max-width: 800px;

    .row {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: flex-start;
        align-items: flex-start;
    }

    .molecule {
        background-image: url("~/assets/svg/molecule-background.svg?url");
        background-size: auto 100%;
        height: 40%;
    }

    .category {
        color: var(--color-secondary-yellow-01);
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 15px;
        font-weight: 500;
        font-size: 16px;
    }
    .title {
        font-size: 34px;
        line-height: 38px;
        letter-spacing: 0.01em;
        font-weight: 600;
        margin-bottom: 5px;
    }
    .dates {
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 40px;
    }
    .text {
        bottom: 0;
        top: auto;
        max-width: 500px;
        box-sizing: border-box;
        padding: 20px var(--unit-gutter);
        margin: 0 auto;
        box-sizing: border-box;
        height: 60%;
    }
    .button {
        border: 1px solid var(--color-primary-light-blue);
        background-color: var(--color-primary-blue);
        padding: 16px 40px;
        font-family: var(--font-secondary);
        font-size: 18px;
        font-weight: 400;
        line-height: 18px;
        box-sizing: border-box;
        color: var(--color-theme);
        transition: color 400ms ease-in-out;

        // Themes
        --color-theme: var(--color-primary-light-blue);

        &.color-visit {
            --color-theme: var(--color-visit-fushia-base);
        }

        &.color-help {
            --color-theme: var(--color-help);
        }

        &.color-about {
            --color-theme: var(--color-about);
        }
    }

    .sizer {
        padding-bottom: 137.5%;
    }

    // Hover
    @media #{$has-hover} {
        .button:hover {
            color: var(--color-white);
        }
    }

    // Breakpoints
    @media #{$lte-tablet} {
        .text {
            height: 75%;
        }
    }
    @media #{$lte-phone} {
        .category {
            font-size: 14px;
        }
        .title {
            font-size: 26px;
        }
        .dates {
            font-size: 18px;
        }
        .button {
            width: 100%;
            text-align: center;
            font-size: 16px;
        }
    }
}
</style>
