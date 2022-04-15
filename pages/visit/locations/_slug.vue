<template lang="html">
    <div class="page">
        <div v-html="page" />
        <nav-breadcrumb :title="page.title" />
        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :title="page.title"
            :text="page.summary"
        />
        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :title="page.title"
            :text="page.summary"
            :address="parsedAddress"
            :email="page.email"
            :phone="page.phoneNumber"
            address-link="maps.google.com"
        />
        <!-- TO DO need address link for header in craft -->
        <block-hours :lid="page.libcalLocationIdForHours" />
        <!-- TO DO add amenties -->
        <div
            v-for="(item, index) in page.amenities"
            :key="index"
            v-html="item"
        />
        <block-campus-map
            :campus-location-id="page.campusMapId"
            :location-name="page.title"
            :building-access="page.howToGetHere"
        />
        <h3>Spaces</h3>
        <p>Placeholder descriptor text</p>
        <block-spaces
            v-for="(space, index) in mockBlockSpaces"
            :key="index"
            :title="space.title"
            :text="space.text"
        />

        <divider-way-finder
            v-if="page.resourceServiceWorkshop.length"
            color="visit"
            class="divider-way-finder"
        />

        <simple-cards
            v-if="page.resourceServiceWorkshop"
            :items="page.resourceServiceWorkshop"
        />
        <nuxt-link to="/help/services-resources">
            <button-more
                v-if="page.resourceServiceWorkshop"
                text="See More"
            />
        </nuxt-link>
        <divider-way-finder
            v-if="page.blocks.length"
            color="visit"
            class="divider-way-finder"
        />
        <!-- TO DO add associated events and exhibits -->

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
        <!-- TO DO add news -->
    </div>
</template>

<script>
// gql
import LOCATION_DETAIL from "~/gql/queries/LocationDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params, $axios }) {
        const data = await $graphql.default.request(LOCATION_DETAIL, {
            slug: params.slug,
        })

        // https://calendar.library.ucla.edu/api/1.1/space/items/:id
        // const libcalData = await $axios.$get(`/events`, {
        //     params: {
        //         cal_id: 8312,
        //     },
        // })
        //
        // console.log(libcalData)

        return {
            page: _get(data, "entry", {}),
        }
    },
    computed: {
        // TO DO refactor to loop through adderss list and remove empties then concat
        parsedAddress() {
            return (
                this.page.address[0].addressLine1 +
                " " +
                this.page.address[0].addressLine2 +
                " " +
                this.page.address[0].addressCity +
                " " +
                this.page.address[0].addressState +
                " " +
                this.page.address[0].addressZipCode
            )
        },
        mockBlockSpaces() {
            return [
                {
                    to: "https://calendar.library.ucla.edu",
                    title: "Bureaux de Garcons",
                    location: "Fast Lane Building",
                    text: "Eclectic sophisticated carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub Boeing 787 lovely Melbourne flat white ryokan. Global iconic Gaggenau Muji bulletin premium espresso delightful destination vibrant remarkable elegant bureaux boutique. Sunspel exclusive first-class espresso, Fast Lane intricate Melbourne Airbus A380 pintxos Shinkansen Swiss vibrant the highest quality.",
                },
                {
                    to: "https://calendar.library.ucla.edu",
                    title: "Bureaux de Garcons",
                    location: "Fast Lane Building",
                    text: "Eclectic sophisticated carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub Boeing 787 lovely Melbourne flat white ryokan. Global iconic Gaggenau Muji bulletin premium espresso delightful destination vibrant remarkable elegant bureaux boutique. Sunspel exclusive first-class espresso, Fast Lane intricate Melbourne Airbus A380 pintxos Shinkansen Swiss vibrant the highest quality.",
                },
            ]
        },
    },
}
</script>

<style lang="scss" scoped>
.divider-way-finder {
    max-width: $container-l-main + px;
    margin: var(--space-3xl) auto;
}
</style>
