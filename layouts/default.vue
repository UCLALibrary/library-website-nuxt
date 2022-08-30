<template lang="html">
    <div :class="classes">
        <VueSkipTo
            to="#main"
            label="Skip to main content"
        />
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
                acronym="MEAP"
            />
        </header>
        <header v-else>
            <site-brand-bar class="brand-bar" />
            <header-main-responsive
                :primary-nav="primaryMenuItems"
                :secondary-nav="secondaryMenuItems"
                current-path="/about/foo/bar"
                title="Modern Endangered Archives Program"
                acronym="MEAP"
            />
        </header>

        <nuxt class="page" />

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
                title: "Modern Endangered Archives Program",
            },
        }
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
.vue-skip-to {
    z-index: 300;
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
