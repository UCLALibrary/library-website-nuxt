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
                // TITLE -----------------
                let cardTitle = ""
                if (card.contentLink && card.contentLink.length != 0) {
                    cardTitle = card.contentLink[0].title
                }
                let simpleCardTitle = card.title ? card.title : cardTitle
                // SUMMARY -----------------
                let cardSummary = ""
                if (card.contentLink && card.contentLink.length != 0) {
                    cardSummary = card.contentLink[0].summary
                }
                let simpleCardSummary = card.summary
                    ? card.summary
                    : cardSummary
                // LINK -----------------
                let internalLink = "/"
                if (card.contentLink && card.contentLink.length != 0) {
                    if (card.contentLink[0].slug.indexOf("/") === 0) {
                        internalLink = card.contentLink[0].slug
                        console.log(internalLink)
                    } else if (card.contentLink[0].researchGuideUrl) {
                        internalLink = card.contentLink[0].researchGuideUrl
                    } else {
                        internalLink = "/" + card.contentLink[0].slug
                        console.log(internalLink)
                    }
                }
                let simpleCardLink = card.externalLink
                    ? card.externalLink
                    : internalLink
                return {
                    ...card,
                    title: simpleCardTitle,
                    text: simpleCardSummary,
                    to: simpleCardLink,
                }
            })
        },
    },
}
</script>
