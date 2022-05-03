<template lang="html">
    <div class="flexible-simple-cards">
        <simple-cards
            :section-title="block.sectionTitle"
            :section-summary="block.sectionSummary"
            :items="parsedContent"
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
