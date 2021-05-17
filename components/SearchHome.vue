<template lang="html">
    <div class="search-form">
        <!-- TODO Search form goes here -->

        <div
            v-if="hasTabs"
            class="tabs"
        />
        <div class="box" />
    </div>
</template>

<script>
export default {
    props: {
        hasTabs: {
            type: Boolean,
            default: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.search-form {
    .tabs {
        height: 50px;
        max-width: 400px;
        background-color: white;
        opacity: 0.8;
        margin-left: auto;
        border-radius: var(--rounded-slightly-top);
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
