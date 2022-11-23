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

        <!-- <section-wrapper v-if="uclaLibraries">
            <section-location-list
                :items="uclaLibraries"
            />
        </section-wrapper> -->
        <section-wrapper
            v-if="uclaLibraries" 
            class="blockLocationListWrapper"
        >
            <block-location-list-item
                v-for="item, index in parsedUclaLibraries"
                :key="`uclaLibraries-${index}`"
                :title="item.title"
                :to="item.uri"
                :image="item.image"
                :address="item.address"
                :amenities="item.amenities"
            />
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
        parsedUclaLibraries() {
            return this.uclaLibraries.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "heroImage[0].image[0]", null),                 
                    address: this.parseAddress(obj)[0],
                    addressLink: `https://map.ucla.edu/?id=${obj.campusMapId}&e=true`,
                    amenities: obj.amenities// look for my comment below about amenities
                }
            })
        },
        // TODO match on LibCal id for Hours today
    },
    methods: {
        parseAddress(obj) {
            return obj.address.map((item) => {
                if (item.addressLine2) {
                    return (
                        item.addressLine1 +
                    " " +
                    item.addressLine2 +
                    " " +
                    item.addressCity +
                    " " +
                    item.addressState +
                    " " +
                    item.addressZipCode
                    )
                } else if (item) {
                    return (
                        item.addressLine1 +
                    " " +
                    item.addressCity +
                    " " +
                    item.addressState +
                    " " +
                    item.addressZipCode
                    )
                } else {
                    return ""
                }
            })
        },
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

    .blockLocationListWrapper {
        display: flex;
        flex-direction: column;
        gap: var(--space-m);

        max-width: $container-l-main + px;
        margin: 0 auto var(--space-3xl);
    }

}
</style>
