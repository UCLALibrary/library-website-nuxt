<template lang="html">
    <section class="page-event-detail">
        <!-- this template will pick the section page component based on typehandle -->
        <nav-breadcrumb
            :title="page.title"
            :to="page.to"
            :parent-title="page.sectionHandle"
        />

        <banner-text
            v-if="page && (!page.heroImage || page.heroImage.length == 0)"
            class="banner-text"
            :category="page.format"
            :title="page.title"
            :text="page.summary"
            :locations="page.locations"
            :address="parsedAddress"
            :email="page.email"
            :phone="page.phoneNumber"
            :address-link="addressLink"
            :staff-directory-link="parsedStaffDirectory"
        />

        <!-- if theres an image -->
        <section-wrapper
            v-if="page.image[0].image[0]"
            class="section-banner"
        >
            <banner-header
                :image="page.image[0].image[0]"
                :title="page.title"
                :align-right="false"
                :text="page.summary"
                :address="parsedAddress"
                :email="page.email"
                :phone="page.phoneNumber"
                :staff-directory-link="parsedStaffDirectory"
                :address-link="addressLink"
            />
        </section-wrapper>

        <!-- <p v-if="$fetchState.pending" /> -->
        <!-- <p v-else-if="$fetchState.error">
            An error occurred :(
        </p> -->
        
        <section-wrapper theme="divider">
            <divider-way-finder
                v-if="page.image[0].image[0]"
                color="visit"
            />
        </section-wrapper>

        <section-wrapper
            v-if="page || page.eventDescription"
        >
            <rich-text
                :rich-text-content="page.eventDescription"
            />
        </section-wrapper>

        <!-- <section-wrapper theme="divider">
            <divider-general />
        </section-wrapper> -->
        

        <section-wrapper 
            theme="gray"
            section-title="More Upcoming Events"
        >
            <!-- TODO List of events go here -->
            <section-teaser-list
                :items="listEvents"
                class="section section-list"
            />
        </section-wrapper>


        <!-- <section-wrapper theme="divider">
            <divider-general />
        </section-wrapper> -->

        <!-- <section-wrapper> -->
        <block-call-to-action
            class="section block-call-to-action"
            svg-name="svg-call-to-action-mail"
            to="/contact-us"
            name="Contact Us"
            title="Not sure who you should reach out to?"
            text="Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        />
        <!-- </section-wrapper> -->
        Event detail here
        {{ allEvents }}
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
// GQL
import EVENT_DETAIL from "~/gql/queries/EventDetail.gql"

// GQL
import HEADER_MAIN_MENU_ITEMS from "~/gql/queries/HeaderMainMenuItems"
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
        }
    },
    async fetch() {
        console.log("In fetch start")
        const navData = await this.$graphql.default.request(
            HEADER_MAIN_MENU_ITEMS
        )
        this.primaryItems = _get(navData, "primary", [])
        this.secondaryItems = _get(navData, "secondary", [])
        /* const formId = await $scrapeApi.scrapeFormId("9383207")
        const formData = await $axios.$get(`api/1.1/events/form/${formId}`)

        console.log("has  data from scrapeid function: " + formData)*/
        /* if (fetchData && fetchData.length == 1) {
                this.formData = fetchData[0]
                console.log("In mounted client side:" + this.formData)
            }*/

        // console.log('formId' + this.formId)
        let events = await this.$axios.$get("1.1/events/9383207")
        console.log("events: " + events)
        this.allEvents = [...events.events]
        // console.log("params " + this.$route.params.slug)
        // TODO get event data from Craft
        // return {
        //     page: {},
        // }

        // console.log(this.formData.events)
        // _get(data, "entry", {}),
    },

    async mounted() {
        const formDataArray = await this.$scrapeApi.scrapeFormId("9383207")
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
