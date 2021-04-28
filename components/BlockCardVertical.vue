<template lang="html">
    <nuxt-link
        :to="to"
        :class="classes"
    >
        <component
            :is="parsedSvgName"
            class="svg"
        />
        <div :class="metaClasses">
            <div
                class="title"
                v-html="title"
            />
            <h3
                class="text"
                v-html="text"
            />
        </div>
    </nuxt-link>
</template>

<script>
import getSectionName from "~/utils/getSectionName"
import BookBinding from "~/assets/svg/illustrations/book-binding"

export default {
    components: {
        BookBinding,
    },
    props: {
        iconName: {
            type: String,
            default: "",
        },
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
            return ["block-card-vertical", `color-${this.sectionName}`]
        },
        metaClasses() {
            return ["meta", `color-${this.sectionName}`]
        },
        sectionName() {
            return getSectionName(this.to)
        },
        parsedSvgName() {
            return `${this.iconName}`
        },
    },
}
</script>

<style lang="scss" scoped>
.block-card-vertical {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    width: 300px;
    min-height: 400px;

    // box-sizing: border-box;
    // text-decoration: none;
    // border-radius: 4px;
    // transition-property: background-color, box-shadow;
    // transition-duration: 400ms;
    // transition-timing-function: ease-in-out;

    .svg {
        flex-grow: 0;
        flex-shrink: 0;
    }

    .title {
        font-size: 24px;
        line-height: 110%;
        text-align: center;
        letter-spacing: 0.01em;
        font-weight: 500;
    }

    .text {
        font-family: Proxima Nova;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 150%;
        text-align: center;
    }
}

.meta {
    width: 300px;
    min-height: 200px;
    background-color: var(--color-lightest-blue);

    // Themes
    --color-theme: var(--color-primary-light-blue);
    &.color-visit {
        --color-theme: var(--color-fushia-03);
    }
    &.color-help {
        --color-theme: var(--color-green-03);
    }
    &.color-about {
        --color-theme: var(--color-purple-03);
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            background-color: var(--color-theme);
            box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);
        }
    }
}
</style>
