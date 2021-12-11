import ImpactNumbersCarousel from '~/components/ImpactNumbersCarousel.vue'


export default {
    title: "Impact Numbers Carousel",
    component: ImpactNumbersCarousel,
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: `<impact-numbers-carousel v-bind="$props" />`
})

export const Default = Template.bind({})

Default.args = {
    blocks: [
        {
            largeText: 'LGtxt 0',
            mediumText: 'MDtxt 0',
            // smallDescriptor, image, altImageText
        },
        {
            largeText: 'LGtxt 1',
            mediumText: 'MDtxt 1',
            // smallDescriptor, image, altImageText
        },
    ]
}
