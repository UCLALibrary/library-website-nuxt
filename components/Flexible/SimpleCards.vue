<template lang="html">
    <simple-cards :items="parsedContent" />
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
            return this.block.simpleCards.map((obj) => {
                return {
                    ...obj,
                    text: obj.summary ? obj.summary : obj.contentLink[0].text,
                    title: obj.title ? obj.title : obj.contentLink[0].title,
                    to: obj.externalLink
                        ? obj.externalLink
                        : obj.contentLink[0].url,
                }
            })
        },
    },
}
</script>
