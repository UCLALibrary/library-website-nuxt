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
