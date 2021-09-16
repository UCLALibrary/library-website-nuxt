<template lang="html">
    <div :class="darkClasses">
        <div class="meta">
            <svg-heading-vector class="heading-line" />
            <div
                :class="classes"
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
import SvgMoleculeTwoFacets from "~/assets/svg/molecule-two-facets"
import SvgHeadingVector from "~/assets/svg/vector-blue"
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
        sectionName() {
            return getSectionName(this.to)
        },
        classes() {
            return ["category", `color-${this.sectionName}`]
        },
        darkClasses() {
            return ["banner-text", { "color-dark": this.isDarkBlue }]
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
.banner-text {
    max-width: 1030px;
    padding-left: var(--unit-gutter);
    padding-right: var(--unit-gutter);
    padding-top: 10px;
    background-color: var(--color-background); //Update this to be a theme that

    --color-background: var(--color-white);
    &.color-dark {
        --color-background: var(--color-primary-blue);
    }

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
        color: var(--color-primary-darkest-blue);
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
        color: var(--color-primary-blue);
        margin-top: 70px;
        text-align: left;
        max-width: 730px;
        padding-left: 20px;
    }
    .schedule {
        font-size: 20px;
        line-height: 24px;
        text-align: left;
        color: var(--color-secondary-grey-04);
        margin: 10px 0 8px 0;
        padding-left: 20px;

        display: flex;
        flex-wrap: nowrap;
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
        font-size: 24px;
        text-align: left;
        max-width: 630px;
        margin-top: 10px;
        padding-left: 20px;
    }
    .button-link {
        margin-top: 24px;
        max-width: 160px;
        margin-left: 20px;
        background-color: var(--color-primary-blue);
        color: var(--color-white);
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
