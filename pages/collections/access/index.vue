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
            <section-cards-with-illustrations
                class="section"
                :items="parsedAssociatedTopics"
                section-title="Associated Topics"
                to="/help/services-resources"
                button-text="All services & Resources"
                :is-horizontal="false"
            />
        </section-wrapper>
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
