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
            :prompt="parsedButtonText"
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
        <block-campus-map
            :campus-location-id="page.campusMapId"
            :location-name="page.title"
            :building-access="page.howToGetHere"
        />
        <!-- <block-spaces />
        <flexible-simple-cards />
        TO DO Make a normal version of simplecards
        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        /> -->
    </div>
</template>

<script>
// gql
import LOCATION_DETAIL from "~/gql/queries/LocationDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params }) {
        const data = await $graphql.default.request(LOCATION_DETAIL, {
            slug: params.slug,
        })

        return {
            page: _get(data, "entry", {}),
        }
    },
    computed: {
        parsedAddress() {
            return this.page.address[0].addressLine1
        },
    },
}
</script>

<style lang="scss" scoped></style>
