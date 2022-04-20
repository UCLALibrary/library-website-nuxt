<template lang="html">
    <div :class="classes">
        <component
            :is="parsedSvgName"
            class="svg"
        />

        <div
            class="library"
        >
            <nuxt-link
                :to="to"
                class="library__title"
            >
                <span>{{ title }}</span>
            </nuxt-link>
            <div class="library__text">
                <div
                    class="library__time"
                >
                    <SvgIconClock />
                    {{ day }}
                    {{ startTime }}
                    {{ endTime }}
                </div>
                <nuxt-link
                    class="library__location"
                    :to="addressLink"
                >
                    <SvgIconLocation />
                    {{ address }}
                </nuxt-link>
                <div 
                    class="library__amenities"
                >
                    <div
                        v-for="amenity in amenities"
                        :key="`amenity-${amenity}`"
                    >
                        <SvgIconLocation />
                    <!--{{ amenity }} TODO: When svg icons and craft names are the same, uncomment this -->
                    </div>
                </div>
            </div>
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
        SvgIconClock: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-clock"
            ),
        SvgIconLocation: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"
            ),
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
        day: {
            type: String,
            default: "",
        },
        startTime: {
            type: String,
            default: "",
        },
        endTime: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "",
        },
        addressLink: {
            type: String,
            default: "",
        },
        amenities: {
            type: Array,
            default: () => [],
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
    //TODO: It's saying box-shadow-01 but I don't think we have this variable

    display: flex;
    flex-direction: row;
    align-items: center;

    border-radius: $rounded-slightly;
    width: 928px;
    padding: 48px 64px;

    
    transition-property: box-shadow;
    transition-duration: 400ms;
    transition-timing-function: ease-in-out;

    // Themes
    --color-theme: var(--color-primary-blue-01);
    &.color-ucla {
        --color-theme: var(--color-visit-fushia-02);
    }
    &.color-affiliate {
        --color-theme: var(--color-primary-blue-02);
    }

    .svg {
        margin-right: 56px;
        width: 352px;
        height: 352px;
    }

    .library {
        display: flex;
        flex-direction: column;
        width: 800px;
    }

    .library__title {
        font-family: var(--font-primary);
        @include step-2;
        font-weight: 700;
        margin-top: 35px;
        margin-bottom: 10px;
        color: var(--color-primary-blue-03);
    }

    .library__time, .library__amenities, .library__location {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 0;
    }

    .library__text {
        width: 392px;
        @include step--1;
        font-family: var(--font-secondary);
        color: var(--color-primary-blue-05);
    }


    // BREAKPOINTS
    @media #{$medium}{
        max-width: 640px;
    }

    // @media #{$small}{
    //     max-width: 320px;
    //     .svg {
    //         display: none;
    //     }
    // }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.04);

            .library__title {
                text-decoration: underline;
                text-decoration-color: var(--color-primary-blue-03);
                text-decoration-thickness: 1.5px;
            }
        }
    }
}
</style>
