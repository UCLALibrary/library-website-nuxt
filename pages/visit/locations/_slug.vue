<template lang="html">
    <div class="page page-location-detail">
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
            :staff-directory-link="parsedStaffDirectory"
        />
        <banner-header
            v-if="page.heroImage && page.heroImage.length == 1"
            :image="page.heroImage[0].image[0]"
            :title="page.title"
            :text="page.summary"
            :address="parsedAddress"
            :email="page.email"
            :phone="page.phoneNumber"
            :staff-directory-link="parsedStaffDirectory"
            :address-link="addressLink"
        />
        <divider-way-finder
            v-if="
                page.libcalLocationIdForHours ||
                    page.amenities.length ||
                    parsedSpaces.length
            "
            color="visit"
            class="divider-way-finder"
        />
        <h2
            v-if="
                page.libcalLocationIdForHours ||
                    page.amenities.length ||
                    parsedSpaces.length
            "
            class="section-heading"
        >
            Using the Library
        </h2>
        <block-hours
            v-if="page.libcalLocationIdForHours"
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
        <divider-general
            v-if="parsedSpaces.length"
            class="divider-general"
        />
        <section-spaces-list
            v-if="parsedSpaces.length"
            class="section-block-spaces"
            :items="parsedSpaces"
        />
        <divider-way-finder
            v-if="page.resourceServiceWorkshop.length"
            color="visit"
            class="divider-way-finder"
        />

        <simple-cards
            v-if="page.resourceServiceWorkshop.length"
            section-title="Services &amp; Resources"
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
            v-if="page.resourceServiceWorkshop.length"
            color="visit"
            class="divider-way-finder"
        />

        <div
            v-if="mergeSortEventsExhibitions.length"
            class="events-exhibitions"
        >
            <h2 class="section-heading">
                Events &amp; Exhibtions
            </h2>
            <section-teaser-list
                class="section-teaser-list"
                :items="mergeSortEventsExhibitions"
            />
            <nuxt-link
                v-if="mergeSortEventsExhibitions.length"
                class="button-more"
                to="/visit/events-exhibits"
            >
                <button-more text="See More" />
            </nuxt-link>
        </div>

        <divider-way-finder
            v-if="mergeSortEventsExhibitions.length"
            color="visit"
            class="divider-way-finder"
        />

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />
        <h2
            v-if="page.about"
            class="section-heading"
        >
            About
        </h2>
        <rich-text
            class="about-text"
            :rich-text-content="page.about"
        />
        <divider-way-finder
            color="visit"
            class="divider-way-finder"
        />
        <h2
            v-if="page.campusMapId"
            class="section-heading"
        >
            Location &amp; Access
        </h2>
        <block-campus-map
            v-if="page.campusMapId"
            :campus-location-id="page.campusMapId"
            :location-name="page.title"
            :building-access="page.howToGetHere"
            class="campus-map"
        />
    </div>
</template>

<script>
// gql
import LOCATION_DETAIL from "~/gql/queries/LocationDetail"

// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $graphql, params }) {
        console.log("rendered client side" + process.client)
        const data = await $graphql.default.request(LOCATION_DETAIL, {
            slug: params.slug,
        })
        return {
            page: _get(data, "entry", {}),
            associatedArticles: _get(data, "associatedArticles", {}),
            associatedExhibitions: _get(data, "associatedExhibitions", {}),
            associatedEndowments: _get(data, "associatedEndowments", {}),
            associatedEvents: _get(data, "associatedEvents", {}),
        }
    },
    head() {
        return {
            title: this.page.title,
        }
    },
    computed: {
        parsedStaffDirectory() {
            if (this.page.locationType != "affiliateLibrary") {
                return "/about/staff"
            } else {
                return ""
            }
        },
        parsedAddress() {
            if (this.page.address.length && this.page.address[0].addressLine2) {
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
            } else if (this.page.address.length) {
                return (
                    this.page.address[0].addressLine1 +
                    " " +
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
                        obj.reservationRequired === "email"
                            ? obj.mediatorEmail
                            : "Reserve",
                    to:
                        obj.reservationRequired === "email"
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
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
                }
            })
        },
        parsedExhibtions() {
            return this.associatedExhibitions.map((obj) => {
                return {
                    ...obj,
                    to: `/events-exhibtions/${obj.slug}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    text: _get(obj, "summary", ""),
                    startDate: _get(obj, "seriesDate[0].startDate", ""),
                    endDate: _get(obj, "seriesDate[0].endDate", ""),
                    locations: _get(obj, "associatedLocations", []),
                }
            })
        },
        parsedEvents() {
            return this.associatedEvents.map((obj) => {
                return {
                    ...obj,
                    to: `/events-exhibtions/${obj.slug}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    text: _get(obj, "eventDescription", ""),
                    startDate: _get(obj, "date[0].startTime", ""),
                    endDate: _get(obj, "date[0].endTime", ""),
                    locations: _get(obj, "associatedLocations", []),
                }
            })
        },
        mergeSortEventsExhibitions() {
            return this.parsedEvents
                .concat(this.parsedExhibtions)
                .sort((a, b) =>
                    a.startDate > b.startDate
                        ? 1
                        : b.startDate > a.startDate
                            ? -1
                            : 0
                )
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
        margin: 0 auto var(--space-3xl);
    }
    .content {
        margin: 0 auto;
    }
    .section-heading {
        @include step-4;
        color: var(--color-primary-blue-03);
        margin: var(--space-xl) auto;
        max-width: $container-l-main + px;
    }
    .section-teaser-list {
        margin: var(--space-xl) auto;
    }

    .block-hours,
    .button-more,
    .section-block-spaces,
    .amenities {
        margin: var(--space-2xl) auto;
    }

    .block-spaces {
        margin: 16px auto;
    }

    .campus-map {
        margin-bottom: var(--space-2xl);
    }

    // ::v-deep .flexible-block:last-child:not(.flexible-simple-cards) {
    //     background: red;
    // }

    @media #{$medium} {
        .section-heading,
        .block-campus-map,
        .section-block-spaces,
        .block-hours,
        .block-amenities,
        .simple-cards,
        .section-teaser-list,
        .section-teaser-card {
            padding: 0 var(--unit-gutter);
        }
    }

    @media #{$small} {
        .page {
            width: 100%;
        }
    }
}
</style>
