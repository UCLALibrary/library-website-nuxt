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
            largeText: '10',
            mediumText: 'millon',
            smallDescriptor: 'dollars in funding allocated for the procurement of digital and print material', 
            imagePath: 'https://i.pinimg.com/originals/02/4b/9f/024b9fee1d4fe6b6939110cc803dfefe.jpg',
            altImageText: 'Image for slide 1',
        },
        {
            largeText: '3.5',
            mediumText: 'millon',
            smallDescriptor: 'dollars in funding allocated for the procurement of digital and print material',
            imagePath: 'http://mynewsla.com/wp-content/uploads/2014/08/MNLA_FilePhotos_UCLAWestwood_0014.jpg',
            altImageText: 'Image for slide 2',
        },
        {
            largeText: '5',
            mediumText: 'bajillion',
            smallDescriptor: 'SMdes 0', 
            imagePath: 'https://www.p2sinc.com/uploads/UCLA-Powell-WH-1.jpg',
            altImageText: 'Image for slide 3'
        },
        {
            largeText: '25',
            mediumText: 'percent',
            smallDescriptor: 'SMdes 1',
            imagePath: 'https://farm7.staticflickr.com/6105/6263912377_bc0ab9d68a_z.jpg',
            altImageText: 'Image for slide 4'
        },
    ]
}
