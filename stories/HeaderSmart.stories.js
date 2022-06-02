// Storybook default settings
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default {
    title: "NAV / Header Smart",
}

const mock = {
    secondary: [
        {
            id: "843",
            name: "Locations & Hours",
            to: "/locations",
            classes: "",
            target: "",
        },
        {
            id: "844",
            name: "Ask a Librarian",
            to: "/research-teaching-support/research-help",
            classes: null,
            target: "",
        },
        {
            id: "845",
            name: "My Account",
            to: "https://catalog.library.ucla.edu/vwebv/login;jsessionid=9D14C6523970C30728D965F6BD6B914D",
            classes: null,
            target: "1",
        },
    ],
    primary: [
        {
            id: "835",
            name: "Get help with...",
            to: null,
            classes: "",
            target: "",
            children: [
                {
                    id: "833",
                    name: "Borrowing Books and Equipment",
                    to: "/help/services-resources/borrowing-books-and-equipment",
                    classes: "",
                    target: "",
                },
                {
                    id: "840",
                    name: "All Services & Resources",
                    to: "/help/services-resources",
                    classes: "",
                    target: "",
                },
            ],
        },
        {
            id: "834",
            name: "Visit",
            to: "/events-exhibits",
            classes: null,
            target: "",
            children: [
                {
                    id: "841",
                    name: "Locations & Hours",
                    to: "/visit/locations",
                    classes: "",
                    target: "",
                },
                {
                    id: "837",
                    name: "Events & Exhibitions",
                    to: "/visit/events-exhibits",
                    classes: "",
                    target: "",
                },
            ],
        },
        {
            id: "836",
            name: "About",
            to: null,
            classes: null,
            target: "",
            children: [
                {
                    id: "842",
                    name: "Library News",
                    to: "/about/news",
                    classes: "",
                    target: "",
                },
                {
                    id: "838",
                    name: "Staff Directory",
                    to: "/about/staff",
                    classes: "",
                    target: "",
                },
            ],
        },
        {
            id: "839",
            name: "Support us",
            to: "https://giving.ucla.edu/Standard/NetDonate.aspx?SiteNum=463",
            classes: null,
            target: "1",
            children: [],
        },
    ],
}

// Variations of stories below
export const Default = () => ({
    store: new Vuex.Store({
        state: {
            header: {
                primary: mock.primary,
                secondary: mock.secondary,
            },
            winWidth: 1200,
        },
    }),
    data() {
        return {
            ...mock,
        }
    },

    template: `<header-smart  />`,
})

export const MobileWindowWidth = () => ({
    store: new Vuex.Store({
        state: {
            header: {
                primary: mock.primary,
                secondary: mock.secondary,
            },
            winWidth: 824,
        },
    }),
    data() {
        return {
            ...mock,
        }
    },

    template: `<header-smart  />`,
})
