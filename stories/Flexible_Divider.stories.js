export default {
    title: "FLEXIBLE / Divider",
}

const mock = {
    divider: "default"
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-divider
            :block="block"
        />
    `,
})

const mockBold = {
    divider: "bold"
}
    
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