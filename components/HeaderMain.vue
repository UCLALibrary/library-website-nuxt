<template lang="html">
    <header class="header-main">
        <nav-secondary :items="secondaryItems" />
        <nav-primary
            class="primary"
            :items="primaryItems"
        />
    </header>
</template>

<script>
export default {
    computed: {
        primaryItems() {
            return this.$store.state.header.primary
        },
        secondaryItems() {
            return this.$store.state.header.secondary
        },
    },
}
</script>

<style lang="scss" scoped>
.header-main {
    position: relative;
    height: 168px;

    .primary {
        position: absolute;
    }
    // TODO nav on smaller viewports
}
</style>
