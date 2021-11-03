<template lang="html">
    <div class="cta-block-two-up">
        <block-call-to-action
            v-for="item in parsedItems"
            class="two-up"
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

<style lang="scss" scoped>
.cta-block-two-up {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media #{$medium}{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        row-gap: 50px;
    }
}
</style>
