<template lang="html">
    <header class="header-main">
        <nav-secondary :items="secondaryNav" />
        <nav-primary
            class="primary"
            :items="primaryNav"
        />
    </header>
</template>

<script>
export default {
    props: {
        primaryNav: {
            // This is an array of objects, with each object shaped like {name, url, items:[{text, to, target}]}
            type: Array,
            default: () => [],
        },
        secondaryNav: {
            type: Array,
            default: () => [],
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
