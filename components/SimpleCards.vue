<template>
    <ul class="simple-cards">
        <li>BLOCK: {{ block }}</li>
        <li>TITLE: {{ block.sectionTitle }}</li>
        <li>SUMMARY: {{ block.sectionSummary }}</li>
        <li>-----------</li>
        <li>BLOCK CARDS: {{ block.cards }}</li>
        <li>BLOCK CARDS First: {{ block.cards[0] }}</li>
        <li>Title: {{ block.cards[0].title }}</li>
        <li>Summary: {{ block.cards[0].summary }}</li>
        <li>External Link: {{ block.cards[0].externalLink }}</li>
        <li>-----------</li>
        <li>BLOCK CARDS Second: {{ block.cards[1] }}</li>
        <li>Title: {{ block.cards[1].title }}</li>
        <li>Summary: {{ block.cards[1].summary }}</li>
        <li>Content Link Slug: {{ block.cards[1].contentLink[0].slug }}</li>
        <!-- <block-simple-card
            :sectionTitle="item.sectionTitle"
            :sectionSummary="sectionSummary"

            v-for="(item, index) in parsedContent"
            :key="`SimpleCardsKey${index}`"
            :class="item.classes"
            :to="item.to"
            :title="item.title"
            :text="item.text"
        /> -->
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
            let output = ["card", "card-small"]
            switch (this.block.simpleCards.length) {
                case 2:
                case 4:
                    output = ["card", "card-large"]
                    break
                case 5:
                    output = ["card", "card-five"]
                    break
            }

            // return this.block.simpleCards.map((obj) => {
            //     return {
            //         ...obj,
            //         sectionTitle: obj.title,
            //         summary: obj.summary,
            //         classes: output,
            //     }
            // })
        },


    },
    //x.data.entry.blocks[0].cards[0]
    // return this.block.simpleCards.map((obj) => {
    //     return {
    //         ...obj,
    //         titleGeneral: obj.title,
    //         summary: obj.summary,
    //         simpleCards
    //         if contentLink
    //         title: ,
    //         text: ,
    //         to: obj.url: ,
    //         to: "/",

    //         classes: output,
    //     }
    // })
    // return this.block.simpleCards.map((obj) => {
    //     return {
    //         ...obj,
    //         title: obj.title ? obj.title : obj.contentLink[0].title,
    //         text: obj.summary ? obj.summary : obj.contentLink[0].text,
    //         to: "/",
    //         // TODO
    //         // to: obj.externalLink
    //         //     ? obj.externalLink
    //         //     : obj.contentLink[0].url,
    //         classes: output,
    //     }
    // })
    //},

}
</script>

<style lang="scss" scoped>
.simple-cards {
    margin: 0 auto;
    max-width: $container-l-main + px;

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
        width: calc(50% - 16px);
    }
    .card-small {
        width: calc(33.33% - 16px);
    }
    .card-five {
        &:nth-child(-n + 2) {
            width: calc(50% - 16px);
        }
        &:nth-last-child(-n + 3) {
            width: calc(33.33% - 16px);
        }
    }
    // Breakpoints
    @media #{$medium} {
        &.flexible-block {
            padding: var(--unit-gutter);
        }

        .card {
            width: 50%;
        }
        .card-five {
            &:nth-child(-n + 2) {
                width: 300px;
            }
        }
    }
    @media #{$small} {
        display: flex;
        flex-direction: column;

        .card {
            width: 100%;
        }
    }
}
</style>
