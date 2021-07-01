// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Staff / List",
}

const mock = {
    imageUrl: API.image.src,
    to: "/staff/foo",
    jobTitle: "Ullamco",
    staffName: "Fames ac turpis",
    department: "Inceptos Himenaeos",
    email: "loreum@ipsum.foo",
    locations: [{
        title: "cupidatat non proident",
        to: "/location/bar",
    },
    {
        title: "tristique",
        to: "/location/baz",
    }]
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { item: mock }
    },
    template: `
      <block-staff-list
        v-bind="item"
        phone="(222) 444-5555"
      />
  `,
})

export const OneLocation = () => ({
    data() {
        return {
            item: {
                ...mock,
                locations: mock.location[0],
            },
        }
    },
    template: `
      <block-staff-list
        v-bind="item"
        phone="(222) 444-5555"
      />
  `,
})

export const NoPhoneNumber = () => ({
    data() {
        return { item: mock }
    },
    template: `
      <block-staff-list
        v-bind="item"
      />
  `,
})
