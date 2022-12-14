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
            <!--h4 style="margin: 30px 400px">
                <br>
                Total Value
                {{ page && page.hits && page.hits.total.value }}
                <br>
                No of current hits
                {{ page && page.hits && page.hits.hits.length }}
            </h4-->

            <div
                v-if="page && page.hits && page.hits.hits.length > 0"
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
                        :summary="result._source.summary || result._source.text"
                        :to="`/${result._source.uri}`"
                        class="search-result-item"
                    />
                    <divider-general class="divider-general" />
                </section-wrapper>
                <section-wrapper v-if="page.hits.total.value > 10">
                    <section-pagination
                        :previous-to="parsePrev"
                        :next-to="parseNext"
                    />
                </section-wrapper>
            </div>
            <div v-else>
                <rich-text class="error-text">
                    <h1>Search for “{{ $route.query.q }}” not found.</h1>
                    <p>
                        We can’t find the page you are looking for, but we're
                        here to help. Try these regularly visited links or one
                        of the Additional Search Tools below.
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://library.ucla.edu"
                            >UCLA Library Home</a>
                        </li>
                        <li>
                            <a
                                href="https://www.library.ucla.edu/research-teaching-support/research-help"
                            >Research Help</a>
                        </li>
                        <li>
                            <a
                                href="/help/services-resources/ask-us"
                            >Ask a Librarian</a>
                        </li>
                        <li>
                            <a
                                href="https://www.library.ucla.edu/use/access-privileges/disability-resources"
                            >Accessibility Resources</a>
                        </li>
                    </ul>
                </rich-text>
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
            from: 0,
            previous: false,
            next: false,
            prevFrom: 0,
            nextFrom: 0,
            size: 10,
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
                this.page = await this.$dataApi.siteSearch(
                    this.$route.query.q,
                    this.$route.query.from || this.from
                )
                if (
                    this.page &&
                    this.page.hits &&
                    this.page.hits.total.value > 0
                ) {
                    console.log("search success")
                    // This is pagination logic
                    this.from = Number(this.$route.query.from || 0)
                    console.log("from 1: " + this.from)
                    if (this.from + this.size >= this.page.hits.total.value)
                        this.next = false
                    else this.next = true

                    if (this.from == 0) this.previous = false
                    else this.previous = true

                    if (this.next) this.nextFrom = this.from + this.size
                    if (this.previous) this.prevFrom = this.from - this.size
                    console.log("what is start now:" + this.from)
                    // Pagination logic ends
                } else {
                    this.page = {}
                    this.from = 0
                    this.previous = false
                    this.next = false
                }
                this.searchGenericQuery = {
                    queryText: this.$route.query.q || "",
                }
            } else {
                this.page = {}
            }
            console.log("Search Response: " + JSON.stringify(this.page))
        } catch (e) {
            throw new Error("Some Error with ES search " + e)
        }
    },
    computed: {
        parsePrev() {
            if (this.previous)
                return `${this.$route.path}?q=${this.$route.query.q}&from=${this.prevFrom}`
            return ""
        },
        parseNext() {
            if (this.next)
                return `${this.$route.path}?q=${this.$route.query.q}&from=${this.nextFrom}`
            return ""
        },
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
