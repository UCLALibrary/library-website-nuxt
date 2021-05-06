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
        IllustrationBookBinding: () =>
            import("~/assets/svg/illustration-book-binding"),
        IllustrationBorrowingBooks: () =>
            import("~/assets/svg/illustration-borrowing-books"),
        IllustrationDatabases: () =>
            import("~/assets/svg/illustration-databases"),
        IllustrationDigitizedResources: () =>
            import("~/assets/svg/illustration-digitized-resources"),
        IllustrationFindSpace: () =>
            import("~/assets/svg/illustration-find-space"),
        IllustrationRemoteAccess: () =>
            import("~/assets/svg/illustration-remote-access"),
        IllustrationResearch: () =>
            import("~/assets/svg/illustration-research"),
        IllustrationTeaching: () =>
            import("~/assets/svg/illustration-teaching"),
    },
    props: {
        iconName: {
            type: String,
            default: "illustration-remote-access",
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
    transition-property: box-shadow;
    border-radius: 4px;

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
        transition-property: background-color;
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
        padding-right: 60px;
        padding-left: 60px;

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
