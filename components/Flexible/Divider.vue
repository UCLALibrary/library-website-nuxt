<template lang="html">
    <divider-general :is-bold="isBold" />
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
        isBold() {
            return this.block.divider == "bold" ? true : false
        },
    },
}
</script>
