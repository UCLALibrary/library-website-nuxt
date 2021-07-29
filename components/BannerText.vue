<template lang="html">
    <div class="banner-text">
        <div class="meta">
            <svg-heading-vector class="heading-line" />
            <div
                class="category"
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
            class="button"
        />
        <svg-molecule-two-facets class="molecule" />
    </div>
</template>

<script>
import SvgMoleculeTwoFacets from "~/assets/svg/molecule-two-facets"

export default {
    components: {
        SvgMoleculeTwoFacets,
        SvgHeadingVector: () => import("~/assets/svg/vector-blue"),
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
}
</script>

<style lang="scss" scoped>
.banner-text {
    max-width: 1030px;
    margin-left: auto;
    margin-right: auto;

    .meta {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .category {
        color: var(--color-primary-darkest-blue);
        font-size: 26px;
        text-transform: capitalize;
        border: 1px solid var(--color-help-green-base);
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
    }
    .text {
        font-size: 24px;
        text-align: left;
        max-width: 630px;
        margin-top: 10px;
    }
    .button {
        margin-top: 24px;
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
        mix-blend-mode: screen;
        width: auto;
    }
}
</style>
