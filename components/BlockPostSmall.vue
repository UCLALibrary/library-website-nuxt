<template lang="html">
    <nuxt-link
        :to="to"
        :class="classes"
    >
        <responsive-image
            v-bind="image"
            :aspect-ratio="100"
            class="image"
        />
        <div class="meta">
            <div
                class="category"
                v-html="categoryName"
            />
            <h3
                class="title"
                v-html="title"
            />
            <div
                class="author"
                v-html="parsedAuthor"
            />
        </div>
    </nuxt-link>
</template>

<script>
import getSectionName from "~/utils/getSectionName"

export default {
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        categoryName: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        author: {
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
            return ["block-post-small", `color-${this.sectionName}`]
        },
        sectionName() {
            return getSectionName(this.to)
        },
        parsedAuthor() {
            return `By ${this.author}`
        },
    },
}
</script>

<style lang="scss" scoped>
.block-post-small {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;

    width: 320px;
    min-height: 150px;
    padding: 25px;
    box-sizing: border-box;
    text-decoration: none;
    border-radius: 4px;
    transition-property: background-color, box-shadow;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

    .image {
        width: 100px;
        flex-basis: 100px;
        flex-grow: 0;
        flex-shrink: 0;
    }
    .meta {
        width: 150px;
        flex-basis: 150px;
        flex-grow: 0;
        flex-shrink: 0;
    }
    .category {
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--color-dark-blue);
    }
    .title {
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        letter-spacing: 0.01em;
        color: var(--color-primary-blue);
        margin: 15px 0 0 0;
    }
    .author {
        font-weight: 300;
        font-size: 14px;
        line-height: 100%;
        color: #434343;
        margin-top: 10px;
    }

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
