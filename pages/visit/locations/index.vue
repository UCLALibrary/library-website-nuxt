<template lang="html">
    <div class="page page-help">
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.summary"
        />
        <h3>{{ summaryData }}</h3>
        <hr>
        <h3>{{ parsedLocationsList }}</h3>

        <section-wrapper v-if="parsedLocationsList">
            <block-location-list-item
                :title="parsedLocationsList [0].title"
                :to="parsedLocationsList [0].to"
                :image="parsedLocationsList [0].image"
                :day="parsedLocationsList [0].day"
                :hour="parsedLocationsList [0].hour"
                :address="parsedLocationsList [0].address"
                :address-link="parsedLocationsList [0].addressLink"
                :amenities="parsedLocationsList [0].amenities"
                :reserve-seat="parsedLocationsList [0].reserveSeat"
                :is-ucla-library="parsedLocationsList [0].isUclaLibrary"
            />
        </section-wrapper>
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
