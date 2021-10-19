<template lang="html">
    <block-call-to-action
        v-for="item in parsedItems"
        :key="item.id"
        :is-small-size="true"
        :name="item.buttonText"
        :title="item.title"
        :text="item.description"
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
            let items = []
            for (let item in this.block.ctaBlock2Up) {
                items.push(this.block.ctaBlock2Up[0])
            }
            return items
        },
    },
}
</script>

<style lang="css" scoped></style>
