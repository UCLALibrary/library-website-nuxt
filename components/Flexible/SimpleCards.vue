<template>
    <ul class="simple-cards">
        <block-simple-card
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
        // Determines whether content link or new content is used for props
        parsedContent() {
            let itemContent = []
            for (let item in this.block.simpleCard) {
                this.block.simpleCard[item]["text"] = this.block.simpleCard[
                    item
                ].subheader
                    ? this.block.simpleCard[item].subheader
                    : this.block.simpleCard[item].contentLink[0].text
                this.block.simpleCard[item]["title"] = this.block.simpleCard[
                    item
                ].linkText
                    ? this.block.simpleCard[item].linkText
                    : this.block.simpleCard[item].contentLink[0].title
                this.block.simpleCard[item]["to"] = this.block.simpleCard[item]
                    .externalLink
                    ? this.block.simpleCard[item].externalLink
                    : this.block.simpleCard[item].contentLink[0].url
                itemContent.push(this.block.simpleCard[item])
            }
            return itemContent
        },
        classes() {
            let output = ["card", "card-small"]
            switch (this.parsedContent.length) {
                case 2:
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
.simple-cards {
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
    .simple-cards {
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
    .simple-cards {
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
