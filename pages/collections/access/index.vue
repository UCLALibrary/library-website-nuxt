<template lang="html">
    <section class="page-collections-access">
        <nav-breadcrumb
            to="/collections"
            :title="page.title"
            parent-title="Collections"
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

<<<<<<< HEAD
=======
        <banner-text
            v-if="!page.heroImage || page.heroImage.length == 0"
            class="banner-text"
            category="Library News"
            :title="page.title"
            :text="page.text"
            :byline="parsedBylineBannerText"
            :locations="page.locations"
        />

>>>>>>> 16e5842 (feat: add more components)
        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                class="section"
                :items="parsedAccessCollections"
                :is-horizontal="true"
            />
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <section-wrapper>
<<<<<<< HEAD
            <section-cards-with-illustrations
                class="section"
                :items="parsedAssociatedTopics"
                section-title="Associated Topics"
                to="/help/services-resources"
                button-text="All services & Resources"
                :is-horizontal="false"
            />
=======
            <section-wrapper>
                <!-- <banner-featured
                    class="banner banner-about"
                    :image="bannerAbout.image"
                    :to="bannerAbout.to"
                    :title="bannerAbout.title"
                    :category="bannerAbout.category"
                    :breadcrumb="bannerAbout.breadcrumb"
                    :start-date="bannerVisit.startDate"
                    :end-date="bannerVisit.endDate"
                    :prompt="bannerAbout.prompt"
                    :ratio="bannerAbout.ratio"
                    :locations="bannerAbout.locations"
                />
                <block-highlight
                    :image="image"
                    :to="to"
                    :category="category"
                    :title="title"
                    :start-date="startDate"
                    :end-date="endDate"
                    :text="text"
                    :has-triangle="true"
                    :is-vertical="true"
                    :image-aspect-ratio="60"
                    :locations="locations"
                /> -->
            </section-wrapper>
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
>>>>>>> 16e5842 (feat: add more components)
        </section-wrapper>

        <!-- cards with images -->
        <!-- <flexible-card-with-image
            :block="block"
        /> -->

        <section-wrapper>
            <divider-way-finder class="divider divider-way-finder" />
        </section-wrapper>

        <flexible-blocks
            v-if="page"
            class="flexible-content"
            :blocks="page.blocks"
        />
    </section>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import ACCESS_COLLECTIONS from "~/gql/queries/CollectionsAccessList.gql"

export default {
    data() {
        return {
            allEvents: [],
            primaryItems: [],
            secondaryItems: [],
            formData: {},
            formId: "",
            eventId: "9383207",
            libcalEndpointProxy: this.$config.libcalProxy,
            page: {}
        }
    },
    async fetch() {
        const data = await this.$graphql.default.request(ACCESS_COLLECTIONS)

        data.entry.accessCollections.forEach(element => {
            element.to = element.uri ? element.uri : element.externalResourceUrl

            element.category = 
                (element.workshopOrEventSeriesType === "help/services-resources") ? "workshop":
                    element.serviceOrResourceType ? element.serviceOrResourceType :
                        (element.typeHandle === "externalResource") ? "external resource":
                            element.typeHandle
        })
        this.page = _get(data, "entry", {})
    },
    computed: {
        parsedAccessCollections(){
            return this.page.accessCollections.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
                }
            })
        },
        parsedAssociatedTopics(){
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.to}`,
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page-collections-access {

}
</style>
