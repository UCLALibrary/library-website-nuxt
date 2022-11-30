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

        <section-wrapper
            v-if="uclaLibraries" 
            section-title="UCLA Library Locations"
        >
            <section-location-list
                class="blockLocationListWrapper"
                :items="parsedUclaLibraries"
            />
            <button-more text="See More" />
        </section-wrapper>

        <section-wrapper
            v-if="affiliateLibraries" 
            section-title="Other Campus Libraries & Archives"
        >
            <section-location-list
                class="blockLocationListWrapper"
                :items="parsedAffiliateLibraries"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                class="section block-call-to-action"
                :is-global="true"
            />
        </section-wrapper>
    </div>
</template>

<script>
// Helpers
import _get from "lodash/get"
import parseAddress from "~/utils/parseAddress"
import parseAmenities from "~/utils/parseAmenities"

// GQL
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
                    to: obj.uri ? `/${obj.uri}` : null,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    address: parseAddress(obj)[0],
                    addressLink: `https://map.ucla.edu/?id=${obj.campusMapId}&e=true`,
                    amenities:
                        obj.amenitiesIcons.length > 0
                            ? parseAmenities(obj)
                            : null
                }
            })
        },
        parsedAffiliateLibraries() {
            return this.affiliateLibraries.map((obj) => {
                return {
                    ...obj,
                    to: obj.uri ? `/${obj.uri}` : null,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    address: parseAddress(obj)[0],
                    addressLink: `https://map.ucla.edu/?id=${obj.campusMapId}&e=true`,
                    amenities: obj.amenitiesIcons.length !== 0 ? parseAmenities(obj) : null
                }
            })
        }
    },
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
