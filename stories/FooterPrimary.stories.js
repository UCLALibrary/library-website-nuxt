// Storybook default settings
export default {
    title: "FOOTER / Primary",
}

const mock = {
    socialItems: [
        {
            id: "11777",
            name: "Twotter",
            to: "https://twitter.com/",
            classes: null,
            target: "1"
        },
        {
            id: "11778",
            name: "Fatebook",
            to: "https://www.facebook.com/",
            classes: null,
            target: "1"
        },
        {
            id: "11779",
            name: "Instagrim",
            to: "https://www.instagram.com/",
            classes: null,
            target: "1"
        },
        {
            id: "11780",
            name: "FooTube",
            to: "https://www.youtube.com/",
            classes: null,
            target: "1"
        }
    ],

    pressItems: [
        {
            id: "11781",
            name: "Dress Doom",
            to: "https://test-craft.library.ucla.edu/press-room",
            classes: null,
            target: ""
        },
        {
            id: "11782",
            name: "Careers at USC",
            to: "https://test-craft.library.ucla.edu/careers-at-ucla",
            classes: null,
            target: ""
        }
    ]
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },

    template: `<footer-primary :social-items="socialItems" :press-items="pressItems" :form="true" />`,
})

export const NoForm = () => ({
    data() {
        return {
            ...mock,
        }
    },

    template: `<footer-primary :social-items="parsedSocialItems" :press-items="parsedPressItems" :form="false" />`,
})
