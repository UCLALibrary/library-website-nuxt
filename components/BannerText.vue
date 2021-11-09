<template lang="html">
    <div :class="classes">
        <div class="meta">
            <svg-heading-vector class="heading-line" />
            <div
                :class="categoryClasses"
                v-html="category"
            />
        </div>
        <h1
            class="title"
            v-html="title"
        />
        <div
            v-if="date"
            class="schedule"
        >
            <time
                v-if="date"
                class="schedule-item"
                v-html="parsedDate"
            />
            <time
                v-if="date"
                class="schedule-item"
                v-html="parsedTime"
            />
            <!-- TODO this can be multiple locations, on own line with icon -->
            <div
                v-if="isOnline"
                class="schedule-item"
            >
                Online
            </div>
        </div>
        <div
            v-if="locations.length"
            class="location-group"
        >
            <nuxt-link
                v-for="location in locations"
                :key="`location-${location.id}`"
                :to="location.to"
                class="location-link"
            >
                <svg-icon-location class="location-svg" />
                <span
                    class="location"
                    v-html="location.title"
                />
            </nuxt-link>
        </div>
        <div
            v-if="text"
            class="text"
            v-html="text"
        />
        <button-link
            v-if="to"
            :label="buttonText"
            :to="to"
            icon-name="svg-arrow-diagonal"
            class="button-link"
        />
        <svg-molecule-two-facets class="molecule" />
    </div>
</template>

<script>
import format from "date-fns/format"

// SVGs
import SvgMoleculeTwoFacets from "~/assets/svg/molecule-two-facets"
import SvgHeadingVector from "~/assets/svg/vector-blue"
import SvgIconLocation from "~/assets/svg/icon-location"

// Utility functions
import formatEventTimes from "~/utils/formatEventTimes"
import formatEventDates from "~/utils/formatEventDates"
import getSectionName from "~/utils/getSectionName"

export default {
    components: {
        SvgMoleculeTwoFacets,
        SvgHeadingVector,
        SvgIconLocation,
    },
    props: {
        category: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
            required: true,
        },
        date: {
            type: String,
            default: "",
        },
        locations: {
            type: Array,
            default: () => [],
        },
        isOnline: {
            type: Boolean,
            default: false,
        },
        text: {
            type: String,
            default: "",
        },
        buttonText: {
            type: String,
            default: "",
        },
        to: {
            type: String,
            default: "",
        },
        isDarkBlue: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            let output = ["banner-text", "theme-light"]
            if (this.isDarkBlue) {
                output = ["banner-text", "theme-dark"]
            }
            return output
        },
        sectionName() {
            return getSectionName(this.to)
        },
        categoryClasses() {
            return ["category", `color-${this.sectionName}`]
        },
        parsedDate() {
            return formatEventDates(this.date, this.date)
        },
        parsedTime() {
            return formatEventTimes(this.date, this.date)
        },
    },
}
</script>

