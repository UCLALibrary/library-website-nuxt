<template lang="html">
    <div>
        <search-generic @search-ready="getSearchData" />
        <section-wrapper
            v-for="(result, index) in searchResults"
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
    methods: {
        async getSearchData(data) {
            // console.log("from search-generic: " + JSON.stringify(data.text))
            const results = await this.$dataApi.siteSearch(data.text)
            // console.log(JSON.stringify(results))
            const searchJson = JSON.stringify(results)
            const searchObject = JSON.parse(searchJson)
            console.log(searchObject.hits.hits)
            return { searchResults: _get(searchObject, "hits.hits", []) }
        },
    },
}
</script>

<style lang="scss" scoped></style>
