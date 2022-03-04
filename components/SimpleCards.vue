<template>
    <ul class="simple-cards">
        <block-simple-card
            v-for="item in parsedContent"
            :key="item.to"
            :class="item.classes"
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
            return this.block.simpleCards.map((obj) => {
                return {
                    ...obj,
                    text: obj.subheader
                        ? obj.subheader
                        : obj.contentLink[0].text,
                    title: obj.linkText
                        ? obj.linkText
                        : obj.contentLink[0].title,
                    to: obj.externalLink
                        ? obj.externalLink
                        : obj.contentLink[0].url,
                    classes: output,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.simple-cards {
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
        width: calc(50% - 16px)
    }
    .card-small {
        width: calc(33.33% - 16px);
    }
    .card-five {
        &:nth-child(-n + 2) {
            width: 100%;
        }
        &:nth-last-child(-n + 3) {
            width: 300px;
        }
    }
    // Breakpoints
    @media #{$medium} {
        max-width: 632px;

        .card {
            width: 300px;
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

        .card-five {
            &:nth-last-child(-n + 3) {
                width: 300px;
            }
        }
    }
}
</style>
