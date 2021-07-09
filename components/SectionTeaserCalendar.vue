<template>
    <div class="section-teaser-calendar">
        <div class="select-month-actions">
            <span
                class="selected-month"
            >{{ selectedMonth }} {{ selectedYear }}</span>
            <button
                class="month-prev"
                @click="selectPreviousMonth"
            >
                prev
            </button>
            <button @click="selectNextMonth">
                next
            </button>
            <button
                class="select-today"
                @click="selectCurrentMonth()"
            >
                Today
            </button>
        </div>
        <divider-way-finder color="visit" />
        <div>
            <section
                v-for="(eventGroup, date) in groupedEvents"
                :key="date"
                class="calendar-items"
            >
                <block-date
                    :date="dayjs(date).format('DD')"
                    :day="dayjs(date).format('dddd')"
                    class="calendar-item"
                />
                <!-- <div :key="i">
                    weeee: {{ date }}
                </div> -->
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
            <div v-if="isEmpty(groupedEvents)">
                No Events
            </div>
        </div>
    </div>
</template>

<script>
import _ from "lodash"
import dayjs from "dayjs"
import isSameOrAfter from "dayjs/plugin/isSameOrAfter"

// load isSameOrAfter dayjs plugin
dayjs.extend(isSameOrAfter)

// TODO: finish styling actions, includes getting Caret glyphs

export default {
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
            // passes dayjs lib to template for inline date formatting
            dayjs,
            isEmpty: _.isEmpty,
            // defaults to current date time
            selectedMonthYear: dayjs(),
        }
    },
    computed: {
        groupedEvents() {
            // filter events on selected month
            const eventsFiltered = _.filter(this.events, (event) => {
                return (
                    dayjs(event.dateStart).format("YYYYMM") ===
                    dayjs(this.selectedMonthYear).format("YYYYMM")
                )
            })
            const eventsSorted = _.sortBy(eventsFiltered, "dateStart")
            const eventsGrouped = eventsSorted.map((event) => {
                return {
                    ...event,
                    dateGroup: dayjs(
                        event.dateStart
                        // group with day granularity
                    ).format("YYYY-MM-DD"),
                    dateRange: this.getDateRange(
                        event.dateStart,
                        event.dateEnd
                    ),
                    time: this.getTime(event.dateStart, event.dateEnd),
                }
            })
            return _.groupBy(eventsGrouped, "dateGroup")
        },
        selectedMonth() {
            return dayjs(this.selectedMonthYear, "YYYYMM").format("MMM")
        },
        selectedYear() {
            return dayjs(this.selectedMonthYear, "YYYYMM").format("YYYY")
        },
    },

    methods: {
        /**
         * Returns formatted date range as string ONLY if the end date is a different day.
         * Otherwise, returns an empty string because the date is displayed via row.
         */
        getDateRange(start, end) {
            return dayjs(start).format("YYYY-MM-DD") !==
                dayjs(end).format("YYYY-MM-DD") && end
                ? `${dayjs(start).format("MMMM D")} - ${dayjs(end).format(
                    "MMMM D, YYYY"
                )}`
                : ""
        },

        /**
         * Returns formatted time as string, includes endtime if present.
         */
        getTime(start, end) {
            return end
                ? `${dayjs(start).format("h:mm a")} - ${dayjs(end).format(
                    "h:mm a"
                )}`
                : dayjs(start).format("h:mm a")
        },

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
        button {
            color: var(--color-grey-02);
            font-size: 28px; // TODO: remove when prev/next are replaced with glyfs
        }

        .selected-month {
            color: var(--color-primary-blue);
            font-size: 64px;
            margin-left: 32px;
            min-width: 240px;
        }

        .select-today {
            font-size: 18px;
            font-family: var(--font-secondary);
            margin-left: auto;
        }
    }

    .divider-way-finder {
        margin: 30px 0;
    }

    .calendar-items {
        display: flex;
        flex-wrap: wrap;

        margin-bottom: 17px;

        .calendar-item {
            margin: 32px 0 28px 75px;
            width: 274px;

            &:first-child {
                margin-left: 0;
            }
        }
    }
}
</style>
