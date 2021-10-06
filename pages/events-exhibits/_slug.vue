<template lang="html">
    <section class="page-event-detail">
        <header-sticky>
            <header-sticky-children
                :items="breadcrumbs"
                :share-title="shareData.title"
                :share-text="shareData.text"
            />
        </header-sticky>

        Event detail here
        {{ allEvents }}
        <!-- TODO flexible content goes here -->
    </section>
</template>

<script>
export default {
    data() {
        return {
            allEvents: [],
        }
    },
    async fetch() {
        const data = await this.$axios.$get(`/events`, {
            params: {
                cal_id: 7056,
            },
        })
        // TODO get event data from Craft
        // return {
        //     page: {},
        // }
        this.allEvents = [...this.allEvents, ...data.events]
        console.log(data.events[0].title)
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
