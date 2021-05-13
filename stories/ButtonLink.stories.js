// Storybook default settings
export default {
  title: "BUTTON / Link",
}

// Variations of stories below
export const Default = () => ({
  template: `<button-link label="Read full story"/>`,
})

export const NotPrimary = () => ({
  template: `<button-link label="Ask a Librarian" :isPrimary="false"/>`,
})

export const LongLabel = () => ({
  template: `<button-link label="Lorem ipsum dolor sit amet."/>`,
})

export const HasGlyph = () => ({
  template: `<button-link label="Ask a Librarian" :isPrimary="false" iconName=""/>`,
})
