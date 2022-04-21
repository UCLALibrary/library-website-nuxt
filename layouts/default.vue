<template lang="html">
    <div :class="classes">
        <header-main />

        <nuxt class="page" />

        <footer-primary 
            :social-items="parsedSocialItems"
            :press-items="parsedPressItems"
            :form="true"
        />
        <footer-sock 
            :sock-items="parsedSockItems"
        />
    </div>
</template>

<script>
// Helpers
import kebabCase from "~/utils/kebabCase"

// Helpers
import formatLinkTarget from "~/utils/formatLinkTarget"

export default {
    components: {},
    data() {
        return {
            pageMeta: {
                title: "UCLA Library",
            },
        }
    },
    head: {
        htmlAttrs: {
            lang: "en",
        },
        titleTemplate: "%s | UCLA Library",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
    },
    computed: {
        bodyClasses() {
            const classes = ["body", "theme-default"]
            classes.push(`route-${kebabCase(this.$route.name || "error")}`)
            return classes.join(" ")
        },
        classes() {
            return [
                "layout",
                "layout-default",
                { "has-scrolled": this.$store.state.sTop },
                { "has-scrolled-past-header": this.$store.state.sTop >= 150 },
            ]
        },
        parsedSocialItems() {
            return this.$store.state.footerPrimary.nodes[0].children.map((obj) => {
                return {
                    ...obj,
                    target: formatLinkTarget(obj.target),
                }
            })
        },
        parsedPressItems() {
            return this.$store.state.footerPrimary.nodes[1].children.map((obj) => {
                return {
                    ...obj,
                    target: formatLinkTarget(obj.target),
                }
            })
        },
        parsedSockItems() {
            return this.$store.state.footerSock.nodes.map((obj) => {
                return {
                    ...obj,
                    target: formatLinkTarget(obj.target),
                }
            })
        }
    },
    // meta: [
    //     {
    //         hid: "description",
    //         name: "description",
    //         property: "og:description",
    //         content: this.pageMeta.description,
    //     },
    //     {
    //         hid: "og:image",
    //         property: "og:image",
    //         content: this.pageMeta.socailShareUrl,
    //     },
    //     {
    //         property: "og:url",
    //         content: `${this.pageMeta.url}${this.$route.path}`,
    //     },
    //     {
    //         property: "og:site_name",
    //         content: this.pageMeta.title,
    //     },
    //     {
    //         property: "og:type",
    //         content: "website",
    //     },
    //     {
    //         hid: "og:title",
    //         property: "og:title",
    //         content: this.pageMeta.title,
    //     },
    // ],
    // },
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
    }

    .page {
        flex: 1 1 auto;
    }
}
</style>
