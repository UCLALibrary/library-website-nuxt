export default {
    title: "FLEXIBLE / Simple Cards",
}

const mock = {
    ctaBlock2Up: [
        {
            title: "Support for Students",
            text: "Discover programs which enhance the student experience: stressbusters, research awards, and events which showcase learning and creativity.",
            to: "https://www.library.ucla.edu/research-teaching-support/support-students"
        },

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
    <block-simple-card
        :title="block.contentLink[0].title"
        :text="block.contentLink[0].text"
        :to="block.contentLink[0].to"
    />
    `,
})

export const Bold= () => ({
    data() {
        return { block: mockBold }
    },
    template: `
            <flexible-divider
                :block="block"
            />
        `,
})
