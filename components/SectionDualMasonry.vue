<template lang="html">
    <div class="section-dual-masonry">
        Today is Friday!
    </div>
</template>

<script>
export default {
    props: {
        items: {
            // Mock as: [{image:{}, category: "", title: ", prompt: "", dates: "", to: ""}, {...}]
            type: Array,
            default: () => [],
        },
        to: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" scoped>
.section-dual-masonry {
    background-color: coral;
    height: 200px;
    .background {
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--unit-height);
        background: var(--gradient-03);
    }
    // Breakpoints
    //@media #{$lte-phone} {

    //}
}
</style>
