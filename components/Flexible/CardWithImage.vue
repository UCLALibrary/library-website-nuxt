<template lang="html">
    <div class="card-with-image">
        <block-highlight
            v-for="(item, index) in parsedContent"
            :key="index"
            :to="item.contentLink[0].to"
            :image="item.contentLink[0].image[0].image[0]"
            :category="item.contentLink[0].category"
            :title="item.contentLink[0].title"
            :start-date="item.contentLink[0].date[0].startDate"
            :end-date="item.contentLink[0].date[0].endDate"
            :text="item.text"
            :is-vertical="true"
            :locations="item.contentLink[0].associatedLocations"
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
                items.push(this.block.cardWithImage[item])
            }
            return items
        },
        // Determines whether content link or new content is used for text
        parsedContent() {
            let itemContent = []
            for (let item in this.parsedItems) {
                this.parsedItems[item]["text"] = this.parsedItems[item]
                    .subheader
                    ? this.parsedItems[item].subheader
                    : this.parsedItems[item].contentLink[0].text
                itemContent.push(this.parsedItems[item])
            }
            return itemContent
        },
    },
}
</script>

<style lang="scss" scoped>
.card-with-image {
    // max-width: 924px;
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
        margin: 0 8px 50px 8px;
    }
}

// Breakpoints
@media #{$small} {
    padding: 0 var(--unit-gutter);

    .block {
        width: 100%;
        margin: 0 0 50px;
    }
}
</style>
