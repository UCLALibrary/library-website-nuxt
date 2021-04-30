<template lang="html">
    <header class="header-main">
        <site-brand-bar />
        <nav-secondary :items="navSecondaryItems" />
        <nav-primary
            class="primary"
            :items="navPrimaryItems"
        />
    </header>
</template>

<script>
import * as MOCK_API from "~/stories/mock-api.json"

export default {
    data() {
        return {
            navSecondaryItems: [],
            navPrimaryItems: [],
        }
    },
    async fetch() {
        // TODO Fetch real data from Craft here
        this.navSecondaryItems = MOCK_API.links
        this.navPrimaryItems = MOCK_API.primaryNavlinks
    },
}
</script>

<style lang="scss" scoped>
.header-main {
    position: relative;
    height: 170px;

    .primary {
        position: absolute;
    }
}
</style>
