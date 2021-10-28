export default {
    title: "FLEXIBLE / Simple Card",
}

const mock = {
    id: "3496",
    linkText: null,
    contentLink: [
        {
            id: "1750",
            url: "https://test-craft.library.ucla.edu/about/awards-grants/scholarship-award",
            title: "Scholarship Award",
            text: "this is a lot of sample test to see how wide this card will get",
        },
    ],
    subheader: null,
    externalLink: null,
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-simple-card
            :title="block.contentLink[0].title"
            :text="block.contentLink[0].text"
            :to="block.contentLink[0].to"

        />
    `,
})
