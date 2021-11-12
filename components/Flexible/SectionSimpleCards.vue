<template>
    <ul class="section">
        <flexible-simple-card
            v-for="(item, index) in parsedContent"
            :key="index"
            :class="classes"
            :to="item.to"
            :title="item.title"
            :text="item.text"
        />
    </ul>
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
        // Determines whether content link or new content is used for props
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
            return itemContent
        },
        classes() {
            let output = ["card", "card-small"]
            switch (this.parsedItems.length) {
                case 2:
                    output = ["card", "card-large"]
                    break
                case 4:
                    output = ["card", "card-large"]
                    break
                case 5:
                    output = ["card", "card-five"]
                    break
            }
            return output
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
    }
    .card-large {
        width: 100%;
    }
    .card-small {
        width: 300px;
    }
    .card-five {
        &:nth-child(-n + 2) {
            width: 100%;
        }
        &:nth-last-child(-n + 3) {
            width: 300px;
        }
    }
}

// Breakpoints
@media #{$small} {
    .section {
        display: flex;
        flex-direction: column;

        .card {
            width: 300px;
        }
        .card-large {
            width: 300px;
        }
        .card-five {
            &:nth-child(-n + 2) {
                width: 300px;
            }
            &:nth-last-child(-n + 3) {
                width: 300px;
            }
        }
    }
}

@media #{$medium} {
    .section {
        max-width: 632px;

        .card {
            width: 300px;
        }
        .card-large {
            width: 300px;
        }
        .card-five {
            &:nth-child(-n + 2) {
                width: 300px;
            }
        }
    }
}
</style>
