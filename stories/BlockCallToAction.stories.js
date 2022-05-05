// Storybook default settings
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default {
    title: "BLOCK / Call to Action",
}

const mock = {
    svgName: "svg-call-to-action-chat",
    title: "Lorem ipsum dolor sit amet?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lorem ipsum dolor",
    to: "/help/foo/bar/",
    isDark: false,
    isSmallSize: false,
}

// Variations of stories below
export const Default = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-call-to-action
            :svgName= "svgName"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :isDark="isDark"
            :isSmallSize="isSmallSize"
        />
    `,
})

export const DarkBlue = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-call-to-action
            :svgName= "svgName"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            is-dark=true
            :isSmallSize="isSmallSize"
        />
    `,
})

export const SmallCTA = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-call-to-action
            svgName= "svg-call-to-action-find"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            :is-dark=false
            :isSmallSize=true
        />
    `,
})

export const SmallCTADarkBlue = () => ({
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-call-to-action
            svg-name= "svg-call-to-action-money"
            :title="title"
            :text="text"
            :name="name"
            :to="to"
            is-small-size=true
            is-dark=true
        />
    `,
})

export const GlobalAskALibrarian = () => ({
    store: new Vuex.Store({
        state: {
            globals: {
                askALibrarian: {
                    id: "7322",
                    askALibrarianTitle: "Have further questions?",
                    askALibrarianText:
                        "<p>We're here to help. Chat with a librarian 24/7, schedule a research consultation or email us your quick questions.</p>",
                    buttonUrl: [
                        {
                            buttonText: "Contact us",
                            buttonUrl: "/help/",
                        },
                    ],
                },
            },
        },
    }),
    data() {
        return {
            ...mock,
        }
    },
    template: `
        <block-call-to-action
            :is-global="true"
        />
    `,
})
