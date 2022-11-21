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
        <h3>{{ affiliateLibraries }}</h3>
        <hr/>
        <h3>{{uclaLibraries[0]}}</h3>

        <!-- <section-wrapper v-if="uclaLibraries">
        <section-location-list
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
        </nuxt-link>
        </section-wrapper> -->
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
    }
    //computed: {
        // parsedUclaLibraries: () => {
        //     return this.page.map((obj) => {
        //         return {
        //             ...obj,
        //             to: `/visit/locations/${obj.to}`,
        //         }
        //     })
        // },
        // parsedAddress() {
        //     return `${address.addressLine1}`

        // },
        // titleTemplate: (pageTitle) => {
        //         const siteTitle = this.pageMeta.title
        //         let output = this.pageMeta.title

        //         switch (true) {
        //             case siteTitle == pageTitle:
        //                 output = site
        //                 break
        //             case Boolean(pageTitle):
        //                 output = `${siteTitle} - ${pageTitle}`
        //                 break
        //         }
        //         return output
        //     },
//}
</script>

<style lang="scss" scoped>
.page-help {
}
</style>
