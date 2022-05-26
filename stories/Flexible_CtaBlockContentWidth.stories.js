export default {
    title: "FLEXIBLE / Call To Action Block Content Width",
}

const mock = {
    id: "16983",
    typeHandle: "callToAction",
    callToAction: [
        {
            id: "16984",
            titleCta: "Call to action",
            summary: "a call to action",
            icon: "svg-call-to-action-find",
            buttonText: "click me",
            buttonLink: "http://google.com",
            backgroundColor: "false",
        },
    ],
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-cta-block-content-width
            :block="block"
        />
    `,
})
