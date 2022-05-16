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
        <divider-general
            v-if="page.amenities.length"
            class="divider-general"
        />
        <block-amenities
            v-if="page.amenities.length"
            :items="page.amenities"
            class="amenities"
        />
        <divider-general class="divider-general" />
        <block-campus-map
            v-if="page.campusMapId"
            :campus-location-id="page.campusMapId"
            :location-name="page.title"
            :building-access="page.howToGetHere"
        />
        <div
            v-if="parsedSpaces.length"
            class="block-spaces"
        >
            <h3 class="spaces-title">
                {{ page.title }} Spaces
            </h3>

            <block-spaces
                v-for="(space, index) in parsedSpaces"
                :key="index"
                :title="space.title"
                :text="space.summary"
                :location="space.location"
                :to="space.to"
                :button-text="space.buttonText"
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
            section-title="Services & Resources"
            :items="parsedServicesAndResources"
        />
        <nuxt-link
            v-if="page.resourceServiceWorkshop.length"
            class="button-more"
            to="/help/services-resources"
        >
            <button-more text="See More" />
        </nuxt-link>
        <divider-way-finder
            color="visit"
            class="divider-way-finder"
        />
        <div
            v-if="parsedEvents.length"
            class="events-exhibitions"
        >
            <h3 class="using-the-library">
                Events & Exhibits
            </h3>
            <section-teaser-list
                class="section-teaser-list"
                :items="parsedEvents"
            />
            <nuxt-link
                v-if="parsedEvents.length"
                class="button-more"
                to="/visit/events-exhibits"
            >
                <button-more text="See More" />
            </nuxt-link>
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
            to="/about/news"
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
        console.log("rendered client side" + process.client)
        const data = await $graphql.default.request(LOCATION_DETAIL, {
            slug: params.slug,
        })
        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        return {
            title: this.page.title,
        }
    },
    computed: {
        // TO DO refactor to remove empties then concat
        parsedAddress() {
            if (this.page.address.length) {
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
            } else {
                return ""
            }
        },
        addressLink() {
            return `https://map.ucla.edu/?id=${this.page.campusMapId}&e=true`
        },
        parsedSpaces() {
            return this.page.space.map((obj) => {
                return {
                    ...obj,
                    buttonText:
                        obj.mediatedBooking === "yes"
                            ? obj.mediatorEmail
                            : "Reserve",
                    to:
                        obj.mediatedBooking === "yes"
                            ? `mailto:${obj.mediatorEmail}`
                            : obj.reservationUrl,
                    location: obj.associatedLocations
                        ? obj.associatedLocations[0]
                        : "",
                }
            })
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
        max-width: $container-l-main + px;
    }
    .spaces-title {
        @include step-2;
        color: var(--color-primary-blue-03);
        margin: var(--space-3xl) auto;
        max-width: $container-l-main + px;
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
        max-width: $container-l-main + px;
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
