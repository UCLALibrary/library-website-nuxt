<template lang="html">
    <banner-featured
        :image="block.contentLink[0].image"
        :to="block.contentLink[0].to"
        :title="block.contentLink[0].title"
        :category="category"
        :breadcrumb="breadcrumb"
        :dates="dates"
        :is-online="isOnline"
        :prompt="block.prompt"
        :align-right="alignment"
        :location="block.contentLink[0].associatedLocations.title"
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
        alignment() {
            return this.block.alignment === "right" ? true : false
        },
    },
}
</script>

<style lang="scss" scoped></style>
