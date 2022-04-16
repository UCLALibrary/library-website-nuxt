<template lang="html">
    <div class="page-location-detail">
        <div v-html="parsedEvents" />
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
        <block-hours
            class="block-hours"
            :lid="page.libcalLocationIdForHours"
        />
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
        <div class="block-spaces">
            <h3>Spaces</h3>
            <p>Placeholder descriptor text</p>
            <block-spaces
                v-for="(space, index) in mockBlockSpaces"
                :key="index"
                :title="space.title"
                :text="space.text"
            />
        </div>

        <divider-way-finder
            v-if="page.resourceServiceWorkshop.length"
            color="visit"
            class="divider-way-finder"
        />

        <simple-cards
            v-if="page.resourceServiceWorkshop"
            class="simple-cards"
            :items="page.resourceServiceWorkshop"
        />
        <nuxt-link
            v-if="page.resourceServiceWorkshop"
            class="button-more"
            to="/help/services-resources"
        >
            <button-more
                v-if="page.resourceServiceWorkshop"
                text="See More"
            />
        </nuxt-link>
        <divider-way-finder
            color="visit"
            class="divider-way-finder"
        />
        <!-- TO DO add associated events and exhibits -->
        <div class="events-exhibitions">
            <section-teaser-list
                class="section-teaser-list"
                :items="parsedEvents"
            />
        </div>

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
        // TO DO replace with data from libcal query
        mockBlockSpaces() {
            return [
                {
                    to: "https://calendar.library.ucla.edu",
                    title: "Bureaux de Garcons",
                    location: "Fast Lane Building",
                    text: "Eclectic sophisticated carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub Boeing 787 lovely Melbourne flat white ryokan.",
                },
                {
                    to: "https://calendar.library.ucla.edu",
                    title: "Bureaux de Garcons",
                    location: "Fast Lane Building",
                    text: "Eclectic sophisticated carefully curated lovely Baggu Muji sharp finest efficient perfect. Hub Boeing 787 lovely Melbourne flat white ryokan.",
                },
            ]
        },
        parsedEvents() {
            return this.page.exhibitsAndEvents.map((obj) => {
                return {
                    ...obj,
                    to: `events-exhibtions/${obj.id}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    text: obj.summary,
                    startDate: _get(obj, "startDate", ""),
                    locations: _get(obj, "associatedLocations", ""),
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-location-detail {
    .banner-text {
        --color-theme: var(--color-help-green-03);
    }
    .banner-header {
        margin-bottom: var(--space-xl);
        padding: 0;
        max-width: $container-xl-full-width + px;
        margin: var(--unit-gutter) auto;
    }
    .banner-text + .divider-way-finder {
        margin: 0 auto var(--space-2xl);
    }
    .divider-way-finder {
        max-width: $container-l-main + px;
        margin: var(--space-3xl) auto;
    }
    .content {
        margin: 0 auto;
    }
    .block-hours,
    .button-more,
    .block-spaces,
    .section-teaser-list {
        margin: var(--space-3xl) auto;
    }
}
</style>
