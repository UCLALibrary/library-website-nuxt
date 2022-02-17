export default {
    title: "FLEXIBLE / Call To Action 2 Up",
}

const mock = {
    ctaBlock2Up: [
        {
            text: "Parking passes for Cats & Kittens only. Day use, weekly, monthly and annual passes are available now.",
            name: "Get Parking Passes",
            to: "http://cat-kitten-parking.com",
            title: "Cat & Kitten Parking Passes",
            icon: "svg-call-to-action-find",
            backgroundColor: true,
            isDark: false,
            isSmallSize: true,
        },
        {
            text: "Advanced Ancient Greek for Dogs. Teach your dog the useful language of ancient Greek so you can communicate together more effectively.",
            name: "Sign Up for Class",
            to: "http://ancient-greek-for-dogs.com",
            title: "Ancient Greek for Dogs",
            icon: "svg-call-to-action-money",
            backgroundColor: false,
            isDark: true,
            isSmallSize: true,
        },
    ],
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-cta-block-2-up
            :block="block"
        />
    `,
})
