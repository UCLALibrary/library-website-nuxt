<template lang="html">
    <div class="section-block-highlight">
        <section class="section-teaser-highlight">
            <block-highlight
                v-for="item in parsedItems"
                :key="item.to"
                :to="item.to"
                :image="item.image[0].image[0]"
                :category="item.category"
                :title="item.title"
                :start-date="item.date[0].startDate"
                :end-date="item.date[0].endDate"
                :locations="item.associatedLocations"
                :text="item.text"
                :has-triangle="true"
                :is-vertical="true"
                class="block"
            />
        </section>
    </div>
</template>

<script>
export default {
    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedItems() {
            let items = []
            for (let item in this.block.highlight) {
                items.push(this.block.highlight[item].contentLink[0])
            }
            return items
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
    @media #{$small} {
        padding: 0 var(--unit-gutter);

        .block {
            width: 100%;
            margin: 0 0 50px;
        }
    }
}
</style>
