export default {
    title: "FLEXIBLE / Call To Action Block Content Width",
}

const mock = {
    callToAction: [
        {
            id: "3378",
            title: "Tootsie Roll Danish Shortbread Croissant",
            text: "Tootsie roll danish shortbread croissant bear claw chocolate marshmallow cupcake.",
            to: "http://www.cupcakeipsum.com/",
            name: "Get the Recipe",
            icon: "svg-call-to-action-money",
            backgroundColor: "true",
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
