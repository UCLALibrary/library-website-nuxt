<template lang="html">
    <div class="search-form">
        <!-- TODO Search form goes here -->

        <div class="tabs" />
        <div class="box" />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.search-form {
    .tabs {
        height: 50px;
        max-width: 400px;
        background-color: white;
        opacity: 0.8;
        margin-left: auto;
        border-radius: 4px 4px 0 0;
    }
    .box {
        height: 220px;
        background-color: white;
    }

    // Breakpoints
    @media #{$lte-phone} {
        .box {
            height: 170px;
        }
    }
}
</style>
