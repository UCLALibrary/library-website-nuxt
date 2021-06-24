<template lang="html">
    <section class="page-events-exhibits">
        <h2 v-html="event.title" />
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $axios }) {
        const data = await $axios.$get(`/events/${7975022}`)

        return {
            event: _get(data, "events[0]", {}),
        }
    },
}
</script>

<style lang="scss" scoped>
.page-events-exhibits {
}
</style>
