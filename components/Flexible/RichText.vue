<template lang="html">
    <div class="rich-text">
        <rich-text :html="parsedContent" />
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
.rich-text {
    max-width: $container-l-text + px;
    margin: var(--unit-gutter) auto;
    padding-right: 96px;
}
</style>
