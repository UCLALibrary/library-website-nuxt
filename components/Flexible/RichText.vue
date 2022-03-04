<template lang="html">
    <div class="rich-text">
        <rich-text :rich-text-content="parsedContent" />
    </div>
</template>

<script>
export default {
    components: {},

    props: {
        block: {
            type: Object,
            default: () => {},
        },
    },
    computed: {
        parsedContent() {
            return this.block.richText
        },
    },
}
</script>

<style lang="scss" scoped>

</style>
