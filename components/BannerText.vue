<template lang="html">
    <div class="banner-text">
        <div class="meta">
            <svg-heading-vector class="heading-line" />
            <div
                :class="classes"
                v-html="category"
            />
        </div>
        <h2
            class="title"
            v-html="title"
        />
        <div
            v-if="text"
            class="text"
            v-html="text"
        />
        <button-link
            v-if="to"
            :label="buttonText"
            :to="to"
            class="button-link"
        />
        <svg-molecule-two-facets class="molecule" />
    </div>
</template>

<script>
import SvgMoleculeTwoFacets from "~/assets/svg/molecule-two-facets"
import SvgHeadingVector from "~/assets/svg/vector-blue"

import getSectionName from "~/utils/getSectionName"

export default {
    components: {
        SvgMoleculeTwoFacets,
        SvgHeadingVector,
    },
    props: {
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
            required: true,
        },
        date: {
            type: Object,
            default: () => {},
        },
        text: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
    },
    computed: {
        parsedDate() {
            return "this is the date"
        },
        parsedTime() {
            return "this is the time"
        },
        sectionName() {
            return getSectionName(this.to)
        },
        classes() {
            return ["category", `color-${this.sectionName}`]
        },
        darkClasses() {
            return ["banner-text", "color-dark"]
        },
    },
}
</script>

<style lang="scss" scoped>
.banner-text {
    max-width: 1030px;
    padding-left: var(--unit-gutter);
    padding-right: var(--unit-gutter);
    padding-top: 10px;
    background-color: var(--color-white); //Update this to be a theme that

    .meta {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    // Themes for category outline
    --color-theme: var(--color-primary-light-blue);
    &.color-visit {
        --color-theme: var(--color-visit-fushia-lightest);
    }
    &.color-help {
        --color-theme: var(--color-help-green-lightest);
    }
    &.color-about {
        --color-theme: var(--color-about-purple-lightest);
    }
    .category {
        color: var(--color-primary-darkest-blue);
        font-size: 26px;
        text-transform: capitalize;
        border: 1px solid var(--color-theme);
        padding: 15px 20px 13px 22px;
        margin-left: -10px;
        clip-path: polygon(17px 0, 100% 0, 100% 100%, 1px 100%);
    }

    .heading-line {
        flex-shrink: 0;
        padding-right: 0;
    }
    .title {
        font-size: 72px;
        color: var(--color-primary-blue);
        margin-top: 70px;
        text-align: left;
        max-width: 730px;
        padding-left: 20px;
    }
    .text {
        font-size: 24px;
        text-align: left;
        max-width: 630px;
        margin-top: 10px;
        padding-left: 20px;
    }
    .button-link {
        margin-top: 24px;
        max-width: 160px;
        margin-left: 20px;
        background-color: var(--color-primary-blue);
        color: var(--color-white);
    }
    .molecule {
        right: 0;
        top: 0;
        bottom: 95px;
        margin: auto;
        position: absolute;
        z-index: 20;
        // mix-blend-mode: screen;
        width: auto;
    }

    @media #{$lte-phone} {
        .title {
            font-size: 36px;
            max-width: 70%;
        }
        .text {
            font-size: 18px;
            max-width: 70%;
        }
        .molecule {
            height: 215px;
            width: auto;
        }
    }
}
</style>
