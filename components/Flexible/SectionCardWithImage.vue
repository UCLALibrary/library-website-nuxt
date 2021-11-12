<template lang="html">
    <div class="section-card-with-image">
        <block-highlight
            v-for="item in parsedItems"
            :key="item.to"
            :to="item.to"
            :image="item.image[0].image[0]"
            :category="item.category"
            :title="item.title"
            :start-date="item.date[0].startDate"
            :end-date="item.date[0].endDate"
            :text="item.text"
            :is-vertical="true"
            :locations="item.associatedLocations"
            image-aspect-ratio="60"
            class="block"
        />
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
            for (let item in this.block.cardWithImage) {
                items.push(this.block.cardWithImage[item].contentLink[0])
            }
            return items
        },
    },
}
</script>

<style lang="scss" scoped>
.section-card-with-image {
    max-width: 924px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    .block {
        margin: 0 30px 0 0;
        width: 281px;

        &:nth-child(3n) {
            margin-right: 0;
        }
        &:nth-child(n + 4) {
            margin-top: 40px;
        }
    }
}
</style>
