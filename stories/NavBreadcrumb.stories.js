// Storybook default settings
export default {
    title: "NAV / Breadcrumb",
}

const mock = {
    to: "about/staff",
    title: "jane-doe"
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock
        }
    },
    template: `<nav-breadcrumb :to="to" :title="title"/>`,
})
