// Storybook default settings
export default {
    title: "BLOCK / With Illustration",
}

const mock = {
    to: "/help/foo/bar/",
    title: "Quisque Volutpat",
    text: "Nisl felis, venenatis tristique, dignissim in, ultrices sit amet.",
}

export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            :to="to"
            :title="title"
            :text="text"
        />
    `,
})

export const Visit = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-find-space"
            to="/about/foo/bar"
            :title="title"
            :text="text"
        />
    `,
})

export const LongText = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-digitized-resources"
            to="/help/foo/bar"
            :title="title"
            text="Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper.
            "
        />
    `,
})

export const Databases = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-databases"
            to="/visit/foo/bar"
            :title="title"
            :text="text"
        />
    `,
})

export const RemoteAccess = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name= "illustration-remote-access"
            to="/visit/foo/bar"
            :title="title"
            :text="text"
        />
    `,
})

export const Research = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-research"
            to="/visit/foo/bar"
            :title="title"
            :text="text"
        />
    `,
})

export const Teaching = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-teaching"
            to="/visit/foo/bar"
            :title="title"
            :text="text"
        />
    `,
})

export const ExternalLink = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-teaching"
            to="https://guides.library.illinois.edu/openrefine/joiningprojects"
            :title="title"
            :text="text"
        />
    `,
})
