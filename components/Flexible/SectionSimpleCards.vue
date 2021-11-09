<template>
    <div class="section">
        <flexible-simple-card
            v-for="(item, index) in parsedContent"
            :key="index"
            :class="classes"
            :to="item.to"
            :title="item.title"
            :text="item.text"
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
            for (let item in this.block.simpleCard) {
                items.push(this.block.simpleCard[item])
            }
            return items
        },
        parsedContent() {
            let itemContent = []
            for (let item in this.parsedItems) {
                this.parsedItems[item]["text"] = this.parsedItems[item]
                    .subheader
                    ? this.parsedItems[item].subheader
                    : this.parsedItems[item].contentLink[0].text
                this.parsedItems[item]["title"] = this.parsedItems[item]
                    .linkText
                    ? this.parsedItems[item].linkText
                    : this.parsedItems[item].contentLink[0].title
                this.parsedItems[item]["to"] = this.parsedItems[item]
                    .externalLink
                    ? this.parsedItems[item].externalLink
                    : this.parsedItems[item].contentLink[0].url
                itemContent.push(this.parsedItems[item])
            }

            console.log(itemContent[0])
            return itemContent
        },

        //change to be a case statement
        classes() {
            if (this.parsedItems.length == 2) {
                return ["card", "card-large"]
            } else if (this.parsedItems.length == 4) {
                return ["card", "card-large"]
            } else if (this.parsedItems.length == 5) {
                return ["card", "card-five"]
            } else {
                return ["card"]
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.section {
    max-width: 960px;
    height: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    .card {
        margin: 12px 16px 0 0;
        flex-grow: 1;
    }
    .card-large {
        width: 100%;
    }
    .card-five {
        &:nth-child(-n + 2) {
            width: 100%;
        }
    }
}
</style>
