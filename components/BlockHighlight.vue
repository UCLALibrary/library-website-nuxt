<template lang="html">
    <div :class="classes">
        <div class="floating-highlight" />
        <div
            v-if="!isVertical"
            class="clipped-date"
        >
            <time
                v-if="startDate"
                class="month"
                v-html="parsedDateMonth"
            />
            <time
                v-if="startDate"
                class="day"
                v-html="parsedDateDay"
            />
        </div>
        <responsive-image
            :image="image"
            :aspect-ratio="imageAspectRatio"
            class="image"
        />

        <div
            v-if="hasTriangle"
            class="clipped"
        >
            <div class="floating-highlight" />
            <div class="clipped-box" />
        </div>

        <div class="meta">
            <div
                v-if="category"
                class="category"
                v-html="category"
            />
            <smart-link
                v-if="to"
                :target="parsedTarget"
                :to="to"
                class="title"
                v-html="title"
            />
            <h3
                v-else
                class="title-no-link"
                v-html="title"
            />

            <div class="date-time">
                <time
                    v-if="startDate"
                    class="schedule-item"
                    v-html="parsedDate"
                />
                <time
                    v-if="startDate"
                    class="schedule-item"
                    v-html="parsedTime"
                />
            </div>

            <div
                v-if="locations.length"
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
                        v-html="location.title"
                    />
                </nuxt-link>
            </div>
            <p
                v-if="text"
                class="text"
                v-html="text"
            />
        </div>
    </div>
</template>

<script>
import formatEventTimes from "~/utils/formatEventTimes"
import formatEventDates from "~/utils/formatEventDates"
import formatEventDay from "~/utils/formatEventDay"
import formatEventMonth from "~/utils/formatEventMonth"
import getSectionName from "~/utils/getSectionName"

