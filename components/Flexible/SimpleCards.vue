<template lang="html">
    <block-simple-card
        :items="parsedItems"
    />
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
            return this.block.simpleCard
        },
    },
}
</script>
