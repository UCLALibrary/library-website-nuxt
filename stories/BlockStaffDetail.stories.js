// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Staff / Detail",
}

const mock = {
    image: API.image,
    to: "/staff/id/",
    staffName: "Ada Lovelace",
    jobTitle: "Librateria",
    location: "Powellarium",
    email: "ada@somewhere.com",
    phone: "555-555-5555",
    department: "DIIT",
    topics: ["Quadrigis aedificium", "Carpe vinum", "Acta non verba"],
    biography:
        "Creo quia absurdum est. Fusce metus ex, gravida at metus id, vestibulum aliquam ante. Vestibulum hendrerit ut augue id pulvinar. Nam id efficitur felis. Duis nisi dui, vulputate id cursus quis, facilisis sed est. Etiam consequat malesuada congue. Nullam sed nulla laoreet, egestas felis in, sollicitudin lacus. Cras ultrices dolor at quam vestibulum, eget vestibulum diam congue. Nam at est cursus, cursus justo non, pharetra ipsum.Morbi gravida, turpis ut luctus placerat, est mauris congue libero, sed tristique quam eros vel neque. Nunc lacinia mi a orci faucibus tincidunt. Praesent dapibus blandit eros eget auctor. Nullam orci ex, pharetra tempor nulla non, vulputate mattis nibh. Sed vel pharetra erat. Proin nec sapien a velit scelerisque interdum. Donec sagittis magna tincidunt, eleifend arcu id, elementum sapien.",
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
    :topics="topics"
    :biography="biography"
    />
  `,
})
