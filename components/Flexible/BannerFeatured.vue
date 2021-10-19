<template lang="html">
    <banner-featured
        class="flexible-banner-featured"
        :image="block.contentLink[0].heroImage[0].image[0]"
        :to="block.contentLink[0].to"
        :title="block.contentLink[0].title"
        :breadcrumb="parsedTypeHandle"
        :start-date="block.contentLink[0].date[0].startDate"
        :end-date="block.contentLink[0].date[0].endDate"
        :prompt="block.buttonText"
        :align-right="parsedAlignment"
        :locations="parsedLocations"
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
        parsedAlignment() {
            return this.block.alignment === "right" ? true : false
        },
        parsedLocations() {
            let locations = []
            for (let location in this.block.contentLink[0]
                .associatedLocations) {
                locations.push(
                    this.block.contentLink[0].associatedLocations[location]
                )
            }
            return locations
        },
        parsedTypeHandle() {
            // This will be pased on the page level
            return this.page.entries.typeHandle
                ? this.page.entries.typeHandle
                : "Featured"
        },
    },
}
</script>

<style lang="scss" scoped></style>
