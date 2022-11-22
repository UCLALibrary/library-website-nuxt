<template lang="html">
    <div class="page page-help">
        <masthead-secondary
            :title="summaryData.title"
            :text="summaryData.summary"
        />
        
        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider-way-finder"
                color="default"
            />
        </section-wrapper>
        
        <h2 class="section-heading">
            {{ summaryData.title }}
        </h2>
        <!-- <h3>{{ summaryData }}</h3>
        <hr>
        <h3>{{ uclaLibraries }}</h3>
        <hr>
        <h3>parsedAddress --- {{ parsedAddress }}</h3>
        <hr>
        <h3>{{ affiliateLibraries }}</h3> -->

        <section-wrapper v-if="uclaLibraries">
            <section-location-list
                :items="uclaLibraries"
            />
        </section-wrapper>
        <!-- <section-wrapper v-if="uclaLibraries">
            <block-location-list-item
                v-for="item, index in uclaLibraries"
                :key="`uclaLibraries-${index}`"
                :title="item.title"
                :to="item.uri"
                :image="item.heroImage[0]"
                :address="item.address"
                :amenities="item.amenities"
            />
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
                    to: ""
                }
            })
        },
        parsedLocationsList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: obj.locationType === "uclaLibrary"?`/visit/locations/${obj.to}`:obj.affiliateLibraryUrl,                     
                    image: _get(obj, "heroImage[0].image[0]", null),                 
                    address: this.parsedAddress(obj),
                    addressLink: `https://map.ucla.edu/?id=${obj.campusMapId}&e=true`,
                    amenities: ""// look for my comment below about amenities
                }
            })
        },
        // parsedAffiliateLibraries(){
            
        // }
        // TODO match on LibCal id for Hours today
    },
    methods: {
        parseAddress(obj) {
            return  obj.address && obj.address[0] ?
                obj.address[0].addressLine1 + 
                obj.address[0].addressLine2 + 
                obj.address[0].addressCity + 
                obj.address[0].addressState + 
                obj.address[0].addressZipCode + 
                obj.address[0].addressCountry : ""
        }
    }
}
</script>

<style lang="scss" scoped>
.page-help {

    .section-heading {
        @include step-4;
        color: var(--color-primary-blue-03);
        margin: var(--space-xl) auto;
        max-width: $container-l-main + px;
    }
}
</style>
