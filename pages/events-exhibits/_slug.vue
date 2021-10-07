<template lang="html">
    <section class="page-event-detail">
        <header-sticky
            class="sticky-header"
            :has-share-links="true"
            :share-title="shareData.title"
            :share-text="shareData.text"
            :crumbs="crumbs"
        >
            <!--header-sticky-children
                :items="breadcrumbs"
                :share-title="shareData.title"
                :share-text="shareData.text"
            / -->
        </header-sticky>

        Event detail here
        {{ allEvents }}
        <!-- TODO flexible content goes here -->
    </section>
</template>

<script>
import startCase from "lodash/startcase"

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
        crumbs() {
            const fullPath = this.$route.fullPath
            const params = fullPath.startsWith("/")
                ? fullPath.substring(1).split("/")
                : fullPath.split("/")
            const crumbs = []
            let path = ""
            params.forEach((param, index) => {
                path = `${path}/${param}`
                const match = this.$router.match(path)
                if (match.name !== null) {
                    crumbs.push({
                        title: startCase(param.replace(/-/g, " ")),
                        ...match,
                    })
                }
            })
            return crumbs
        },
    },
}
</script>

<style lang="scss" scoped>
.page-event-detail {
    height: 400vh;
    .sticky-header {
        top: 0;
        left: 0;
        width: 100%;
        position: fixed;
        background-color: red;
        height: 96px;
        transform: translateY(-100%);
        transition: transform 400ms ease-in-out;
        // States
        .has-scrolled-past-header & {
            transform: translateY(0);
        }
    }
}
</style>
