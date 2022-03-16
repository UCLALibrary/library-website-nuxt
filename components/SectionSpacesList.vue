<template lang="html">
    <section class="section-spaces-list">
        <block-spaces
            v-for="item in items"
            v-bind="item"
        />
    </section>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.section-spaces-list {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    background-color: var(--color-white);
    // padding: 0 var(--unit-gutter);
    max-width: 990px;
    margin: 0 auto;

    .block {
        margin-bottom: 25px;
    }
}
</style>
