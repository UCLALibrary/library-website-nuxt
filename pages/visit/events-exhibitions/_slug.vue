<template lang="html">
    <section class="page-event-detail">
        <!-- Event Detail -->
        <div v-if="page.event">
            <nav-breadcrumb
                to="/visit/events-exhibitions"
                :title="page.event.title"
                parent-title="Exhibits & Upcoming Events"
            />

            <header-sticky
                class="sticky-header"
                :primary-items="primaryItems"
                :secondary-items="secondaryItems"
            />

            <banner-text
                v-if="
                    page.event &&
                        (!page.event.image[0].image[0] ||
                            page.event.image[0].image[0].length == 0)
                "
                :title="page.event.title"
                :locations="page.event.associatedLocations"
                :start-date="page.event.date[0].startTime"
                :category="page.event.eventType.title"
                :to="page.event.parseURL"
                :button-text="promptName"
                :register-event="parseRegistration"
                :end-date="page.event.date[0].endTime"
            />

            <section-wrapper
                v-if="page.event.image[0].image[0]"
                class="section-banner"
            >
                <banner-header
                    :image="page.event.image[0].image[0]"
                    :title="page.event.title"
                    :locations="page.event.associatedLocations"
                    :start-date="page.event.date[0].startTime"
                    :end-date="page.event.date[0].endTime"
                    :category="page.event.eventType.title"
                    :to="page.event.parseURL"
                    :align-right="true"
                    :prompt="promptName"
                    :register-event="parseRegistration"
                />
            </section-wrapper>

            <section-wrapper theme="divider">
                <divider-way-finder
                    v-if="page.event.image[0].image[0]"
                    color="visit"
                />
            </section-wrapper>

            <section-wrapper v-if="page.event || page.event.eventDescription">
                <rich-text :rich-text-content="page.event.eventDescription" />
            </section-wrapper>

            <section-wrapper theme="divider">
                <divider-way-finder color="visit" />
            </section-wrapper>
            <block-call-to-action
                class="section block-call-to-action"
                :is-global="true"
            />
        </div>
        <!-- Event Series -->
        <div v-else-if="page.eventSeries">
            <nav-breadcrumb
                to="/visit/events-exhibitions"
                :title="page.eventSeries.title"
                parent-title="Exhibits & Upcoming Events"
            />
            <banner-text
                v-if="page.eventSeries && !page.eventSeries.image[0]"
                :title="page.eventSeries.title"
                :text="page.eventSeries.summary"
                :locations="page.eventSeries.associatedLocations"
                :date="page.eventSeries.date[0].startDate"
                category="Event Series"
            />

            <section-wrapper
                v-if="page.eventSeries.image[0]"
                class="section-banner"
            >
                <banner-header
                    :image="page.eventSeries.image[0].image[0]"
                    :title="page.eventSeries.title"
                    :locations="page.eventSeries.associatedLocations"
                    :start-date="page.eventSeries.date[0].startDate"
                    category="Event Series"
                    :text="page.eventSeries.summary"
                    :end-date="page.eventSeries.date[0].endDate"
                    :align-right="true"
                />
            </section-wrapper>
            <section-wrapper theme="divider">
                <divider-way-finder
                    v-if="page.eventSeries.image"
                    color="visit"
                />
            </section-wrapper>

            <flexible-blocks
                class="content"
                :blocks="page.eventSeries.blocks"
            />
            <section-wrapper
                v-if="page.eventSeries.blocks.length > 0"
                theme="divider"
            >
                <divider-way-finder
                    class="divider-way-finder"
                    color="visit"
                />
            </section-wrapper>
            <section-wrapper>
                <h3 class="section-title">
                    Events in this Series
                </h3>
                <divider-general />
                <section-teaser-list
                    v-if="associatedEvents"
                    :items="associatedEvents"
                    class="section section-list"
                />
            </section-wrapper>
            <section-wrapper
                v-if="page.eventSeries.associatedTopics.length > 0"
                theme="divider"
            >
                <divider-way-finder
                    class="divider-way-finder"
                    color="visit"
                />
            </section-wrapper>
            <section-wrapper>
                <section-cards-with-illustrations
                    v-if="page.eventSeries.associatedTopics.length > 0"
                    class="section-cards"
                    :items="page.eventSeries.associatedTopics"
                    section-title="Associated Topics"
                />
            </section-wrapper>
            <block-call-to-action
                class="section block-call-to-action"
                :is-global="true"
            />
        </div>
        <!-- Exhibition -->
        <div v-else>
            {{ page.exhibition }}
            <nav-breadcrumb
                to="/visit/events-exhibitions"
                :title="page.exhibition.title"
                parent-title="Exhibits & Upcoming Events"
            />
            <banner-text
                v-if="page.exhibition && !page.exhibition.image[0]"
                :title="page.exhibition.title"
                :text="page.exhibition.summary"
                :locations="page.exhibition.associatedLocations"
                category="Event Series"
            />

            <section-wrapper
                v-if="page.exhibition.image[0]"
                class="section-banner"
            >
                <banner-header
                    :image="page.exhibition.image[0].image[0]"
                    :title="page.exhibition.title"
                    :locations="page.exhibition.associatedLocations"
                    category="Exhibition"
                    :text="page.exhibition.summary"
                    :align-right="true"
                />
            </section-wrapper>
            <section-wrapper theme="divider">
                <divider-way-finder color="visit" />
            </section-wrapper>
            <flexible-blocks
                class="content"
                :blocks="page.exhibition.blocks"
            />
            <section-wrapper
                v-if="page.exhibition.blocks"
                theme="divider"
            >
                <divider-way-finder color="visit" />
            </section-wrapper>
            <section-wrapper section-title="Associated Events">
                <section-teaser-list
                    v-if="associatedExhibitionEvents"
                    :items="associatedExhibitionEvents"
                    class="section section-list"
                />
            </section-wrapper>
            <section-wrapper
                v-if="page.exhibition.blocks"
                theme="divider"
            >
                <divider-way-finder color="visit" />
            </section-wrapper>
            <section-wrapper
                v-if="parsedAssociatedStaffMember.length > 0"
                section-title="Contact a Subject Specialist"
            >
                <section-staff-list :items="parsedAssociatedStaffMember" />
            </section-wrapper>
        </div>
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
            eventId: data && data.event ? data.event.libcalId : "",
            libcalEndpointProxy: $config.libcalProxy,
        }
    },

    computed: {
        promptName() {
            if (this.parseRegistrations) return "Register"
            else if (this.page.event && this.page.event.onlineJoinURL)
                return "More Details"
            return null
        },
        parseURL() {
            return this.parseRegistrations
                ? null
                : this.page.event.onlineJoinURL
        },
        parseRegistration() {
            // console.log(
            //     "In parse registration:" + this.page.event.requiresRegistration
            // )
            if (
                this.page.event &&
                this.page.event.requiresRegistration === "1" &&
                this.page.event.onlineProvider !== "external"
            ) {
                return true
            }
            return false
        },
        associatedEvents() {
            return this.page.eventSeries.event.map((obj) => {
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
        associatedExhibitionEvents() {
            return this.page.exhibition.exhibitsAndEvents.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "image[0].image[0]", null),
                    category: _get(obj, "category.title", ""),
                }
            })
        },
        parsedAssociatedStaffMember() {
            return this.page.exhibition.associatedStaffMember.map((obj) => {
                return {
                    ...obj,
                    to: `/about/staff/${obj.to}`,
                    image: _get(obj, "image[0]", null),
                    staffName: `${obj.nameFirst} ${obj.nameLast}`,
                }
            })
        },
    },
    async mounted() {
        // const formDataArray = await this.$scrapeApi.scrapeFormId("9383207")
        // console.log(
        //     "in mounted is registration required :" +
        //         this.page.event.requiresRegistration
        // )
        // libcal events registration logic
        if (
            this.page.event &&
            this.page.event.requiresRegistration === "1" &&
            this.page.event.onlineProvider !== "external"
        ) {
            // console.log("getting formid")
            const formDataArray = this.$scrapeApi.scrapeFormId(
                this.page.event.libcalId
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
    .section-title {
        @include step-3;
        color: var(--color-primary-blue-03);
        margin-bottom: var(--space-m);
    }
}
</style>
