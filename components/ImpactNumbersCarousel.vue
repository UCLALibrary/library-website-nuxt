<template lang="html">
    <div class="impact-numbers-carousel">
        <div
            v-for="(block, index) in blocks"
            :key="index"
            class="glider"
        >
            <div>Slide: {{ index + 1 }}</div>
            <div>Large Text: {{ block.largeText }}</div>
            <div>Medium Text: {{ block.mediumText }}</div>
        </div>

        <button 
            aria-label="Previous"
            class="glider-prev"
        >
            «
        </button>
        <button
            aria-label="Next"
            class="glider-next"
        >
            »
        </button>
        <div
            role="tablist"
            class="dots"
        />
    </div>
</template>

<script>
export default {
    props: {
        /**
         * An array of blocks with the following properties: [{ largeText, 
         * mediumText, smallDescriptor, image, altImageText }].
         */
        blocks: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
}
</script>

<style lang="css" scoped>
.impact-numbers-carousel {
    
}
</style>