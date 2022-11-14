<template lang="html">
    <div class="page page-help">
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.summary"
        />
        <h3>{{ page }}</h3>

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
// Helpers
import _get from "lodash/get"

// gql
import LOCATIONS_LIST from "~/gql/queries/LocationsList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(LOCATIONS_LIST, {
            uri: params.path,
        })

        return {
            page: _get(data, "entries", {}),
            summaryData: _get(data, "entry", {}),
        }
    },
    computed: {
        parsedLocationsList() {
            return this.page.map((obj) => {
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
