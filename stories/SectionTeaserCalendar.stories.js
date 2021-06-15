import dayjs from 'dayjs'
import { action } from '@storybook/addon-actions'
import * as API from "~/stories/mock-api.json"
import SectionTeaserCalendar from '~/components/SectionTeaserCalendar.vue'

export default {
    title: 'Section / TeaserCalendar',
    component: SectionTeaserCalendar,
}

const Template = (args, { argTypes }) => ({
    components: { SectionTeaserCalendar },
    props: Object.keys(argTypes),
    template: '<SectionTeaserCalendar \
        v-bind="$props" \
        @current-month-selected="action" \
        @previous-month-selected="action" \
        @next-month-selected="action" />',
    methods: {
        action: action(),
    }
})

export const Default = Template.bind({})

Default.args = {
    events: API.events,
}

export const EventsNextMonth = Template.bind({})

const nextMonthsEvents = API.events.map((event) => {
    return {
        ...event,
        dateStart: dayjs(event.dateStart)
            // set dates to current month +1 for evergreen testing
            .month(dayjs().month())
            .add(1, 'month'),
        dateEnd: dayjs(event.dateEnd)
            .month(dayjs().month())
            .add(1, 'month'),
    }
})

EventsNextMonth.args = {
    events: nextMonthsEvents,
}

export const EvergreenData = Template.bind({})

EvergreenData.args = {
    events: API.events.map((event) => {
        return {
            ...event,
            // set dates to current month for evergreen testing
            dateStart: dayjs(event.dateStart)
                .month(dayjs().month())
                .add(4, 'day'), // add 4 days for fun
            dateEnd: event.dateEnd
                ? dayjs(event.dateEnd)
                    .month(dayjs().month())
                    .add(4, 'day') // add 4 days for fun
                : '',
        }
    }),
}