export default {
    components: {
        SvgIconLocation: () => import("~/assets/svg/icon-location"),
        SvgIconOnline: () => import("~/assets/svg/icon-online"),
    },
    props: {
        image: {
            type: Object,
            default: () => {},
        },
        to: {
            type: String,
            default: "",
        },
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        startDate: {
            type: String,
            default: "",
        },
        endDate: {
            type: String,
            default: "",
        },
        hasTriangle: {
            type: Boolean,
            default: false,
        },
        isVertical: {
            type: Boolean,
            default: false,
        },
        imageAspectRatio: {
            type: Number,
            default: 0,
        },
        locations: {
            type: Array,
            default: () => [],
        },
        text: {
            type: String,
            default: "",
        },
    },
    computed: {
        classes() {
            return [
                "block-highlight",
                { "is-vertical": this.isVertical },
                { "has-triangle": this.hasTriangle },
                `color-${this.sectionName}`,
            ]
        },
        sectionName() {
            return getSectionName(this.to)
        },
        isImpactReport() {
            return this.$route.path.includes("impact") ? "true" : "false"
        },
        parsedTarget() {
            return this.isImpactReport ? "_blank" : ""
        },
        parsedDate() {
            if (this.startDate) {
                return formatEventDates(this.startDate, this.endDate)
            }
            return ""
        },
        parsedDateDay() {
            if (this.startDate) {
                return formatEventDay(this.startDate)
            }
            return ""
        },
        parsedDateMonth() {
            if (this.startDate) {
                return formatEventMonth(this.startDate)
            }
            return ""
        },
        parsedTime() {
            if (this.startDate) {
                return formatEventTimes(this.startDate, this.endDate)
            }
            return ""
        },
        parsedLocations() {
            return this.locations.map((obj) => {
                let input = "svg-icon-location"
                if (obj.title == "Online") input = "svg-icon-online"
                return {
                    ...obj,
                    svg: input,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.block-highlight {
    max-width: calc((100% - 32px) / 3);
    background-color: var(--color-white);
    font-family: var(--font-primary);
    position: relative;

    display: flex;
    flex-direction: row;

    // Themes for floating highlight/ triangle
    --color-theme: var(--color-primary-blue-03);
    &.color-visit {
        --color-theme: var(--color-visit-fushia-03);
    }
    &.color-help {
        --color-theme: var(--color-help-green-03);
    }
    &.color-about {
        --color-theme: var(--color-about-purple-03);
    }

    .clipped {
        width: 100%;
        height: 47px;
        margin-top: -54px;
        position: relative;
        z-index: 0;
        .floating-highlight {
            z-index: 30;
            position: absolute;
            width: calc(100% - 55px);
            top: 0;
            left: 5px;
            height: 47px;
            background-color: var(--color-theme);

            clip-path: polygon(
                0 0,
                calc(100% - 20px) 0,
                100% 47px,
                calc(100% - 1.5px) 47px,
                calc(100% - 21px) 1.5px,
                0 1.5px
            );
        }
        .clipped-box {
            position: absolute;
            z-index: 30;
            top: 8px;
            left: 0px;
            width: calc(100% - 57px);
            height: 47px;
            background-color: var(--color-white);
            clip-path: polygon(
                0 0,
                calc(100% - 20px) 0,
                100% 47px,
                calc(100% - 1.5px) 47px,
                0 47px,
                0 1.5px
            );
        }
    }

    .meta {
        z-index: 10;
        width: 100%;
    }
    .category {
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--color-primary-blue-05);
    }
    .title::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    .title,
    .title-no-link {
        @include step-1;
        color: var(--color-primary-blue-03);
        margin: 16px 0 0 0;
        line-height: $line-height--1;
    }

    .date-time {
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        letter-spacing: 1%;
        color: var(--color-black);
        margin-top: 10px;
        .svg-online {
            margin-bottom: -5px;
            margin-left: 10px;
            padding-left: 10px;
            border-left: 1px solid var(--color-secondary-grey-02);
        }
    }
    .schedule-item {
        &:after {
            content: "";
            border-left: 1px solid var(--color-secondary-grey-02);
            margin: 0 10px;
            height: 18px;
            display: inline-block;
            vertical-align: middle;
            position: relative;
        }
        &:last-child {
            margin-right: 0;
        }
        &:last-child:after {
            display: none;
        }
    }
    .text {
        font-size: 18px;
        font-weight: 400;
        line-height: 140%;
        margin: 24px 0 0 0;
        color: var(--color-black);
    }
    .location-group {
        color: var(--color-primary-blue-03);
        font-family: var(--font-secondary);
        font-size: 20px;
        line-height: 1;
        margin-top: 24px;
    }
    .location-link {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
    }

    // Variations
    &.is-vertical {
        flex-direction: column;
        // margin-bottom: 50px;

        &:not(.has-triangle) {
            .meta {
                margin-top: 16px;
                // max-width: 300px;
            }
            .image {
                width: 100%;
            }
        }
        // for clipped version
        &.has-triangle {
            .meta {
                margin-top: -25px;
                padding: 0 60px 0 17px;
            }
        }
    }
    &:not(&.is-vertical) {
        max-width: 990px;
        // position: relative;
        .meta {
            max-width: 412px;
            margin-top: 16px;
            padding-bottom: 16px;
            overflow: hidden;
        }
        .floating-highlight {
            z-index: 30;
            position: absolute;
            width: 123px;
            top: 191px;
            left: 6px;
            height: 90px;
            background-color: var(--color-theme);

            clip-path: polygon(
                0 0,
                calc(100% - 37px) 0,
                100% 75px,
                calc(100% - 1.5px) 75px,
                calc(100% - 38px) 1.5px,
                0 1.5px
            );
        }
        .clipped-date {
            margin-top: 54px;
            z-index: 30;
            position: absolute;
            top: 145px;
            left: 0px;
            width: 125px;
            height: 84px;
            background-color: var(--color-white);
            clip-path: polygon(
                0 0,
                calc(100% - 39px) 0,
                100% 84px,
                calc(100% - 1.5px) 84px,
                0 84px,
                0 1.5px
            );

            display: flex;
            flex-direction: column;
            justify-content: center;

            padding-left: 32px;
            color: var(--color-primary-blue-03);
            .month {
                font-weight: 400;
                font-family: var(--font-secondary);
                font-size: 16px;
                letter-spacing: 1.5%;
            }
            .day {
                font-weight: 500;
                font-family: var(--font-primary);
                font-size: 36px;
                letter-spacing: 0.25%;
            }
        }
        .image {
            width: 456px;
            max-height: 274px;
            margin-right: 56px;
            .clipped-date {
                margin-top: 54px;
                z-index: 30;
                position: absolute;
                top: 145px;
                left: 0px;
                width: 125px;
                height: 84px;
                background-color: var(--color-white);
                clip-path: polygon(
                    0 0,
                    calc(100% - 39px) 0,
                    100% 84px,
                    calc(100% - 1.5px) 84px,
                    0 84px,
                    0 1.5px
                );
            }
        }
    }

    // Breakpoints
    @media #{$medium} {
        &:not(&.is-vertical) {
            max-width: 95%;
            padding-left: 5px;
            padding-right: 5px;

            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;

            .floating-highlight {
                display: none;
            }
            .clipped-date {
                display: none;
            }
        }
    }

    @media #{$small} {
        max-width: 100%;
        &.is-vertical {
            // for clipped version
            &.has-triangle {
                //no changes for mobile
            }
        }
        &:not(&.is-vertical) {
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;

            max-height: 550px;
            max-width: 100%;
            padding-left: 5px;
            padding-right: 5px;

            .image {
                max-width: 100%;
            }
        }
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            .title {
                @include hover;
            }
        }
    }
}
</style>
