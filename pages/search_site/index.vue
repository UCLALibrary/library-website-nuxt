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
    async asyncData({ $dataApi, data }) {
        // need to grab the keyword search from search results and make a query_string
        // also need to watch for the value to change and update the value--move this to mounted? method?
        // const keyword = data && data.text ? JSON.stringify(data.text) : "*"
        // console.log("this is the keyword" + keyword)
        const searchResponse = await $dataApi.siteSearch()
        const searchJson = JSON.stringify(searchResponse)
        console.log(searchJson)
        const searchObject = JSON.parse(searchJson)
        return { searchResults: _get(searchObject, "hits.hits", []) }
    },

    methods: {
        async getSearchData(data) {
            console.log("from search-generic: " + JSON.stringify(data.text))
        },
    },
}
</script>

<style lang="scss" scoped></style>
