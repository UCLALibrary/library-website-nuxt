<template lang="html">
    <block-call-to-action
        class="cta-block-content-width"
        :to="parsedItems.buttonUrl"
        :name="parsedItems.buttonText"
        :title="parsedItems.title"
        :text="parsedItems.description"
        :svg-name="parsedItems.icon"
        :is-dark-blue="parsedItems.backgroundColor"
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
            return this.block.ctaBlockContentWidth[0]
        },
    },
}
</script>

<style lang="css" scoped>
.cta-block-content-width {
    max-width: 924px;
    margin-left: auto;
    margin-right: auto;
}
</style>
