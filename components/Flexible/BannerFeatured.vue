<template lang="html">
    <div class="flexible-banner-featured">
        <banner-featured
            :image="block.contentLink[0].image[0].image"
            :to="block.contentLink[0].to"
            :title="block.contentLink[0].title"
            breadcrumb="Event"
            category="Featured"
            :date="parsedDate"
            :time="parsedTime"
            :is-online="isOnline"
            :prompt="block.buttonText"
            :align-right="parsedAlignment"
            :locations="parsedLocations"
        />
    </div>
</template>

<script>
// Utility functions
import formatEventTimes from "~/utils/formatEventTimes"
import formatEventDates from "~/utils/formatEventDates"

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
        parsedDate() {
            return formatEventDates(
                this.block.contentLink[0].date[0].startDate,
                this.block.contentLink[0].date[0].endDate
            )
        },
        parsedTime() {
            return formatEventTimes(
                this.block.contentLink[0].date[0].startDate,
                this.block.contentLink[0].date[0].endDate
            )
        },
    },
}
</script>

<style lang="scss" scoped>
.flexible-banner-featured {
    width: 100%;
}
</style>
