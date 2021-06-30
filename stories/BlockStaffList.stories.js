// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
    title: "BLOCK / Staff / List",
}

const mock = {
    imageUrl: API.image.src,
    to: "/visit/foo/bar/",
    jobTitle: "Ullamco",
    staffName: "Fames ac turpis",
    department: "Inceptos Himenaeos",
    email: "loreum@ipsum.foo",
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

export const ShortTitle = () => ({
    data() {
        return {
            item: {
                ...mock,
                title: "Minim",
            },
        }
    },
    template: `
      <block-teaser-list
        :item="item"
      />
  `,
})

export const LongTitle = () => ({
    data() {
        return {
            item: {
                ...mock,
                title:
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            },
        }
    },
    template: `
      <block-teaser-list
        :item="item"
      />
  `,
})
