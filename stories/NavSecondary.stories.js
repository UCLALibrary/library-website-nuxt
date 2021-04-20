import NavSecondary from "~/components/NavSecondary"

// Import mock api data
import * as API from "~/stories/mock-api.json"

// Storybook default settings
export default {
  title: "Secondary Navbar",
}

// Variations of stories below
export const Default = () => ({
  components: { NavSecondary },
  data() {
      return {
          items: API.secondaryNavlinks,
      }
  },
  template: `<nav-secondary v-bind:items="items"/>`,
})
