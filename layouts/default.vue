<template lang="html">
    <div :class="classes">
        <header-smart />

        <nuxt class="page" />

        <footer-primary :form="true" />
        <footer-sock />
    </div>
</template>

<script>
// Helpers
import kebabCase from "~/utils/kebabCase"

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
