<template>
    <div class="section-teaser-calendar">
        <div v-html="groupByDate" />
        <div class="select-month-actions">
            <span
                class="selected-month"
            >{{ selectedMonth }} {{ selectedYear }}</span>
            <svg-caret
                class="month-prev"
                @click="selectPreviousMonth"
            />

            <svg-caret
                class="month-next"
                @click="selectNextMonth"
            />

            <button
                class="select-today"
                @click="selectCurrentMonth()"
            >
                Today
            </button>
        </div>
        <divider-way-finder color="visit" />
        <div v-if="events.length">
            <section
                v-for="(eventGroup, date) in groupedEvents"
                :key="date"
                class="calendar-items"
            >
                <block-date
                    :date="format(new Date(date), 'DD')"
                    :day="format(new Date(date), 'dddd')"
                    class="calendar-item"
                />
                <template v-for="(event, i) in eventGroup">
                    <block-teaser-meta
                        :key="i"
                        :category="event.category"
                        :date="event.dateRange"
                        :is-online="false"
                        :location="event.location"
                        :time="event.time"
                        :title="event.title"
                        :item="event"
                        view="calendar"
                        class="calendar-item"
                    />
                </template>
            </section>
        </div>
    </div>
</template>

<script>
import _ from "lodash"

import add from "date-fns/add"
import sub from "date-fns/sub"
import format from "date-fns/format"

import dayjs from "dayjs"
// import isSameOrAfter from "dayjs/plugin/isSameOrAfter"

import SvgCaret from "~/assets/svg/caret"

import formatDates from "~/utils/formatEventDates"
import formatTimes from "~/utils/formatEventTimes"

// // load isSameOrAfter dayjs plugin
// dayjs.extend(isSameOrAfter)

export default {
    components: {
        SvgCaret,
    },
    props: {
        /**
         * List of events: [{ category, title, dateStart, dateEnd, location, }]
         */
        events: {
            type: Array,
            default: () => [],
        },
    },

    data() {
        return {
            // defaults to current date time
            selectedMonthYear: dayjs(),
        }
    },
    computed: {
        groupedEvents() {
            // filter events on selected month
            const eventsFiltered = _.filter(this.events, (event) => {
                return (
                    format(new Date(event.dateStart), "yyyy MM") ===
                    format(new Date(this.selectedMonthYear), "yyyy MM")
                )
            })
            const eventsSorted = _.sortBy(eventsFiltered, "dateStart")
            const eventsGrouped = eventsSorted.map((event) => {
                return {
                    ...event,
                    dateGroup:
                        // group with day granularity
                        format(new Date(event.dateStart), "YYYY-MM-DD"),
                    dateRange: this.getDateRange(
                        event.dateStart,
                        event.dateEnd
                    ),
                    // time: this.getTime(event.dateStart, event.dateEnd),
                }
            })
            return _.groupBy(eventsGrouped, "dateGroup")
        },
        groupByDate() {
            return _.groupBy(this.events, "dateStart")
        },
        selectedMonth() {
            return dayjs(this.selectedMonthYear, "YYYYMM").format("MMM")
        },
        selectedYear() {
            return dayjs(this.selectedMonthYear, "YYYYMM").format("YYYY")
        },
        formatDates() {
            return formatTimes(
                ((startDate = this.event.dateStart),
                (endDate = this.event.dateEnd))
            )
        },
    },

    methods: {
        getDateRange(start, end) {},

        /**
         * Sets the current month of the calendar to the current month.
         */
        selectCurrentMonth() {
            // TODO: only do this if the selected month is not the current month
            this.selectedMonthYear = dayjs()
            this.$emit("current-month-selected", this.selectedMonthYear)
        },

        /**
         * Sets the current month of the calendar to the next month relative to selected month.
         */
        selectNextMonth() {
            // is future in date fns
            this.selectedMonthYear = dayjs(
                this.selectedMonthYear,
                "YYYYMM"
            ).add(1, "month")
            this.$emit("next-month-selected", this.selectedMonthYear)
        },

        /**
         * Sets the current month of the calendar to the previous month relative to selected month.
         */
        selectPreviousMonth() {
            // is_past in date fns
            const prevMonth = dayjs(this.selectedMonthYear, "YYYYMM").subtract(
                1,
                "month"
            )
            // only select prev month if it is equal to or greater that the current month
            if (prevMonth.isSameOrAfter(dayjs(), "month")) {
                this.selectedMonthYear = prevMonth
                this.$emit("previous-month-selected", this.selectedMonthYear)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-calendar {
    .select-month-actions {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    .selected-month {
        color: var(--color-primary-blue);
        font-size: 64px;
        margin-left: 32px;
        min-width: 240px;
    }
    .month-prev {
        transform: scaleX(-1);
    }
    .month-next {
    }

    .select-today {
        font-size: 18px;
        font-family: var(--font-secondary);
        color: var(--color-secondary-grey-04);
        margin-left: auto;
        margin-right: 5px;
        border: 1px solid var(--color-secondary-grey-02);
        border-radius: var(--rounded-slightly-all);
        padding: 19px 32px 19px 32px;
    }

    .divider-way-finder {
        margin: 30px 0;
    }

    .calendar-items {
        display: flex;
        flex-wrap: wrap;

        margin-bottom: 17px;
    }
    .calendar-item {
        margin: 32px 0 28px 75px;
        width: 274px;

        &:first-child {
            margin-left: 0;
        }
    }
}
</style>
