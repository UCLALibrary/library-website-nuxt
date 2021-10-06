export default {
    title: "FLEXIBLE / Help Topic Card",
}

const mock = {
    helpTopicCard3Up: [
        {
            id: "2404",
            contentLink: [
                {
                    id: "537",
                    url: "https://test-craft.library.ucla.edu/help/services-resources/borrowing-books-and-equipment",
                    to: "/help/services-resources/borrowing-books-and-equipment",
                    title: "Borrowing Books and Equipment",
                    text: "Kogi ut austin snackwave try-hard. Labore excepteur activated charcoal trust fund. Gastropub in asymmetrical eu, thundercats flexitarian truffaut waistcoat aliquip. Pour-over irure ex, pinterest et taiyaki incididunt. Craft beer cronut knausgaard, biodiesel poke beard slow-carb ullamco umami semiotics prism taxidermy hoodie meh. Et ugh small batch food truck twee bespoke, laboris roof party knausgaard try-hard tumblr swag cupidatat kombucha eu. Semiotics vegan officia in, pork belly chillwave vape plaid ex affogato veniam shaman brooklyn artisan aliqua.",
                    iconName: "illustration-find-space",
                },
            ],
            subheader: "a link to learn more",
        },
        {
            id: "2405",
            contentLink: [
                {
                    id: "1033",
                    url: "https://test-craft.library.ucla.edu/help/services-resources/sample-service-page-with-faqs",
                    to: "/help/services-resources/sample-service-page-with-faqs",
                    title: "Sample Service Page with FAQ's",
                    text: "Learn how to use a VPN or proxy server to access Library resources with your UCLA Logon ID through a series of helpful videos.",
                    iconName: "illustration-find-space",
                },
            ],
        },
    ],
}

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-help-topic-cards
            :block="block"
        />
    `,
})

const mockOneFPB = {
    helpTopicCard3Up: [
        {
            id: "2404",
            contentLink: [
                {
                    id: "537",
                    url: "https://test-craft.library.ucla.edu/help/services-resources/borrowing-books-and-equipment",
                    to: "/help/services-resources/borrowing-books-and-equipment",
                    title: "Borrowing Books and Equipment",
                    text: "Kogi ut austin snackwave try-hard. Labore excepteur activated charcoal trust fund. Gastropub in asymmetrical eu, thundercats flexitarian truffaut waistcoat aliquip. Pour-over irure ex, pinterest et taiyaki incididunt. Craft beer cronut knausgaard, biodiesel poke beard slow-carb ullamco umami semiotics prism taxidermy hoodie meh. Et ugh small batch food truck twee bespoke, laboris roof party knausgaard try-hard tumblr swag cupidatat kombucha eu. Semiotics vegan officia in, pork belly chillwave vape plaid ex affogato veniam shaman brooklyn artisan aliqua.",
                    iconName: "illustration-find-space",
                },
            ],
        },
    ],
}
export const OneCard = () => ({
    data() {
        return { block: mockOneFPB }
    },
    template: `
        <flexible-help-topic-cards
            :block="block"
        />
    `,
})
