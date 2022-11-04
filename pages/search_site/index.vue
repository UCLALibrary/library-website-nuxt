<template lang="html">
    <div class="page-search-site">
        <search-generic @search-ready="getSearchData" />
        <div class="meta">
            <section-wrapper
                v-for="(result, index) in page.hits.hits"
                :key="`SearchResultBlock${index}`"
                class="section-wrapper-block"
            >
                <search-result
                    :title="result._source.title"
                    :category="result._source.sectionHandle"
                    :summary="result._source.summary"
                    to="/"
                    class="search-result-item"
                />
                <divider-general class="divider-general" />
            </section-wrapper>
        </div>

        <section-wrapper>
            <divider-way-finder class="divider-way-finder" />
        </section-wrapper>
    </div>
</template>

<script>
// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $dataApi }) {
        // check if there is a url query, if there is then pass that to siteSearch
        let data = await $dataApi.siteSearch()
        return {
            page: data,
        }
    },

    methods: {
        async getSearchData(data) {
            this.$router.push({
                path: "/search_site",
                query: { q: data.text },
            })
            console.log(this.$router.query)

            const results = await this.$dataApi.siteSearch(data.text)
            // Need this to connect to the sitesearch so results persist in a url

            if (results && results.hits && results.hits.total.value > 0)
                this.page = results
        },
        parseResults(hits = []) {
            return hits.map((obj) => {
                return {
                    ...obj["_source"],
                    to: `${obj["_source"].to}`,
                    title: obj["_source"]["title"],
                    category: obj["_source"]["category"],
                    summary: obj["_source"]["summary"],
                }
            })
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
