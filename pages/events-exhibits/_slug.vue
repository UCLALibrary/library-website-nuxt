<template lang="html">
    <section class="page-event-detail">
        <header-sticky>
            <header-child-breadcrumbs
                :items="breadcrumbs"
                :share-title="shareData.title"
                :share-text="shareData.text"
            />
        </header-sticky>

        Event detail here

        <!-- TODO flexible content goes here -->
    </section>
</template>

<script>
export default {
    async asyncData() {
        // TODO get event data from Craft
        return {
            page: {},
        }
    },
    computed: {
        shareData() {
            return {
                title: "Test title",
                text: "Test text",
            }
        },
        breadcrumbs() {
            return [
                { text: "Breadcrumb 1 Text", to: "." },
                { text: "Breadcrumb 2 Text", to: "/test" },
            ]
        },
    },
}
</script>

<style lang="scss" scoped>
.page-event-detail {
    height: 400vh;
}
</style>
