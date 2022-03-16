<template lang="html">
    <section class="section-spaces-list">
        <block-spaces
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            :title="item.title"
            :is-online="item.isOnline"
            :location="item.location"
            :text="item.text"
            :button-text="item.buttonText"
            :button-url="item.buttonUrl"
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
    margin: 0 auto;

    .block {
        margin-bottom: 25px;
    }
}
</style>
