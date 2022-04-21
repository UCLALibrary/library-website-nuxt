import formatLinkTarget from "~/utils/formatLinkTarget"

// Storybook default settings
export default {
    title: "FOOTER / Primary",
}

const mock = {
    nodes: [
        {
            id: "12121",
            name: "SocialLinks",
            to: null,
            classes: null,
            target: "",
            children: [
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
            ]
        },
        {
            id: "12122",
            name: "PressLinks",
            to: null,
            classes: null,
            target: "",
            children: [
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
    ]
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    computed: {
        parsedSocialItems() {
            this.nodes[0].children.map((obj) => {
                return {
                    ...obj,
                    target: formatLinkTarget(obj.target),
                }
            })
        },
        parsedPressItems() {
            this.nodes[1].children.map((obj) => {
                return {
                    ...obj,
                    target: formatLinkTarget(obj.target),
                }
            })
        },
    },
    template: `<footer-primary :social-items="parsedSocialItems" :press-items="parsedPressItems" :form="true" />`,
})

export const NoForm = () => ({
    data() {
        return {
            ...mock,
        }
    },
    computed: {
        parsedSocialItems() {
            this.nodes[0].children.map((obj) => {
                return {
                    ...obj,
                    target: formatLinkTarget(obj.target),
                }
            })
        },
        parsedPressItems() {
            this.nodes[1].children.map((obj) => {
                return {
                    ...obj,
                    target: formatLinkTarget(obj.target),
                }
            })
        },
    },
    template: `<footer-primary :social-items="parsedSocialItems" :press-items="parsedPressItems" :form="false" />`,
})
