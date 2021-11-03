export default {
    title: "FLEXIBLE / Call To Action Block Two Up",
}

const mock = {
    ctaBlock2Up: [
        {
            "description": "Parking passes for Cats & Kittens only. Day use, weekly, monthly and annual passes are available now.",
            "buttonText": "Get Parking Passes",
            "buttonUrl": "http://cat-kitten-parking.com",
            "title": "Cat & Kitten Parking Passes",
            "icon": "svg-call-to-action-find",
            "backgroundColor": true
        },
        {
            "description": "Advanced Ancient Greek for Dogs. Teach your dog the useful language of ancient Greek so you can communicate together more effectively.",
            "buttonText": "Sign Up for Class",
            "buttonUrl": "http://ancient-greek-for-dogs.com",
            "title": "Ancient Greek for Dogs",
            "icon": "svg-call-to-action-money",
            "backgroundColor": false
        },
    ],
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
