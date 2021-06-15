// Storybook default settings
export default {
    title: "SEARCH / Generic",
}

const items = [
    {
        name: "Neque porro quisquam",
    },
    {
        name: "qui dolorem ipsum quia dolor",
    },
    { 
        name: "consectetur, adipisci velit.",
    },
    {
        name: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
        name: "Excepteur sint occaecat cupidatat non proident",    
    },
    {
        name: "vel illum qui dolorem eum fugiat",    
    },
    {
        name: "quis nostrum exercitationem ullam",
    },
    {
        name: "Quis autem vel eum iure reprehenderit",
    },
    {
        name: "Excepteur sint occaecat cupidatat non proident1",    
    },
    {
        name: "vel illum qui dolorem eum fugiat1",    
    },
    {
        name: "quis nostrum exercitationem ullam1",
    },
    {
        name: "Quis autem vel eum iure reprehenderit1",
    },
]
const views = [
    {
        to: "/visit/foo",
        iconName: "icon-list",
        title: "List",
    },
    {
        to: "/visit/baz",
        iconName: "icon-card",
        title: "Card",
    },
    {
        to: "/visit/qux",
        iconName: "icon-calendar",
        title: "Calendar",
    },
]

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            filters:[
                {
                    label: "location",
                    searchField: "location_tesim",
                    isMultiValuedField: true,
                    filterItems: items,
                },
                {
                    label: "date range",
                    searchField: "date_range_tesim",
                    isMultiValuedField: false,
                    filterItems: items,
                },
                {
                    label: "type",
                    searchField: "type_tesim",
                    isMultiValuedField: true,
                    filterItems: items,
                },

            ],
        }
    },
    template: `
        <search-generic 
            searchType="help"
            :filters="filters"
        />
    `,
})

export const OneFilter = () => ({
    data() {
        return {
            filters:[
                {
                    label: "location",
                    searchField: "location_tesim",
                    isMultiValuedField: false,
                    filterItems: items,
                },
            ],
        }
    },
    template: `
        <search-generic 
            searchType="help"
            :filters="filters"
        />
    `,
})

export const TwoFilter = () => ({
    data() {
        return {
            filters:[
                {
                    label: "location",
                    searchField: "location_tesim",
                    isMultiValuedField: true,
                    filterItems: items,
                },
                {
                    label: "date range",
                    searchField: "date_range_tesim",
                    isMultiValuedField: false,
                    filterItems: items,
                },
            ],
        }
    },
    template: `
        <search-generic 
            searchType="help"
            :filters="filters"
        />
    `,
})

export const TwoFilterWithViews = () => ({
    data() {
        return {
            filters:[
                {
                    label: "location",
                    searchField: "location_ssi",
                    isMultiValuedField: true,
                    filterItems: items,
                },
                {
                    label: "date range",
                    searchField: "date_range_ssi",
                    isMultiValuedField: false,
                    filterItems: items,
                }
            ],
            viewModes:views,
        }
    },
    template: `
        <search-generic 
            searchType="help"
            :filters="filters"
            :view-modes="viewModes"
        />
    `,
})

export const WithViewModes = () => ({
    data() {
        return {
            filters:[
                {
                    label: "location",
                    searchField: "location_ssi",
                    isMultiValuedField: false,
                    filterItems: items,
                }
            ],
            viewModes:views,
        }
    },
    template: `
        <search-generic 
            searchType="help"
            :filters="filters"
            :view-modes="viewModes"
        />
    `,
})
