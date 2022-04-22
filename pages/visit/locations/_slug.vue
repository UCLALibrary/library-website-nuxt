<template lang="html">
    <div class="page-location-detail">
        <nav-breadcrumb :title="page.title" />
        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :title="page.title"
            :text="page.summary"
            :address="parsedAddress"
            :email="page.email"
            :phone="page.phoneNumber"
            :address-link="addressLink"
        />
        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :title="page.title"
            :text="page.summary"
            :address="parsedAddress"
            :email="page.email"
            :phone="page.phoneNumber"
            :address-link="addressLink"
        />
        <h3 class="using-the-library">
            Using the Library
        </h3>
        <block-hours
            class="block-hours"
            :lid="page.libcalLocationIdForHours"
        />
        <divider-general class="divider-general" />
        <block-amenities
            v-if="page.amenities.length"
            :items="page.amenities"
            class="amenities"
        />
        <divider-general class="divider-general" />
        <!-- <block-campus-map
            :campus-location-id="page.campusMapId"
            :location-name="page.title"
            :building-access="page.howToGetHere"
        /> -->
        <div
            v-if="libCalSpaces"
            class="block-spaces"
        >
            <h3 class="spaces-title">
                {{ page.title }} Spaces
            </h3>
            <block-spaces
                v-for="(space, index) in libCalSpaces"
                :key="index"
                :title="space.name"
                :text="space.description"
            />
        </div>

        <divider-way-finder
            v-if="page.resourceServiceWorkshop.length"
            color="visit"
            class="divider-way-finder"
        />

        <simple-cards
            v-if="page.resourceServiceWorkshop.length"
            class="simple-cards"
            :items="parsedServicesAndResources"
        />
        <nuxt-link
            v-if="page.resourceServiceWorkshop.length"
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
        <div
            v-if="parsedEvents.length"
            class="events-exhibitions"
        >
            <section-teaser-list
                class="section-teaser-list"
                :items="parsedEvents"
            />
        </div>
        <!-- Card with image for associated exhibitions -->
        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
        <div class="endowment-group">
            <block-highlight
                v-for="(item, index) in parsedEndowments"
                :key="index"
                class="endowments"
                :image="item.image"
                :title="item.title"
                :text="item.text"
                :is-vertical="true"
            />
        </div>
        <section-post-small
            v-if="parsedArticles.length"
            :items="parsedArticles"
            class="articles"
        />
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
        // TO DO get a list of libcalids
        const libcalID = data.entry.libcalLocationIdForSpaces
        if (libcalID) {
            const libcalData = await $axios.$get(
                `https://calendar.library.ucla.edu/api/1.1/space/items/${libcalID}`
            )
            // Check the repsonse code isn't an error
            return {
                page: _get(data, "entry", {}),
                // libCalSpaces: libcalData,
            }
        } else {
            return {
                page: _get(data, "entry", {}),
            }
        }
        // async asyncData({ $axios }) {
        //     const libcalData = await $axios.$get(
        //         `https://calendar.library.ucla.edu/api/1.1/space/items/4361`
        //         console.log(we are in the seperate asyncdata now)
        //     )
        //     return {
        //         libCalSpaces: libcalData,
        //     }
    },
    head() {
        return {
            title: this.page.title,
        }
    },
    computed: {
        // TO DO refactor to remove empties then concat
        parsedAddress() {
            return (
                this.page.address[0].addressLine1 +
                " " +
                // _get(this.page, "address[0].addressLine2", "") +
                // " " +
                this.page.address[0].addressCity +
                " " +
                this.page.address[0].addressState +
                " " +
                this.page.address[0].addressZipCode
            )
        },
        addressLink() {
            return `https://map.ucla.edu/?id=${this.page.campusMapId}&e=true`
        },
        parsedServicesAndResources() {
            return this.page.resourceServiceWorkshop.map((obj) => {
                return {
                    ...obj,
                    to: obj.researchGuideUrl
                        ? obj.researchGuideUrl
                        : `/${obj.uri}`,
                }
            })
        },
        parsedEvents() {
            return this.page.exhibitsAndEvents.map((obj) => {
                return {
                    ...obj,
                    to: `/events-exhibtions/${obj.id}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    text: _get(obj, "summary", ""),
                    startDate: _get(obj, "seriesDate[0].startDate", ""),
                    endDate: _get(obj, "seriesDate[0].endDate", ""),
                    locations: _get(obj, "associatedLocations", []),
                }
            })
        },
        parsedEndowments() {
            return this.page.endowment.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    text: obj.summary,
                }
            })
        },
        parsedArticles() {
            return this.page.associatedArticles.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    text: obj.summary,
                    author: _get(obj, "author[0].title", ""),
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
    .divider-way-finder,
    .divider-general {
        max-width: $container-l-main + px;
        margin: var(--space-3xl) auto;
    }
    .content {
        margin: 0 auto;
    }
    .using-the-library {
        @include step-3;
        color: var(--color-primary-blue-03);
        margin: var(--space-3xl) auto;
    }
    .spaces-title {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin: var(--space-3xl) auto;
    }
    .block-hours,
    .button-more,
    .amenities,
    .block-spaces,
    .section-teaser-list {
        margin: var(--space-3xl) auto;
    }

    .endowments {
        margin: var(--space-3xl) auto;
        // margin: 0 8px 50px 8px;
    }
    .endowment-group {
        max-width: 960px;
        padding: 0 calc(var(--unit-gutter) - 16px);
        background-color: var(--color-white);
        margin: 0 auto;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
    }
}
</style>
