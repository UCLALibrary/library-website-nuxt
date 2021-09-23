<template lang="html">
    <div :class="classes">
        <div class="meta">
            <svg-heading-vector class="heading-line" />
            <div
                :class="categoryClasses"
                v-html="category"
            />
        </div>
        <h2
            class="title"
            v-html="title"
        />
        <div class="schedule">
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
            <div
                v-if="locationDisplay"
                class="schedule-item"
                v-html="locationDisplay"
            />
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

// Utility functions
import formatEventTimes from "~/utils/formatEventTimes"
import getSectionName from "~/utils/getSectionName"

export default {
    components: {
        SvgMoleculeTwoFacets,
        SvgHeadingVector,
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
        location: {
            type: String,
            default: "",
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
            return format(new Date(this.date), "MMMM d, Y")
        },
        parsedTime() {
            return formatEventTimes(this.date, this.date)
        },
        locationDisplay() {
            let output = this.location
            if (this.isOnline) {
                output = "Online"
            }
            return output
        },
    },
}
</script>

<style lang="scss" scoped>
.theme-light {
    --background-color: var(--color-white);
    --category-title-color: var(--color-primary-darkest-blue);
    --title-color: var(--color-primary-blue);
    --text-color: var(--color-black);
    --schedule-item-color: var(--color-secondary-grey-04);
    --schedule-item-border: var(--color-secondary-grey-02);
    --button-border-color: var(--color-primary-blue);
    --facet-inside-color: var(--color-primary-light-blue);
    --facet-outside-color: var(--color-primary-blue);
}

.theme-dark {
    --background-color: var(--color-primary-blue);
    --category-title-color: var(--color-white);
    --title-color: var(--color-white);
    --text-color: var(--color-white);
    --schedule-item-color: var(--color-white);
    --schedule-item-border: var(--color-primary-yellow);
    --button-border-color: var(--color-default-cyan-lighter);
    --facet-inside-color: var(--color-default-cyan-lighter);
    --facet-outside-color: var(--color-default-cyan-base);
}
.banner-text {
    max-width: 1440px;
    height: 100%;
    padding-left: var(--unit-gutter);
    padding-right: var(--unit-gutter);
    padding-top: 10px;
    background-color: var(--background-color);

    .meta {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    // Themes for category outline
    --color-theme: var(--color-primary-blue);
    .color-visit {
        --color-theme: var(--color-visit-fushia-base);
    }
    .color-help {
        --color-theme: var(--color-help-green-base);
    }
    .color-about {
        --color-theme: var(--color-about-purple-base);
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
        font-size: 72px;
        color: var(--title-color);
        margin-top: 70px;
        text-align: left;
        max-width: 730px;
        padding-left: 20px;
    }
    .schedule {
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        color: var(--schedule-item-color);
        margin: 10px 0 8px 0;
        padding-left: 20px;

        display: flex;
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
    .text {
        font-size: 24px;
        text-align: left;
        max-width: 630px;
        margin-top: 10px;
        padding-left: 20px;
        color: var(--text-color);
    }
    .button-link {
        margin-top: 24px;
        max-width: 160px;
        margin-left: 20px;
        background-color: var(--color-primary-blue);
        color: var(--color-white);
        border: 1px solid var(--button-border-color);
    }
    .molecule {
        right: 0;
        top: 0;
        bottom: 95px;
        margin: auto;
        position: absolute;
        z-index: 20;
        // mix-blend-mode: screen;
        width: auto;

        .facet-outside {
            fill: var(--facet-outside-color);
        }

        .facet-inside {
            fill: var(--facet-inside-color);
        }
    }

    @media #{$lte-phone} {
        .title {
            font-size: 36px;
            max-width: 70%;
        }
        .text {
            font-size: 18px;
            max-width: 70%;
        }
        .molecule {
            height: 215px;
            width: auto;
        }
    }
}
</style>
