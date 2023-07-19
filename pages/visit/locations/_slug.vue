<template lang="html">
    <main class="page page-location-detail">
        <nav-breadcrumb
            to="/visit/locations"
            :title="page.title"
            parent-title="Locations"
        />

        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            :title="page.title"
            :text="page.text"
            :address="parsedAddress"
            :email="page.email"
            :phone="page.phoneNumber"
            :address-link="addressLink"
            :staff-directory-link="parsedStaffDirectory"
        />

        <section-wrapper
            v-if="page.heroImage && page.heroImage.length == 1"
            class="section-banner"
        >
            <banner-header
                :image="page.heroImage[0].image[0]"
                :title="page.title"
                :text="page.text"
                :address="parsedAddress"
                :email="page.email"
                :phone="page.phoneNumber"
                :staff-directory-link="parsedStaffDirectory"
                :address-link="addressLink"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                v-if="
                    page.libcalLocationIdForHours ||
                        page.amenitiesIcons.length ||
                        parsedSpaces.length
                "
                color="visit"
                class="divider-way-finder"
            />
        </section-wrapper>

        <page-anchor
            v-if="h2Array.length >=2"
            :section-titles= h2Array
            class="page-anchor"
            color="default"
        />

        <section-wrapper>
            <div class="section-header">
                <div
                    v-if="
                        page.libcalLocationIdForHours ||
                            page.amenitiesIcons.length ||
                            parsedSpaces.length
                    "
                    class="section-title"
                >
                    Using the Library
                </div>
                <div
                    v-if="page.howToGetHere"
                    class="section-summary"
                    v-html="page.howToGetHere"
                />
            </div>

            <block-hours
                v-if="page.libcalLocationIdForHours"
                :lid="page.libcalLocationIdForHours"
            />

            <divider-general
                v-if="page.amenitiesIcons.length"
                class="divider-general"
            />

            <block-amenities
                v-if="page.amenitiesIcons.length"
                :amenities="page.amenitiesIcons"
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
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                v-if="page.resourceServiceWorkshop.length"
                color="visit"
                class="divider-way-finder"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page.resourceServiceWorkshop.length"
            class="services-and-resources"
            section-title="Services &amp; Resources"
        >
            <simple-cards :items="parsedServicesAndResources" />
            <nuxt-link
                v-if="page.resourceServiceWorkshop.length"
                class="button-more"
                to="/help/services-resources"
            >
                <button-more text="See All Services & Resources" />
            </nuxt-link>
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                v-if="mergeSortEventsExhibitions.length"
                color="visit"
                class="divider-way-finder"
            />
        </section-wrapper>

        <section-wrapper
            v-if="mergeSortEventsExhibitions.length > 0"
            class="events-exhibitions"
            section-title="Events &amp; Exhibitions"
        >
            <section-teaser-list
                class="section-teaser-list"
                :items="mergeSortEventsExhibitions"
            />
            <!-- <nuxt-link
                v-if="mergeSortEventsExhibitions.length"
                class="button-more"
                to="/visit/events-exhibits"
            >
                <button-more text="See More" />
            </nuxt-link> -->
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                v-if="page.blocks.length > 0"
                color="visit"
                class="divider-way-finder"
            />
        </section-wrapper>

        <flexible-blocks
            class="content"
            :blocks="page.blocks"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                v-if="page.about"
                color="visit"
                class="divider-way-finder"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page.about"
            class="about"
            section-title="About"
        >
            <rich-text
                class="about-text"
                :rich-text-content="page.about"
            />
        </section-wrapper>

        <!--  <section-wrapper theme="divider">
                <divider-way-finder
                v-if="page.about"
                color="visit"
                class="divider-way-finder"
            />
        </section-wrapper>
        <section-wrapper>
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
        </section-wrapper>
        <section-wrapper theme="divider">
            <divider-way-finder
                color="visit"
                class="divider-way-finder"
            />
        </section-wrapper> -->
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import LOCATION_DETAIL from "~/gql/queries/LocationDetail"

