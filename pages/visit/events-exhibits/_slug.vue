<template lang="html">
    <section class="page-event-detail">
        <!-- this template will pick the section page component based on typehandle -->
        <nav-breadcrumb
            to="/visit/events-exhibit"
            :title="page.title"
            parent-title="Exhibits & Upcoming Events"
        />

        <!-- <p v-if="$fetchState.pending" />
        <p v-else-if="$fetchState.error">
            An error occurred :(
        </p> -->

        <header-sticky
            class="sticky-header"
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />

        <banner-text
            v-if="
                page &&
                    (!page.image[0].image[0] || page.image[0].image[0].length == 0)
            "
            :title="page.title"
            :locations="page.associatedLocations"
            :start-date="page.date.startTime"
            :category="page.eventType.title"
            :to="page.onlineJoinURL"
            :prompt="promptName"
            :register-event="parseRegistration"
            :date="page.date.startTime"
        />

        <!-- if theres an image -->
        <section-wrapper
            v-if="page.image[0].image[0]"
            class="section-banner"
        >
            <banner-header
                :image="page.image[0].image[0]"
                :title="page.title"
                :locations="page.associatedLocations"
                :start-date="page.date.startTime"
                :end-date="page.date.endTime"
                :category="page.eventType.title"
                :to="page.parseURL"
                :align-right="true"
                :prompt="promptName"
                :register-event="parseRegistration"
            />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder
                v-if="page.image[0].image[0]"
                color="visit"
            />
        </section-wrapper>

        <section-wrapper v-if="page || page.eventDescription">
            <rich-text :rich-text-content="page.eventDescription" />
        </section-wrapper>

        <section-wrapper theme="divider">
            <divider-way-finder color="visit" />
        </section-wrapper>

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
            eventId: "9383207",
            blockFormData: computed(() => this.formData),
            libcalEndpoint: this.libcalEndpointProxy,
        }
    },
    data() {
        return {
            allEvents: [],
            primaryItems: [],
            secondaryItems: [],
            formData: {},
            formId: "",
            eventId: "9383207",
            libcalEndpointProxy: this.$config.libcalProxy,
            page: {},
        }
    },
    async fetch() {
        console.log("In fetch start")
        const navData = await this.$graphql.default.request(
            HEADER_MAIN_MENU_ITEMS
        )
        this.primaryItems = _get(navData, "primary", [])
        this.secondaryItems = _get(navData, "secondary", [])

        const data = await this.$graphql.default.request(EVENT_DETAIL)
        this.page = _get(data, "entry", {})
    },
    computed: {
        parseRegistration() {
            if (
                this.page.requiresRegistration === true &&
                this.page.onlineProvider !== "external"
            ) {
                return true
            }
            return false
        },
        promptName() {
            return this.parseRegistrations ? "More Details" : null
        },
        parseURL() {
            return this.parseRegistrations ? null : this.page.onlineJoinURL
        },
    },
    async mounted() {
        // const formDataArray = await this.$scrapeApi.scrapeFormId("9383207")
        const formDataArray = this.$scrapeApi.scrapeFormId(this.page.libcalId) //please check the fieldname in the query
        console.log(formDataArray)
        if (formDataArray && formDataArray.length == 1) {
            this.formData = formDataArray[0]
            console.log(
                "In mounted client side:" + JSON.stringify(this.formData)
            )
        }
    },
}
</script>

<style lang="scss" scoped>
.page-event-detail {
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
