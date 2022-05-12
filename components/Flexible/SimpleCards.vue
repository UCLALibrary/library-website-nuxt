<template lang="html">
    <div class="flexible-simple-cards">
        <h3
            v-if="block.sectionTitle"
            class="section-title"
            v-html="block.sectionTitle"
        />
        <p
            v-if="block.sectionSummary"
            class="section-summary"
            v-html="block.sectionSummary"
        />

        <simple-cards :items="parsedContent" />
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
        parsedContent() {
            return this.block.cards.map((card) => {
                let internalLink = "/"
                if (card.contentLink && card.contentLink.length != 0) {
                    if (card.contentLink[0].slug.indexOf("/") === 0) {
                        internalLink = card.contentLink[0].slug
                        console.log(internalLink)
                    } else {
                        internalLink = "/" + card.contentLink[0].slug
                        console.log(internalLink)
                    }
                }
                let link = card.externalLink ? card.externalLink : internalLink
                return {
                    ...card,
                    title: card.title,
                    text: card.summary,
                    to: link,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.flexible-simple-cards {
    margin: 0 auto;
    max-width: $container-l-main + px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;

    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
    }

    .section-summary {
        @include step-0;
        margin-bottom: var(--space-xl);
    }
}
</style>
