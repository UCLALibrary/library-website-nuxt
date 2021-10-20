<template lang="html">
    <block-call-to-action
        v-for="item in parsedItems"
        class="cta-block-two-up"
        :is-small-size="true"
        :name="item.urlButtonText"
        :title="item.titleCTA2Up"
        :text="item.shortDescription"
        :icon-name="item.icon"
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
            return this.block.ctaBlock2Up[0]
        },
    },
}
</script>

<style lang="css" scoped>
.cta-block-two-up {
    max-width: 924px;
    margin-left: auto;
    margin-right: auto;
}
</style>
