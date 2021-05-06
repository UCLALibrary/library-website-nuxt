<template lang="html">
    <nuxt-link
        :to="to"
        :class="classes"
    >
        <component
            :is="parsedSvgName"
            class="svg"
        />
        <div class="meta">
            <h3
                class="title"
                v-html="title"
            />
            <div
                class="text"
                v-html="text"
            />
        </div>
    </nuxt-link>
</template>

<script>
import getSectionName from "~/utils/getSectionName"

export default {
    components: {
        BookBindingIcon: () =>
            import("~/assets/svg/illustrations/book-binding-icon"),
        BorrowingBooksIcon: () =>
            import("~/assets/svg/illustrations/borrowing-books-icon"),
        DatabasesIcon: () =>
            import("~/assets/svg/illustrations/databases-icon"),
        DigitizedResourcesIcon: () =>
            import("~/assets/svg/illustrations/digitized-resources-icon"),
        FindSpaceIcon: () =>
            import("~/assets/svg/illustrations/find-space-icon"),
        RemoteAccessIcon: () =>
            import("~/assets/svg/illustrations/remote-access-icon"),
        ResearchIcon: () => import("~/assets/svg/illustrations/research-icon"),
        TeachingIcon: () => import("~/assets/svg/illustrations/teaching-icon"),
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
        sectionName() {
            return this.$slots.default ? "default" : getSectionName(this.to)
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
    justify-content: center;
    align-content: center;
    align-items: center;
    border: 2px solid var(--color-lightest-blue);
    width: 300px;
    height: 400px;
    overflow: hidden;
    transition: transform 400ms ease-in-out;

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

    .svg {
        flex-grow: 0;
        flex-shrink: 0;
        padding: 20px 0;
    }

    .meta {
        transition-property: background-color, box-shadow;
        transition-duration: 400ms;
        transition-timing-function: ease-in-out;
        background-color: var(--color-lightest-blue);
        flex: 1 1 auto;
    }
    .title {
        font-family: var(--font-primary);
        font-size: 24px;
        line-height: 110%;
        text-align: center;
        letter-spacing: 0.01em;
        font-weight: 500;
        margin-top: 35px;
        margin-bottom: 10px;
        color: var(--color-dark-blue);

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .text {
        font-family: var(--font-secondary);
        font-size: 16px;
        font-weight: normal;
        line-height: 150%;
        text-align: center;
        padding-left: 40px;
        padding-right: 40px;
        color: var(--color-dark-blue);

        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            transform: scale(1.1);

            .meta {
                background-color: var(--color-theme);
                box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);
            }
            .title {
                text-decoration: underline;
                text-decoration-color: var(--color-cyan-01);
                text-decoration-thickness: 1.5px;
            }
        }
    }
}
</style>
