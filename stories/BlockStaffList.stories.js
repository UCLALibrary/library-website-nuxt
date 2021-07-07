// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Staff / List",
}

const mock = {
    to: "/staff/foo",
    jobTitle: "Ullamco",
    staffName: "Fames ac turpis",
    department: "Inceptos Himenaeos",
    email: "loreum@ipsum.foo",
    
}

// Variations of stories below
export const Default = () => ({
    data() {
        return { 
            item: { 
                ...mock,
                image: API.image_people,
                locations: [{
                    title: "cupidatat non proident",
                    to: "/location/bar",
                },
                {
                    title: "tristique",
                    to: "/location/baz",
                }]
            }
        }
    },
    template: `
      <block-staff-list
        v-bind="item"
        phone="(222) 444-5555"
      />
  `,
})

export const NoImage = () => ({
    data() {
        return { 
            item: { 
                ...mock,
                locations: [{
                    title: "cupidatat non proident",
                    to: "/location/bar",
                },
                {
                    title: "tristique",
                    to: "/location/baz",
                }]
            }
        }
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
                image: API.image_people,
                locations: [{
                    title: "cupidatat non proident",
                    to: "/location/bar",
                }]
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
        return { 
            item: { 
                ...mock,
                image: API.image_people,
                locations: [{
                    title: "cupidatat non proident",
                    to: "/location/bar",
                },
                {
                    title: "tristique",
                    to: "/location/baz",
                }]
            }
        }
    },
    template: `
      <block-staff-list
        v-bind="item"
      />
  `,
})
