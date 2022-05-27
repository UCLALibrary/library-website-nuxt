<template lang="html">
    <section class="section-teaser-card">
        <block-highlight
            v-for="(card, index) in items"
            :key="`Card${index}`"
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
    max-width: $container-l-main + px;
    background-color: var(--color-white);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    gap: 32px 16px;

    // Breakpoints
    @media #{$medium} {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;

        ::v-deep .block-highlight {
            max-width: calc(50% - 32px);
        }
    }
    @media #{$small} {
        align-items: center;
        flex-direction: column;

        margin-left: 0px;

        ::v-deep .block-highlight {
            max-width: 100%;
        }
    }
}
</style>
