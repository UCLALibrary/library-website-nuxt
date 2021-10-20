export default {
    title: "FLEXIBLE / Help Topic Card",
}

const mock = {
    simpleCard: [
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

export const Default = () => ({
    data() {
        return { block: mock }
    },
    template: `
        <flexible-simple-card
            :block="block"
        />
    `,
})