export default {
    async asyncData({ $graphql, params, $elasticsearchplugin, error }) {
        //console.log("rendered client side" + process.client)
        const data = await $graphql.default.request(LOCATION_DETAIL, {
            slug: params.slug,
        })
        if (!data.entry) {
            error({ statusCode: 404, message: "Page not found" })
        }

        if (data) await $elasticsearchplugin.index(data.entry, params.slug)

        return {
            page: _get(data, "entry", {}),
            associatedArticles: _get(data, "associatedArticles", {}),
            associatedExhibitions: _get(data, "associatedExhibitions", {}),
            associatedEndowments: _get(data, "associatedEndowments", {}),
            associatedEvents: _get(data, "associatedEvents", {}),
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
    data() {
        return {
            h2Array: [] // anchor tags
        }
    },
    computed: {
        parsedStaffDirectory() {
            if (
                this.page.locationType != "affiliateLibrary" &&
                this.page.title.length > 0
            ) {
                let searchLibrary = this.page.title
                let libConcat =
                    '/about/staff?q=&filters={"locations.title.keyword":["' +
                    encodeURIComponent(searchLibrary) +
                    '"]}'

                return libConcat
            } else {
                return ""
            }
        },
        parsedAddress() {
            if (this.page.address.length && this.page.address[0].addressLine2) {
                return (
                    this.page.address[0].addressLine1 +
                    "\n" +
                    this.page.address[0].addressLine2 +
                    "\n" +
                    this.page.address[0].addressCity +
                    ", " +
                    this.page.address[0].addressState +
                    " " +
                    this.page.address[0].addressZipCode
                )
            } else if (this.page.address.length) {
                return (
                    this.page.address[0].addressLine1 +
                    "\n" +
                    this.page.address[0].addressCity +
                    ", " +
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
                            ? "Email to Reserve"
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
                    to: `/visit/events-exhibitions/${obj.slug}`,
                    image: _get(obj, "heroImage[0].image[0]", {}),
                    text: _get(obj, "summary", ""),
                    startDate: _get(obj, "startDate", ""),
                    endDate: _get(obj, "endDate", ""),
                    category: "Exhibition",
                }
            })
        },
        parsedEvents() {
            return this.associatedEvents.map((obj) => {
                return {
                    ...obj,
                    to: `/visit/events-exhibitions/${obj.slug}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    text: _get(obj, "eventDescription", ""),
                    startDate: _get(obj, "startDateWithTime", ""),
                    endDate: _get(obj, "endDateWithTime", ""),
                    category: _get(obj, "eventType[0].title", ""),
                }
            })
        },
        mergeSortEventsExhibitions() {
            return this.parsedExhibtions.concat(this.parsedEvents)
            // .sort((b, a) =>
            //     a.startDate > b.startDate
            //         ? -1
            //         : b.startDate > a.startDate
            //             ? 1
            //             : 0
            // )
        },
    },
    mounted() {
        // Find all elements with class name "section-header2" or "section-header3"
        const elements = document.querySelectorAll('.section-header2, .section-header3');

        const h2Array = [];

        // Loop through each section-header element and push it into the array
        // Excludes the section-header2 More Information
        // which is a visually-hidden element above the divider-way-finder
        // in the Flexible Block component
        elements.forEach((element) => {
            // if(.banner-header || BannerText || MastheadSecondary)
            if(element.textContent !== "More Information") this.h2Array.push(element.textContent);
        })
    },
}
</script>

<style lang="scss" scoped>
.page-location-detail {
    .section-header {
        margin: var(--space-xl) auto;
        max-width: $container-l-main + px;
    }
    .section-title {
        @include step-4;
        color: var(--color-primary-blue-03);
    }
    .section-summary {
        @include step-0;
        margin-top: var(--space-m);

        ::v-deep p {
            margin: 0;
        }
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
        margin-bottom: var(--space-3xl);
    }

    .about-text {
        margin-bottom: var(--space-3xl);
    }

    .more-info {
        @include visually-hidden;
    }

    // ::v-deep .flexible-block:last-child:not(.flexible-simple-cards) {
    //     background: red;
    // }
    ::v-deep .section-banner {
        .gradient-no-category {
            background: linear-gradient(
                120deg,
                rgba(15, 15, 15, 0) 0,
                rgba(15, 15, 15, 0.2509803922) 67.57%,
                #0f0f0f 120%
            );
        }
    }

    @media #{$small} {
        .page {
            width: 100%;
        }
    }
}
</style>
