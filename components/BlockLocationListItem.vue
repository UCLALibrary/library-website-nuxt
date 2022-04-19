<template lang="html">
    <div :class="classes">
        <component
            :is="parsedSvgName"
            class="svg"
        />

        <div class="meta">
            <div
                class="location-group"
            >
                <nuxt-link
                    v-for="location in parsedLocations"
                    :key="`location-${location.id}`"
                    :to="location.to"
                    class="location-link"
                >
                    <component
                        :is="location.svg"
                        class="location-svg"
                    />
                    <span
                        class="location"
                        v-html="location.reserveTitle"
                    />
                </nuxt-link>
            </div>
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
    name: "BlockLocationListItem",
    components: {
        IllustrationBookBinding: () =>
            import("~/assets/svg/illustration-book-binding"),
    },
    props: {
        iconName: {
            type: String,
            default: "illustration-book-binding",
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
                "block-location-list-item",
                `color-${this.sectionName}`,
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
.block-location-list-item {
    overflow: hidden;
    border: 2px solid var(--color-primary-blue-01);
    border-radius: var(--rounded-slightly);

    transition-property: box-shadow, transform;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

    display: flex;
    flex-direction: row;
    align-items: center;

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

    // Hovers
    @media #{$has-hover} {
        &:hover {
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
