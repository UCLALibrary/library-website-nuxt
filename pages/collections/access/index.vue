<template lang="html">
    <main
        id="main"
        class="page page-collections-access"
    >
        <nav-breadcrumb
            to="/collections"
            :title="page.title"
            parent-title="Collections"
        />

        <masthead-secondary
            :title="page.title"
            :text="page.text"
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

        <!-- TODO add divider once SearchGeneric is implemented -->
        <!-- <section-wrapper theme="divider">
            <divider-way-finder class="search-margin" />
        </section-wrapper> -->

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
    </main>
</template>
<router>
  {
    alias: '/listing-collections/access',
  }
</router>

<script>
// HELPERS
import _get from "lodash/get"
import removeTags from "~/utils/removeTags"

// GQL
import ACCESS_COLLECTIONS from "~/gql/queries/CollectionsAccessList.gql"

export default {
    async asyncData({ $graphql }) {
        const data = await $graphql.default.request(ACCESS_COLLECTIONS)
        data.entry.accessCollections.forEach((element) => {
            element.to = element.uri ? element.uri : element.externalResourceUrl
            element.category =
                element.workshopOrEventSeriesType === "help/services-resources"
                    ? "workshop"
                    : element.serviceOrResourceType
                        ? element.serviceOrResourceType
                        : element.typeHandle === "externalResource"
                            ? "resource"
                            : element.typeHandle
        })
        return {
            page: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        let metaDescription = removeTags(this.page.text)

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
    },
    computed: {
        parsedAccessCollections() {
            return this.page.accessCollections.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.uri}`,
                }
            })
        },
        parsedAssociatedTopics() {
            return this.page.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: obj.externalResourceUrl
                        ? obj.externalResourceUrl
                        : `/${obj.to}`,
                }
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.page-collections-access {
}
</style>
