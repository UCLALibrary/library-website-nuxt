// Storybook default settings
export default {
    title: "NAV / Breadcrumb",
}

const mock = {
    title: "jane-doe"
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock
        }
    },
    template: `<nav-breadcrumb :title="title"/>`,
})
