<template lang="html">
    <header class="header-sticky">
        <nav-primary :items="primaryItems" />
    </header>
</template>

<script>
export default {
    props: {
        primaryItems: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.header-sticky {
    background-color: var(--color-white);
    width: 100%;
    padding: 15px 0;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    .primary {
        position: absolute;
        /deep/ {
        }
    }
}
</style>

<!-- TODO Write story for this component -->
