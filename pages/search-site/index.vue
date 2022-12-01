<template lang="html">
    <main
        id="main"
        class="page page-search-site"
    >
        <masthead-secondary title="Search Results" />

        <search-generic
            :search-generic-query="searchGenericQuery"
            @search-ready="getSearchData"
        />

        <div v-if="$fetchState.pending">
            <p>.....Its Loading</p>
        </div>

        <div v-else-if="$fetchState.error">
            <p>There is an error</p>
        </div>

        <div v-else>
            <h4 style="margin: 30px 400px">
                <br>
                No of hits
                {{ page && page.hits && page.hits.hits.length }}
            </h4>

            <div
                v-if="page && page.hits"
                class="meta"
            >
                <section-wrapper
                    v-for="(result, index) in page.hits.hits"
                    :key="`SearchResultBlock${index}`"
                    class="section-wrapper-block"
                >
                    <search-result
                        :title="result._source.title"
                        :category="result._source.sectionHandle"
                        :summary="result._source.summary"
                        :to="`/${result._source.uri}`"
                        class="search-result-item"
                    />
                    <divider-general class="divider-general" />
                </section-wrapper>
            </div>

            <section-wrapper>
                <divider-way-finder class="divider-way-finder" />
            </section-wrapper>

            <section-wrapper>
                <section-cards-with-illustrations
                    class="section-cards"
                    :items="searchAdditionalResources"
                    section-title="Additional Search Tools"
                />
            </section-wrapper>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            page: {},
            searchGenericQuery: {
                queryText: this.$route.query.q || "",
            },
        }
    },
    fetchOnServer: false,
    // multiple components can return the same `fetchKey` and Nuxt will track them both separately
    fetchKey: "search-site",
    async fetch() {
        // check if there is a url query, if there is then pass that to siteSearch
        // let data = await $dataApi.siteSearch() // using mounted and will fetch ES data in mounted below
        this.page = {}
        console.log("In fetch start")
        try {
            if (this.$route.query.q && this.$route.query.q !== "") {
                console.log("in router query in asyc data")
                this.page = await this.$dataApi.siteSearch(this.$route.query.q)
                this.searchGenericQuery = {
                    queryText: this.$route.query.q || "",
                }
            } else {
                this.page = await this.$dataApi.siteSearch()
            }
            console.log("Search Response: " + JSON.stringify(this.page))
        } catch (e) {
            throw new Error("Some Error with ES search " + e)
        }
    },
    computed: {
        searchAdditionalResources() {
            return [
                {
                    iconName: "illustration-book-binding",
                    to: "/help/foo/bar/",
                    title: "UC Library Search",
                    text: "Litora torquent per conubia nostra, per inceptos himenaeos.",
                    isHorizontal: false,
                },
                {
                    iconName: "illustration-find-space",
                    to: "/visit/foo/baz/",
                    title: "A-Z Databases",
                    text: "Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem.",
                    isHorizontal: false,
                },
                {
                    iconName: "illustration-digitized-resources",
                    to: "/about/foo/fred/",
                    title: "Research Guides",
                    text: "Suspendisse in justo eu magna luctus suscipit libero eget ante.",
                    isHorizontal: false,
                },
            ]
        },
    },
    watch: {
        "$route.query": "$fetch",
        "$route.query.q"(newValue) {
            console.log("watching querytEXT:" + newValue)
        },
    },
    async mounted() {
        console.log("In mounted")
    },

    methods: {
        async getSearchData(data) {
            try {
                this.$router.push({
                    path: this.$route.path,
                    query: { q: data.text },
                })
                this.$router.query = { q: data.text }
                console.log(
                    "getsearchdata called: " +
                        JSON.stringify(this.$router.query) +
                        "\n" +
                        data.text +
                        "\n pages: " +
                        JSON.stringify(this.page)
                )
            } catch (e) {
                throw new Error("ES error maybe: " + e)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.section-wrapper-block:last-child {
    .divider-general {
        display: none;
    }
}
</style>
