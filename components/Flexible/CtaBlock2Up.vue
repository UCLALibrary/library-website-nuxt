<template lang="html">
    <section>
        <block-call-to-action-two-up :items="parsedItems" />
    </section>
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
            return this.block.ctaBlock2Up
        },
    },
}
</script>
