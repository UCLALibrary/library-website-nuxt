// Storybook default settings
export default {
    title: "Masthead / Secondary",
}
export const Default = () => ({
    template: `
        <masthead-secondary
            title="Find and Reserve a Space"
            text="Browse on-campus spaces for study, meetings, and group projects."
        >
            <search-generic actionURL="/search" />
        </masthead-secondary>
    `,
})
export const LongText = () => ({
    template: `
        <masthead-secondary
            title="Research"
            text="Schedule a research consultation, chat with a librarian, email us, and find tutorials & workshops to support your research journey."
        >
            <search-generic actionURL="/search" />
        </masthead-secondary
    `,
})
export const NoSearch = () => ({
    template: `
        <masthead-secondary
            title="Find and Reserve a Space"
            text="Browse on-campus spaces for study, meetings, and group projects.
        "/>
    `,
})
export const NoMolecule = () => ({
    template: `
        <masthead-secondary
            title="Find and Reserve a Space"
            text="Browse on-campus spaces for study, meetings, and group projects."
            :has-molecules="false"
        />
    `,
})
