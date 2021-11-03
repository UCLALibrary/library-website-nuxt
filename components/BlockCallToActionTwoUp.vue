<template lang="html">
    <section class="block-call-to-action-two-up">
        <block-call-to-action
            v-for="item in items"
            :key="item.to"
            :svg-name="item.svgName"
            :title="item.title"
            :text="item.text"
            :name="item.name"
            :to="item.to"
            :is-dark="item.isDark"
            is-small-size="true"
        />
    </section>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => [],
        },
    }
}
</script>

<style lang="scss" scoped>
.block-call-to-action-two-up {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

        @media #{$medium}{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        row-gap: 50px;
    }
}

</style>
