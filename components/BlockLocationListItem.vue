<template lang="html">
    <div :class="classes">
        <div class="card-container">
            <responsive-image
                v-if="image"
                class="image"
                :image="image"
            />
            <div
                v-else
                :class="['image affiliate']"
            />

            <div
                class="library"
            >
                <smart-link
                    v-if="to"
                    :to="to"
                    class="title"
                >
                    {{ title }}
                </smart-link>
                <div class="text">
                    <div
                        v-if="day || hour"
                        class="time"
                    >
                        <SvgIconClock />
                        <span>{{ day }}</span>
                        <div class="hour">
                            <span>{{ hour }}</span>
                        </div>
                    </div>
                    <icon-with-link 
                        v-if="reserveSeat"
                        text="Reserve a Seat"
                        icon-name="svg-icon-calendar"
                        :to="reserveSeat"
                        class="reserve"
                    />
                    <icon-with-link 
                        :text="address"
                        icon-name="svg-icon-location"
                        :to="addressLink"
                        class="location"
                    />
                    <div
                        v-if="amenities"
                        class="amenities"
                    >
                        <div
                            v-for="amenity in amenities"
                            :key="`amenity-${amenity}`"
                        >
                            <component
                                :is="amenity"
                                class="svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconWithLink from "~/components/IconWithLink"
export default {
    name: "BlockLocationListItem",
    components: {
        IllustrationBookBinding: () =>
            import("~/assets/svg/illustration-book-binding"),
        
        SvgIconLight: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-light"
            ),
        SvgIconClock: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-clock"
            ),
        SvgIconAccessible: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-accessible"
            ),
        SvgIconChair: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-chair"
            ),
        SvgIconVirtual: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-virtual"
            ),
        SvgIconLaptop: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-laptop"
            ),
        SvgIconLocker: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-locker"
            ),
        SvgIconSharePrinter: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-share-printer"
            ),
        SvgIconShareBook: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-book"
            ),
        SvgIconLocation: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"
            ),
        SvgIconCalendar: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-calendar"
            ),
        SvgIconEmail: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-email"
            ),
        SvgIconPhone: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-phone"
            ),
        SvgMoleculePlaceholder: () =>
            import(
                "~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-placeholder"
            ),
        IconWithLink
    },
    props: {
        image: {
            type: String,
            default: "",
        },
        title: {
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
        hour: {
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
        reserveSeat: {
            type: String,
            default: "",
        },
        isUclaLibrary: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        classes() {
            return [
                "block-location-list-item",
                `color-${this.cardTheme}`,
            ]
        },
        cardTheme() {
            return this.isUclaLibrary ? "ucla" : "affiliate"
        },
        isExternalLink() {
            return this.to.includes("http") ? true : false
        },
        parsedTarget() {
            return this.isExternalLink ? "blank" : "_self"
        }
    },
}
</script>

<style lang="scss" scoped>
.block-location-list-item {
    overflow: hidden;
    border: 2px solid var(--color-theme);
    border-radius: var(--rounded-slightly-all);

    width: 100%;
    max-width: 928px;
    padding: 48px 64px;

    transition-property: box-shadow;
    @include animate-normal;

    // Themes
    &.color-ucla {
        --color-theme: var(--color-visit-fushia-02);
    }
    &.color-affiliate {
        --color-theme: var(--color-primary-blue-02);
    }

    .card-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        max-width: 800px;

        .image {
            margin-right: var(--space-xl);
            width: 352px;
            height: 352px;
            background: var(--gradient-01);
        }

        $positionKey: random(3);
        $positions: left, center, right;
        $nth: nth($positions, $positionKey);

        .affiliate {
            background: url(~/node_modules/ucla-library-design-tokens/assets/svgs/molecule-placeholder.svg?url),
            var(--gradient-01);
            background-position-x: random(500) + px;
        }

        .library {
            display: flex;
            flex-direction: column;
        }
        
        .title::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        }
        .title {
            @include step-2;
            color: var(--color-primary-blue-03);
            margin: 0px 0 12px 0;
            line-height: $line-height--1;
        }

        .text {
            max-width: 392px;
            @include step--1;
            font-family: var(--font-secondary);
            color: var(--color-primary-blue-03);
        }

        .time, .amenities, .location, .reserve {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 12px 0;

            & > span:first-of-type {
                margin-left: 13px;
            }
        }

        .time {
            color: var(--color-primary-blue-05);
        }

        .time > span:first-of-type {
            padding-right: 10px;
            border-right: 2px solid var(--color-secondary-grey-02);
        }

        .hour {
            padding: 0 10px;
        }

        .amenities {
            display: flex;
            flex-wrap: wrap;
        }

        .svg {
            max-width: 25px;
            margin-right: 20px;
        }

        // Fix: svg shareprinter to white bg and blue stroke
        .svg__fill--secondary-grey-01 {
            fill: var(--color-white);
        }
        .svg__stroke--black {
            stroke: var(--color-primary-blue-03);
        }
        .svg__fill--black {
            fill: var(--color-primary-blue-03);
        }
    }


    // BREAKPOINTS
    @media #{$medium}{
        // max-width: 640px;
        max-width: 640px;
        padding: 24px;
        .card-container {
            width: 100%;
            max-width: 592px;
        }
        .image {
            max-width: 256px;
            max-height: 256px;
        }
        .affiliate {
            background-size: 650px !important;
        }
        .text {
            padding: 8px 0;
        }
    }

    @media #{$small}{
        max-width: 320px;
        padding: 24px;
        .card-container {
            width: 100%;
            max-width: 320px;
        }
        .image {
            display: none;
        }
        .text {
            width: 100%;
            max-width: 272px;
            padding: 12px 0;
        }
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            @include card-horizontal-hover;

            .title {
                text-decoration: underline;
                text-decoration-color: var(--color-primary-blue-03);
                text-decoration-thickness: 1.5px;
                @include link-hover;
                color: var(--color-primary-blue-03);
            }
        }
    }
}
</style>
