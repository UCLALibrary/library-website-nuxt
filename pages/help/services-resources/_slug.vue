<template lang="html">
    <main
        id="main"
        class="page page-service-detail"
    >
        <!-- ServiceOrResource Detail -->
        <div v-if="page.serviceOrResource">
            <nav-breadcrumb
                to="/help/services-resources"
                :title="page.serviceOrResource.title"
                parent-title="Services & Resources"
            />

            <banner-text
                v-if="
                    !page.serviceOrResource.heroImage ||
                        page.serviceOrResource.heroImage.length == 0 ||
                        !page.serviceOrResource.heroImage[0].image ||
                        page.serviceOrResource.heroImage[0].image.length == 0
                "
                class="banner-text"
                :category="page.serviceOrResource.type"
                :title="page.serviceOrResource.title"
                :text="page.serviceOrResource.text"
                :button-text="parsedButtonText"
                :to="parsedButtonTo"
            />

            <section-wrapper
                v-if="
                    page.serviceOrResource.heroImage &&
                        page.serviceOrResource.heroImage.length == 1
                "
                class="section-banner"
            >
                <banner-header
                    :image="page.serviceOrResource.heroImage[0].image[0]"
                    :category="page.serviceOrResource.type"
                    :title="page.serviceOrResource.title"
                    :text="page.serviceOrResource.text"
                    :to="parsedButtonTo"
                    :prompt="parsedButtonText"
                />

                <section-wrapper theme="divider">
                    <divider-way-finder color="help" />
                </section-wrapper>
            </section-wrapper>

            <flexible-blocks
                class="content"
                :blocks="page.serviceOrResource.blocks"
            />

            <section-wrapper
                v-if="parsedAssociatedTopics.length"
                theme="divider"
            >
                <divider-way-finder
                    class="divider-way-finder"
                    color="help"
                />
            </section-wrapper>

            <section-wrapper>
                <section-cards-with-illustrations
                    v-if="parsedAssociatedTopics.length"
                    class="section-cards"
                    :items="parsedAssociatedTopics"
                    section-title="Associated Topics"
                    button-text="All Services and Resources"
                    to="/help/services-resources"
                />
            </section-wrapper>

            <section-wrapper theme="divider">
                <divider-way-finder
                    class="divider-way-finder"
                    color="help"
                />
            </section-wrapper>

            <section-wrapper>
                <block-call-to-action
                    class="block-call-to-action"
                    :is-global="true"
                />
            </section-wrapper>
        </div>

        <!-- WORKSHOP SERIES -->
        <div v-else>
            <nav-breadcrumb
                to="/help/services-resources"
                :title="page.workshopSeries.title"
                parent-title="Services & Resources"
            />

            <banner-text
                v-if="page.workshopSeries && !page.workshopSeries.image[0]"
                :title="page.workshopSeries.title"
                :text="page.workshopSeries.summary"
                :locations="page.workshopSeries.associatedLocations"
                :start-date="page.workshopSeries.startDate"
                :end-date="page.workshopSeries.endDate"
                category="Workshop Series"
            />

            <section-wrapper
                v-if="page.workshopSeries.image[0]"
                class="section-banner"
            >
                <banner-header
                    :image="page.workshopSeries.image[0].image[0]"
                    :title="page.workshopSeries.title"
                    :locations="page.workshopSeries.associatedLocations"
                    :start-date="page.workshopSeries.startDate"
                    :end-date="page.workshopSeries.endDate"
                    category="Workshop Series"
                    :text="page.workshopSeries.summary"
                    :align-right="true"
                />

                <section-wrapper theme="divider">
                    <divider-way-finder color="help" />
                </section-wrapper>
            </section-wrapper>

            <flexible-blocks
                v-if="page.workshopSeries.blocks.length > 0"
                class="content"
                :blocks="page.workshopSeries.blocks"
            />
            <section-wrapper
                v-if="page.workshopSeries.blocks.length > 0"
                theme="divider"
            >
                <divider-way-finder
                    class="divider-way-finder"
                    color="help"
                />
            </section-wrapper>

            <section-wrapper
                v-if="associatedEvents.length"
                section-title="Event(s) in the Series"
            >
                <divider-general />
                <section-teaser-list
                    :items="associatedEvents"
                    class="section section-list"
                />
            </section-wrapper>

            <section-wrapper
                v-if="page.workshopSeries.event.length > 0"
                theme="divider"
            >
                <divider-way-finder
                    class="divider-way-finder"
                    color="help"
                />
            </section-wrapper>

            <section-wrapper>
                <section-cards-with-illustrations
                    v-if="page.workshopSeries.associatedTopics.length > 0"
                    class="section-cards"
                    :items="page.workshopSeries.associatedTopics"
                    section-title="Associated Topics"
                />
            </section-wrapper>
            <section-wrapper
                v-if="parsedAssociatedSeries.length"
                theme="divider"
            >
                <divider-way-finder color="help" />
            </section-wrapper>

            <section-wrapper
                v-if="parsedAssociatedSeries.length"
                section-title="Related Series"
            >
                <section-teaser-list :items="parsedAssociatedSeries" />
            </section-wrapper>
            <section-wrapper theme="divider">
                <divider-way-finder
                    class="divider-way-finder"
                    color="help"
                />
            </section-wrapper>
            <section-wrapper>
                <block-call-to-action
                    class="block-call-to-action"
                    :is-global="true"
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
import SERVICE_OR_RESOURCE_OR_WORKSHOPSERIES_DETAIL from "~/gql/queries/ServiceOrResourceOrWorkshopDetail"
export default {
    async asyncData({ $graphql, params, $elasticsearchplugin, error }) {
        // Do not remove testing live preview
        console.log(
            "fetching graphql data for Service or Resource detail from Craft for live preview"
        )
        const data = await $graphql.default.request(
            SERVICE_OR_RESOURCE_OR_WORKSHOPSERIES_DETAIL,
            {
                slug: params.slug,
            }
        )
        if (!data.serviceOrResource && !data.workshopSeries) {
            error({ statusCode: 404, message: "Page not found" })
        }
        if (data) {
            console.log(
                "Is it workshop or service or resource Indexing slug: " +
                    params.slug
            )
            if (data.workshopSeries) {
                data.workshopSeries.sectionHandle = "workshopSeries"
                console.log(
                    "what is workshopseries sectionHandle in ES? " +
                        data.workshopSeries.sectionHandle
                )
            }
            await $elasticsearchplugin.index(
                data.serviceOrResource || data.workshopSeries,
                params.slug
            )
        }
        // console.log("Data fetched: " + JSON.stringify(data))
        return {
            page: data,
        }
    },
    head() {
        if (this.page) {
            if (this.page.serviceOrResource) {
                let title = this.page
                    ? this.page.serviceOrResource.title
                    : "... loading"
                let metaDescription = removeTags(
                    this.page.serviceOrResource.text
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
            if (this.page.workshopSeries) {
                let title = this.page
                    ? this.page.workshopSeries.title
                    : "... loading"
                let metaDescription = removeTags(
                    this.page.workshopSeries.summary
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
        }
    },
    computed: {
        parsedAssociatedTopics() {
            if (!this.page.serviceOrResource.associatedTopics) return []
            return this.page.serviceOrResource.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
                }
            })
        },
        parsedButtonText() {
            return _get(this.page.serviceOrResource, "button[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page.serviceOrResource, "button[0].buttonUrl", "")
        },
        associatedEvents() {
            return this.page.workshopSeries.event.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "image[0].image[0]", null),
                    startDate: _get(obj, "startDateWithTime", null),
                    endDate: _get(obj, "endDateWithTime", null),
                    category: _get(obj, "category.title", ""),
                }
            })
        },
        parsedAssociatedSeries() {
            return this.page.associatedSeries.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                    image: _get(obj, "image[0].image[0]", null),
                    category: "Event Series",
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-service-detail {
    .more-info {
        @include visually-hidden;
    }
}
</style>
