<template lang="html">
    <div class="page page-help">
        <nuxt-link
            v-for="item in parsedLocationsList"
            :key="item.to"
            :to="item.to"
        >
            <div
                class="text"
                v-html="item.title"
            />
        </nuxt-link>
    </div>
</template>

<script>
// gql
import LOCATIONS_LIST from "~/gql/queries/LocationsList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(LOCATIONS_LIST, {
            uri: params.path,
        })

        return {
            page: data,
        }
    },
    computed: {
        parsedLocationsList() {
            return this.page.entries.map((obj) => {
                return {
                    ...obj,
                    to: `/visit/locations/${obj.to}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-help {
}
</style>
