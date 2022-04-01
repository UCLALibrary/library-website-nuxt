// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Staff / Detail",
}

const mock = {
    // image: API.image_people,
    to: "about/staff/id/",
    staffName: "Ada Lovelace",
    jobTitle: "Librateria",
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    email: "ada@somewhere.com",
    phone: "555-555-5555",
    departments: ["DIIT", "Other Department"],
    topics: [
        { title: "Quadrigis aedificium", id: "808" },
        { title: "Carpe vinum", id: "809" },
    ],
    biography:
        "<p>Creo quia absurdum est. Fusce metus ex, gravida at metus id, vestibulum aliquam ante. Vestibulum hendrerit ut augue id pulvinar. Nam id efficitur felis. Duis nisi dui, vulputate id cursus quis, facilisis sed est. Etiam consequat malesuada congue. Nullam sed nulla laoreet, e gestas felis in, sollicitudin lacus. Cras ultrices dolor at quam vestibulum, eget vestibulum diam congue. Nam at est cursus, cursus justo non, pharetra ipsum.</p><p>Morbi gravida, turpis ut luctus placerat, est mauris congue libero, sed tristique quam eros vel neque. Nunc lacinia mi a orci faucibus tincidunt. Praesent dapibus blandit eros eget auctor. Nullam orci ex, pharetra tempor nulla non, vulputate mattis nibh. Sed vel pharetra erat. Proin nec sapien a velit scelerisque interdum. Donec sagittis magna tincidunt, eleifend arcu id, elementum sapien.</p>",
}

const mock2 = {
    // image: API.image_people,
    to: "/staff/id/",
    staffName: "Ada Lovelace",
    jobTitle: "Librateria",
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    email: "ada@somewhere.com",
    phone: "555-555-5555",
    departments: ["DIIT", "Other Departments"],
}

const mock3 = {
    // image: API.image_people,
    to: "/staff/id/",
    staffName: "Ada Lovelace",
    jobTitle: "Librateria",
    locations: [
        { title: "Powellarium", to: "/location/bar" },
        { title: "Research Library (Charles E. Young)", to: "/location/baz" },
    ],
    email: "ada@somewhere.com",
    phone: "555-555-5555",
    departments: ["DIIT", "Other Departments"],
    topics:[
        { title: "topic1", id: "bar1" },
        { title: "topic2", id: "baz2" },
    ],
    academicDepartments:[
        { title: "acadept1", id: "acbar1" },
        { title: "acadept2", id: "acbaz2" },
    ],
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            item: {
                ...mock,
                image: API.image_people,
            },
        }
    },
    template: `
    <block-staff-detail
        v-bind="item"
    />
  `,
})

export const NoImage = () => ({
    data() {
        return {
            item: {
                ...mock,
            },
        }
    },
    template: `
    <block-staff-detail
    v-bind="item"
    />
  `,
})

export const NoImageOrBio = () => ({
    data() {
        return {
            item: {
                ...mock2,
            },
        }
    },
    template: `
    <block-staff-detail
    v-bind="item"

    />
  `,
})

export const AskMeAboutAndAcademicDeaprtments = () => ({
    data() {
        return {
            item: {
                ...mock3,
            },
        }
    },
    template: `
    <block-staff-detail
    v-bind="item"

    />
  `,
})
