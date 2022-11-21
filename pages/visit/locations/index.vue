<template lang="html">
    <div class="page page-help">
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.summary"
        />
        <h3>{{ summaryData }}</h3>
        <hr>
        <h3>{{ uclaLibraries }}</h3>
        <hr>
        <h3>parsedAddress --- {{ parsedAddress }}</h3>
        <hr>
        <h3>{{ affiliateLibraries }}</h3>

        <section-wrapper v-if="uclaLibraries">
        <!-- <section-location-list
                :items="uclaLibraries"
            />
        </section-wrapper> -->
        <!-- 
        <nuxt-link
            v-for="item in parsedLocationsList"
            :key="item.to"
            :to="item.to"
        >
            <div
                class="text"
                v-html="item.title"
            />
        </nuxt-link> -->
        </section-wrapper>
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
            summaryData: _get(data, "entry", {}),
            uclaLibraries: _get(data, "uclaLibraries", {}),
            affiliateLibraries: _get(data, "affiliateLibraries", {}),

        }
    },
    computed: {
        parsedAddress() {
            // let library = this.uclaLibraries[0].address[0]
            return this.uclaLibraries[0].address.map((obj) => {
                return `${obj.addressLine1}<br> ${obj.addressLine2}<br>${obj.addressCity}, ${obj.addressZipCode}`
            })
        },
        parsedUclaLibraries() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: 
                }
            })
        },
        parsedAffiliateLibraries(){
            
        }
        // TODO match on LibCal id for Hours today
    },
}
</script>

<style lang="scss" scoped>
.page-help {
}
</style>
