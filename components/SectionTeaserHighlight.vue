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
    max-width: 990px;
    padding: 0 var(--unit-gutter);
    background-color: var(--color-white);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: flex-start;

    .block {
        margin: 16px 16px;
        max-width: 456px;
        max-height: 527px;
    }

    // Breakpoints
    @media #{$lte-tablet} {
        .block {
            margin-top: 0px;
            margin-bottom: 0px;
            min-height: 200px;
        }
    }
    @media #{$lte-phone} {
        .section {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-content: center;
            align-items: flex-start;
        }
        .block {
            margin-top: 0px;
            margin-bottom: 0px;
            min-height: 200px;
        }

        .meta {
            &:nth-child(2n) {
                padding-right: 0px;
            }
            &:nth-child(3n) {
                padding-right: 0px;
            }
        }
    }
}
</style>
