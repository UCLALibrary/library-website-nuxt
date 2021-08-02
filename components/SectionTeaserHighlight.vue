<template lang="html">
    <section class="section-teaser-highlight">
        <!-- TODO I don't think you need this div -->

        <block-highlight
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            :image="item.image"
            :category="item.category"
            :title="item.title"
            :dates="item.date"
            :times="item.time"
            :text="item.text"
            :has-triangle="true"
            :is-vertical="true"
            :is-online="true"
            class="block"
        />
    </section>
</template>

<script>
export default {
    props: {
        /**
         * Array of objects [{ image, to, category, title, dates, times, text }]
         */
        items: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.section-teaser-highlight {
    padding: 0 calc(var(--unit-gutter) - 16px);
    background-color: var(--color-white);
    margin: 0 auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    .block {
        width: calc(50% - 16px);
        margin: 0 8px 50px 8px;
    }

    // Breakpoints
    @media #{$lte-phone} {
        padding: 0 var(--unit-gutter);

        .block {
            width: 100%;
            margin: 0 0 50px;
        }
    }
}
</style>
