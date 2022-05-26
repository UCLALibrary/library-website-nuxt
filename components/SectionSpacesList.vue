<template lang="html">
    <section class="section-spaces-list">
        <h3 class="spaces-title">
            Spaces
        </h3>
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
    justify-content: flex-start;

    max-width: 990px;
    margin: 0 auto;

    .spaces-title {
        color: var(--color-primary-blue-03);
        @include step-2;
        margin-bottom: 16px;
    }
    .block {
        margin-bottom: var(--space-m);
    }
}
</style>
