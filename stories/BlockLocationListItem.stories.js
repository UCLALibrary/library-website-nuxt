// Import mock api data
import * as API from "~/stories/mock-api.json"
import BlockLocationListItem from "~/components/BlockLocationListItem"

const mock = {
    isUclaLibrary: false,
    title: "Arts Library",
    image:  API.image,
    day: "Today",
    startTime: "8am",
    endTime: "5pm",
    reserveSeat: "http://google.com/reserveSeat",
    address: "1400 Public Affairs Building Los Angeles, CA 90095-1392",
    addressLink: "http://google.com/address",
    amenities: [
        "SvgIconEmail",
        "SvgIconPhone",
        "SvgIconVirtual",
        "SvgIconChair",
        "SvgIconVirtual",
        "SvgIconSharePrinter",
        "SvgIconShareBook",
        "SvgIconShareBook",
        "SvgIconShareBook",
    ],
    to: "http://google.com/title",

}

export default {
    title: "BLOCK / Location List Item",
    component: BlockLocationListItem
}


const Template = (args, { argTypes }) => ({
    components: { BlockLocationListItem },
    props: Object.keys(argTypes),
    template: `<block-location-list-item v-bind="$props"/>`,
})

export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
        <block-location-list-item
            :title="title"
            :to="to"
            :image="image"
            :day="day"
            :startTime="startTime"
            :endTime="endTime"
            :address="address"
            :addressLink="addressLink"
            :amenities="amenities"
            :reserveSeat="reserveSeat"
            :isUclaLibrary="isUclaLibrary"
        />
    `,
})

export const WithControls = Template.bind({})
WithControls.args = { ...mock }

export const WithControlsAndNoImage = Template.bind({})
WithControlsAndNoImage.args = { ...mock, image: "" }

