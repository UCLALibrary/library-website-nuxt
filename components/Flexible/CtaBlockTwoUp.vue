<template lang="html">
    <div class="cta-block-two-up">
        <block-call-to-action
            v-for="item in parsedItems"
            :svg-name="item.icon"
            :title="item.title"
            :text="item.description"
            :name="item.buttonText"
            :to="item.buttonUrl"
            :is-dark="item.backgroundColor"
            :is-small-size="true"
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
        parsedItems() {
            return this.block.ctaBlock2Up
        },
    },
}
</script>

<style lang="css" scoped>
.cta-block-two-up {
    display: flex;
    flex-direction: row;
    row-gap: 50px;
    column-gap: 50px;
    align-content: space-between;
}
</style>
