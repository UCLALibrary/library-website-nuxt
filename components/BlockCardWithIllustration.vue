<template lang="html">
    <div :class="classes">
        <component
            :is="parsedSvgName"
            class="svg"
        />

        <div class="meta">
            <smart-link
                v-if="to"
                :to="to"
                :target="parsedTarget"
            >
                <div
                    v-if="category"
                    class="category"
                    v-html="category"
                />
                <h3
                    class="title"
                    v-html="title"
                />
            </smart-link>
            <div
                class="text"
                v-html="text"
            />
        </div>
    </div>
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
        category: {
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
        isHorizontal: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                "block-card-with-illustration",
                `color-${this.sectionName}`,
                { "is-horizontal": this.isHorizontal }
            ]
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
.block-card-with-illustration {
    overflow: hidden;
    border: 2px solid var(--color-primary-blue-01);
    border-radius: var(--rounded-slightly-all);

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
        --color-theme: var(--color-about-purple-01);
    }

    .meta {
        background-color: var(--color-theme);
    }

    .title {
        font-family: var(--font-primary);
        @include step-1;
        font-weight: 500;
        margin-top: 35px;
        margin-bottom: 10px;
        color: var(--color-primary-blue-05);
        padding-right: 40px;
        padding-left: 40px;
    }

    .text {
        @include step--1;
        font-family: var(--font-secondary);
        color: var(--color-primary-blue-05);
        padding-left: 40px;
        padding-right: 40px;
        margin-bottom: 24px;
    }

// Variations
    // Vertical
    &:not(&.is-horizontal) {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-content: center;
        align-items: center;

        width: 281px;
        height: 400px;

        .svg {
            flex-grow: 1;
            flex-shrink: 0;
            padding: 20px 0;
        }

        .meta {
            background-color: var(--color-theme);
            .title {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                justify-content: flex-end;
            }
            .text {
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
    }

    // Horizontal
    &.is-horizontal {
        display: flex;
        flex-direction: row;
        align-items: center;

        width: 100%;
        max-width: 990px;

        .svg {
        flex-grow: 0;
        flex-shrink: 0;
        padding: 0 20px;

        }
        .meta {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;

            height: 271px;

            .category {
                @include overline;
                color: var(--color-secondary-grey-05);
                padding-bottom: var(--space-s);
                padding-right: 40px;
                padding-left: 40px;
            }
            .title {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;

                margin-bottom: 24px;
                margin-top: 0;
            }
            .text {
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
                overflow: hidden;

                margin: 0;
            }
        }

    // BREAKPOINTS
        @media #{$medium}{
            max-width: 640px;
        }

        @media #{$small}{
            max-width: 320px;
            .svg {
                display: none;
            }
        }
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
