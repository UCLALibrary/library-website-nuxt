<template lang="html">
    <section class="section-teaser-card">
        <block-highlight
            v-for="card in items"
            :key="card.to"
            class="card"
            :image="card.image"
            :to="card.to"
            :category="card.category"
            :title="card.title"
            :start-date="card.startDate"
            :end-date="card.endDate"
            :text="card.text"
            :image-aspect-ratio="60"
            :is-vertical="true"
            :is-online="card.isOnline"
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
.section-teaser-card {
    max-width: 964px;
    background-color: var(--color-white);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    gap: 32px 16px;

    .card {
        width: 100%;
        // margin-right: 16px;
        // &:nth-child(3n) {
            // margin-right: 0px;
        // }
    }

    // Breakpoints
    @media #{$medium} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: flex-start;

        // margin-top: 35px;
        // margin-bottom: 25px;
    }
    @media #{$small} {
        align-items: center;
        flex-direction: column;

        margin-left: 0px;
    }
}
</style>
