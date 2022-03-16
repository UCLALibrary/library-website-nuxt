<template lang="html">
    <div class="block-hours">
        <div class="container">
            <div class="days">
                <div class="day" />
                <li class="day">
                    Mon
                </li>
                <li class="day">
                    Tues
                </li>
                <li class="day">
                    Weds
                </li>
                <li class="day">
                    Thurs
                </li>
                <li class="day">
                    Fri
                </li>
                <li class="day">
                    Sat
                </li>
                <li class="day">
                    Sun
                </li>
            </div>

            <div class="dates">
                <li class="date-range">
                    &#60; Nov 1 - Nov 7 &#62;
                </li>
                <li class="date">
                    Month 1
                </li>
                <li class="date">
                    Month 2
                </li>
                <li class="date">
                    Month 3
                </li>
                <li class="date">
                    Month 4
                </li>
                <li class="date">
                    Month 5
                </li>
                <li class="date">
                    Month 6
                </li>
                <li class="date">
                    Month 7
                </li>
            </div>

            <div class="hours">
                <li class="library-location">
                    Library Location
                </li>
                <li class="times">
                    8a-5p
                </li>
                <li class="times">
                    8a-5p
                </li>
                <li class="times">
                    8a-5p
                </li>
                <li class="times">
                    8a-5p
                </li>
                <li class="times">
                    8a-5p
                </li>
                <li class="times">
                    Closed
                </li>
                <li class="times">
                    Closed
                </li>
            </div>

            <div class="detailed-hours">
                Show detailed hours +
            </div>
        </div>
    </div>
</template>

<script>
// https://calendar.library.ucla.edu/admin/api/1.1/endpoint/hours

import SvgHeadingArrow from "~/node_modules/ucla-library-design-tokens/assets/svgs/graphic-chevron-right"
import SvgIconLocation from "~/node_modules/ucla-library-design-tokens/assets/svgs/icon-location"

export default {
    components: {
        SvgHeadingArrow,
        SvgIconLocation,
    },
    props: {
        to: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.block-hours {
    .container {
        border: 1px solid coral;
    }
    li {
        list-style: none;
    } 
    .days {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;

        border: 1px solid pink;
    }
    .day {
        border: 1px solid aqua;
        padding: 12px 24px;
    }

    .dates {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;

        border: 1px solid pink;
        @include step-0;
        color: var(--color-primary-blue-05);
    }
    .date-range {}
    .date {
        @include step-0;
        color: var(--color-primary-blue-05);
        padding: 12px 24px;
        border: 1px solid #FFCC11 //gold;
    }

    .hours {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;

        @include step-0;
        color: var(--color-primary-blue-05);
    }
    .library-location {
        @include step-0;
        font-weight: medium;
        color: var(--color-primary-blue-05);
        padding: 12px 24px;
        border: 1px solid #61B329 //green;
    }
    .times {
        @include step-0;
        color: var(--color-black);
        padding: 12px 24px;
        border: 1px solid #61B329 //green;
    }

    .detailed-hours {
        @include step-0;
        color: var(--color-primary-blue-03);
    }

    .highlight {
        // border-radius: $slightly-rounded;
        color: var(--color-primary-blue-01);
    }
    .today-text {
        padding: 12px 24px;
    }
    .todays-date {
        @include step-0;
        font-weight: medium;
    }

@media #{$medium} {
    .container {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
    }
}

@media #{$small} {
    .container {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: stretch;
    }
}

}
</style>
