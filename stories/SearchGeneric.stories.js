// Storybook default settings
export default {
  title: "SEARCH / Generic",
}

// Variations of stories below
export const Default = () => ({
  template: `
      <search-generic 
          actionURL="/search"
      />
  `,
})
