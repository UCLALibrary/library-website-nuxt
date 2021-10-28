<template lang="html">
    <div class="cta-block-two-up">
        <block-call-to-action
            v-for="item in parsedItems"
            class="cta-block-two-up"
            :is-small-size="true"
            :to="item.buttonUrl"
            :name="item.buttonText"
            :title="item.title"
            :text="item.description"
            :svg-name="item.icon"
            :is-dark-blue="item.backgroundColor"
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
    row-gap: 10px;
    column-gap: 2em;

    align-content: space-between;
    max-width: 924px;
    margin-left: auto;
    margin-right: auto;
}
</style>