<style lang="scss" scoped>
// Variations for dark blue and white backgrounds
.theme-light {
    --background-color: var(--color-white);
    --category-title-color: var(--color-primary-blue-05);
    --title-color: var(--color-primary-blue-03);
    --text-color: var(--color-black);
    --schedule-item-color: var(--color-secondary-grey-04);
    --schedule-item-border: var(--color-secondary-grey-02);
    --button-border-color: var(--color-primary-blue-03);
    --facet-inside-color: var(--color-primary-blue-02);
    --facet-outside-color: var(--color-primary-blue-03);
    --location-color: var(--color-primary-blue-03);
    --location-icon-color: var(--color-primary-blue-03);
    --hover-border-color: var(--color-primary-blue-02);
    --hover-background-color: var(--color-white);
}
.theme-dark {
    --background-color: var(--color-primary-blue-03);
    --category-title-color: var(--color-white);
    --title-color: var(--color-white);
    --text-color: var(--color-white);
    --schedule-item-color: var(--color-white);
    --schedule-item-border: var(--color-primary-yellow-01);
    --button-border-color: var(--color-default-cyan-02);
    --facet-inside-color: var(--color-default-cyan-02);
    --facet-outside-color: var(--color-default-cyan-03);
    --location-color: var(--color-white);
    --location-icon-color: var(--color-white);
    --hover-border-color: var(--color-white);
    --hover-background-color: var(--color-primary-blue-03);
}
.banner-text {
    max-width: 1440px;
    padding-left: 204px;
    padding-right: var(--unit-gutter);
    padding-top: 84px;
    padding-bottom: 128px;
    margin: 0 auto;
    background-color: var(--background-color);
    position: relative;
    z-index: 0;
    .meta {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    // Themes for category outline
    --color-theme: var(--color-primary-blue-03);
    .color-visit {
        --color-theme: var(--color-visit-fushia-03);
    }
    .color-help {
        --color-theme: var(--color-help-green-03);
    }
    .color-about {
        --color-theme: var(--color-about-purple-03);
    }
    .category {
        color: var(--category-title-color);
        font-size: 26px;
        text-transform: capitalize;
        border: 1px solid var(--color-theme);
        padding: 15px 20px 13px 22px;
        margin-left: -10px;
        clip-path: polygon(17px 0, 100% 0, 100% 100%, 1px 100%);
    }
    .heading-line {
        flex-shrink: 0;
        padding-right: 0;
    }
    .title {
        font-size: 80px;
        line-height: 1;
        color: var(--title-color);
        margin-top: 48px;
        text-align: left;
        max-width: 788px;
        padding-left: 52px;
    }
    .schedule {
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        font-family: var(--font-secondary);
        color: var(--schedule-item-color);
        margin: 24px 0 8px 0;
        padding-left: 52px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .schedule-item {
        &:after {
            content: "";
            border-left: 1px solid var(--schedule-item-border);
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
    .location-group {
        color: var(--location-color);
        font-family: var(--font-secondary);
        font-size: 20px;
        line-height: 1;
        padding-left: 52px;
    }
    .location-link {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: center;
        align-items: center;
    }
    .location-svg {
        .location-icon {
            fill: var(--location-icon-color);
        }
        .location-icon-line {
            stroke: var(--location-icon-color);
        }
    }
    .text {
        font-size: 20px;
        line-height: 1.5;
        text-align: left;
        max-width: 70%;
        margin-top: 24px;
        padding-left: 52px;
        color: var(--text-color);
    }
    .button-link {
        margin-top: 40px;
        max-width: 160px;
        margin-left: 52px;
        margin-bottom: 40px;
        background-color: var(--color-primary-blue-03);
        color: var(--color-white);
        border: 1px solid var(--button-border-color);
        /deep/ {
            .arrow {
                stroke: var(--color-default-white);
                .arrow-diagonal {
                    fill: var(--color-white);
                }
                .line {
                    stroke: var(--color-white);
                }
            }
        }
    }
    .molecule {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        margin: auto;
        position: absolute;
        z-index: 20;
        width: auto;
        .facet-outside {
            fill: var(--facet-outside-color);
        }
        .facet-inside {
            fill: var(--facet-inside-color);
        }
    }
    // Hovers
    @media #{$has-hover} {
        .button-link:hover {
            border: 1px solid var(--hover-border-color);
            background-color: var(--hover-background-color);
            color: var(--text-color);
            /deep/ {
                .arrow {
                    stroke: var(--color-default-cyan-03);
                    .arrow-diagonal {
                        fill: var(--color-default-cyan-03);
                    }
                    .line {
                        stroke: var(--color-default-cyan-03);
                    }
                }
            }
        }
    }
}
// Breakpoints
@media #{$extra-large} {
    .banner-text {
        margin-top: 72px;
        .text {
            max-width: 788px;
        }
    }
}
@media #{$medium} {
    .banner-text {
        padding-left: 40px;
        padding-bottom: 60px;
        padding-top: 40px;
        .title {
            font-size: 52px;
            margin-top: 32px;
            padding-right: 120px;
        }
        .text {
            padding-right: 120px;
        }
        .button-link {
            margin-top: 32px;
        }
        .molecule {
            height: 300px;
            width: auto;
        }
    }
}
@media #{$small} {
    .banner-text {
        padding: 32px 32px 48px 32px;
        .title {
            font-size: 42px;
            padding-right: 88px;
            padding-left: 0;
            margin-top: 32px;
        }
        .schedule {
            display: flex;
            flex-direction: column;
            padding-left: 0;
        }
        .schedule-item {
            &:after {
                display: none;
            }
        }
        .location-group {
            padding-left: 0;
        }
        .text {
            padding-left: 0;
            padding-right: 0;
            max-width: 100%;
        }
        .molecule {
            height: 215px;
            width: auto;
            top: 32px;
            transform: none;
        }
        .button-link {
            max-width: 100%;
            margin: 32px 0 0 0;
        }
    }
}
</style>
