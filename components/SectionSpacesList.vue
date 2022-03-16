<template lang="html">
    <section class="section-spaces-list">
        <block-spaces
            v-for="item in items"
            v-bind="item"
            class="block"
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
    max-width: 990px;

    .block {
        margin-bottom: 30px; // $space-m
    }
}
</style>
