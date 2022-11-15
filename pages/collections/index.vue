<template>
    <main class="page page-collections">
        <banner-text
            class="banner-text"
            :category="page.type"
            :title="page.title"
            :text="page.text"
            :button-text="parsedButtonText"
            :to="parsedButtonTo"
        />

        <section-wrapper theme="divider">
            <divider-way-finder
                class="divider"
                color="about"
            />
        </section-wrapper>

        <section-wrapper>
            <section-staff-article-list
                :items="parsedCollectionsList"
                section-title="All Collections"
            />
        </section-wrapper>
    </main>
</template>

<script>
// Helpers
import _get from "lodash/get"

// GQL
import COLLECTIONS_LIST from "~/gql/queries/CollectionsList"

export default {
    async asyncData({ $graphql, route }) {
        // console.log("route: " + route.path)
        const data = await $graphql.default.request(COLLECTIONS_LIST, {})
        // console.log("data:" + data)
        return {
            page: data.entries,
        }
    },
    computed: {
        parsedCollectionsList() {
            // console.log("Entries: " + this.page.entries)
            return this.page.map((obj) => {
                return {
                    ...obj,
                    to: `/${obj.uri}`,
                    image: _get(obj, "heroImage[0].image[0]", null),
                    staffName: `${obj.fullName}`,
                    category: _get(obj, "articleCategories[0].title", null),
                }
            })
        },
        parsedButtonText() {
            return _get(this.page, "button[0].buttonText", "")
        },
        parsedButtonTo() {
            return _get(this.page, "button[0].buttonUrl", "")
        },
    },
}
</script>

<style lang="scss" scoped>
.page-collections {
    padding-left: 50px;
}
</style>
