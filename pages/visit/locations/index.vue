<template lang="html">
    <main
        id="main"
        class="page page-location"
    >
        <masthead-secondary
            :title="page.title"
            :text="page.text"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider-way-finder"
                color="visit"
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
            <!-- TODO implement show-hide instead of button-more -->
            <button-more
                text="See More"
                @click.native="showMoreOtherCampusLibrary()"
            />
        </section-wrapper>

        <section-wrapper
            v-if="affiliateLibraries && showOtherCampus"
            section-title="Other Campus Libraries & Archives"
        >
            <section-location-list
                class="blockLocationListWrapper"
                :items="parsedAffiliateLibraries"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider-way-finder"
                color="visit"
            />
        </section-wrapper>

        <section-wrapper>
            <block-call-to-action
                class="section block-call-to-action"
                :is-global="true"
            />
        </section-wrapper>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import parseAddress from "~/utils/parseAddress"
import parseAmenities from "~/utils/parseAmenities"
import removeTags from "~/utils/removeTags"

// GQL
import LOCATIONS_LIST from "~/gql/queries/LocationsList"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(LOCATIONS_LIST, {
            uri: params.path,
        })

        return {
            page: _get(data, "entry", {}),
            uclaLibraries: _get(data, "uclaLibraries", {}),
            affiliateLibraries: _get(data, "affiliateLibraries", {}),
        }
    },
    data() {
        return {
            showOtherCampus: false,
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaDescription = removeTags(this.page.text)

        return {
            title: title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: metaDescription,
                },
            ],
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
                            : null,
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
                    amenities:
                        obj.amenitiesIcons.length !== 0
                            ? parseAmenities(obj)
                            : null,
                }
            })
        },
    },
    methods: {
        showMoreOtherCampusLibrary() {
            this.showOtherCampus = !this.showOtherCampus
        },
    },
}
</script>

<style lang="scss" scoped>
.page-location {
    // .section-heading {
    //     @include step-4;
    //     color: var(--color-primary-blue-03);
    //     margin: var(--space-xl) auto;
    //     max-width: $container-l-main + px;
    // }

    // .blockLocationListWrapper {
    //     display: flex;
    //     flex-direction: column;
    //     gap: var(--space-m);

    //     max-width: $container-l-main + px;
    //     margin: 0 auto var(--space-3xl);
    // }
}
</style>
