<template lang="html">
    <main class="page-collections-access">
        <nav-breadcrumb
            to="/collections"
            title="Explore Featured Collections"
            parent-title="Collections"
        />

        <masthead-secondary
            :title="explore.title"
            :text="explore.summary"
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
            <divider-way-finder 
                class="divider-way-finder"
                color="default"
            />
        </section-wrapper>

        <section-wrapper>
            <section-teaser-card
                :items="parsedCollectionList"
            />

            <!-- PAGINATION -->
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder 
                class="divider-way-finder"
                color="default"
            />
        </section-wrapper>

        <section-wrapper>
            <section-cards-with-illustrations
                class="section"
                :items="parsedAssociatedTopics"
                button-text="All services and resources"
                to="/help/services-resources"
                section-title="Associated Topics"
            />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import COLLECTIONS_EXPLORE_LIST from "~/gql/queries/CollectionsExploreList.gql"

export default {
    async asyncData({ $graphql, route }) {
        const data = await $graphql.default.request(COLLECTIONS_EXPLORE_LIST, {})

        // console.log("data:" + data)
        return {
            page: _get(data, "entries", {}),
            explore: _get(data, "entry", {}),
        }
    },
    head() {
        let title = this.page ? this.page.title : "... loading"
        return {
            title: title,
        }
    },
    computed: {
        parsedPhysicalDigital() {
            return this.page.physicalDigital.length == 1 ?
                this.page.physicalDigital[0] :
                `${this.page.physicalDigital[0]} & ${this.page.physicalDigital[1]}`
        },
        parsedCollectionList() {
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `${obj.uri}`,
                    image: _get(obj, "heroImage[0]image[0]", null),
                    category: obj.category.join(","),
                    title: _get(obj, "title", ""),
                    text: _get(obj, "text", "")
                }
            })
        },
        parsedAssociatedTopics(){
            return this.explore.associatedTopics.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.to}`,
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.page-collections-access {
    // .section {
    //     max-width: var(--unit-content-width);
    //     margin: 80px auto;
    // }

}
</style>
