import { action } from '@storybook/addon-actions'
import SearchHome from '~/components/SearchHome.vue'

export default {
    title: 'Search / Home',
    component: SearchHome,
}

const Template = (args, { argTypes }) => ({
    components: { SearchHome },
    props: Object.keys(argTypes),
    template: '<search-home \
        v-bind="$props" \
        @activeTabSet="action" \
        @search="action" />',
    methods: { 
        action: action(),
    }
})

export const Default = Template.bind({})

Default.args = {
    linkItems: [
        {
            text: 'Course Reserves',
            url: 'https://catalog.library.ucla.edu/vwebv/enterCourseReserve.do',
            target: '_blank',
        },
        {
            text: 'UCLA Research Guides',
            url: 'https://guides.library.ucla.edu/',
            target: ''
        },
        {
            text: 'Databases A-Z',
            url: 'https://guides.library.ucla.edu/az.php',
            target: '_blank',
        },
    ],
    advancedSearchLink: {
        text: 'Advanced Search',
        url: 'https://www.library.ucla.edu/search',
        target: '_blank',
    }
}
