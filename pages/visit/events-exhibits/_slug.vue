<template lang="html">
    <section class="page-event-detail">
        <!-- this template will pick the section page component based on typehandle -->
        <nav-breadcrumb
            v-if="allEvents[0]"
            :title="allEvents[0].title"
        />

        <masthead-secondary
            title="Exhibits & Upcoming Events"
            text="Browse upcoming remote events and online exhibits."
        >
            <!-- TODO Add SearchGenric here when complete -->
            <!-- search-generic
                search-type="about"
                class="generic-search"
            />-->
            <!-- :filters="searchFilters.filters"
                :view-modes="searchFilters.views"
                @view-mode-change="viewModeChanger" -->
        </masthead-secondary>

        <p v-if="$fetchState.pending" />
        <p v-else-if="$fetchState.error">
            An error occurred :(
        </p>
        <header-sticky
            class="sticky-header"
            :primary-items="primaryItems"
            :secondary-items="secondaryItems"
        />
        <banner-text
            v-if="formData"
            category="Event"
            title="Curabitur Tortor Pellentesque"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan, metus in aliquet venenatis, mi lectus placerat leo, congue gravida mi quam sit amet neque."
            button-text="Curabitur"
            :register-event="true"
        />

        <h3>Event formData here</h3>
        {{ formData }}
        <hr>
        <h3>Event detail here</h3>
        {{ allEvents }}

        <!-- <flexible-blocks
            v-if="page"
            class="flexible-content"
            :blocks="page.blocks"
        /> -->
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
// import startCase from "lodash/startcase"

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
    height: 400vh;

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
