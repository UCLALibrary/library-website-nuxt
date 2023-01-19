<template lang="html">
    <main
        id="main"
        class="page page-event-detail"
    >
        <!-- EVENT DETAIL -->
        <div v-if="page.event">
            <nav-breadcrumb
                to="/visit/events-exhibitions"
                :title="page.event.title"
                parent-title="Events & Exhibitions"
            />

            <!-- <header-sticky
                class="sticky-header"
                :primary-items="primaryItems"
                :secondary-items="secondaryItems"
            /> -->

            <banner-text
                v-if="
                    page.event &&
                        (!page.event.image[0].image[0] ||
                            page.event.image[0].image[0].length == 0)
                "
                :title="page.event.title"
                :locations="page.event.associatedLocations"
                :start-date="page.event.startDateWithTime"
                :end-date="page.event.endDateWithTime"
                :category="page.event.eventType.title"
                :to="page.event.parseURL"
                :button-text="promptName"
                :register-event="parseRegistration"
                :section-handle="page.event.sectionHandle"
            />

            <section-wrapper
                v-if="page.event.image[0].image[0]"
                class="section-banner"
            >
                <banner-header
                    :image="page.event.image[0].image[0]"
                    :title="page.event.title"
                    :locations="page.event.associatedLocations"
                    :start-date="page.event.startDateWithTime"
                    :end-date="page.event.endDateWithTime"
                    :category="page.event.eventType.title"
                    :to="page.event.parseURL"
                    :align-right="true"
                    :prompt="promptName"
                    :register-event="parseRegistration"
                    :section-handle="page.event.sectionHandle"
                />
            </section-wrapper>

            <section-wrapper theme="divider">
                <divider-way-finder
                    v-if="page.event.image[0].image[0]"
                    color="visit"
                />
            </section-wrapper>

            <section-wrapper v-if="page.event || page.event.eventDescription">
                <rich-text
                    v-if="page.event.moreInformation"
                    :rich-text-content="page.event.moreInformation"
                />
                <divider-general v-if="page.event.moreInformation" />
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

        <!-- EVENT SERIES -->
        <div v-else-if="page.eventSeries">
            <nav-breadcrumb
                to="/visit/events-exhibitions"
                :title="page.eventSeries.title"
                parent-title="Events & Exhibitions"
            />

            <banner-text
                v-if="page.eventSeries && !page.eventSeries.image[0]"
                :title="page.eventSeries.title"
                :text="page.eventSeries.summary"
                :locations="page.eventSeries.associatedLocations"
                :start-date="page.eventSeries.startDate"
                :end-date="page.eventSeries.endDate"
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
                    category="Event Series"
                    :text="page.eventSeries.summary"
                    :start-date="page.eventSeries.startDate"
                    :end-date="page.eventSeries.endDate"
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

        <!-- EXHIBITION -->
        <div v-else>
            <nav-breadcrumb
                to="/visit/events-exhibitions"
                :title="page.exhibition.title"
                parent-title="Events & Exhibitions"
            />

            <banner-text
                v-if="page.exhibition && !page.exhibition.image[0]"
                :title="page.exhibition.title"
                :text="page.exhibition.summary"
                :locations="page.exhibition.associatedLocations"
                :to="parsedExhibitionBannerTo"
                :banner-text="parsedExhibitionBannerPrompt"
                :start-date="page.exhibition.startDate"
                :end-date="page.exhibition.endDate"
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
                    :start-date="page.exhibition.startDate"
                    :end-date="page.exhibition.endDate"
                    :prompt="parsedExhibitionBannerPrompt"
                    :to="parsedExhibitionBannerTo"
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
                v-if="page.exhibition.blocks.length > 0"
                theme="divider"
            >
                <divider-way-finder color="visit" />
            </section-wrapper>

            <section-wrapper
                v-if="associatedExhibitionEvents.length"
                section-title="Associated Events"
            >
                <section-teaser-list
                    v-if="associatedExhibitionEvents.length > 0"
                    :items="associatedExhibitionEvents"
                    class="section section-list"
                />
            </section-wrapper>

            <section-wrapper
                v-if="associatedExhibitionEvents.length > 0"
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

            <section-wrapper
                v-if="parsedAssociatedStaffMember.length > 0"
                theme="divider"
            >
                <divider-way-finder color="visit" />
            </section-wrapper>

            <section-wrapper :section-title="parsedAcknowledgementTitle">
                <rich-text
                    :rich-text-content="
                        page.exhibition.acknowledgements[0].acknowledgements
                    "
                />
            </section-wrapper>
        </div>
    </main>
</template>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

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
    async asyncData({
        $graphql,
        params,
        $config,
        $elasticsearchplugin,
        error,
    }) {
        // console.log("In fetch start")
        const navData = await $graphql.default.request(HEADER_MAIN_MENU_ITEMS)

        const data = await $graphql.default.request(EVENT_DETAIL, {
            slug: params.slug,
        })
        if (!data.event && !data.eventSeries && !data.exhibition) {
            error({ statusCode: 404, message: "Page not found" })
        }

        if (data && (data.event || data.exhibition || data.eventSeries)) {
            if (data.eventSeries) data.eventSeries.sectionHandle = "eventSeries"
            await $elasticsearchplugin.index(
                data.event || data.exhibition || data.eventSeries,
                params.slug
            )
        }

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
    head() {
        if (this.page) {
            if (this.page.event) {
                let title = this.page ? this.page.event.title : "... loading"
                let metaDescription = removeTags(
                    this.page.event.eventDescription
                )

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
            }
            if (this.page.eventSeries) {
                let title = this.page
                    ? this.page.eventSeries.title
                    : "... loading"
                let metaDescription = removeTags(this.page.eventSeries.summary)

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
            }
            if (this.page.exhibition) {
                let title = this.page
                    ? this.page.exhibition.title
                    : "... loading"
                let metaDescription = removeTags(this.page.exhibition.summary)

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
            }
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
                    startDate: _get(obj, "startDateWithTime", null),
                    endDate: _get(obj, "endDateWithTime", null),
                    category: _get(obj, "category[0].title", ""),
                }
            })
        },
        parsedExhibitionBannerPrompt() {
            return this.page.exhibition.buttonUrl.length
                ? this.page.exhibition.buttonUrl[0].buttonText
                : ""
        },
        parsedExhibitionBannerTo() {
            return this.page.exhibition.buttonUrl.length
                ? this.page.exhibition.buttonUrl[0].buttonUrl
                : ""
        },
        associatedExhibitionEvents() {
            return this.page.exhibition.exhibitsAndEvents.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "image[0].image[0]", null),
                    category: _get(obj, "category[0].title", ""),
                    startDate: _get(obj, "startDateWithTime", null),
                    endDate: _get(obj, "startDateWithTime", null),
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
        parsedAcknowledgementTitle() {
            return this.page.exhibition.acknowledgements[0]
                .displaySectionTitle === "true"
                ? this.page.exhibition.acknowledgements[0].titleGeneral
                : ""
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
