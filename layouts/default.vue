<template lang="html">
    <div :class="classes">
        <a
            ref="skipLink"
            href="#main"
            class="skip-link"
        >Skip to main content</a>

        <header
            v-if="!isMobile"
            class="header-main"
        >
            <site-brand-bar class="brand-bar" />
            <nav-secondary
                :items="secondaryMenuItems"
                :is-microsite="true"
            />
            <nav-primary
                class="primary"
                :items="primaryMenuItems"
                title="Modern Endangered Archives Program"
            />
        </header>
        <header v-else>
            <site-brand-bar class="brand-bar" />
            <header-main-responsive
                :primary-nav="primaryMenuItems"
                :secondary-nav="secondaryMenuItems"
                current-path="/about/foo/bar"
                title="Modern Endangered Archives Program"
            />
        </header>

        <main id="main">
            <nuxt class="page" />
        </main>

        <footer-main />
    </div>
</template>

<script>
// Helpers
import kebabCase from "~/utils/kebabCase"

export default {
    data() {
        return {
            pageMeta: {
                title: "MEAP",
            },
        }
    },
    head: {
        htmlAttrs: {
            lang: "en",
        },
        titleTemplate: "%s | MEAP",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
    },
    computed: {
        primaryMenuItems() {
            return this.$store.state.header.primary
        },
        secondaryMenuItems() {
            return this.$store.state.header.secondary
        },
        isMobile() {
            return this.$store.state.winWidth <= 1024 ? true : false
        },
        whichHeader() {
            return this.isMobile ? "header-main-responsive" : "header-main"
        },
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
    watch: {
        $route() {
            this.$refs.skipLink.focus()
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
    }

    .page {
        flex: 1 1 auto;
    }
}

.skip-link {
    position: absolute;
    transform: translateY(-100%);
    display: inline-block;
    background: var(--color-primary-yellow-01);
    color: var(--color-black);
    @include step-0;
    padding: 4px 16px;
    transition: transform 0.3s;
    width: auto;
    left: 0;
}

.skip-link:focus {
    transform: translateY(0%);
}

.header-main {
    z-index: 200;

    position: relative;
    height: 168px;

    .primary {
        position: absolute;
    }
    // TODO nav on smaller viewports
}
@media #{$medium} {
    .brand-bar {
        position: absolute;
        width: 100%;
    }
}
</style>
