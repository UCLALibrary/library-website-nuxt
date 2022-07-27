<template lang="html">
    <impact-numbers-carousel :blocks="block.blocks" />
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

<style lang="scss" scoped></style>
