<template lang="html">
    <section class="page-collections-access">
        <!-- this template will pick the section page component based on typehandle -->
        <nav-breadcrumb
            v-if="allEvents[0]"
            :title="allEvents[0].title"
        />

        <masthead-secondary
            :title="page.title"
            :text="page.summary"
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

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                class="section"
                :items="parsedSectionCards"
                section-title="Get Help With"
                section-summary="Need guidance on how to make the most of UCLA Libraries? Below are common areas for which we offer services, resources, workshops and more."
                to="/help/foo/bar"
                :is-horizontal="true"
            />
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                class="section"
                :items="parsedSectionCards"
                section-title="Get Help With"
                section-summary="Need guidance on how to make the most of UCLA Libraries? Below are common areas for which we offer services, resources, workshops and more."
                to="/help/foo/bar"
                :is-horizontal="true"
            />
        </section-wrapper>
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"
// import startCase from "lodash/startcase"

// GQL
import ACCESS_COLLECTIONS from "~/gql/queries/AccessCollections.gql"
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
            ACCESS_COLLECTIONS
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
