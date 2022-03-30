// Storybook default settings
export default {
    title: "BLOCK / Card With Illustration",
}

const mock = {
    to: "/help/foo/bar/",
    title: "Quisque Volutpat",
    text: "Watch it, Goldie. No, it was The Enchantment Under The Sea Dance. Our first date.",
}

const mock2 = {
    to: "/visit/foo/bar/",
    title: "Quisque Volutpat",
    text: "Watch it, Goldie. No, it was The Enchantment Under The Sea Dance. Our first date. It was the night of that terrible thunderstorm, remember George? Your father kissed me for the very first time on that dance floor. It was then I realized I was going to spend the rest of my life with him.",
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
            ...mock2,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-find-space"
            to="/visit/foo/bar"
            title="The Enchantment Under The Sea - Our First Date"
            :text="text"
        />
    `,
})

export const LongTextAbout = () => ({
    data() {
        return {
            ...mock2,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-digitized-resources"
            to="/about/foo/bar"
            title="The Enchantment Under The Sea"
            text="Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper."
        />
    `,
})

export const DatabasesVisit = () => ({
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

export const RemoteAccessHelp = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name= "illustration-remote-access"
            to="/help/foo/bar"
            :title="title"
            :text="text"
        />
    `,
})

export const ResearchVisit = () => ({
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

export const TeachingAbout = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-teaching"
            to="/about/foo/bar"
            :title="title"
            :text="text"
            :is-horizontal="false"
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
            :is-horizontal="false"
        />
    `,
})

export const HorizontalCardRemoteAccess = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-remote-access"
            to="/about/foo/bar"
            category="Malesuada Vestibulum"
            :title="title"
            text="Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet."
            :is-horizontal="true"
        />
    `,
})

export const HorizontalCardTeaching = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-teaching"
            to="/about/foo/bar"
            category="Malesuada"
            title="The Enchantment Under The Sea Dance"
            text="Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Morbi in dui quis est pulvinar ullamcorper."
            :is-horizontal="true"
        />
    `,
})

export const HorizontalCardResearch = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-card-with-illustration
            icon-name="illustration-research"
            to="/about/foo/bar"
            category="Malesuada"
            :title="title"
            text="Watch it, Goldie. No, it was The Enchantment Under The Sea Dance. Our first date. It was the night of that terrible thunderstorm, remember George? Your father kissed me for the very first time on that dance floor. It was then I realized I was going to spend the rest of my life with him."
            :is-horizontal="true"
        />
    `,
})
