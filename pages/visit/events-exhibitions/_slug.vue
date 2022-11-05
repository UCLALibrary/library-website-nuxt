<template lang="html">
    <section class="page-event-detail">
        <!-- this template will pick the section page component based on typehandle -->
        <nav-breadcrumb
            to="/visit/events-exhibitions"
            :title="page.title"
            parent-title="Exhibits & Upcoming Events"
        />

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
            :to="page.parseURL"
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
            eventId: computed(() => this.eventId),
            blockFormData: computed(() => this.formData),
            libcalEndpoint: this.libcalEndpointProxy,
        }
    },
    async asyncData({ $graphql, params, $config }) {
        console.log("In fetch start")
        const navData = await $graphql.default.request(HEADER_MAIN_MENU_ITEMS)

        const data = await $graphql.default.request(EVENT_DETAIL, {
            slug: params.slug,
        })

        return {
            page: _get(data, "entry", {}),
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
            return this.parseRegistrations ? "More Details" : null
        },
        parseURL() {
            return this.parseRegistrations ? null : this.page.onlineJoinURL
        },
        parseRegistration() {
            console.log(
                "In parse registration:" + this.page.requiresRegistration
            )
            if (
                this.page.requiresRegistration === "1" &&
                this.page.onlineProvider !== "external"
            ) {
                return true
            }
            return false
        },
    },
    async mounted() {
        // const formDataArray = await this.$scrapeApi.scrapeFormId("9383207")
        console.log(
            "in mounted is registration required :" +
                this.page.requiresRegistration
        )
        if (
            this.page.requiresRegistration === "1" &&
            this.page.onlineProvider !== "external"
        ) {
            console.log("getting formid")
            const formDataArray = this.$scrapeApi.scrapeFormId(
                this.page.libcalId
            ) //please check the fieldname in the query
            console.log("is this a promise:" + formDataArray)
            formDataArray.then((response) => {
                console.log(response)
                if (response && response.length == 1) {
                    this.formData = response[0]
                    console.log(
                        "In mounted client side:" +
                            JSON.stringify(this.formData)
                    )
                }
            })
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
