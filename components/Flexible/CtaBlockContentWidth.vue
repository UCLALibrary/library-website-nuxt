<template lang="html">
    <block-call-to-action
        :to="block.innerBlocks[0].buttonUrl"
        :name="block.innerBlocks[0].buttonText"
        :title="block.innerBlocks[0].title"
        :text="block.innerBlocks[0].description"
        :icon-name="block.innerBlocks[0].icon"
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
}
</script>

<style lang="css" scoped></style>
