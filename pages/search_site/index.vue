<template lang="html">
    <div>
        <search-generic @search-ready="getSearchData" />
        <section-wrapper
            v-for="(result, index) in page.hits.hits"
            :key="`SearchResultBlock${index}`"
        >
            <search-result
                :title="result._source.title"
                :category="result._source.sectionHandle"
                :summary="result._source.summary"
                to="/"
            />
            <divider-general />
        </section-wrapper>

        <section-wrapper>
            <divider-way-finder />
        </section-wrapper>
    </div>
</template>

<script>
// Helpers
import _get from "lodash/get"

export default {
    async asyncData({ $dataApi }) {
        let data = await $dataApi.siteSearch()
        return {
            page: data,
        }
    },
    methods: {
        async getSearchData(data) {
            const results = await this.$dataApi.siteSearch(data.text)
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

<style lang="scss" scoped></style>
