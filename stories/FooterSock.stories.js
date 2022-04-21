// Storybook default settings
export default {
    title: "FOOTER / Sock",
}

const mock = {
    "nodes": [
        {
            "id": "1628",
            "name": "Emergency",
            "to": "https://test-craft.library.ucla.edu/emergency",
            "classes": null,
            "target": ""
        },
        {
            "id": "1627",
            "name": "Accessibility",
            "to": "https://test-craft.library.ucla.edu/accessibility",
            "classes": null,
            "target": ""
        },
        {
            "id": "1629",
            "name": "Privacy & Terms of Use",
            "to": "https://test-craft.library.ucla.edu/privacy-terms-of-use",
            "classes": null,
            "target": ""
        },
        {
            "id": "9511",
            "name": "Creative Commons Attribution 4.0",
            "to": "https://creativecommons.org/licenses/by/4.0/",
            "classes": null,
            "target": "1"
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
    parsedSockItems() {
        return this.$store.state.footerSock.nodes.map((obj) => {
            return {
                ...obj,
                target: formatLinkTarget(obj.target),
            }
        })
    },
    template: `
    <footer-sock 
        :sock-items="parsedSockItems"
    />
    `,
})
