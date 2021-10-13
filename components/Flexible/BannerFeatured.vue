<template lang="html">
    <div class="flexible-banner-featured">
        <banner-featured
            :image="block.contentLink[0].heroImage[0].image[0]"
            :to="block.contentLink[0].to"
            :title="block.contentLink[0].title"
            breadcrumb="Event"
            category="Featured"
            :start-date="block.contentLink[0].date[0].startDate"
            :end-date="block.contentLink[0].date[0].endDate"
            :is-online="isOnline"
            :prompt="block.buttonText"
            :align-right="parsedAlignment"
            :locations="parsedLocations"
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
        parsedAlignment() {
            return this.block.alignment === "right" ? true : false
        },
        parsedIsOnline() {},
        parsedLocations() {
            let locations = []
            for (let location in this.block.contentLink[0]
                .associatedLocations) {
                locations.push(
                    this.block.contentLink[0].associatedLocations[location]
                        .title
                )
            }
            return locations
        },
    },
}
</script>

<style lang="scss" scoped>
.flexible-banner-featured {
    width: 100%;
}
</style>
