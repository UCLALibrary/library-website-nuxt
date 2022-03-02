<template lang="html">
    <smart-link
        v-if="to"
        :to="to"
        :class="classes"
        :target="parsedTarget"
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
    </smart-link>
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
            return getSectionName(this.to)
        },
        parsedSvgName() {
            return `${this.iconName}`
        },
        isExternalLink() {
            return this.to.includes("http") ? true : false
        },
        parsedTarget() {
            return this.isExternalLink ? "blank" : "_self"
        },
    },
}
</script>

<style lang="scss" scoped>
.block-card-vertical {
    background-color: var(--color-white);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    border: 2px solid var(--color-primary-blue-01);
    width: 300px;
    height: 400px;
    overflow: hidden;
    border-radius: var(--rounded-slightly-all);
    box-sizing: border-box;

    transition-property: box-shadow, transform;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

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

    .svg {
        flex-grow: 0;
        flex-shrink: 0;
        padding: 20px 0;
    }
    .meta {
        transition: background-color 400ms ease-in-out;
        background-color: var(--color-primary-blue-01);
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
        color: var(--color-primary-blue-05);
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
        color: var(--color-primary-blue-05);

        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            transform: scale(1.1);
            box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);

            .meta {
                background-color: var(--color-theme);
            }
            .title {
                text-decoration: underline;
                text-decoration-color: var(--color-default-cyan-03);
                text-decoration-thickness: 1.5px;
            }
        }
    }
}
</style>
