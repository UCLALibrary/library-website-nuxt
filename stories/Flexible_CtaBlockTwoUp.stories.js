export default {
    title: "FLEXIBLE / CTA Block Two Up",
}

const mock = {
    "ctaBlock2Up": [
        {
          "id": "3036",
          "shortDescription": "Cat",
          "urlButtonText": "Cat",
          "urlButtonUrl": "http://cat.com",
          "titleCTA2Up": "Cat",
          "icon": "https://img.icons8.com/fluent/2x/doge.png"
        },
        {
          "id": "3037",
          "shortDescription": "Dog",
          "urlButtonText": "Dog",
          "urlButtonUrl": "http://dog.com",
          "titleCTA2Up": "Dog",
          "icon": "https://img.icons8.com/fluent/2x/doge.png"
        },
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-cta-block-two-up
            :block="block"
        />
    `,
})
