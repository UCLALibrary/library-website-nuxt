<template lang="html">
    <header class="header-main">
        <site-brand-bar />
        <nav-secondary :items="secondaryItems" />
        <nav-primary
            class="primary"
            :items="primaryItems"
        />
    </header>
</template>

<script>
// GQL
import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems"

// Helpers
import _get from "lodash/get"

export default {
    data() {
        return {
            secondaryItems: [],
            primaryItems: [],
        }
    },
    async fetch() {
        const data = await this.$graphql.default.request(HEADER_MAIN_MENU_ITEMS)
        this.primaryItems = _get(data, "primary", [])
        this.secondaryItems = _get(data, "secondary", [])
    },
    fetchKey(getCounter) {
        return `header-main-${getCounter("header-main")}`
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
