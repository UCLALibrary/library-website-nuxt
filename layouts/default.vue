<template lang="html">
    <main :class="classes">
        <header-main />

        <nuxt class="page" />

        <footer-primary
            :social-items="parsedItems"
            :press-items="parsedPressItems"
        />
        <footer-sock :items="footerSockItems" />
    </main>
</template>

<script>
// Mock data
import * as MOCK_API from "~/stories/mock-api.json"

// Helpers
import kebabCase from "~/utils/kebabCase"

export default {
    components: {},
    data() {
        return {
            pageMeta: {
                title: "UCLA Library",
            },
            footerSockItems: [],
            footerPrimaryItems: [...MOCK_API.shortLinks],
            pressItems: [{ ...MOCK_API.links[0] }],
        }
    },
    async fetch() {
        // TODO Fetch real data from Craft here
        this.footerSockItems = await MOCK_API.links
    },
    head() {
        return {
            htmlAttrs: {
                lang: "en",
            },
            bodyAttrs: {
                class: this.bodyClasses,
            },
            titleTemplate: (pageTitle) => {
                const siteTitle = this.pageMeta.title
                let output = this.pageMeta.title

                switch (true) {
                    case siteTitle == pageTitle:
                        output = site
                        break
                    case Boolean(pageTitle):
                        output = `${siteTitle} - ${pageTitle}`
                        break
                }
                return output
            },
            meta: [
                {
                    hid: "description",
                    name: "description",
                    property: "og:description",
                    content: this.pageMeta.description,
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: this.pageMeta.socailShareUrl,
                },
                {
                    property: "og:url",
                    content: `${this.pageMeta.url}${this.$route.path}`,
                },
                {
                    property: "og:site_name",
                    content: this.pageMeta.title,
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: this.pageMeta.title,
                },
            ],
        }
    },
    computed: {
        bodyClasses() {
            const classes = ["body", "theme-default"]
            classes.push(`route-${kebabCase(this.$route.name || "error")}`)
            return classes.join(" ")
        },
        parsedItems() {
            // Restructuring item to support text key
            return this.footerPrimaryItems.map((obj) => {
                return {
                    ...obj,
                    text: obj.name,
                }
            })
        },
        parsedPressItems() {
            // Restructuring item to support text key
            return this.pressItems.map((obj) => {
                return {
                    ...obj,
                    text: obj.name,
                }
            })
        },
        classes() {
            return ["layout", "layout-default"]
        },
    },
}
</script>

<style lang="scss" scoped>
.layout-default {
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    > * {
        width: 100%;
        box-sizing: border-box;
    }

    .page {
        flex: 1 1 auto;
    }
}
</style>
