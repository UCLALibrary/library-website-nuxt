// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Staff / Detail",
}

const mock = {
    image: API.image,
    to: "/visit/foo/bar/",
    staffName: "Ada Lovelace",
    jobTitle: "Librateria",
    location: "Powellarium",
    email: "ada@somewhere.com",
    phone: "555-555-5555",
    department: "DIIT",
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { ...mock }
    },
    template: `
    <block-staff-detail
    :image="image"
    :to="to"
    :staffName="staffName"
    :jobTitle="jobTitle"
    :location="location"
    :email="email"
    :phone="phone"
    :department="department"
    />
  `,
})
