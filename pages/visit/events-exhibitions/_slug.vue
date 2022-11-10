<template lang="html">
    <section class="page.entry-event-detail">
        <!-- Event Detail -->
        <div v-if="page.entry">
            <nav-breadcrumb
                to="/visit/events-exhibitions"
                :title="page.entry.title"
                parent-title="Exhibits & Upcoming Events"
            />

            <header-sticky
                class="sticky-header"
                :primary-items="primaryItems"
                :secondary-items="secondaryItems"
            />

            <banner-text
                v-if="
                    page.entry &&
                        (!page.entry.image[0].image[0] ||
                            page.entry.image[0].image[0].length == 0)
                "
                :title="page.entry.title"
                :locations="page.entry.associatedLocations"
                :start-date="page.entry.date[0].startTime"
                :category="page.entry.eventType.title"
                :to="page.entry.parseURL"
                :prompt="promptName"
                :register-event="parseRegistration"
                :end-date="page.entry.date[0].endTime"
            />

            <section-wrapper
                v-if="page.entry.image[0].image[0]"
                class="section-banner"
            >
                <banner-header
                    :image="page.entry.image[0].image[0]"
                    :title="page.entry.title"
                    :locations="page.entry.associatedLocations"
                    :start-date="page.entry.date[0].startTime"
                    :end-date="page.entry.date[0].endTime"
                    :category="page.entry.eventType.title"
                    :to="page.entry.parseURL"
                    :align-right="true"
                    :prompt="promptName"
                    :register-event="parseRegistration"
                />
            </section-wrapper>

            <section-wrapper theme="divider">
                <divider-way-finder
                    v-if="page.entry.image[0].image[0]"
                    color="visit"
                />
            </section-wrapper>

            <section-wrapper v-if="page.entry || page.entry.eventDescription">
                <rich-text :rich-text-content="page.entry.eventDescription" />
            </section-wrapper>

            <section-wrapper theme="divider">
                <divider-way-finder color="visit" />
            </section-wrapper>
        </div>
        <!-- Event Series -->
        <div v-else>
            <nav-breadcrumb
                to="/visit/events-exhibitions"
                :title="page.workshopOrEventSeries.title"
                parent-title="Exhibits & Upcoming Events"
            />
            <banner-text
                v-if="
                    page.workshopOrEventSeries &&
                        !page.workshopOrEventSeries.image
                "
                :title="page.workshopOrEventSeries.title"
                :locations="page.workshopOrEventSeries.associatedLocations"
                :start-date="page.workshopOrEventSeries.date[0].startDate"
                category="Event Series"
                :to="page.workshopOrEventSeries.publicUrl"
                :prompt="page.workshopOrEventSeries.requiresRegistration"
                :end-date="page.workshopOrEventSeries.date[0].endDate"
            />

            <section-wrapper
                v-if="page.workshopOrEventSeries.image"
                class="section-banner"
            >
                <banner-header
                    :image="page.workshopOrEventSeries.image[0].image[0]"
                    :title="page.workshopOrEventSeries.title"
                    :locations="page.workshopOrEventSeries.associatedLocations"
                    :start-date="page.workshopOrEventSeries.date[0].startDate"
                    category="Event Series"
                    :to="page.workshopOrEventSeries.publicUrl"
                    :prompt="page.workshopOrEventSeries.requiresRegistration"
                    :end-date="page.workshopOrEventSeries.date[0].endDate"
                    :align-right="true"
                />
            </section-wrapper>
            <section-wrapper theme="divider">
                <divider-way-finder
                    v-if="page.workshopOrEventSeries.image"
                    color="visit"
                />
            </section-wrapper>

            <section-wrapper v-if="page.workshopOrEventSeries.summary">
                <rich-text
                    :rich-text-content="page.workshopOrEventSeries.summary"
                />
            </section-wrapper>
            <section-wrapper>
                <h3>Events in this Series</h3>
                {{ page.workshopOrEventSeries.event }}
                <divider-general />
                <section-teaser-list
                    :items="associatedEvents"
                    class="section section-list"
                />
            </section-wrapper>
        </div>

        <block-call-to-action
            class="section block-call-to-action"
            :is-global="true"
        />
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import EVENT_DETAIL from "~/gql/queries/EventDetail.gql"
import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems.gql"

import { computed } from "vue"
export default {
    vue: {
        config: {
            unwrapInjectedRef: true,
        },
    },
    provide() {
        return {
            eventId: computed(() => this.eventId),
            blockFormData: computed(() => this.formData),
            libcalEndpoint: this.libcalEndpointProxy,
        }
    },
    async asyncData({ $graphql, params, $config }) {
        // console.log("In fetch start")
        const navData = await $graphql.default.request(HEADER_MAIN_MENU_ITEMS)

        const data = await $graphql.default.request(EVENT_DETAIL, {
            slug: params.slug,
        })

        return {
            page: data,
            allEvents: [],
            primaryItems: _get(navData, "primary", []),
            secondaryItems: _get(navData, "secondary", []),
            formData: {},
            formId: "",
            eventId: data && data.entry ? data.entry.libcalId : "",
            libcalEndpointProxy: $config.libcalProxy,
        }
    },

    computed: {
        promptName() {
            if (this.parseRegistrations) return "Register"
            else if (this.page.entry && this.page.entry.onlineJoinURL)
                return "More Details"
            return null
        },
        parseURL() {
            return this.parseRegistrations
                ? null
                : this.page.entry.onlineJoinURL
        },
        parseRegistration() {
            // console.log(
            //     "In parse registration:" + this.page.entry.requiresRegistration
            // )
            if (
                this.page.entry &&
                this.page.entry.requiresRegistration === "1" &&
                this.page.entry.onlineProvider !== "external"
            ) {
                return true
            }
            return false
        },
        associatedEvents() {
            return this.page.workshopOrEventSeries.event.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "image[0].image[0]", null),
                    startDate: _get(obj, "date[0].startTime", null),
                    endDate: _get(obj, "date[0].endTime", null),
                    category: _get(obj, "category.title", ""),
                }
            })
        },
    },
    async mounted() {
        // const formDataArray = await this.$scrapeApi.scrapeFormId("9383207")
        // console.log(
        //     "in mounted is registration required :" +
        //         this.page.entry.requiresRegistration
        // )
        // libcal events registration logic
        if (
            this.page.entry &&
            this.page.entry.requiresRegistration === "1" &&
            this.page.entry.onlineProvider !== "external"
        ) {
            // console.log("getting formid")
            const formDataArray = this.$scrapeApi.scrapeFormId(
                this.page.entry.libcalId
            ) //please check the fieldname in the query
            // console.log("is this a promise:" + formDataArray)
            formDataArray.then((response) => {
                // console.log(response)
                if (response && response.length == 1) {
                    this.formData = response[0]
                    // console.log(
                    //     "In mounted client side:" +
                    //         JSON.stringify(this.formData)
                    // )
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
.page.entry-event-detail {
    // height: 100vh;

    .sticky-header {
        top: 0;
        left: 0;
        width: 100%;
        position: fixed;
        transform: translateY(-100%);
        transition: transform 400ms ease-in-out;

        // States
        .has-scrolled-past-header & {
            transform: translateY(0);
        }
    }
}
</style>
