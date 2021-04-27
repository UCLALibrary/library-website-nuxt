// Storybook default settings
export default {
    title: "Masthead / Secondary",
}
export const Default = () => ({
    template: `<masthead-secondary title="Find and Reserve a Space" text="Browse on-campus spaces for study, meetings, and group projects." :has-tabs="false"><search-home :has-tabs="false" /></masthead-secondary>`,
})
export const LongText = () => ({
  template: `<masthead-secondary title="Research" text="Schedule a research consultation, chat with a librarian, email us, and find tutorials & workshops to support your research journey." :has-tabs="false"><search-home :has-tabs="false" /></masthead-secondary`,
})
export const NoSearch = () => ({
  template: `<masthead-secondary title="Find and Reserve a Space" text="Browse on-campus spaces for study, meetings, and group projects." :has-tabs="false"/>`,
})
export const NoMolecule = () => ({
  template: `<masthead-secondary title="Find and Reserve a Space" text="Browse on-campus spaces for study, meetings, and group projects." :has-tabs="false" :has-molecules="false"/>`,
})
